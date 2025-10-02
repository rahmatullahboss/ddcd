import { NextResponse, type NextRequest } from "next/server";
import { db } from "@/lib/db";
import { currentRole, currentUser } from "@/lib/auth";
import { z } from "zod";
import { OrderStatus } from "@prisma/client";

const orderSchema = z.object({
  cartItems: z.array(
    z.object({
      productId: z.string().cuid(),
      quantity: z.number().min(1),
    })
  ).min(1),
  paymentMethod: z.enum(["DIGITAL_PAYMENT", "PAY_AFTER_DELIVERY"]),
  shippingAddress: z.object({
    name: z.string(),
    phone: z.string(),
    address: z.string(),
    city: z.string(),
    zip: z.string(),
  }),
});

export async function GET() {
  try {
    const role = await currentRole();
    const user = await currentUser();

    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    let orders;

    if (role === "ADMIN") {
      orders = await db.order.findMany({
        orderBy: { createdAt: "desc" },
        include: {
          user: { select: { name: true, email: true } },
          orderItems: { include: { product: true } },
        },
      });
    } else {
      orders = await db.order.findMany({
        where: { userId: user.id },
        orderBy: { createdAt: "desc" },
        include: {
          orderItems: { include: { product: true } },
        },
      });
    }

    return NextResponse.json(orders);
  } catch (error) {
    console.error("[ORDERS_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const user = await currentUser();
    if (!user || !user.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const validation = orderSchema.safeParse(body);

    if (!validation.success) {
      return new NextResponse("Invalid input", { status: 400 });
    }

    const { cartItems, paymentMethod, shippingAddress } = validation.data;

    const productIds = cartItems.map((item) => item.productId);
    const products = await db.product.findMany({
      where: { id: { in: productIds } },
    });

    // Verify all products exist and have enough stock
    for (const item of cartItems) {
      const product = products.find((p) => p.id === item.productId);
      if (!product) {
        return new NextResponse(`Product with id ${item.productId} not found`, { status: 404 });
      }
      // Skip stock check for now
    }

    // Calculate total amount
    const totalAmount = cartItems.reduce((total, item) => {
      const product = products.find((p) => p.id === item.productId);
      return total + product!.price.toNumber() * item.quantity;
    }, 0);

    // Create the order without using a transaction for now
    const newOrder = await db.order.create({
      data: {
        userId: user.id!,
        totalAmount,
        paymentMethod,
        status: OrderStatus.PENDING,
        orderItems: {
          create: cartItems.map((item) => {
            const product = products.find((p) => p.id === item.productId);
            return {
              productId: item.productId,
              quantity: item.quantity,
              price: product!.price,
            };
          }),
        },
      },
      include: {
        orderItems: true,
      },
    });

    return NextResponse.json(newOrder, { status: 201 });
  } catch (error) {
    console.error("[ORDERS_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
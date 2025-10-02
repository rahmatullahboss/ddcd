import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { currentRole } from "@/lib/auth";
import { OrderStatus } from "@prisma/client";

const updateStatusSchema = z.object({
  status: z.nativeEnum(OrderStatus),
});

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ orderId: string }> }
) {
  try {
    const role = await currentRole();

    if (role !== "ADMIN") {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { orderId } = await params;
    const body = await req.json();
    const validation = updateStatusSchema.safeParse(body);

    if (!validation.success) {
      return new NextResponse("Invalid input", { status: 400 });
    }

    const { status } = validation.data;

    const order = await db.order.findUnique({
      where: { id: orderId },
    });

    if (!order) {
      return new NextResponse("Order not found", { status: 404 });
    }

    // If order is being cancelled or refunded, restore product stock
    if (
      (status === OrderStatus.CANCELLED || status === OrderStatus.REFUNDED) &&
      order.status !== OrderStatus.CANCELLED &&
      order.status !== OrderStatus.REFUNDED
    ) {
      const orderItems = await db.orderItem.findMany({
        where: { orderId },
      });

      await db.$transaction(async (prisma) => {
        for (const item of orderItems) {
          await prisma.product.update({
            where: { id: item.productId },
            data: { 
              stock: { 
                increment: item.quantity 
              } 
            },
          });
        }
        await prisma.order.update({
          where: { id: orderId },
          data: { status },
        });
      });
    } else {
      await db.order.update({
        where: { id: orderId },
        data: { status },
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[ORDER_PATCH]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
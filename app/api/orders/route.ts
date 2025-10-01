import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { currentRole, currentUser } from '@/lib/auth';

export async function GET() {
  try {
    const role = await currentRole();
    const user = await currentUser();

    if (!user) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    let orders;

    if (role === 'ADMIN') {
      // Admin can see all orders
      orders = await db.order.findMany({
        orderBy: { createdAt: 'desc' },
        include: {
          user: { select: { name: true, email: true } },
          orderItems: { include: { product: true } },
        },
      });
    } else {
      // Regular user can only see their own orders
      orders = await db.order.findMany({
        where: { userId: user.id as string },
        orderBy: { createdAt: 'desc' },
        include: {
          orderItems: { include: { product: true } },
        },
      });
    }

    return NextResponse.json(orders);
  } catch (error) {
    console.error('[ORDERS_GET]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const user = await currentUser();
    if (!user) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const { cartItems, paymentMethod } = await req.json();

    if (!cartItems || cartItems.length === 0 || !paymentMethod) {
      return new NextResponse('Missing required fields', { status: 400 });
    }

    // Calculate total amount and prepare order items
    let totalAmount = 0;
    const orderItemsData = [];

    for (const item of cartItems) {
      const product = await db.product.findUnique({ where: { id: item.productId } });
      if (!product) {
        return new NextResponse(`Product with id ${item.productId} not found`, { status: 404 });
      }
      totalAmount += product.price.toNumber() * item.quantity;
      orderItemsData.push({
        productId: item.productId,
        quantity: item.quantity,
        price: product.price,
      });
    }

    const order = await db.order.create({
      data: {
        userId: user.id as string,
        totalAmount,
        paymentMethod,
        status: 'PROCESSING',
        orderItems: {
          create: orderItemsData,
        },
      },
    });

    return NextResponse.json(order);
  } catch (error) {
    console.error('[ORDERS_POST]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
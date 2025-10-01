import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { currentRole } from '@/lib/auth';
import { OrderStatus } from '@prisma/client';

export async function PATCH(
  req: Request,
  { params }: { params: { orderId: string } }
) {
  try {
    const role = await currentRole();

    if (role !== 'ADMIN') {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!params.orderId) {
      return new NextResponse('Order ID is required', { status: 400 });
    }

    const { status } = await req.json();

    if (!status || !Object.values(OrderStatus).includes(status)) {
        return new NextResponse('Invalid status provided', { status: 400 });
    }

    const order = await db.order.update({
      where: {
        id: params.orderId,
      },
      data: {
        status,
      },
    });

    return NextResponse.json(order);
  } catch (error) {
    console.error('[ORDER_ID_PATCH]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
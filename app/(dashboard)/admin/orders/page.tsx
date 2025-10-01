import { db } from '@/lib/db';
import OrdersClient from './_components/client';

export default async function ManageOrdersPage() {
  const orders = await db.order.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      user: {
        select: {
          name: true,
          email: true,
        },
      },
      orderItems: {
        include: {
          product: true,
        },
      },
    },
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Manage Orders</h1>
        <p className="text-gray-500">View and update customer orders.</p>
      </div>
      <OrdersClient orders={orders} />
    </div>
  );
}
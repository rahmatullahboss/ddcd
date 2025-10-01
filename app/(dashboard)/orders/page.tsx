"use client";

import { useState, useEffect } from 'react';
import { Order, OrderItem, Product } from '@prisma/client';
import { useCurrentUser } from '@/hooks/use-current-user';
import { Badge } from '@/components/ui/badge';

type OrderWithDetails = Order & {
  orderItems: (OrderItem & { product: Product })[];
};

export default function MyOrdersPage() {
  const user = useCurrentUser();
  const [orders, setOrders] = useState<OrderWithDetails[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user) {
      const fetchOrders = async () => {
        try {
          const response = await fetch('/api/orders');
          if (!response.ok) {
            throw new Error('Failed to fetch orders.');
          }
          const data = await response.json();
          setOrders(data);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchOrders();
    }
  }, [user]);

  if (isLoading) {
    return <div className="container mx-auto py-12 text-center">Loading your orders...</div>;
  }

  if (!user) {
    return <div className="container mx-auto py-12 text-center">Please log in to see your orders.</div>;
  }

  if (orders.length === 0) {
    return <div className="container mx-auto py-12 text-center">You have no orders yet.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Orders</h1>
      <div className="space-y-6">
        {orders.map((order) => (
          <div key={order.id} className="border rounded-lg p-6 bg-white shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="font-bold text-lg">Order #{order.id.substring(0, 8)}</h2>
                <p className="text-sm text-gray-500">
                  Date: {new Date(order.createdAt).toLocaleDateString()}
                </p>
              </div>
              <Badge
                className={
                  order.status === 'COMPLETED' ? 'bg-green-100 text-green-800' :
                  order.status === 'CANCELLED' ? 'bg-red-100 text-red-800' :
                  'bg-yellow-100 text-yellow-800'
                }
              >
                {order.status}
              </Badge>
            </div>
            <div className="space-y-2 mb-4">
              {order.orderItems.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <p>{item.product.name} x {item.quantity}</p>
                  <p>${(Number(item.price) * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
            <hr/>
            <div className="flex justify-between font-bold mt-3">
              <p>Total</p>
              <p>${Number(order.totalAmount).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
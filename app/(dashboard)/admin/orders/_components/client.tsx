"use client";

import { useState } from 'react';
import { Order, User, OrderItem, Product, OrderStatus } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { Badge } from '@/components/ui/badge';

type OrderWithDetails = Order & {
  user: { name: string | null; email: string | null; } | null;
  orderItems: (OrderItem & { product: Product })[];
};

interface OrdersClientProps {
  orders: OrderWithDetails[];
}

export default function OrdersClient({ orders: initialOrders }: OrdersClientProps) {
  const router = useRouter();
  const [orders, setOrders] = useState(initialOrders);
  const [isUpdating, setIsUpdating] = useState<string | null>(null);

  const onStatusChange = async (orderId: string, status: OrderStatus) => {
    setIsUpdating(orderId);
    try {
      const response = await fetch(`/api/orders/${orderId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });

      if (!response.ok) {
        throw new Error('Failed to update order status.');
      }

      setOrders((prev) =>
        prev.map((order) =>
          order.id === orderId ? { ...order, status } : order
        )
      );
      toast.success('Order status updated.');
    } catch (error) {
      toast.error('Something went wrong.');
    } finally {
      setIsUpdating(null);
    }
  };

  return (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-mono text-xs">{order.id.substring(0, 8)}</TableCell>
              <TableCell>{order.user?.name || 'Guest'}</TableCell>
              <TableCell>{new Date(order.createdAt).toLocaleDateString()}</TableCell>
              <TableCell>${Number(order.totalAmount).toFixed(2)}</TableCell>
              <TableCell>
                <Select
                  value={order.status}
                  onValueChange={(value: OrderStatus) => onStatusChange(order.id, value)}
                  disabled={isUpdating === order.id}
                >
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Update status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="PROCESSING">Processing</SelectItem>
                    <SelectItem value="COMPLETED">Completed</SelectItem>
                    <SelectItem value="CANCELLED">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
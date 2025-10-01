import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

interface OrderConfirmationPageProps {
  params: Promise<{
    orderId: string;
  }>;
}

export default async function OrderConfirmationPage({ params }: OrderConfirmationPageProps) {
  // Resolve the params promise
  const { orderId } = await params;
  
  return (
    <div className="container mx-auto text-center py-20">
      <div className="flex justify-center mb-4">
        <CheckCircle className="h-16 w-16 text-green-500" />
      </div>
      <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
      <p className="text-gray-600 mb-2">
        Your order has been placed successfully.
      </p>
      <p className="text-gray-800 font-semibold mb-8">
        Order ID: <span className="font-mono bg-gray-100 p-1 rounded">{orderId}</span>
      </p>
      <p className="text-gray-600 mb-6">
        We have received your order and will contact you shortly regarding delivery and payment.
      </p>
      <div className="flex justify-center gap-4">
        <Button>
          <a href="/dashboard/orders" className="text-white no-underline">
            View My Orders
          </a>
        </Button>
        <Button variant="outline">
          <a href="/shop" className="no-underline">
            Continue Shopping
          </a>
        </Button>
      </div>
    </div>
  );
}
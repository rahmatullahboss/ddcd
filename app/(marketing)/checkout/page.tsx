"use client";

import { useState, useEffect } from 'react';
import { useCartStore } from '@/lib/store/cart';
import { Button } from '@/components/ui/button';
import { useCurrentUser } from '@/hooks/use-current-user'; // Assuming a custom hook for user
import { useRouter } from 'next/navigation';
import { PaymentMethod } from '@prisma/client';

export default function CheckoutPage() {
  const router = useRouter();
  const user = useCurrentUser();
  const { items, getCartTotal, clearCart, getItemCount } = useCartStore();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('DIGITAL_PAYMENT');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!user) {
      router.push('/login?redirect=/checkout');
    }
    // Redirect to shop if cart is empty
    if (getItemCount() === 0) {
      router.push('/shop');
    }
  }, [user, router, getItemCount]);

  const handlePlaceOrder = async () => {
    setIsLoading(true);
    setError(null);

    const cartItems = items.map(item => ({
        productId: item.product.id,
        quantity: item.quantity,
    }));

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cartItems, paymentMethod }),
      });

      if (!response.ok) {
        throw new Error('Failed to place order.');
      }

      const order = await response.json();

      clearCart();
      // Redirect to an order confirmation page
      router.push(`/order-confirmation/${order.id}`);

    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!user) {
    return <p className="text-center py-12">Redirecting to login...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-3 border p-4 rounded-lg bg-white">
            {items.map(({ product, quantity }) => (
              <div key={product.id} className="flex justify-between">
                <p>{product.name} x {quantity}</p>
                <p>${(Number(product.price) * quantity).toFixed(2)}</p>
              </div>
            ))}
            <hr className="my-2"/>
            <div className="flex justify-between font-bold text-lg">
              <p>Total</p>
              <p>${getCartTotal().toFixed(2)}</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Payment Method</h2>
          <div className="space-y-3">
            <div
              className={`p-4 border rounded-lg cursor-pointer ${paymentMethod === 'DIGITAL_PAYMENT' ? 'border-primary ring-2 ring-primary' : ''}`}
              onClick={() => setPaymentMethod('DIGITAL_PAYMENT')}
            >
              <h3 className="font-semibold">Digital Payment</h3>
              <p className="text-sm text-gray-500">Pay now with our secure gateway (coming soon).</p>
            </div>
            <div
              className={`p-4 border rounded-lg cursor-pointer ${paymentMethod === 'PAY_AFTER_DELIVERY' ? 'border-primary ring-2 ring-primary' : ''}`}
              onClick={() => setPaymentMethod('PAY_AFTER_DELIVERY')}
            >
              <h3 className="font-semibold">Pay After Delivery</h3>
              <p className="text-sm text-gray-500">We will contact you for delivery and payment.</p>
            </div>
          </div>
          {error && <p className="text-red-500 mt-4">{error}</p>}
          <Button onClick={handlePlaceOrder} disabled={isLoading} className="w-full mt-6">
            {isLoading ? 'Placing Order...' : 'Place Order'}
          </Button>
        </div>
      </div>
    </div>
  );
}
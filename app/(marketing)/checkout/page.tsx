'use client';

import { useCartStore } from '@/lib/store/cart';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const CheckoutPage = () => {
  const { items, getCartTotal, clearCart } = useCartStore();

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would process the payment here.
    alert('Thank you for your order!');
    clearCart();
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto text-center py-12">
        <h1 className="text-2xl font-bold">Your cart is empty</h1>
        <Button asChild variant="link" className="mt-2">
          <Link href="/shop">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.product.id} className="flex items-center gap-4 border-b pb-4">
                <div className="relative h-20 w-20 rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.png"
                    alt={item.product.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{item.product.name}</h3>
                  <p className="text-sm text-gray-500">
                    {item.quantity} x ${item.product.price.toString()}
                  </p>
                </div>
                <p className="font-semibold">
                  ${(item.quantity * item.product.price.toNumber()).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 border-t pt-6">
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Shipping & Payment</h2>
          <form onSubmit={handleCheckout} className="space-y-6">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" type="text" placeholder="John Doe" required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" required />
            </div>
            <div>
              <Label htmlFor="address">Shipping Address</Label>
              <Input id="address" type="text" placeholder="123 Main St" required />
            </div>
            <div>
              <Label htmlFor="card">Credit Card</Label>
              <Input id="card" type="text" placeholder="**** **** **** ****" required />
            </div>
            <Button type="submit" className="w-full">
              Place Order
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
"use client";

import { useCartStore } from '@/lib/store/cart';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, getCartTotal, getItemCount } = useCartStore();

  if (getItemCount() === 0) {
    return (
      <div className="container mx-auto text-center py-12">
        <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet.</p>
        <Button asChild>
          <Link href="/shop">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="space-y-4">
            {items.map(({ product, quantity }) => (
              <div key={product.id} className="flex items-center justify-between border p-4 rounded-lg bg-white">
                <div className="flex items-center gap-4">
                  <div className="relative h-20 w-20 rounded-md overflow-hidden">
                    <Image src={product.imageUrl || '/placeholder.png'} alt={product.name} layout="fill" objectFit="cover" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-sm text-gray-500">${product.price.toString()}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => updateQuantity(product.id, parseInt(e.target.value))}
                    className="w-16 text-center border rounded-md"
                  />
                  <Button variant="destructive" size="sm" onClick={() => removeFromCart(product.id)}>
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-1">
          <div className="border p-6 rounded-lg bg-white shadow-md">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <p>Subtotal</p>
              <p>${getCartTotal().toFixed(2)}</p>
            </div>
            <div className="flex justify-between font-bold text-lg mb-6">
              <p>Total</p>
              <p>${getCartTotal().toFixed(2)}</p>
            </div>
            <Button asChild className="w-full">
              <Link href="/checkout">Proceed to Checkout</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
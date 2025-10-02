'use client';

import { useCartStore } from '@/lib/store/cart';
import { ShoppingCart } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';

const MiniCart = () => {
  const { items, getItemCount, getCartTotal, removeFromCart } = useCartStore();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-6 w-6" />
          {getItemCount() > 0 && (
            <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
              {getItemCount()}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        {items.length > 0 ? (
          <>
            <div className="mt-4 space-y-4">
              {items.map((item) => (
                <div key={item.product.id} className="flex items-center gap-4">
                  <div className="relative h-16 w-16 rounded-md overflow-hidden">
                    <Image
                      src={item.product.imageUrl || '/placeholder.png'}
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
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFromCart(item.product.id)}
                  >
                    &times;
                  </Button>
                </div>
              ))}
            </div>
            <div className="mt-6 border-t pt-6">
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
              <Button asChild className="w-full mt-4">
                <Link href="/checkout">Go to Checkout</Link>
              </Button>
            </div>
          </>
        ) : (
          <div className="text-center mt-8">
            <p>Your cart is empty.</p>
            <Button asChild variant="link" className="mt-2">
              <Link href="/shop">Continue Shopping</Link>
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default MiniCart;
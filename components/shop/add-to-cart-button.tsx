"use client";

import { useState } from 'react';
import { Product } from '@prisma/client';
import { useCartStore } from '@/lib/store/cart';
import { Button } from '@/components/ui/button'; // Assuming you have a Button component

const AddToCartButton = ({ product }: { product: Product }) => {
  const [added, setAdded] = useState(false);
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 2000); // Reset after 2 seconds
  };

  return (
    <Button onClick={handleAddToCart} disabled={added} className="w-full">
      {added ? 'Added to Cart!' : 'Add to Cart'}
    </Button>
  );
};

export default AddToCartButton;
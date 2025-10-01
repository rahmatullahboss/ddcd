import { Product } from '@prisma/client';
import Image from 'next/image';
import AddToCartButton from '@/components/shop/add-to-cart-button';

async function getProduct(productId: string): Promise<Product | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/products/${productId}`, { cache: 'no-store' });
    if (!res.ok) {
      return null;
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function ProductDetailsPage({ params }: { params: { productId: string } }) {
  const product = await getProduct(params.productId);

  if (!product) {
    return (
      <div className="container mx-auto text-center py-12">
        <h1 className="text-2xl font-bold">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-96 w-full rounded-lg overflow-hidden">
          <Image
            src={product.imageUrl || '/placeholder.png'}
            alt={product.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-500 mb-4">{product.category}</p>
          <p className="text-2xl font-bold text-primary mb-4">
            ${product.price.toString()}
          </p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <div className="w-full md:w-1/2">
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
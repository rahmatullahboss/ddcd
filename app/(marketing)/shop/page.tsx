import { Product } from '@prisma/client';
import { Suspense } from 'react';
import ProductCard from '@/components/shop/product-card';
import { db } from '@/lib/db';

async function getProducts(): Promise<Product[]> {
  try {
    // Use database query instead of fetch for static rendering
    const products = await db.product.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return products;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>
      <Suspense fallback={<p className="text-center">Loading products...</p>}>
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No products found.</p>
        )}
      </Suspense>
    </div>
  );
}
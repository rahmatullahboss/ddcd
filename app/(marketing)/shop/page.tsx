import { Product } from '@prisma/client';
import { Suspense } from 'react';
import ProductCard from '@/components/shop/product-card';

async function getProducts(): Promise<Product[]> {
  // In a real app, you'd fetch from an API route.
  // For simplicity, we'll call the API logic directly.
  // This approach is fine for Server Components.
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/products`, { cache: 'no-store' });
    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }
    return res.json();
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
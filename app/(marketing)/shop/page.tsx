import { Product, Category, Prisma } from '@prisma/client';
import { Suspense } from 'react';
import ProductCard from '@/components/shop/product-card';
import { db } from '@/lib/db';
import FilterSidebar from '@/components/shop/filter-sidebar';
import SearchInput from '@/components/shop/search-input';

export const dynamic = 'force-dynamic';

async function getProducts(searchParams: {
  [key:string]: string | string[] | undefined;
}): Promise<Product[]> {
  try {
    const { minPrice, maxPrice, category, sortBy, rating, q } = searchParams;

    const where: Prisma.ProductWhereInput = {};
    const orderBy: Prisma.ProductOrderByWithRelationInput = {};

    const andConditions: Prisma.ProductWhereInput[] = [];

    if (minPrice) {
      andConditions.push({ price: { gte: Number(minPrice) } });
    }
    if (maxPrice) {
      andConditions.push({ price: { lte: Number(maxPrice) } });
    }
    if (category && category !== 'all') {
      andConditions.push({ category: { name: category as string } });
    }
    if (q) {
      andConditions.push({
        OR: [
          { name: { contains: q as string, mode: 'insensitive' } },
          { description: { contains: q as string, mode: 'insensitive' } },
        ],
      });
    }
    if (rating) {
      const minRating = Number(rating);
      const productsWithHighRating = await db.review.groupBy({
        by: ['productId'],
        _avg: {
          rating: true,
        },
        having: {
          rating: {
            _avg: {
              gte: minRating,
            },
          },
        },
      });
      const productIds = productsWithHighRating.map((p) => p.productId);
      andConditions.push({ id: { in: productIds } });
    }

    if (andConditions.length > 0) {
      where.AND = andConditions;
    }

    switch (sortBy) {
      case 'price-asc':
        orderBy.price = 'asc';
        break;
      case 'price-desc':
        orderBy.price = 'desc';
        break;
      case 'newest':
      default:
        orderBy.createdAt = 'desc';
        break;
    }

    const products = await db.product.findMany({
      where,
      orderBy,
      include: {
        category: true,
      },
    });
    return products;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function getCategories(): Promise<Category[]> {
  try {
    return await db.category.findMany({ orderBy: { name: 'asc' } });
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function ShopPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const products = await getProducts(searchParams);
  const categories = await getCategories();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <FilterSidebar categories={categories} />
        <main className="w-full">
          <div className="mb-4">
            <SearchInput />
          </div>
          <Suspense fallback={<p className="text-center">Loading products...</p>}>
            {products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500">No products found.</p>
            )}
          </Suspense>
        </main>
      </div>
    </div>
  );
}
import { db } from '@/lib/db';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PlusCircle } from 'lucide-react';
import ProductsClient from './_components/client';

export default async function ManageProductsPage() {
  const products = await db.product.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Manage Products</h1>
        <Button asChild>
          <Link href="/dashboard/admin/products/new">
            <PlusCircle className="h-4 w-4 mr-2" />
            Add New Product
          </Link>
        </Button>
      </div>
      <ProductsClient products={products} />
    </div>
  );
}
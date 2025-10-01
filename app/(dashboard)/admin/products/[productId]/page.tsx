import { db } from '@/lib/db';
import ProductForm from './_components/product-form';

interface ProductPageProps {
  params: Promise<{
    productId: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  // Resolve the params promise
  const { productId } = await params;
  
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductForm initialData={product} />
    </div>
  );
}
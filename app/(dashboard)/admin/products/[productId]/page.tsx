import { db } from '@/lib/db';
import ProductForm from './_components/product-form';

export default async function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const product = await db.product.findUnique({
    where: {
      id: params.productId,
    },
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductForm initialData={product} />
    </div>
  );
}
import ProductForm from '../[productId]/_components/product-form';

export default function NewProductPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <ProductForm initialData={null} />
    </div>
  );
}
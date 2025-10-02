import { Product, ProductImage, Category } from '@prisma/client';
import AddToCartButton from '@/components/shop/add-to-cart-button';
import { db } from '@/lib/db';
import ProductGallery from '@/components/shop/product-gallery';
import { Badge } from '@/components/ui/badge';
import ReviewSection from '@/components/shop/review-section';

type ProductWithImages = Product & {
  images: ProductImage[];
  category: Category | null;
};

async function getProduct(productId: string): Promise<ProductWithImages | null> {
  try {
    const product = await db.product.findUnique({
      where: {
        id: productId,
      },
      include: {
        images: true,
        category: true,
      },
    });
    return product as ProductWithImages;
  } catch (error) {
    console.error(error);
    return null;
  }
}

interface ProductDetailsPageProps {
  params: Promise<{
    productId: string;
  }>;
}

const StockBadge = ({ stock }: { stock: number }) => {
  if (stock === 0) {
    return <Badge variant="destructive">Out of Stock</Badge>;
  }
  if (stock < 10) {
    return <Badge variant="secondary">Low Stock</Badge>;
  }
  return <Badge variant="default">In Stock</Badge>;
};

export default async function ProductDetailsPage({ params }: ProductDetailsPageProps) {
  // Resolve the params promise
  const { productId } = await params;

  const product = await getProduct(productId);

  if (!product) {
    return (
      <div className="container mx-auto text-center py-12">
        <h1 className="text-2xl font-bold">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <ProductGallery product={product} />
        <div className="flex flex-col">
          <h1 className="text-4xl font-extrabold mb-2 tracking-tight">{product.name}</h1>
          <p className="text-gray-500 mb-4 text-lg">
            {product.category?.name || 'Uncategorized'}
          </p>
          <div className="flex items-center mb-4">
            <p className="text-3xl font-bold text-primary">
              ${product.price.toString()}
            </p>
            <div className="ml-4">
              <StockBadge stock={product.stock} />
            </div>
          </div>
          <div className="prose max-w-none mb-6">
            <p>{product.description}</p>
          </div>
          <div className="w-full md:w-1/2 mt-auto">
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
      <div className="mt-16">
        <ReviewSection productId={product.id} />
      </div>
    </div>
  );
}
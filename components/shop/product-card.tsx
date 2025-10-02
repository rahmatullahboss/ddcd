import Link from 'next/link';
import { Product } from '@prisma/client';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
      <Link href={`/shop/${product.id}`}>
        <div className="relative h-48 w-full">
          <Image
            src="/placeholder.png"
            alt={product.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold truncate">{product.name}</h3>
          <p className="text-gray-500 mt-1">{product.category || 'No category'}</p>
          <p className="text-xl font-bold mt-2 text-primary">
            ${product.price.toString()}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Product, ProductImage as ProductImageModel } from '@prisma/client';

interface ProductGalleryProps {
  product: Product & { images: ProductImageModel[] };
}

const ProductGallery = ({ product }: ProductGalleryProps) => {
  const [mainImage, setMainImage] = useState(
    product.images.length > 0 ? product.images[0].imageUrl : '/placeholder.png'
  );
  const [backgroundPosition, setBackgroundPosition] = useState('50% 50%');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setBackgroundPosition(`${x}% ${y}%`);
  };

  const handleMouseLeave = () => {
    setBackgroundPosition('50% 50%');
  };

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      <div className="flex md:flex-col gap-2">
        {product.images.map((image) => (
          <div
            key={image.id}
            className={`relative h-20 w-20 rounded-lg overflow-hidden cursor-pointer border-2 ${
              mainImage === image.imageUrl ? 'border-primary' : 'border-transparent'
            }`}
            onClick={() => setMainImage(image.imageUrl)}
          >
            <Image src={image.imageUrl} alt={product.name} layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>
      <div className="relative h-96 w-full rounded-lg overflow-hidden group">
        <Image src={mainImage} alt={product.name} layout="fill" objectFit="contain" />
        <div
          className="absolute top-0 left-0 w-full h-full bg-no-repeat opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            backgroundImage: `url(${mainImage})`,
            backgroundSize: '200%',
            backgroundPosition: backgroundPosition,
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </div>
  );
};

export default ProductGallery;
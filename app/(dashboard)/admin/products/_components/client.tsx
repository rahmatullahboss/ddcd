"use client";

import { useState } from 'react';
import { Product } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Edit, Trash } from 'lucide-react';
import { toast } from 'sonner'; // Assuming you have a toast library like sonner

interface ProductsClientProps {
  products: Product[];
}

export default function ProductsClient({ products: initialProducts }: ProductsClientProps) {
  const router = useRouter();
  const [products, setProducts] = useState(initialProducts);
  const [isDeleting, setIsDeleting] = useState<string | null>(null);

  const onDelete = async (productId: string) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setIsDeleting(productId);
      try {
        const response = await fetch(`/api/products/${productId}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error('Failed to delete product.');
        }

        setProducts((prev) => prev.filter((p) => p.id !== productId));
        toast.success('Product deleted successfully.');
      } catch (error) {
        toast.error('Something went wrong.');
      } finally {
        setIsDeleting(null);
      }
    }
  };

  return (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>${Number(product.price).toFixed(2)}</TableCell>
              <TableCell className="text-right">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => router.push(`/dashboard/admin/products/${product.id}`)}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onDelete(product.id)}
                  disabled={isDeleting === product.id}
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
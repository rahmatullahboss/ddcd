import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Package, FileText, ShoppingCart } from 'lucide-react';

export default function AdminDashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Manage Products Card */}
        <div className="border rounded-lg p-6 bg-white shadow-sm">
          <Package className="h-8 w-8 text-primary mb-4" />
          <h2 className="text-xl font-bold mb-2">Manage Products</h2>
          <p className="text-gray-600 mb-4">Add, edit, or remove products from your store.</p>
          <Button asChild>
            <Link href="/dashboard/admin/products">Go to Products</Link>
          </Button>
        </div>

        {/* Manage Blog Posts Card */}
        <div className="border rounded-lg p-6 bg-white shadow-sm">
          <FileText className="h-8 w-8 text-primary mb-4" />
          <h2 className="text-xl font-bold mb-2">Manage Blog</h2>
          <p className="text-gray-600 mb-4">Create, edit, or delete blog posts.</p>
          <Button asChild>
            <Link href="/dashboard/admin/blog">Go to Blog</Link>
          </Button>
        </div>

        {/* Manage Orders Card */}
        <div className="border rounded-lg p-6 bg-white shadow-sm">
          <ShoppingCart className="h-8 w-8 text-primary mb-4" />
          <h2 className="text-xl font-bold mb-2">Manage Orders</h2>
          <p className="text-gray-600 mb-4">View and update the status of customer orders.</p>
          <Button asChild>
            <Link href="/dashboard/admin/orders">Go to Orders</Link>
          </Button>
        </div>

      </div>
    </div>
  );
}
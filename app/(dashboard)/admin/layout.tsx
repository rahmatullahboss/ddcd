import { currentRole } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const role = await currentRole();

  if (role !== 'ADMIN') {
    // Or redirect to a specific "unauthorized" page
    return (
        <div className="container mx-auto text-center py-20">
            <h1 className="text-3xl font-bold text-red-600">Access Denied</h1>
            <p className="text-gray-600 mt-4">You do not have permission to view this page.</p>
        </div>
    )
  }

  return <>{children}</>;
}
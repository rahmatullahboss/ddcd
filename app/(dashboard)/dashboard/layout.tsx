import { Button } from '@/components/ui/button'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-teal-600">Digital Care</h1>
              <nav className="ml-10 hidden md:flex space-x-8">
                <a href="/dashboard" className="text-gray-900 font-medium">Dashboard</a>
                <a href="/dashboard/appointments" className="text-gray-500 hover:text-gray-900">Appointments</a>
                <a href="/dashboard/prescriptions" className="text-gray-500 hover:text-gray-900">Prescriptions</a>
                <a href="/dashboard/medical-records" className="text-gray-500 hover:text-gray-900">Medical Records</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost">Profile</Button>
              <Button variant="outline">Logout</Button>
            </div>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  )
}
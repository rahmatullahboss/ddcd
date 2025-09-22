import { Metadata } from 'next'
import { DoctorGrid } from '@/components/features/doctor-grid'
import { getDoctors } from '@/lib/actions/doctor'

export const metadata: Metadata = {
  title: 'Our Doctors',
  description: 'Find and book appointments with our healthcare professionals',
}

export default async function DoctorsPage({
  searchParams,
}: {
  searchParams: { specialty?: string; search?: string }
}) {
  const doctors = await getDoctors({
    specialty: searchParams.specialty,
    search: searchParams.search,
  })

  return (
    <div className="container py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Healthcare Professionals</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Meet our team of experienced doctors and healthcare professionals dedicated to providing you with the best care possible.
        </p>
      </div>

      <DoctorGrid doctors={doctors} />
    </div>
  )
}
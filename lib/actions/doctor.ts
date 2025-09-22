// Server Actions for doctor-related operations
'use server'

import { z } from 'zod'

// In a real app, you would import this from your database
// import { db } from '@/lib/db'

// Mock data for doctors
const doctors = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    specialty: 'General Practitioner',
    experience: 10,
    rating: 4.9,
    image: '/images/doctors/sarah-johnson.jpg'
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    specialty: 'Cardiologist',
    experience: 15,
    rating: 4.8,
    image: '/images/doctors/michael-chen.jpg'
  },
  {
    id: '3',
    name: 'Dr. Emily Rodriguez',
    specialty: 'Pediatrician',
    experience: 8,
    rating: 4.9,
    image: '/images/doctors/emily-rodriguez.jpg'
  },
  {
    id: '4',
    name: 'Dr. James Wilson',
    specialty: 'Orthopedic Surgeon',
    experience: 12,
    rating: 4.7,
    image: '/images/doctors/james-wilson.jpg'
  },
  {
    id: '5',
    name: 'Dr. Lisa Anderson',
    specialty: 'Dermatologist',
    experience: 9,
    rating: 4.8,
    image: '/images/doctors/lisa-anderson.jpg'
  },
  {
    id: '6',
    name: 'Dr. Robert Kim',
    specialty: 'Neurologist',
    experience: 14,
    rating: 4.9,
    image: '/images/doctors/robert-kim.jpg'
  }
]

const doctorFilterSchema = z.object({
  specialty: z.string().optional(),
  search: z.string().optional(),
})

export async function getDoctors(filters?: { specialty?: string; search?: string }) {
  // Validate filters if provided
  if (filters) {
    const validatedFilters = doctorFilterSchema.safeParse(filters)
    if (!validatedFilters.success) {
      throw new Error('Invalid filters provided')
    }
  }

  // In a real app, you would query the database
  // const doctors = await db.doctor.findMany({
  //   where: {
  //     specialty: filters?.specialty,
  //     OR: filters?.search ? [
  //       { name: { contains: filters.search, mode: 'insensitive' } },
  //       { specialty: { contains: filters.search, mode: 'insensitive' } }
  //     ] : undefined
  //   },
  //   orderBy: { rating: 'desc' }
  // })

  // For now, we'll filter the mock data
  let filteredDoctors = doctors
  
  if (filters?.specialty) {
    filteredDoctors = filteredDoctors.filter(
      doctor => doctor.specialty.toLowerCase().includes(filters.specialty!.toLowerCase())
    )
  }
  
  if (filters?.search) {
    filteredDoctors = filteredDoctors.filter(
      doctor => 
        doctor.name.toLowerCase().includes(filters.search!.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(filters.search!.toLowerCase())
    )
  }
  
  return filteredDoctors
}

export async function getDoctorById(id: string) {
  // In a real app, you would query the database
  // const doctor = await db.doctor.findUnique({
  //   where: { id }
  // })
  
  // For now, we'll find in the mock data
  const doctor = doctors.find(d => d.id === id)
  
  if (!doctor) {
    throw new Error('Doctor not found')
  }
  
  return doctor
}
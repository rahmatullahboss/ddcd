'use server'

import { z } from 'zod'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
// import { auth } from '@/lib/auth' // Uncomment when implementing real auth

// Mock data for appointments
let appointments = [
  {
    id: '1',
    patientId: '1',
    doctorId: '2',
    doctorName: 'Dr. Sarah Johnson',
    specialty: 'General Practitioner',
    date: '2023-10-25',
    time: '10:00 AM',
    type: 'Video Consultation',
    status: 'confirmed',
    reason: 'Regular checkup'
  },
  {
    id: '2',
    patientId: '1',
    doctorId: '3',
    doctorName: 'Dr. Michael Chen',
    specialty: 'Cardiologist',
    date: '2023-10-15',
    time: '2:30 PM',
    type: 'In-person Visit',
    status: 'completed',
    reason: 'Follow-up on heart medication'
  }
]

const appointmentSchema = z.object({
  doctorId: z.string().min(1),
  date: z.string().min(1),
  time: z.string().min(1),
  type: z.enum(['In-person Visit', 'Video Consultation', 'Phone Consultation']),
  reason: z.string().min(10)
})

export async function createAppointment(formData: FormData) {
  // In a real app, you would authenticate the user
  // const session = await auth()
  // if (!session) {
  //   redirect('/login')
  // }

  const validatedFields = appointmentSchema.safeParse({
    doctorId: formData.get('doctorId'),
    date: formData.get('date'),
    time: formData.get('time'),
    type: formData.get('type'),
    reason: formData.get('reason')
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing or invalid fields. Failed to create appointment.'
    }
  }

  try {
    // Create new appointment
    const newAppointment = {
      id: String(appointments.length + 1),
      patientId: '1', // In a real app, this would come from the session
      doctorId: validatedFields.data.doctorId,
      doctorName: 'Dr. Sarah Johnson', // In a real app, this would be fetched from the database
      specialty: 'General Practitioner', // In a real app, this would be fetched from the database
      date: validatedFields.data.date,
      time: validatedFields.data.time,
      type: validatedFields.data.type,
      status: 'pending',
      reason: validatedFields.data.reason
    }
    
    appointments.push(newAppointment)
    
    // Revalidate the appointments page
    revalidatePath('/dashboard/appointments')
    
    return { message: 'Appointment created successfully!' }
  } catch (error) {
    return { message: 'Database error: Failed to create appointment.' }
  }
}

export async function cancelAppointment(id: string) {
  // In a real app, you would authenticate the user
  // const session = await auth()
  // if (!session) {
  //   throw new Error('Unauthorized')
  // }

  try {
    const appointmentIndex = appointments.findIndex(app => app.id === id)
    
    if (appointmentIndex === -1) {
      throw new Error('Appointment not found')
    }
    
    // Update appointment status
    appointments[appointmentIndex].status = 'cancelled'
    
    // Revalidate the appointments page
    revalidatePath('/dashboard/appointments')
    
    return { message: 'Appointment cancelled successfully!' }
  } catch (error) {
    return { message: 'Database error: Failed to cancel appointment.' }
  }
}
// Database actions for appointment-related operations
'use server'

import { db } from '@/lib/db'
import { z } from 'zod'
import { revalidatePath } from 'next/cache'

const appointmentSchema = z.object({
  doctorId: z.string().min(1),
  date: z.string().min(1),
  time: z.string().min(1),
  type: z.enum(['IN_PERSON', 'VIDEO', 'PHONE']),
  reason: z.string().min(10),
  patientId: z.string().min(1),
})

export async function createAppointment(data: {
  doctorId: string
  date: string
  time: string
  type: 'IN_PERSON' | 'VIDEO' | 'PHONE'
  reason: string
  patientId: string
}) {
  // Validate the input data
  const validatedFields = appointmentSchema.safeParse(data)
  
  if (!validatedFields.success) {
    return {
      error: 'Invalid fields provided',
      details: validatedFields.error.flatten().fieldErrors,
    }
  }

  try {
    // Create the appointment in the database
    const appointment = await db.appointment.create({
      data: {
        ...validatedFields.data,
        status: 'PENDING',
      },
    })

    // Revalidate the appointments page
    revalidatePath('/dashboard/appointments')
    
    return { success: true, appointment }
  } catch (error) {
    console.error('Error creating appointment:', error)
    return { error: 'Failed to create appointment' }
  }
}

export async function getPatientAppointments(patientId: string) {
  try {
    const appointments = await db.appointment.findMany({
      where: {
        patientId,
      },
      include: {
        doctor: true,
      },
      orderBy: {
        date: 'asc',
      },
    })

    return { success: true, appointments }
  } catch (error) {
    console.error('Error fetching appointments:', error)
    return { error: 'Failed to fetch appointments' }
  }
}

export async function cancelAppointment(id: string, patientId: string) {
  try {
    // Check if the appointment belongs to the patient
    const appointment = await db.appointment.findUnique({
      where: {
        id,
      },
    })

    if (!appointment) {
      return { error: 'Appointment not found' }
    }

    if (appointment.patientId !== patientId) {
      return { error: 'Unauthorized' }
    }

    // Update the appointment status
    const updatedAppointment = await db.appointment.update({
      where: {
        id,
      },
      data: {
        status: 'CANCELLED',
      },
    })

    // Revalidate the appointments page
    revalidatePath('/dashboard/appointments')
    
    return { success: true, appointment: updatedAppointment }
  } catch (error) {
    console.error('Error cancelling appointment:', error)
    return { error: 'Failed to cancel appointment' }
  }
}
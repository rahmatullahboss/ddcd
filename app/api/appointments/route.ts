import { NextResponse } from 'next/server'
import { auth } from '@/app/api/auth/[...nextauth]/route'
import { z } from 'zod'

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

// Schema for creating appointments
const appointmentSchema = z.object({
  doctorId: z.string().min(1),
  date: z.string().min(1),
  time: z.string().min(1),
  type: z.enum(['In-person Visit', 'Video Consultation', 'Phone Consultation']),
  reason: z.string().min(10)
})

export async function GET(request: Request) {
  try {
    // In a real app, you would authenticate the user
    // const session = await auth()
    // if (!session) {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    // }

    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    
    // Filter appointments by status if provided
    const filteredAppointments = status 
      ? appointments.filter(app => app.status === status)
      : appointments

    return NextResponse.json(filteredAppointments)
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    // In a real app, you would authenticate the user
    // const session = await auth()
    // if (!session) {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    // }

    const body = await request.json()
    
    // Validate the request body
    const validatedFields = appointmentSchema.safeParse(body)
    
    if (!validatedFields.success) {
      return NextResponse.json(
        { error: 'Invalid request data', details: validatedFields.error.flatten() },
        { status: 400 }
      )
    }
    
    const { doctorId, date, time, type, reason } = validatedFields.data
    
    // In a real app, you would verify the doctor exists
    // and check for scheduling conflicts
    
    // Create new appointment
    const newAppointment = {
      id: String(appointments.length + 1),
      patientId: '1', // In a real app, this would come from the session
      doctorId,
      doctorName: 'Dr. Sarah Johnson', // In a real app, this would be fetched from the database
      specialty: 'General Practitioner', // In a real app, this would be fetched from the database
      date,
      time,
      type,
      status: 'pending',
      reason
    }
    
    appointments.push(newAppointment)
    
    return NextResponse.json(newAppointment, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function PUT(request: Request) {
  try {
    // In a real app, you would authenticate the user
    // const session = await auth()
    // if (!session) {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    // }

    const body = await request.json()
    const { id, status } = body
    
    if (!id || !status) {
      return NextResponse.json(
        { error: 'Missing required fields: id and status' },
        { status: 400 }
      )
    }
    
    const appointmentIndex = appointments.findIndex(app => app.id === id)
    
    if (appointmentIndex === -1) {
      return NextResponse.json(
        { error: 'Appointment not found' },
        { status: 404 }
      )
    }
    
    // Update appointment status
    appointments[appointmentIndex].status = status
    
    return NextResponse.json(appointments[appointmentIndex])
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: Request) {
  try {
    // In a real app, you would authenticate the user
    // const session = await auth()
    // if (!session) {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    // }

    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return NextResponse.json(
        { error: 'Missing appointment id' },
        { status: 400 }
      )
    }
    
    const appointmentIndex = appointments.findIndex(app => app.id === id)
    
    if (appointmentIndex === -1) {
      return NextResponse.json(
        { error: 'Appointment not found' },
        { status: 404 }
      )
    }
    
    // Remove appointment
    appointments.splice(appointmentIndex, 1)
    
    return NextResponse.json({ message: 'Appointment cancelled successfully' })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
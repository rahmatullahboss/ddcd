'use client'

import { useState } from 'react'

// Mock data for appointments
const appointments = [
  {
    id: '1',
    doctor: 'Dr. Sarah Johnson',
    specialty: 'General Practitioner',
    date: '2023-10-25',
    time: '10:00 AM',
    type: 'Video Consultation',
    status: 'confirmed'
  },
  {
    id: '2',
    doctor: 'Dr. Michael Chen',
    specialty: 'Cardiologist',
    date: '2023-10-15',
    time: '2:30 PM',
    type: 'In-person Visit',
    status: 'completed'
  },
  {
    id: '3',
    doctor: 'Dr. Emily Rodriguez',
    specialty: 'Pediatrician',
    date: '2023-11-05',
    time: '11:00 AM',
    type: 'Video Consultation',
    status: 'pending'
  },
  {
    id: '4',
    doctor: 'Dr. James Wilson',
    specialty: 'Orthopedic Surgeon',
    date: '2023-09-20',
    time: '9:15 AM',
    type: 'In-person Visit',
    status: 'cancelled'
  }
]

export default function AppointmentsPage() {
  const [selectedAppointment, setSelectedAppointment] = useState<string | null>(null)

  const handleReschedule = (id: string) => {
    setSelectedAppointment(id)
    // In a real app, this would open a rescheduling form
    console.log('Reschedule appointment:', id)
  }

  const handleCancel = (id: string) => {
    // In a real app, this would cancel the appointment
    console.log('Cancel appointment:', id)
  }

  const handleViewDetails = (id: string) => {
    // In a real app, this would show appointment details
    console.log('View details for appointment:', id)
  }

  const handleBookNew = () => {
    // In a real app, this would navigate to booking page
    console.log('Book new appointment')
  }

  return (
    <div className="py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Appointments</h1>
        <p className="mt-2 text-gray-600">View and manage your upcoming and past appointments.</p>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Doctor
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date & Time
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {appointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{appointment.doctor}</div>
                    <div className="text-sm text-gray-500">{appointment.specialty}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{appointment.date}</div>
                    <div className="text-sm text-gray-500">{appointment.time}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {appointment.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${appointment.status === 'confirmed' ? 'bg-green-100 text-green-800' : 
                        appointment.status === 'completed' ? 'bg-blue-100 text-blue-800' : 
                        appointment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'}`}>
                      {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {appointment.status === 'confirmed' || appointment.status === 'pending' ? (
                      <button 
                        onClick={() => handleReschedule(appointment.id)}
                        className="text-teal-600 hover:text-teal-900 mr-3"
                      >
                        Reschedule
                      </button>
                    ) : null}
                    {appointment.status === 'confirmed' || appointment.status === 'pending' ? (
                      <button 
                        onClick={() => handleCancel(appointment.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Cancel
                      </button>
                    ) : (
                      <button 
                        onClick={() => handleViewDetails(appointment.id)}
                        className="text-teal-600 hover:text-teal-900"
                      >
                        View Details
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6">
        <button 
          onClick={handleBookNew}
          className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
        >
          Book New Appointment
        </button>
      </div>
    </div>
  )
}
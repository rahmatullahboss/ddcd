'use client'

import { useState } from 'react'

interface Appointment {
  id: string
  doctor: string
  specialty: string
  date: string
  time: string
  type: string
  status: 'confirmed' | 'completed' | 'pending' | 'cancelled'
}

export function AppointmentCard({ appointment }: { appointment: Appointment }) {
  const [status, setStatus] = useState<Appointment['status']>(appointment.status)

  const handleCancel = () => {
    if (confirm('Are you sure you want to cancel this appointment?')) {
      setStatus('cancelled')
      // In a real app, you would call an API to update the appointment status
    }
  }

  const handleReschedule = () => {
    // In a real app, you would navigate to a rescheduling page or open a modal
    alert('Rescheduling functionality would go here')
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-bold text-gray-900">{appointment.doctor}</h3>
          <p className="text-gray-600">{appointment.specialty}</p>
        </div>
        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
          ${status === 'confirmed' ? 'bg-green-100 text-green-800' : 
            status === 'completed' ? 'bg-blue-100 text-blue-800' : 
            status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
            'bg-red-100 text-red-800'}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>
      
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500">Date</p>
          <p className="font-medium">{appointment.date}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Time</p>
          <p className="font-medium">{appointment.time}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Type</p>
          <p className="font-medium">{appointment.type}</p>
        </div>
      </div>
      
      {status !== 'completed' && status !== 'cancelled' && (
        <div className="mt-6 flex space-x-3">
          <button
            onClick={handleReschedule}
            className="flex-1 bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
          >
            Reschedule
          </button>
          <button
            onClick={handleCancel}
            className="flex-1 border border-red-600 text-red-600 hover:bg-red-50 font-medium py-2 px-4 rounded-lg transition duration-300"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  )
}
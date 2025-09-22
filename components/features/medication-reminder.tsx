'use client'

import { useState } from 'react'

interface Medication {
  id: string
  name: string
  dosage: string
  frequency: string
  time: string
  taken: boolean
}

export function MedicationReminder() {
  const [medications, setMedications] = useState<Medication[]>([
    {
      id: '1',
      name: 'Lisinopril',
      dosage: '10mg',
      frequency: 'Once daily',
      time: '08:00 AM',
      taken: false
    },
    {
      id: '2',
      name: 'Atorvastatin',
      dosage: '20mg',
      frequency: 'Once daily',
      time: '09:00 PM',
      taken: true
    },
    {
      id: '3',
      name: 'Metformin',
      dosage: '500mg',
      frequency: 'Twice daily',
      time: '07:00 AM',
      taken: false
    }
  ])

  const handleTakeMedication = (id: string) => {
    setMedications(medications.map(med => 
      med.id === id ? { ...med, taken: true } : med
    ))
  }

  const pendingMedications = medications.filter(med => !med.taken)

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Medication Reminders</h2>
        <button className="text-teal-600 hover:text-teal-800 font-medium">
          Add Medication
        </button>
      </div>

      {pendingMedications.length === 0 ? (
        <div className="text-center py-8">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="mt-4 text-lg font-medium text-gray-900">All caught up!</h3>
          <p className="mt-1 text-gray-500">You've taken all your medications for today.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {pendingMedications.map((medication) => (
            <div key={medication.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-900">{medication.name}</h3>
                <p className="text-sm text-gray-500">{medication.dosage} • {medication.frequency}</p>
                <p className="text-sm text-gray-500">Due at {medication.time}</p>
              </div>
              <button
                onClick={() => handleTakeMedication(medication.id)}
                className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-300"
              >
                Mark as Taken
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6">
        <h3 className="font-medium text-gray-900 mb-3">Today's Schedule</h3>
        <div className="space-y-3">
          {medications.map((medication) => (
            <div key={medication.id} className="flex items-center">
              <div className={`w-3 h-3 rounded-full mr-3 ${medication.taken ? 'bg-green-500' : 'bg-gray-300'}`}></div>
              <span className="text-sm font-medium text-gray-900">{medication.time}</span>
              <span className="text-sm text-gray-500 ml-2">{medication.name} ({medication.dosage})</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
'use client'

import { useState } from 'react'

interface Prescription {
  id: string
  doctor: string
  medication: string
  dosage: string
  frequency: string
  prescribedDate: string
  validUntil: string
  status: 'active' | 'completed'
  instructions: string
}

export function PrescriptionList({ prescriptions }: { prescriptions: Prescription[] }) {
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all')

  const filteredPrescriptions = prescriptions.filter(prescription => {
    if (filter === 'all') return true
    return prescription.status === filter
  })

  const handleRefill = (id: string) => {
    // In a real app, you would call an API to request a refill
    alert(`Refill request for prescription ${id} would be sent`)
  }

  return (
    <div>
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg ${filter === 'all' ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('active')}
          className={`px-4 py-2 rounded-lg ${filter === 'active' ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          Active
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`px-4 py-2 rounded-lg ${filter === 'completed' ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          Completed
        </button>
      </div>
      
      {filteredPrescriptions.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">
            {filter === 'all' 
              ? 'You have no prescriptions' 
              : `You have no ${filter} prescriptions`}
          </p>
        </div>
      ) : (
        <div className="grid gap-4">
          {filteredPrescriptions.map((prescription) => (
            <div key={prescription.id} className="bg-white rounded-lg shadow p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div>
                  <div className="flex items-center">
                    <h3 className="text-lg font-bold text-gray-900">{prescription.medication}</h3>
                    <span className={`ml-3 px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${prescription.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                      {prescription.status.charAt(0).toUpperCase() + prescription.status.slice(1)}
                    </span>
                  </div>
                  <p className="text-gray-600">Prescribed by {prescription.doctor}</p>
                  
                  <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Dosage</p>
                      <p className="font-medium">{prescription.dosage}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Frequency</p>
                      <p className="font-medium">{prescription.frequency}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Prescribed</p>
                      <p className="font-medium">{prescription.prescribedDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Valid Until</p>
                      <p className="font-medium">{prescription.validUntil}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <p className="text-sm text-gray-500">Instructions</p>
                    <p className="font-medium">{prescription.instructions}</p>
                  </div>
                </div>
                
                <div className="mt-4 md:mt-0 flex space-x-3">
                  <button className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300">
                    View Details
                  </button>
                  {prescription.status === 'active' && (
                    <button 
                      onClick={() => handleRefill(prescription.id)}
                      className="border border-teal-600 text-teal-600 hover:bg-teal-50 font-medium py-2 px-4 rounded-lg transition duration-300"
                    >
                      Refill
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
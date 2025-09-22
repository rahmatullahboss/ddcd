import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Prescriptions',
  description: 'View and manage your prescriptions',
}

// Mock data for prescriptions
const prescriptions = [
  {
    id: '1',
    doctor: 'Dr. Sarah Johnson',
    medication: 'Lisinopril',
    dosage: '10mg',
    frequency: 'Once daily',
    prescribedDate: '2023-10-15',
    validUntil: '2023-12-15',
    status: 'active',
    instructions: 'Take with food. May cause dizziness. Avoid alcohol.'
  },
  {
    id: '2',
    doctor: 'Dr. Michael Chen',
    medication: 'Atorvastatin',
    dosage: '20mg',
    frequency: 'Once daily',
    prescribedDate: '2023-09-20',
    validUntil: '2023-11-20',
    status: 'completed',
    instructions: 'Take in the evening. Continue healthy diet and exercise.'
  },
  {
    id: '3',
    doctor: 'Dr. Emily Rodriguez',
    medication: 'Amoxicillin',
    dosage: '500mg',
    frequency: 'Three times daily',
    prescribedDate: '2023-10-05',
    validUntil: '2023-10-25',
    status: 'active',
    instructions: 'Take with food. Complete full course even if feeling better.'
  }
]

export default function PrescriptionsPage() {
  return (
    <div className="py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Prescriptions</h1>
        <p className="mt-2 text-gray-600">View and manage your prescriptions.</p>
      </div>

      <div className="grid gap-6">
        {prescriptions.map((prescription) => (
          <div key={prescription.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start">
              <div>
                <div className="flex items-center">
                  <h2 className="text-xl font-bold text-gray-900">{prescription.medication}</h2>
                  <span className={`ml-3 px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${prescription.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                    {prescription.status.charAt(0).toUpperCase() + prescription.status.slice(1)}
                  </span>
                </div>
                <p className="mt-1 text-gray-600">Prescribed by {prescription.doctor}</p>
                
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
                  <button className="border border-teal-600 text-teal-600 hover:bg-teal-50 font-medium py-2 px-4 rounded-lg transition duration-300">
                    Refill
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Prescription History</h2>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Medication
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Doctor
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Prescribed
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {prescriptions.map((prescription) => (
                  <tr key={prescription.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{prescription.medication}</div>
                      <div className="text-sm text-gray-500">{prescription.dosage}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {prescription.doctor}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {prescription.prescribedDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${prescription.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                        {prescription.status.charAt(0).toUpperCase() + prescription.status.slice(1)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
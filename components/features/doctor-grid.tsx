'use client'

import { useState } from 'react'

interface Doctor {
  id: string
  name: string
  specialty: string
  experience: number
  rating: number
  image: string
}

export function DoctorGrid({ doctors }: { doctors: Doctor[] }) {
  const [filteredDoctors, setFilteredDoctors] = useState(doctors)
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase()
    setSearchTerm(term)
    
    const filtered = doctors.filter(doctor => 
      doctor.name.toLowerCase().includes(term) || 
      doctor.specialty.toLowerCase().includes(term)
    )
    
    setFilteredDoctors(filtered)
  }

  return (
    <div>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search doctors by name or specialty..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      
      {filteredDoctors.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No doctors found matching your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="bg-gray-200 border-2 border-dashed w-full h-48 flex items-center justify-center">
                <span className="text-gray-500">Doctor Image</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{doctor.name}</h3>
                    <p className="text-teal-600 font-medium">{doctor.specialty}</p>
                  </div>
                  <div className="bg-teal-100 text-teal-800 px-2 py-1 rounded text-sm font-medium">
                    {doctor.experience} years
                  </div>
                </div>
                
                <div className="flex items-center mt-3">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-5 h-5 ${i < Math.floor(doctor.rating) ? 'fill-current' : 'fill-gray-300'}`} viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600 text-sm">{doctor.rating}</span>
                </div>
                
                <div className="mt-6 flex space-x-3">
                  <button className="flex-1 bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300">
                    View Profile
                  </button>
                  <button className="flex-1 border border-teal-600 text-teal-600 hover:bg-teal-50 font-medium py-2 px-4 rounded-lg transition duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
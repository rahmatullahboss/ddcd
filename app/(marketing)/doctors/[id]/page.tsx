import { notFound } from 'next/navigation'

// Mock data for doctors
const doctors = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    specialty: 'General Practitioner',
    experience: 10,
    education: 'MD, University of California',
    certifications: ['Board Certified in Family Medicine', 'Advanced Cardiac Life Support'],
    languages: ['English', 'Spanish'],
    rating: 4.9,
    reviews: 128,
    bio: 'Dr. Johnson has over a decade of experience in family medicine and is dedicated to providing comprehensive healthcare to patients of all ages. She believes in a holistic approach to healthcare, focusing on prevention and patient education.',
    availability: [
      { day: 'Monday', time: '9:00 AM - 5:00 PM' },
      { day: 'Tuesday', time: '9:00 AM - 5:00 PM' },
      { day: 'Wednesday', time: '9:00 AM - 5:00 PM' },
      { day: 'Friday', time: '9:00 AM - 3:00 PM' }
    ],
    specialties: ['Preventive Care', 'Chronic Disease Management', 'Women\'s Health', 'Vaccinations'],
    image: '/images/doctors/sarah-johnson.jpg'
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    specialty: 'Cardiologist',
    experience: 15,
    education: 'MD, Harvard Medical School',
    certifications: ['Board Certified in Cardiology', 'Board Certified in Internal Medicine'],
    languages: ['English', 'Mandarin'],
    rating: 4.8,
    reviews: 97,
    bio: 'Dr. Chen is a board-certified cardiologist with expertise in preventive cardiology and heart disease management. He is committed to helping patients understand their heart health and develop personalized treatment plans.',
    availability: [
      { day: 'Monday', time: '10:00 AM - 6:00 PM' },
      { day: 'Wednesday', time: '10:00 AM - 6:00 PM' },
      { day: 'Thursday', time: '10:00 AM - 6:00 PM' },
      { day: 'Saturday', time: '8:00 AM - 2:00 PM' }
    ],
    specialties: ['Heart Disease Prevention', 'Echocardiography', 'Hypertension Management', 'Cardiac Rehabilitation'],
    image: '/images/doctors/michael-chen.jpg'
  }
]

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const doctor = doctors.find(d => d.id === id)
  
  if (!doctor) {
    return {
      title: 'Doctor Not Found'
    }
  }

  return {
    title: `Dr. ${doctor.name} - ${doctor.specialty}`,
    description: doctor.bio,
  }
}

export default async function DoctorDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const doctor = doctors.find(d => d.id === id)

  if (!doctor) {
    notFound()
  }

  return (
    <div className="container py-8">
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div className="md:flex">
          <div className="md:w-1/3 bg-gray-200 border-2 border-dashed w-full h-80 md:h-full flex items-center justify-center">
            <span className="text-gray-500">Doctor Image</span>
          </div>
          <div className="p-8 md:w-2/3">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Dr. {doctor.name}</h1>
                <p className="text-xl text-teal-600 font-medium mt-2">{doctor.specialty}</p>
                <div className="flex items-center mt-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-5 h-5 ${i < Math.floor(doctor.rating) ? 'fill-current' : 'fill-gray-300'}`} viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">{doctor.rating} ({doctor.reviews} reviews)</span>
                </div>
              </div>
              <button className="mt-4 md:mt-0 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
                Book Appointment
              </button>
            </div>

            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">Experience</p>
                <p className="font-semibold">{doctor.experience} years</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">Education</p>
                <p className="font-semibold text-sm">{doctor.education.split(',')[0]}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">Languages</p>
                <p className="font-semibold">{doctor.languages[0]}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">Specialties</p>
                <p className="font-semibold text-sm">{doctor.specialties[0]}</p>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-3">About</h2>
              <p className="text-gray-700">{doctor.bio}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Availability</h2>
          <div className="space-y-4">
            {doctor.availability.map((slot, index) => (
              <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="font-medium">{slot.day}</span>
                <span className="text-gray-600">{slot.time}</span>
              </div>
            ))}
          </div>
          <button className="mt-6 w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300">
            Book Appointment
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Specialties</h2>
          <ul className="space-y-3">
            {doctor.specialties.map((specialty, index) => (
              <li key={index} className="flex items-start">
                <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{specialty}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-4">Certifications</h3>
          <ul className="space-y-2">
            {doctor.certifications.map((cert, index) => (
              <li key={index} className="flex items-start">
                <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
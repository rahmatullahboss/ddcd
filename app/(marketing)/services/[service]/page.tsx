import { notFound } from 'next/navigation'

// Mock data for services
const services = [
  {
    id: 'telemedicine',
    name: 'Telemedicine Consultations',
    description: 'Connect with healthcare professionals from the comfort of your home through secure video consultations.',
    features: [
      '24/7 access to healthcare professionals',
      'Secure video consultations',
      'Prescription services',
      'Follow-up care'
    ],
    image: '/images/telemedicine.jpg'
  },
  {
    id: 'health-monitoring',
    name: 'Health Monitoring',
    description: 'Track your vital signs and health metrics with our advanced monitoring system.',
    features: [
      'Real-time health tracking',
      'Automated alerts',
      'Data analytics',
      'Integration with wearable devices'
    ],
    image: '/images/health-monitoring.jpg'
  },
  {
    id: 'prescription-management',
    name: 'Prescription Management',
    description: 'Manage your prescriptions digitally with refill reminders and pharmacy integration.',
    features: [
      'Digital prescription storage',
      'Refill reminders',
      'Pharmacy integration',
      'Medication interaction alerts'
    ],
    image: '/images/prescription.jpg'
  }
]

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }) {
  const { service: serviceId } = await params
  const service = services.find(s => s.id === serviceId)
  
  if (!service) {
    return {
      title: 'Service Not Found'
    }
  }

  return {
    title: service.name,
    description: service.description,
  }
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ service: string }> }) {
  const { service: serviceId } = await params
  const service = services.find(s => s.id === serviceId)

  if (!service) {
    notFound()
  }

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{service.name}</h1>
        <p className="text-xl text-gray-600">{service.description}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="space-y-3">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg className="h-6 w-6 text-teal-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
          <span className="text-gray-500">Service Image</span>
        </div>
      </div>

      <div className="bg-teal-50 rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">Ready to get started?</h2>
        <p className="text-center text-gray-700 mb-6">
          Join thousands of patients who trust Digital Care for their healthcare needs.
        </p>
        <div className="flex justify-center">
          <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
            Book a Consultation
          </button>
        </div>
      </div>
    </div>
  )
}
export default function ServicesPage() {
  const services = [
    {
      title: "Telemedicine Consultations",
      description: "Connect with healthcare providers from the comfort of your home through secure video calls.",
      icon: "🩺",
    },
    {
      title: "Appointment Booking",
      description: "Easily schedule appointments with your preferred healthcare providers.",
      icon: "📅",
    },
    {
      title: "Digital Prescriptions",
      description: "Receive and manage your prescriptions digitally with our secure platform.",
      icon: "💊",
    },
    {
      title: "Health Records Management",
      description: "Access and manage your medical records securely in one place.",
      icon: "📋",
    },
    {
      title: "Lab Test Booking",
      description: "Book diagnostic tests and receive results directly on the platform.",
      icon: "🧬",
    },
    {
      title: "Health Monitoring",
      description: "Track your health metrics and receive personalized insights.",
      icon: "📈",
    },
  ]

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Healthcare Services</h1>
        <p className="text-lg text-gray-600">
          We offer a comprehensive range of digital healthcare services designed to make quality care accessible and convenient.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
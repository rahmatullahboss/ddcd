export default function ServicesPage() {
  const services = [
    {
      title: "Web Development",
      description: "Custom website development with modern technologies and responsive design.",
      icon: "💻",
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      icon: "📱",
    },
    {
      title: "UI/UX Design",
      description: "User-centered design solutions that enhance user experience and engagement.",
      icon: "🎨",
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for your business.",
      icon: "☁️",
    },
    {
      title: "IT Consulting",
      description: "Strategic technology consulting to help your business grow and innovate.",
      icon: "📊",
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets.",
      icon: "🔒",
    },
  ]

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our IT Services</h1>
        <p className="text-lg text-gray-600">
          We offer a comprehensive range of digital IT services designed to help your business thrive in the digital world.
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
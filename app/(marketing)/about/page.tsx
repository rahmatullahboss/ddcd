export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Digital Care</h1>
          <p className="text-xl text-gray-600">
            Digital Care is a modern IT solutions agency that connects businesses with technology experts
            through innovative solutions. Our mission is to make quality IT services accessible,
            affordable, and personalized.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Founded in 2023, Digital Care began with a simple idea: technology services should be easy to access,
            affordable, and personalized. We've built a platform that brings together the best IT professionals
            with businesses that need their expertise.
          </p>
          <p className="text-gray-700 mb-4">
            Today, we serve hundreds of clients across various industries, helping them leverage technology
            to grow their businesses and solve complex challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Innovation:</strong> We leverage the latest technology to deliver cutting-edge solutions</li>
              <li><strong>Accessibility:</strong> Making quality IT services available to businesses of all sizes</li>
              <li><strong>Excellence:</strong> Commitment to delivering high-quality work and exceptional service</li>
              <li><strong>Integrity:</strong> Honest, transparent, and ethical business practices</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <p className="text-gray-700 mb-4">
              Our team consists of IT professionals, developers, designers, and innovators who are passionate
              about transforming the technology landscape. We work together to create solutions that make a
              real difference for our clients.
            </p>
          </div>
        </div>

        <div className="bg-teal-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to work with us?</h2>
          <p className="text-gray-700 mb-6">
            Join hundreds of businesses who trust Digital Care for their technology needs.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  )
}
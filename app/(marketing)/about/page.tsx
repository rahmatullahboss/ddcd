export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">About Digital Care</h1>
        <div className="prose prose-lg mx-auto">
          <p className="text-lg">
            Digital Care is a modern healthcare platform that connects patients with healthcare providers 
            through innovative technology solutions. Our mission is to make quality healthcare accessible 
            and convenient for everyone.
          </p>
          
          <h2 className="mt-12">Our Story</h2>
          <p>
            Founded in 2023, Digital Care began with a simple idea: healthcare should be easy to access, 
            affordable, and personalized. We've built a platform that brings together the best healthcare 
            providers with cutting-edge technology to deliver exceptional patient experiences.
          </p>
          
          <h2 className="mt-12">Our Values</h2>
          <ul>
            <li><strong>Patient-Centered:</strong> Everything we do is focused on improving patient outcomes</li>
            <li><strong>Innovation:</strong> We leverage the latest technology to enhance healthcare delivery</li>
            <li><strong>Accessibility:</strong> Making quality healthcare available to all communities</li>
            <li><strong>Integrity:</strong> Maintaining the highest standards of privacy and security</li>
          </ul>
          
          <h2 className="mt-12">Our Team</h2>
          <p>
            Our team consists of healthcare professionals, technologists, and innovators who are passionate 
            about transforming the healthcare experience. We work together to create solutions that make a 
            real difference in people's lives.
          </p>
        </div>
      </div>
    </div>
  )
}
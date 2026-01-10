import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
    alert('Thank you for reaching out! We will respond within 24 hours.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Get in Touch</h2>
          
          <div className="space-y-8">
            {/* Phone */}
            <div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">📞 Phone</h3>
              <p className="text-gray-600 text-lg">9733752147</p>
              <p className="text-gray-500 text-sm">Available Mon-Fri: 8AM - 6PM, Sat: 9AM - 4PM</p>
            </div>

            {/* Email */}
            <div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">📧 Email</h3>
              <p className="text-gray-600 text-lg">info@hawthorneauto.com</p>
              <p className="text-gray-500 text-sm">We respond within 24 hours</p>
            </div>

            {/* Location */}
            <div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">📍 Location</h3>
              <p className="text-gray-600">556 Hawthorne Ave</p>
              <p className="text-gray-600">Newark, NJ 07112</p>
              <p className="text-gray-500 text-sm mt-2">Located near Hawthorne Deli & Gr</p>
            </div>

            {/* Hours */}
            <div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">🕒 Hours of Operation</h3>
              <div className="text-gray-600 space-y-1">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">🔧 Quick Services</h3>
              <ul className="text-gray-600 space-y-1">
                <li>✓ Oil changes - $30-$60</li>
                <li>✓ Tire rotations - $40</li>
                <li>✓ Diagnostics - $85</li>
                <li>✓ Brake pads - starting $120</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Send us a Message</h2>
          
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="e.g., Repair Quote, General Question"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

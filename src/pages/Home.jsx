import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-4">Welcome to Hawthorne Auto Repair</h2>
          <p className="text-xl text-gray-300 mb-8">Expert repairs and quality vehicles since 2025</p>
          <div className="flex gap-4 justify-center">
            <Link to="/book-repair" className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-3 rounded-lg transition">
              Book Repair
            </Link>
            <Link to="/cars-for-sale" className="bg-slate-700 hover:bg-slate-600 text-white font-bold px-8 py-3 rounded-lg transition">
              Browse Cars
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h3 className="text-5xl font-bold mb-12 text-gray-800">What Can We Help You With?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Repair Card (background image) */}
          <div className="relative rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition transform hover:scale-105">
            <div
              className="h-72 bg-cover bg-center"
              style={{ backgroundImage: "url('./images/auto-repair.jpg')" }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-8">
              <h4 className="text-4xl font-bold mb-3 text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 4px 4px 8px rgba(0,0,0,0.6)' }}>Vehicle Repair</h4>
              <p className="text-base text-gray-100 mb-6" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>Professional repairs for all makes and models. From routine maintenance to major repairs.</p>
              <Link to="/book-repair" className="inline-block bg-blue-500 text-white font-bold px-6 py-3 rounded text-lg hover:bg-blue-600">
                Book Service →
              </Link>
            </div>
          </div>

          {/* Track Card (background image) */}
          <div className="relative rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition transform hover:scale-105">
            <div
              className="h-72 bg-cover bg-center bg-gradient-to-br from-blue-600 to-blue-800"
              style={{ backgroundImage: "url('./images/track-repairs.avif'), linear-gradient(to bottom right, rgb(37, 99, 235), rgb(30, 58, 138))" }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-8">
              <h4 className="text-4xl font-bold mb-3 text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 4px 4px 8px rgba(0,0,0,0.6)' }}>Track Your Repairs</h4>
              <p className="text-base text-gray-100 mb-6" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>Monitor your repair progress in real-time. Get updates on labor, parts, and completion.</p>
              <Link to="/my-repairs" className="inline-block bg-blue-500 text-white font-bold px-6 py-3 rounded text-lg hover:bg-blue-600">
                View Status →
              </Link>
            </div>
          </div>

          {/* Sales Card (background image) */}
          <div className="relative rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition transform hover:scale-105">
            <div
              className="h-72 bg-cover bg-center"
              style={{ backgroundImage: "url('./images/cars-for-sale.webp')" }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-8">
              <h4 className="text-4xl font-bold mb-3 text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 4px 4px 8px rgba(0,0,0,0.6)' }}>Cars for Sale</h4>
              <p className="text-base text-gray-100 mb-6" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>Browse our inventory of quality used vehicles with transparent pricing and vehicle history.</p>
              <Link to="/cars-for-sale" className="inline-block bg-blue-500 text-white font-bold px-6 py-3 rounded text-lg hover:bg-blue-600">
                View Inventory →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold mb-8 text-gray-800">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-lg mb-2">✓ Oil Changes & Fluid Service</h4>
              <p className="text-gray-600">Keep your engine running smoothly with regular maintenance</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-lg mb-2">✓ Brake Service</h4>
              <p className="text-gray-600">Safety firstprofessional brake inspection and repair</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-lg mb-2">✓ Diagnostics</h4>
              <p className="text-gray-600">Advanced computer diagnostics for any issue</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-lg mb-2">✓ Tire Service</h4>
              <p className="text-gray-600">New tires, alignments, rotations, and repairs</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-lg mb-2">✓ Transmission Repair</h4>
              <p className="text-gray-600">Complex transmission work with expert technicians</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-lg mb-2">✓ Air Conditioning</h4>
              <p className="text-gray-600">AC repair, recharge, and seasonal maintenance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Your Car Fixed?</h3>
          <p className="mb-8 text-lg">Schedule an appointment today or call us for a quick quote</p>
          <div className="flex gap-4 justify-center">
            <Link to="/book-repair" className="bg-black text-white font-bold px-8 py-3 rounded-lg hover:bg-gray-900 transition">
              Book Now
            </Link>
            <button onClick={() => window.dispatchEvent(new Event('openContactModal'))} className="bg-white text-blue-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

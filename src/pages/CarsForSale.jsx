import { useState } from 'react'

export default function CarsForSale() {
  const [cars] = useState([
    {
      id: 1,
      year: 2018,
      make: 'Honda',
      model: 'Civic',
      price: 14995,
      mileage: 45000,
      transmission: 'Automatic',
      fuel: 'Gasoline',
      image: '🚗'
    },
    {
      id: 2,
      year: 2019,
      make: 'Toyota',
      model: 'Camry',
      price: 18995,
      mileage: 38000,
      transmission: 'Automatic',
      fuel: 'Gasoline',
      image: '🚗'
    },
    {
      id: 3,
      year: 2017,
      make: 'Ford',
      model: 'F-150',
      price: 22995,
      mileage: 62000,
      transmission: 'Automatic',
      fuel: 'Gasoline',
      image: '🚙'
    },
    {
      id: 4,
      year: 2020,
      make: 'Mazda',
      model: '3',
      price: 16995,
      mileage: 28000,
      transmission: 'Automatic',
      fuel: 'Gasoline',
      image: '🚗'
    }
  ])

  const [selectedCar, setSelectedCar] = useState(null)
  const [showInquiry, setShowInquiry] = useState(false)

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Cars for Sale</h1>

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h3 className="text-lg font-bold mb-4">Filters</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <select className="border border-gray-300 rounded-lg px-4 py-2 bg-white">
            <option value="">Any Make</option>
            <option>Honda</option>
            <option>Toyota</option>
            <option>Ford</option>
            <option>Mazda</option>
          </select>

          <select className="border border-gray-300 rounded-lg px-4 py-2 bg-white">
            <option value="">Any Model</option>
            <option>Civic</option>
            <option>Camry</option>
            <option>F-150</option>
            <option>3</option>
          </select>

          <select className="border border-gray-300 rounded-lg px-4 py-2 bg-white">
            <option value="">Any Price</option>
            <option value="0-10000">0 - $10,000</option>
            <option value="10001-20000">$10,001 - $20,000</option>
            <option value="20001-30000">$20,001 - $30,000</option>
            <option value="30000+">$30,000+</option>
          </select>

          <button className="bg-primary hover:bg-gray-800 text-white font-bold py-2 rounded-lg transition">
            Search
          </button>
        </div>
      </div>

      {/* Cars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cars.map(car => (
          <div
            key={car.id}
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition cursor-pointer overflow-hidden"
            onClick={() => setSelectedCar(car)}
          >
            <div className="bg-gray-200 h-48 flex items-center justify-center text-6xl">
              {car.image}
            </div>
            <div className="p-4">
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                {car.year} {car.make} {car.model}
              </h4>
              <div className="mb-4">
                <p className="text-2xl font-bold text-blue-600">${car.price.toLocaleString()}</p>
                <p className="text-gray-600 text-sm">{car.mileage.toLocaleString()} miles</p>
              </div>
              <div className="text-sm text-gray-600 space-y-1 mb-4">
                <p>🏎️ {car.transmission}</p>
                <p>⛽ {car.fuel}</p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedCar(car)
                  setShowInquiry(true)
                }}
                className="w-full bg-primary text-white py-2 rounded-lg hover:bg-gray-700 transition font-semibold"
              >
                Request Info
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Car Detail Modal */}
      {selectedCar && !showInquiry && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-96 overflow-auto">
            <div className="p-8">
              <button
                onClick={() => setSelectedCar(null)}
                className="float-right text-2xl font-bold text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {selectedCar.year} {selectedCar.make} {selectedCar.model}
              </h2>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-gray-600 text-sm">Price</p>
                  <p className="text-2xl font-bold text-blue-600">${selectedCar.price.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Mileage</p>
                  <p className="text-2xl font-bold">{selectedCar.mileage.toLocaleString()} mi</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Transmission</p>
                  <p className="text-lg font-semibold">{selectedCar.transmission}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Fuel Type</p>
                  <p className="text-lg font-semibold">{selectedCar.fuel}</p>
                </div>
              </div>
              <button
                onClick={() => setShowInquiry(true)}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition"
              >
                Request More Information
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Inquiry Form Modal */}
      {showInquiry && selectedCar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
            <div className="p-8">
              <button
                onClick={() => setShowInquiry(false)}
                className="float-right text-2xl font-bold text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Inquire About {selectedCar.year} {selectedCar.make} {selectedCar.model}
              </h2>
              <form onSubmit={(e) => {
                e.preventDefault()
                alert('Thank you for your inquiry! We will contact you soon.')
                setShowInquiry(false)
              }}>
                <input type="text" placeholder="Full Name" required className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-secondary" />
                <input type="email" placeholder="Email" required className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-secondary" />
                <input type="tel" placeholder="Phone" required className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-secondary" />
                <textarea placeholder="Message" rows="4" className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-secondary"></textarea>
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg transition">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      </div>

      <section className="w-full bg-gradient-to-r from-black via-gray-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">On a budget? Try our financing options</h2>
            <p className="mb-6 text-gray-200">Get pre-approved today and drive home with confidence. Flexible terms, competitive rates, and fast decisions.</p>
            <ul className="list-disc ml-5 space-y-2 text-gray-200">
              <li>Affordable monthly payments</li>
              <li>Flexible term lengths tailored to you</li>
              <li>Soft credit check — won't affect your score</li>
            </ul>
            <button onClick={() => window.dispatchEvent(new Event('openContactModal'))} className="inline-block mt-6 bg-white text-black font-semibold px-6 py-3 rounded-lg shadow hover:opacity-95">Learn more</button>
          </div>

          <div className="flex justify-end">
            <div className="bg-white text-gray-900 rounded-lg p-6 shadow-lg w-full max-w-md">
              <h3 className="text-xl font-bold mb-4">Get Pre-Approved</h3>
              <form onSubmit={(e) => { e.preventDefault(); alert('Thanks — we received your pre-approval request. We will contact you soon.'); }}>
                <input type="email" placeholder="Email" required className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-secondary" />
                <input type="tel" placeholder="Phone" className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-secondary" />
                <select className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-secondary">
                  <option>Desired monthly budget</option>
                  <option>$150 - $300</option>
                  <option>$300 - $500</option>
                  <option>$500+</option>
                </select>
                <button type="submit" className="w-full bg-primary text-white font-bold py-2 rounded-lg hover:bg-gray-800 transition">Get Pre-Approved</button>
                <p className="text-xs text-gray-500 mt-3">By submitting you agree to our terms. Soft credit check only.</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

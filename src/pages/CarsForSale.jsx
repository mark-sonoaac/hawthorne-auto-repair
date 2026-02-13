import { useEffect, useMemo, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { carInventory, getImageUrl } from '../data/carInventory'

export default function CarsForSale() {
  const [cars] = useState(carInventory)

  const [selectedCar, setSelectedCar] = useState(null)
  const [showInquiry, setShowInquiry] = useState(false)
  const [filters, setFilters] = useState({
    make: '',
    model: '',
    price: '',
    mileage: ''
  })
  const [sliderIndex, setSliderIndex] = useState(0)
  const sliderRef = useRef(null)
  const intervalRef = useRef(null)

  const sliderThemes = useMemo(() => ([
    { dark: '#500033', light: '#FF0077' },
    { dark: '#000050', light: '#0033FF' },
    { dark: '#00501D', light: '#00FF44' },
    { dark: '#554D00', light: '#FF4E00' },
    { dark: '#300050', light: '#8000FF' }
  ]), [])

  const sliderCars = useMemo(() => {
    const base = cars.slice(0, 5)
    return base.map((car, index) => ({
      ...car,
      theme: sliderThemes[index % sliderThemes.length]
    }))
  }, [cars, sliderThemes])

  const inRange = (value, range) => {
    if (!range) return true
    if (range.endsWith('+')) {
      const min = Number(range.replace('+', ''))
      return value >= min
    }
    const [min, max] = range.split('-').map(Number)
    return value >= min && value <= max
  }

  const filteredCars = cars.filter((car) => {
    const makeMatch = filters.make ? car.make === filters.make : true
    const modelMatch = filters.model ? car.model === filters.model : true
    const priceMatch = inRange(car.price, filters.price)
    const mileageMatch = inRange(car.mileage, filters.mileage)
    return makeMatch && modelMatch && priceMatch && mileageMatch
  })

  const availableMakes = Array.from(new Set(cars.map((car) => car.make))).sort()
  const availableModels = Array.from(
    new Set(
      cars
        .filter((car) => (filters.make ? car.make === filters.make : true))
        .map((car) => car.model)
    )
  ).sort()

  const goToSlide = (nextIndex) => {
    const safeIndex = (nextIndex + sliderCars.length) % sliderCars.length
    setSliderIndex(safeIndex)
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    intervalRef.current = setInterval(() => {
      setSliderIndex((prev) => (prev + 1) % sliderCars.length)
    }, 6000)
  }

  useEffect(() => {
    if (!sliderCars.length) return undefined
    intervalRef.current = setInterval(() => {
      setSliderIndex((prev) => (prev + 1) % sliderCars.length)
    }, 6000)
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [sliderCars.length])

  useEffect(() => {
    const sliderEl = sliderRef.current
    if (!sliderEl) return
    const activeSlide = sliderEl.querySelector('.car-slide.active')
    if (!activeSlide) return
    const tl = gsap.timeline({ defaults: { duration: 0.6, ease: 'power2.inOut' } })
    tl.from(activeSlide.querySelector('.bg'), { x: '-100%', opacity: 0 })
      .from(activeSlide.querySelectorAll('.details h2, .details p'), { opacity: 0, y: 20, stagger: 0.08 }, '-=0.3')
      .from(activeSlide.querySelector('.details button'), { opacity: 0, y: -20 }, '-=0.3')
      .from(activeSlide.querySelector('.illustration .inner'), { opacity: 0, x: 40 }, '-=0.4')
  }, [sliderIndex])

  const handleScrollToGrid = () => {
    const grid = document.getElementById('cars-grid')
    if (grid) {
      grid.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Cars for Sale</h1>

      {sliderCars.length > 0 && (
        <section className="car-slider-container">
          <div
            className="car-slider"
            ref={sliderRef}
            style={{ transform: `translateX(-${sliderIndex * 100}%)` }}
          >
            {sliderCars.map((car, index) => (
              <div
                key={`${car.id}-${index}`}
                className={`car-slide ${index === sliderIndex ? 'active' : ''}`}
                style={{ backgroundColor: car.theme.dark }}
              >
                <div className="bg"></div>
                <div className="details">
                  <h2>{car.year} {car.make} {car.model}</h2>
                  <p>
                    ${car.price.toLocaleString()} • {car.mileage.toLocaleString()} miles • {car.transmission}
                  </p>
                  <button type="button" onClick={() => { setSelectedCar(car); handleScrollToGrid() }}>
                    Check Now
                  </button>
                </div>
                <div className="illustration">
                  <div className="inner" style={{ backgroundColor: car.theme.light }}>
                    <img src={getImageUrl(car.imageName)} alt={`${car.make} ${car.model}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="car-slider-nav prev" onClick={() => goToSlide(sliderIndex - 1)} aria-label="Previous">
            ‹
          </button>
          <button className="car-slider-nav next" onClick={() => goToSlide(sliderIndex + 1)} aria-label="Next">
            ›
          </button>
          <div className="car-slider-trail">
            {sliderCars.map((_, index) => (
              <button
                key={`trail-${index}`}
                className={index === sliderIndex ? 'active' : ''}
                onClick={() => goToSlide(index)}
                type="button"
              >
                {index + 1}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg shadow mb-8 text-gray-800">
        <h3 className="text-lg font-bold mb-4 text-gray-900">Filters</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <select
            className="border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-800"
            value={filters.make}
            onChange={(e) => setFilters((prev) => ({ ...prev, make: e.target.value, model: '' }))}
          >
            <option value="">Any Make</option>
            {availableMakes.map((make) => (
              <option key={make} value={make}>{make}</option>
            ))}
          </select>

          <select
            className="border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-800"
            value={filters.model}
            onChange={(e) => setFilters((prev) => ({ ...prev, model: e.target.value }))}
          >
            <option value="">Any Model</option>
            {availableModels.map((model) => (
              <option key={model} value={model}>{model}</option>
            ))}
          </select>

          <select
            className="border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-800"
            value={filters.price}
            onChange={(e) => setFilters((prev) => ({ ...prev, price: e.target.value }))}
          >
            <option value="">Any Price</option>
            <option value="0-5000">$0 to $5,000</option>
            <option value="5001-10000">$5,001 to $10,000</option>
            <option value="10001-20000">$10,001 to $20,000</option>
            <option value="20001-30000">$20,001 to $30,000</option>
            <option value="30000+">$30,000+</option>
          </select>

          <select
            className="border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-800"
            value={filters.mileage}
            onChange={(e) => setFilters((prev) => ({ ...prev, mileage: e.target.value }))}
          >
            <option value="">Any Mileage</option>
            <option value="0-5000">0 to 5,000 mi</option>
            <option value="5001-10000">5,001 to 10,000 mi</option>
            <option value="10001-30000">10,001 to 30,000 mi</option>
            <option value="30001-60000">30,001 to 60,000 mi</option>
            <option value="60000+">60,000+ mi</option>
          </select>

          <button
            className="bg-primary hover:bg-gray-800 text-white font-bold py-2 rounded-lg transition w-full md:w-auto"
            onClick={() => setFilters({ make: '', model: '', price: '', mileage: '' })}
          >
            Reset
          </button>
        </div>
      </div>

      {/* Cars Grid */}
      <div id="cars-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredCars.map(car => (
          <div
            key={car.id}
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition cursor-pointer overflow-hidden"
            onClick={() => setSelectedCar(car)}
          >
            <div className="bg-gray-200 h-48 flex items-center justify-center">
              <img
                src={getImageUrl(car.imageName)}
                alt={`${car.year} ${car.make} ${car.model}`}
                className="h-full w-full object-cover"
              />
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

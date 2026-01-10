import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const timeoutRef = useRef(null)

  const handleEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setOpen(true)
  }

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 350)
  }

  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-start gap-12 py-6 items-center">
          <Link to="/" className="hover:text-blue-400 transition font-semibold">
            Home
          </Link>

          {/* Services dropdown with small hide delay */}
          <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <button
              onClick={() => setOpen((s) => !s)}
              className="flex items-center gap-2 hover:text-blue-400 transition font-semibold bg-transparent"
            >
              Services
              <svg className="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>

            <div className={`${open ? 'block' : 'hidden'} absolute left-0 mt-2 w-44 bg-white text-black rounded shadow-lg z-50`}>
              <Link to="/book-repair" className="block px-4 py-2 hover:bg-slate-100">Book Repair</Link>
              <Link to="/my-repairs" className="block px-4 py-2 hover:bg-slate-100">My Repairs</Link>
              <Link to="/cars-for-sale" className="block px-4 py-2 hover:bg-slate-100">Cars for Sale</Link>
            </div>
          </div>

          <a href="#" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('openContactModal')) }} className="hover:text-blue-400 transition font-semibold cursor-pointer">
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

import { useEffect } from 'react'
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import MyRepairs from './pages/MyRepairs'
import CarsForSale from './pages/CarsForSale'
import BookRepair from './pages/BookRepair'
import Contact from './pages/Contact'
import Services from './pages/Services'

function ScrollToTop() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])
  return null
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/my-repairs" element={<MyRepairs />} />
            <Route path="/cars-for-sale" element={<CarsForSale />} />
            <Route path="/book-repair" element={<BookRepair />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

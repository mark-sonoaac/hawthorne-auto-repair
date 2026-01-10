import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import MyRepairs from './pages/MyRepairs'
import CarsForSale from './pages/CarsForSale'
import BookRepair from './pages/BookRepair'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/my-repairs" element={<MyRepairs />} />
            <Route path="/cars-for-sale" element={<CarsForSale />} />
            <Route path="/book-repair" element={<BookRepair />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

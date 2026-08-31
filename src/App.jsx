import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import CarsPage from './pages/CarsPage'
import CarDetailPage from './pages/CarDetailPage'
import AboutPage from './pages/AboutPage'
import Navbar from './components/layout/Navbar'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cars" element={<CarsPage />} />
        <Route path="/cars/:slug" element={<CarDetailPage />  } />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App
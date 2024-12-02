import AOS from 'aos'
import './App.css'
import { useEffect } from 'react'
import 'aos/dist/aos.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Homepage from './pages/HomePage/Homepage'
import SketcherPage from './pages/SketcherPage/SketcherPage';
import Navbar from './components/Navbar/Navbar';
import Team from './pages/Team/Team';
import Gallery from './pages/Gallery/Gallery';
import Technologies from './pages/Technologies/Technologies';
import About from './pages/About/About';
import Matcher from './pages/Matcher/Matcher';
import Login from './pages/Login/Login';
import ProtectedRoute from './components/Common/ProtectedRoutes/ProtectedRoute';
import { Analytics } from "@vercel/analytics/react"

function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <BrowserRouter>
      <Navbar />
      <Analytics />
      <Routes>
        <Route path='/' element={<ProtectedRoute><Homepage /></ProtectedRoute>} />
        <Route path='*' element={<h1>404</h1>} />
        <Route path='/sketcher' element={<ProtectedRoute><SketcherPage /></ProtectedRoute>} />
        <Route path='/team' element={<ProtectedRoute><Team /></ProtectedRoute>} />
        <Route path='/gallery' element={<ProtectedRoute><Gallery /></ProtectedRoute>} />
        <Route path='/technologies' element={<ProtectedRoute><Technologies /></ProtectedRoute>} />
        <Route path='/about' element={<ProtectedRoute><About/></ProtectedRoute>} />
        <Route path='/matcher' element={<ProtectedRoute><Matcher/></ProtectedRoute>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

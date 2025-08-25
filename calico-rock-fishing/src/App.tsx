import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import PropertyGallery from './components/PropertyGallery'
import RiverViews from './components/RiverViews'
import Location from './components/Location'
import FishingTours from './components/FishingTours'
import Activities from './components/Activities'
import Booking from './components/Booking'
import Contact from './components/Contact'
import FishingReportsPage from './components/FishingReportsPage'
import FishingReportDetail from './components/FishingReportDetail'
import TermsOfService from './components/TermsOfService'
import PrivacyPolicy from './components/PrivacyPolicy'
import AirbnbPolicy from './components/AirbnbPolicy'
import RefundPolicy from './components/RefundPolicy'
import Footer from './components/Footer'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simulate loading time for smooth entrance animations
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <LanguageProvider>
      <Router>
        <div className={`App ${isLoaded ? 'loaded' : 'loading'}`}>
          <Navigation />
          
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <PropertyGallery />
                <RiverViews />
                <Location />
                <FishingTours />
                <Activities />
                <Booking />
                <Contact />
              </>
            } />
            
            {/* Individual page routes for direct navigation */}
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<PropertyGallery />} />
            <Route path="/river-views" element={<RiverViews />} />
            <Route path="/location" element={<Location />} />
            <Route path="/fishing-tours" element={<FishingTours />} />
            <Route path="/fishing-reports" element={<FishingReportsPage />} />
            <Route path="/fishing-reports/:id" element={<FishingReportDetail />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/airbnb-policy" element={<AirbnbPolicy />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
          </Routes>
          
          <Footer />
          
          {/* Limestone texture overlay for the entire site */}
          <div className="limestone-texture" />
        </div>
      </Router>
    </LanguageProvider>
  )
}

export default App
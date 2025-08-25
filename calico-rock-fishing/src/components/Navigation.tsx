import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import LanguageSelector from './LanguageSelector'

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first
      window.location.href = `/#${sectionId}`
      return
    }
    
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const navItems = [

    { label: t.about, action: () => scrollToSection('about') },
    { label: t.gallery, action: () => scrollToSection('gallery') },
    { label: t.riverViews, action: () => scrollToSection('river-views') },
    { label: t.location, action: () => scrollToSection('location') },
    { label: t.fishingTours, action: () => scrollToSection('fishing-tours') },
    { label: t.fishingReports, action: () => window.location.href = '/fishing-reports' },
    { label: t.activities, action: () => scrollToSection('activities') },
    { label: t.booking, action: () => scrollToSection('booking') },
    { label: t.contact, action: () => scrollToSection('contact') },
  ]

  return (
    <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="nav-logo-container" onClick={() => scrollToSection('hero')}>
          <img
            src="https://storage.googleapis.com/msgsndr/c55gLK8swNL0cpUkhTnc/media/68ac08ce45eaf717c3a9347b.jpeg"
            alt="Unit 750 Calico Rock"
            className="nav-logo-image"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          {navItems.map((item, index) => (
            <li key={index}>
              <button
                className="nav-link"
                onClick={item.action}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  cursor: 'pointer',
                  fontSize: 'inherit',
                  fontFamily: 'inherit'
                }}
              >
                {item.label}
              </button>
            </li>
          ))}
          
          {/* Language Selector */}
          <li>
            <LanguageSelector />
          </li>
          
          {/* Book Now Button */}
          <li>
            <button
              onClick={() => scrollToSection('booking')}
              className="btn btn-ghost"
              style={{
                padding: '0.75rem 1.5rem',
                fontSize: '0.9rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              {t.booking}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--limestone-white)',
            cursor: 'pointer',
            padding: '0.5rem',
          }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100%',
          height: '100vh',
          background: 'rgba(26, 37, 47, 0.98)',
          backdropFilter: 'blur(20px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2rem',
          transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.3s ease-in-out',
          zIndex: 999,
        }}
      >
        {navItems.map((item, index) => (
          <button
            key={index}
            className="mobile-nav-link"
            onClick={item.action}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--limestone-white)',
              fontSize: '1.5rem',
              fontWeight: '300',
              cursor: 'pointer',
              transition: 'color 0.3s ease',
              fontFamily: 'var(--font-primary)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--mist-blue)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--limestone-white)'
            }}
          >
            {item.label}
          </button>
        ))}
        
        {/* Mobile Language Selector */}
        <div style={{ marginTop: '1rem' }}>
          <LanguageSelector />
        </div>
        
        <button
          onClick={() => scrollToSection('booking')}
          className="btn btn-ghost"
          style={{
            marginTop: '2rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          {t.booking}
        </button>
      </div>

    </nav>
  )
}

export default Navigation
import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const FishingTours: React.FC = () => {
  const { t } = useLanguage()
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  const openLightbox = (imageSrc: string) => {
    setLightboxImage(imageSrc)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
  }

  return (
    <section id="fishing-tours" className="section">
      <div className="section-inner">
        <div className="container">
          <h2 className="section-title text-center">{t.guidedFishingTours}</h2>
          <h3 className="limestone-title text-center mb-4">{t.whiteRiverFishingAdventures}</h3>
          <div className="body-large text-center mb-5">
            {t.fishingToursDescription}
          </div>
          
          {/* Fishing Report Section */}
          <div className="fishing-report-section">
            <div className="fishing-report-content">
              <div className="fishing-report-text">
                <h3 className="fishing-report-title">🎣 Daily Fishing Report</h3>
                <p className="fishing-report-date">
                  {new Date().toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
                <p className="fishing-report-description">
                  Get the latest conditions, water levels, and fishing tips for the White River at Calico Rock. 
                  Our expert guides provide daily updates to ensure your fishing success.
                </p>
                <div className="fishing-report-features">
                  <span className="feature-tag">Water Conditions</span>
                  <span className="feature-tag">Fish Activity</span>
                  <span className="feature-tag">Best Times</span>
                  <span className="feature-tag">Local Tips</span>
                </div>
                <button 
                  className="btn btn-primary fishing-report-btn"
                  onClick={() => window.location.href = '/fishing-reports'}
                >
                  View Full Report
                </button>
              </div>
              <div className="fishing-report-animation">
                <DotLottieReact
                  src="https://lottie.host/fe95b33f-3ea5-4db7-8728-0e00a85cc0b4/icVDwkiRFs.lottie"
                  loop
                  autoplay
                />
              </div>
            </div>
          </div>
          
          {/* Widescreen Fish Video Section */}
          <div className="fish-video-container">
            <div className="fish-video-overlay">
              <h3 className="video-title">{t.experienceTheThrill}</h3>
              <p className="video-subtitle">{t.experienceTheThrillDesc}</p>
            </div>
            <video
              src="https://storage.googleapis.com/msgsndr/c55gLK8swNL0cpUkhTnc/media/68ac841b45eaf7b89feb9e75.mp4"
              className="fish-video-image"
              autoPlay
              loop
              muted
              playsInline
              poster="/fish-video.webp"
              aria-label="Rainbow trout swimming in crystal clear White River waters near Calico Rock Arkansas fishing resort"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            <div className="tour-card">
              <div style={{
                width: '100%',
                height: '200px',
                borderRadius: '10px',
                overflow: 'hidden',
                marginBottom: '1.5rem',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
              }}>
                <img
                  src="https://storage.googleapis.com/msgsndr/c55gLK8swNL0cpUkhTnc/media/68abed0e6979a02339cccafb.jpeg"
                  alt="Professional guide with trophy trout caught during half-day Calico Rock fishing tour on White River Arkansas"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer'
                  }}
                  role="img"
                  aria-label="Professional guide with trophy trout caught during half-day Calico Rock fishing tour on White River Arkansas"
                  onClick={() => openLightbox("https://storage.googleapis.com/msgsndr/c55gLK8swNL0cpUkhTnc/media/68abed0e6979a02339cccafb.jpeg")}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
              </div>
              <h4>{t.halfDayFishingTrip}</h4>
              <p className="price">{t.from} $350</p>
              <p>4-6 {t.hoursAllAges} 4 {t.upToPeople}</p>
              <ul className="tour-features">
                <li>{t.professionalGuideIncluded}</li>
                <li>{t.allEquipmentProvided}</li>
                <li>{t.baitAndTackleIncluded}</li>
                <li>{t.perfectForBeginners}</li>
              </ul>
            </div>
            <div className="tour-card">
              <div style={{
                width: '100%',
                height: '200px',
                borderRadius: '10px',
                overflow: 'hidden',
                marginBottom: '1.5rem',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
              }}>
                <img
                  src="https://storage.googleapis.com/msgsndr/c55gLK8swNL0cpUkhTnc/media/68abed0ea7e598e6c9389cf8.jpeg"
                  alt="Happy customers with Jenkins sign showing successful full-day White River trout fishing expedition from Calico Rock fishing resort"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer'
                  }}
                  role="img"
                  aria-label="Successful full-day White River trout fishing expedition from Calico Rock fishing resort with multiple trophy catches"
                  onClick={() => openLightbox("https://storage.googleapis.com/msgsndr/c55gLK8swNL0cpUkhTnc/media/68abed0ea7e598e6c9389cf8.jpeg")}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
              </div>
              <h4>{t.fullDayFishingTrip}</h4>
              <p className="price">{t.from} $550</p>
              <p>7-8 {t.hoursAllAges} 3 {t.upToPeople}</p>
              <ul className="tour-features">
                <li>{t.extendedRiverExploration}</li>
                <li>{t.lunchIncluded}</li>
                <li>{t.multipleFishingSpots}</li>
                <li>{t.photographyOpportunities}</li>
              </ul>
            </div>
          </div>
          
          <div className="booking-info">
            <h4>{t.readyToBookYourAdventure}</h4>
            <p>{t.readyToBookDescription}</p>
            <div className="booking-buttons">
              <a href="#contact" className="btn btn-primary">{t.bookNow}</a>
              <a href="tel:+1-870-656-0851" className="btn btn-secondary">{t.callUs} (870) 656-0851</a>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            cursor: 'pointer'
          }}
          onClick={closeLightbox}
        >
          <div style={{ position: 'relative', maxWidth: '90%', maxHeight: '90%' }}>
            <img
              src={lightboxImage}
              alt="Full size fishing tour image"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain'
              }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={closeLightbox}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'rgba(255, 255, 255, 0.8)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                fontSize: '20px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              aria-label="Close lightbox"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default FishingTours
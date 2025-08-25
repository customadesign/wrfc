import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const RiverViews: React.FC = () => {
  const { t } = useLanguage()
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const riverViewImages = [
    {
      src: 'https://storage.googleapis.com/msgsndr/c55gLK8swNL0cpUkhTnc/media/68a8d305f2837ea84cebbae8.jpeg',
      title: 'White River Vista',
      description: 'Breathtaking view of pristine White River from Calico Rock fishing resort - world-class trout fishing waters'
    },
    {
      src: 'https://storage.googleapis.com/msgsndr/c55gLK8swNL0cpUkhTnc/media/68a8d305f2837e9599ebbae1.jpeg',
      title: 'Riverside Paradise',
      description: 'Private White River access at Calico Rock Arkansas fishing resort with crystal clear trout fishing waters'
    },
    {
      src: 'https://storage.googleapis.com/msgsndr/c55gLK8swNL0cpUkhTnc/media/68a8d30554a626f0a9cbec75.jpeg',
      title: 'River Access',
      description: 'Direct access to world-class White River trout fishing from Calico Rock fishing resort Unit 750'
    },
    {
      src: 'https://storage.googleapis.com/msgsndr/c55gLK8swNL0cpUkhTnc/media/68a8d305d603eaa9891ae8af.jpeg',
      title: 'Peaceful Waters',
      description: 'Tranquil White River setting perfect for Arkansas trout fishing and relaxation near Calico Rock'
    },
    {
      src: 'https://storage.googleapis.com/msgsndr/c55gLK8swNL0cpUkhTnc/media/68a8d30554a626db2ecbec87.jpeg',
      title: 'Natural Beauty',
      description: 'White River surrounded by Arkansas Ozark wilderness - premier trout fishing destination at Calico Rock'
    },
  ]

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % riverViewImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + riverViewImages.length) % riverViewImages.length)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowRight') nextImage()
    if (e.key === 'ArrowLeft') prevImage()
  }

  return (
    <section id="river-views" className="section">
      <div className="cliff-background">
        <div className="cliff-layer"></div>
        <div className="cliff-layer"></div>
      </div>
      
      <div className="section-inner">
        <div className="container">
          <h2 className="section-title text-center">{t.yourRiverView}</h2>
          <h3 className="limestone-title text-center mb-4">{t.stepOutsideToParadise}</h3>
          <div className="body-large text-center mb-5">
            {t.riverViewDescription}
          </div>

          {/* River View Photo Gallery */}
          <div className="river-gallery-section">
            <h4 className="limestone-title text-center mb-4" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)' }}>
              {t.whiteRiverViews}
            </h4>
            <p className="text-center mb-4" style={{ color: 'var(--charcoal)', fontSize: 'clamp(1rem, 2vw, 1.1rem)' }}>
              {t.whiteRiverViewsDesc}
            </p>
            
            <div className="gallery-grid">
              {riverViewImages.map((image, index) => (
                <div
                  key={index}
                  className="gallery-item"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image.src}
                    alt={image.description}
                    loading="lazy"
                    role="img"
                    aria-label={image.description}
                  />
                  <div className="gallery-overlay">
                    <h3>{image.title}</h3>
                    <p className="view-full">{t.clickToViewFullSize}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* River Features */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '4rem' }}>
            <div className="feature-card">
              <h4>{t.worldClassFishing}</h4>
              <p>{t.worldClassFishingDesc}</p>
            </div>
            <div className="feature-card">
              <h4>{t.waterActivities}</h4>
              <p>{t.waterActivitiesDesc}</p>
            </div>
            <div className="feature-card">
              <h4>{t.sunriseViews}</h4>
              <p>{t.sunriseViewsDesc}</p>
            </div>
            <div className="feature-card">
              <h4>{t.wildlifeWatching}</h4>
              <p>{t.wildlifeWatchingDesc}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="lightbox-overlay"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={riverViewImages[currentImageIndex].src}
              alt={riverViewImages[currentImageIndex].description}
              role="img"
              aria-label={riverViewImages[currentImageIndex].description}
            />
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            <button className="lightbox-prev" onClick={prevImage}>‹</button>
            <button className="lightbox-next" onClick={nextImage}>›</button>
            <div className="lightbox-caption">
              <h3>{riverViewImages[currentImageIndex].title}</h3>
              <p>{riverViewImages[currentImageIndex].description}</p>
              <p style={{ opacity: 0.6, fontSize: '0.8rem', marginTop: '0.5rem' }}>
                {currentImageIndex + 1} of {riverViewImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default RiverViews
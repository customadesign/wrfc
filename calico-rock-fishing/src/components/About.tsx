import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const About: React.FC = () => {
  const { t } = useLanguage()
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const interiorImages = [
    {
      src: 'https://storage.googleapis.com/msgsndr/c55gLK8swNL0cpUkhTnc/media/68a8d3059c19c01a4ff51752.jpeg',
      title: 'Living Area',
      description: 'Cozy living space with rustic charm at Calico Rock fishing resort Unit 750'
    },
    {
      src: 'https://storage.googleapis.com/msgsndr/c55gLK8swNL0cpUkhTnc/media/68a8d306bc73b06e2c5d5fa4.jpeg',
      title: 'Hallway',
      description: 'Wood-paneled hallway with rustic Arkansas charm at White River fishing lodge'
    },
    {
      src: 'https://storage.googleapis.com/msgsndr/c55gLK8swNL0cpUkhTnc/media/68a8d3056c08923eacd0b998.jpeg',
      title: 'Bedroom',
      description: 'Comfortable sleeping quarters at Calico Rock fishing resort after day of trout fishing'
    },
    {
      src: 'https://storage.googleapis.com/msgsndr/c55gLK8swNL0cpUkhTnc/media/68a8d305d603eac4bb1ae8c0.jpeg',
      title: 'Bedroom',
      description: 'Twin bedroom with comfortable beds at Arkansas White River fishing accommodation'
    },
    {
      src: 'https://storage.googleapis.com/msgsndr/c55gLK8swNL0cpUkhTnc/media/68a8d3059c19c0437ef51760.jpeg',
      title: 'Bedroom',
      description: 'Quality furnished bedroom at Calico Rock fishing resort Unit 750 near White River'
    },
    {
      src: 'https://storage.googleapis.com/msgsndr/c55gLK8swNL0cpUkhTnc/media/68a8d3055f2e6ee4109ef92b.jpeg',
      title: 'Washroom',
      description: 'Clean washroom facilities at Arkansas fishing lodge with modern amenities'
    },
    {
      src: 'https://storage.googleapis.com/msgsndr/c55gLK8swNL0cpUkhTnc/media/68a8d305bc73b043cd5d5f5e.jpeg',
      title: 'Kitchen & Living Room',
      description: 'Open kitchen and living area with rustic charm at Calico Rock fishing resort'
    },
    {
      src: 'https://storage.googleapis.com/msgsndr/c55gLK8swNL0cpUkhTnc/media/68a8d306bc73b02a515d5fa3.jpeg',
      title: 'Bathroom',
      description: 'Modern bathroom facilities at White River fishing accommodation in Arkansas'
    },
    {
      src: 'https://storage.googleapis.com/msgsndr/c55gLK8swNL0cpUkhTnc/media/68a8d305d603ea255d1ae8b0.jpeg',
      title: 'Bedroom Details',
      description: 'Cozy bedroom with quality furnishings'
    },
    {
      src: 'https://storage.googleapis.com/msgsndr/c55gLK8swNL0cpUkhTnc/media/68a8d305b199f35003f83a4f.jpeg',
      title: 'Living Space',
      description: 'Open living area perfect for relaxation'
    },
    {
      src: 'https://storage.googleapis.com/msgsndr/c55gLK8swNL0cpUkhTnc/media/68a8d305b199f37e1ef83a4d.jpeg',
      title: 'Interior View',
      description: 'Authentic Arkansas interior design'
    },
    {
      src: 'https://storage.googleapis.com/msgsndr/c55gLK8swNL0cpUkhTnc/media/68a8d3051614bd5045b61381.jpeg',
      title: 'Room Details',
      description: 'Thoughtful details throughout the space'
    },
    {
      src: 'https://storage.googleapis.com/msgsndr/c55gLK8swNL0cpUkhTnc/media/68a8d3059c19c05123f5175f.jpeg',
      title: 'Comfortable Seating',
      description: 'Relax in comfort after a day on the river'
    },
    {
      src: 'https://storage.googleapis.com/msgsndr/c55gLK8swNL0cpUkhTnc/media/68a8d30554a6263fbdcbec76.jpeg',
      title: 'Interior Craftsmanship',
      description: 'Quality woodwork and attention to detail'
    },
    {
      src: 'https://storage.googleapis.com/msgsndr/c55gLK8swNL0cpUkhTnc/media/68a8d30554a6262748cbec88.jpeg',
      title: 'Living Area View',
      description: 'Spacious and welcoming interior'
    },
    {
      src: 'https://storage.googleapis.com/msgsndr/c55gLK8swNL0cpUkhTnc/media/68a8d3051614bd72fbb6137a.jpeg',
      title: 'Room Features',
      description: 'Modern amenities in rustic setting'
    },
    {
      src: 'https://storage.googleapis.com/msgsndr/c55gLK8swNL0cpUkhTnc/media/68a8d305d603ea1b5a1ae8bf.jpeg',
      title: 'Bedroom Comfort',
      description: 'Peaceful sleeping environment'
    },
    {
      src: 'https://storage.googleapis.com/msgsndr/c55gLK8swNL0cpUkhTnc/media/68a8d305b199f34d4ef83a4c.jpeg',
      title: 'Interior Design',
      description: 'Rustic luxury at its finest'
    },
    {
      src: 'https://storage.googleapis.com/msgsndr/c55gLK8swNL0cpUkhTnc/media/68a8d305a3d4d3d282e81b4c.jpeg',
      title: 'Living Space Details',
      description: 'Every detail crafted for comfort'
    },
    {
      src: 'https://storage.googleapis.com/msgsndr/c55gLK8swNL0cpUkhTnc/media/68a8d305f2837e3661ebbadf.jpeg',
      title: 'Interior Ambiance',
      description: 'Warm and inviting atmosphere'
    }
  ]

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % interiorImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + interiorImages.length) % interiorImages.length)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowRight') nextImage()
    if (e.key === 'ArrowLeft') prevImage()
  }

  return (
    <section id="about" className="section">
      <div className="cliff-background">
        <div className="cliff-layer"></div>
        <div className="cliff-layer"></div>
      </div>
      
      <div className="section-inner">
        <div className="container">
          <h2 className="section-title text-center animate-fade-in-up">
            {t.authenticArkansas}
          </h2>
          <h3 className="limestone-title text-center mb-4">
            {t.handcraftedRusticLuxury}
          </h3>
          
          <div className="body-large text-center mb-5">
            {t.aboutDescription}
          </div>

          {/* Interior Photo Gallery */}
          <div className="interior-gallery-section">
            <h4 className="limestone-title text-center mb-4" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)' }}>
              {t.insideUnit750}
            </h4>
            <p className="text-center mb-4" style={{ color: 'var(--charcoal)', fontSize: 'clamp(1rem, 2vw, 1.1rem)' }}>
              {t.insideDescription}
            </p>
            
            <div className="gallery-grid">
              {interiorImages.slice(0, 8).map((image, index) => (
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
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '4rem' }}>
            <div className="feature-card">
              <h4>🪵 {t.woodCraftsmanship}</h4>
              <p>{t.woodCraftsmanshipDesc}</p>
            </div>
            <div className="feature-card">
              <h4>🌊 {t.riverAccess}</h4>
              <p>{t.riverAccessDesc}</p>
            </div>
            <div className="feature-card">
              <h4>🏠 {t.modernComfort}</h4>
              <p>{t.modernComfortDesc}</p>
            </div>
            <div className="feature-card">
              <h4>🌲 {t.peacefulSetting}</h4>
              <p>{t.peacefulSettingDesc}</p>
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
              src={interiorImages[currentImageIndex].src}
              alt={interiorImages[currentImageIndex].description}
              role="img"
              aria-label={interiorImages[currentImageIndex].description}
            />
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            <button className="lightbox-prev" onClick={prevImage}>‹</button>
            <button className="lightbox-next" onClick={nextImage}>›</button>
            <div className="lightbox-caption">
              <h3>{interiorImages[currentImageIndex].title}</h3>
              <p>{interiorImages[currentImageIndex].description}</p>
              <p style={{ opacity: 0.6, fontSize: '0.8rem', marginTop: '0.5rem' }}>
                {currentImageIndex + 1} of {interiorImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default About
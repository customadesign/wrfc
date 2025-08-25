import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const PropertyGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { t } = useLanguage();

  const galleryImages = [
    {
      src: '/gallery/cabin-exterior-1.jpeg',
      alt: 'Unit 750 Cabin Exterior',
      title: 'Rustic Cabin Architecture'
    },
    {
      src: '/gallery/cabin-exterior-2.jpeg',
      alt: 'Unit 750 Property View',
      title: 'Beautiful Property Setting'
    },
    {
      src: '/gallery/cabin-exterior-3.jpeg',
      alt: 'Unit 750 Outdoor Area',
      title: 'Charming Outdoor Spaces'
    },
    {
      src: '/gallery/cabin-exterior-4.jpeg',
      alt: 'Unit 750 Cabin Front',
      title: 'Welcoming Cabin Entrance'
    },
    {
      src: '/gallery/cabin-exterior-5.jpeg',
      alt: 'Unit 750 Grounds',
      title: 'Peaceful Property Grounds'
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="property-gallery">
      <div className="container">
        <div className="section-header">
          <h2>{t.propertyGalleryTitle}</h2>
          <p>{t.propertyGallerySubtitle}</p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="gallery-item"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                loading="lazy"
              />
              <div className="gallery-overlay">
                <h3>{image.title}</h3>
                <span className="view-full">View Full Size</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="lightbox-overlay" onClick={closeLightbox}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-close" onClick={closeLightbox}>
                ×
              </button>
              <button className="lightbox-prev" onClick={prevImage}>
                ‹
              </button>
              <img 
                src={galleryImages[selectedImage].src} 
                alt={galleryImages[selectedImage].alt}
              />
              <button className="lightbox-next" onClick={nextImage}>
                ›
              </button>
              <div className="lightbox-caption">
                <h3>{galleryImages[selectedImage].title}</h3>
                <p>{selectedImage + 1} of {galleryImages.length}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertyGallery;
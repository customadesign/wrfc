import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const Contact: React.FC = () => {
  const { t } = useLanguage()
  
  return (
    <section id="contact" className="section">
      <div className="section-inner">
        <div className="container">
          <h2 className="section-title text-center">{t.contactTitle}</h2>
          <h3 className="limestone-title text-center mb-4">{t.yourArkansasEscape}</h3>
          <div className="body-large text-center mb-5">
            {t.contactDescription}
          </div>
          
          <div className="text-center">
            <div style={{ marginBottom: '3rem' }}>
              <h4 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2.5rem',
                color: 'var(--river-blue)',
                marginBottom: '1.5rem',
                fontWeight: 'bold'
              }}>
                {t.callUsTitle}
              </h4>
              <a
                href="tel:+1-870-656-0851"
                style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  color: 'var(--river-blue)',
                  textDecoration: 'none',
                  display: 'block',
                  marginBottom: '1rem'
                }}
              >
                (870) 656-0851
              </a>
              <p style={{
                color: 'var(--charcoal)',
                fontSize: '1.2rem',
                margin: 0
              }}>
                {t.callUsDescription}
              </p>
            </div>
            
            <a
              href="https://www.airbnb.com/rooms/24137137?photo_id=1231840799&source_impression_id=p3_1755455096_P3Ruo8hnVULuZNfa&previous_page_section_name=1000"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {t.bookNowOnAirbnb}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
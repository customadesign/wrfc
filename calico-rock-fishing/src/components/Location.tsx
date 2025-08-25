import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { useLanguage } from '../contexts/LanguageContext'

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

const Location: React.FC = () => {
  const { t } = useLanguage()
  const address = "750 White River Lndg, Calico Rock, AR 72519"
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`
  
  // Coordinates for Calico Rock, AR (approximate location)
  const position: [number, number] = [36.1234, -92.1387] // Calico Rock coordinates

  return (
    <section id="location" className="section">
      <div className="cliff-background">
        <div className="cliff-layer"></div>
        <div className="cliff-layer"></div>
      </div>
      
      <div className="section-inner">
        <div className="container">
          <h2 className="section-title text-center">{t.primeLocation}</h2>
          <h3 className="limestone-title text-center mb-4">{t.perfectLocation}</h3>
          <div className="body-large text-center mb-5">
            {t.locationDescription}
          </div>

          {/* Location Image */}
          <div className="location-image-section">
            <div className="location-image-container">
              <img
                src="https://storage.googleapis.com/msgsndr/c55gLK8swNL0cpUkhTnc/media/68a8db1bbc73b0061a5ee8c4.jpeg"
                alt="White River Landing at Calico Rock Arkansas - premier fishing resort location with direct river access for trout fishing"
                className="location-image"
                loading="lazy"
                role="img"
                aria-label="White River Landing at Calico Rock Arkansas - premier fishing resort location with direct river access for trout fishing"
              />
              <div className="location-image-overlay">
                <h4>{t.whiteRiverLanding}</h4>
                <p>{t.whiteRiverLandingDesc}</p>
              </div>
            </div>
          </div>

          {/* Address and Map Section */}
          <div className="location-content">
            <div className="location-info">
              <div className="address-card">
                <h4>{t.ourAddress}</h4>
                <p className="address-text">{address}</p>
                
                {/* Address Features */}
                <div style={{ margin: '1.5rem 0', textAlign: 'left' }}>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--charcoal)', fontWeight: '500' }}>
                      <span>🚗</span> {t.easyAccess}
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--charcoal)', fontWeight: '500' }}>
                      <span>🏞️</span> {t.scenicDrive}
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--charcoal)', fontWeight: '500' }}>
                      <span>🎣</span> {t.primeFishing}
                    </li>
                  </ul>
                </div>
                
                <div className="location-buttons">
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    {t.getDirections}
                  </a>
                  <a
                    href={`tel:+1-870-656-0851`}
                    className="btn btn-limestone"
                  >
                    {t.callUs}
                  </a>
                </div>
              </div>

            </div>

            <div className="map-container">
              <MapContainer
                center={position}
                zoom={13}
                style={{ height: '400px', width: '100%', borderRadius: '15px' }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                  <Popup>
                    <div style={{ textAlign: 'center' }}>
                      <strong>Unit 750 - Calico Rock Fishing Resort</strong>
                      <br />
                      {address}
                      <br />
                      <a
                        href={directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#4a6fa5', textDecoration: 'none' }}
                      >
                        {t.getDirections} →
                      </a>
                    </div>
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>

          {/* TikTok Videos Section */}
          <div style={{ margin: '5rem 0' }}>
            <h4 className="limestone-title text-center mb-4" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)' }}>
              {t.experienceUnit750}
            </h4>
            <p className="text-center mb-4" style={{ color: 'var(--charcoal)', fontSize: 'clamp(1rem, 2vw, 1.1rem)' }}>
              {t.experienceUnit750Desc}
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              marginTop: '3rem'
            }}>
              <div style={{
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                background: 'linear-gradient(135deg, var(--limestone-white) 0%, var(--limestone-cream) 100%)',
                border: '1px solid var(--limestone-gray)'
              }}>
                <video
                  controls
                  style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                  poster=""
                >
                  <source src="https://storage.googleapis.com/msgsndr/c55gLK8swNL0cpUkhTnc/media/68abe851a7e598b50237c381.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              <div style={{
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                background: 'linear-gradient(135deg, var(--limestone-white) 0%, var(--limestone-cream) 100%)',
                border: '1px solid var(--limestone-gray)'
              }}>
                <video
                  controls
                  style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                  poster=""
                >
                  <source src="https://storage.googleapis.com/msgsndr/c55gLK8swNL0cpUkhTnc/media/68abe8519bcb7b61f933cb9c.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              <div style={{
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                background: 'linear-gradient(135deg, var(--limestone-white) 0%, var(--limestone-cream) 100%)',
                border: '1px solid var(--limestone-gray)'
              }}>
                <video
                  controls
                  style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                  poster=""
                >
                  <source src="https://storage.googleapis.com/msgsndr/c55gLK8swNL0cpUkhTnc/media/68abe8516979a0231ccbfe0b.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              <div style={{
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                background: 'linear-gradient(135deg, var(--limestone-white) 0%, var(--limestone-cream) 100%)',
                border: '1px solid var(--limestone-gray)'
              }}>
                <video
                  controls
                  style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                  poster=""
                >
                  <source src="https://storage.googleapis.com/msgsndr/c55gLK8swNL0cpUkhTnc/media/68abe8519bcb7b61c033cb98.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          {/* Nearby Attractions */}
          <div className="nearby-attractions">
            <h4 className="limestone-title text-center mb-4">{t.nearbyAttractions}</h4>
            <div className="attractions-grid">
              <div className="attraction-card">
                <h5>{t.calicoRockMuseum}</h5>
                <p>{t.calicoRockMuseumDesc}</p>
                <span className="distance">5 {t.minutesAway}</span>
              </div>
              <div className="attraction-card">
                <h5>{t.downtownCalicoRock}</h5>
                <p>{t.downtownCalicoRockDesc}</p>
                <span className="distance">10 {t.minutesAway}</span>
              </div>
              <div className="attraction-card">
                <h5>{t.ozarkNationalForest}</h5>
                <p>{t.ozarkNationalForestDesc}</p>
                <span className="distance">15 {t.minutesAway}</span>
              </div>
              <div className="attraction-card">
                <h5>{t.blanchardSprings}</h5>
                <p>{t.blanchardSpringsDesc}</p>
                <span className="distance">30 {t.minutesAway}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location
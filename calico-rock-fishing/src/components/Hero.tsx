import React, { Suspense, useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, OrbitControls, Environment, Float } from '@react-three/drei'
import { Star } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import * as THREE from 'three'

// Rainbow Trout 3D Model Component
function RainbowTrout() {
  const { scene } = useGLTF('/src/assets/Rainbow_trout_3D_0822202035_texture.glb')
  const troutRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (troutRef.current) {
      const time = state.clock.elapsedTime
      const speed = 0.3 // Controls how fast the fish completes the circuit
      
      // Create a circular path that goes from left to right and back around
      const progress = (time * speed) % (Math.PI * 2) // Complete circuit every ~21 seconds
      
      // Position fish at water level (where the water ripples are)
      const centerX = 0
      const centerY = -3.2 // Position fish at the water surface level
      
      // Create an elliptical path that's wider horizontally
      const ellipseWidth = 8  // How wide the swimming area is
      const ellipseHeight = 1.5 // How tall the swimming area is (reduced to keep fish in water)
      
      troutRef.current.position.x = centerX + Math.cos(progress) * ellipseWidth
      troutRef.current.position.y = centerY + Math.sin(progress) * ellipseHeight
      
      // Calculate swimming direction for realistic fish orientation
      const nextProgress = progress + 0.1
      const nextX = centerX + Math.cos(nextProgress) * ellipseWidth
      const nextY = centerY + Math.sin(nextProgress) * ellipseHeight
      
      const deltaX = nextX - troutRef.current.position.x
      const deltaY = nextY - troutRef.current.position.y
      
      // Fish faces the direction it's swimming
      troutRef.current.rotation.y = Math.atan2(deltaX, deltaY) + Math.PI / 2
      
      // Add natural swimming body movement
      troutRef.current.rotation.z = Math.sin(time * 2) * 0.1
      troutRef.current.rotation.x = Math.sin(time * 1.5) * 0.05
      
      // Subtle up and down movement for more natural swimming
      troutRef.current.position.y += Math.sin(time * 1.8) * 0.2
    }
  })

  return (
    <Float speed={0.8} rotationIntensity={0.1} floatIntensity={0.3}>
      <primitive
        ref={troutRef}
        object={scene}
        scale={[1.5, 1.5, 1.5]}
        position={[0, -2, 0]}
        rotation={[0, 0, 0]}
      />
    </Float>
  )
}

// Water ripple effect component
function WaterRipples() {
  const rippleRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (rippleRef.current) {
      const material = rippleRef.current.material as THREE.ShaderMaterial
      if (material.uniforms) {
        material.uniforms.time.value = state.clock.elapsedTime
      }
    }
  })

  const waterMaterial = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      color: { value: new THREE.Color('#4a6fa5') }
    },
    vertexShader: `
      uniform float time;
      varying vec2 vUv;
      varying vec3 vPosition;
      
      void main() {
        vUv = uv;
        vPosition = position;
        
        vec3 pos = position;
        pos.z += sin(pos.x * 4.0 + time) * 0.1;
        pos.z += sin(pos.y * 3.0 + time * 1.5) * 0.05;
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `,
    fragmentShader: `
      uniform float time;
      uniform vec3 color;
      varying vec2 vUv;
      varying vec3 vPosition;
      
      void main() {
        float ripple = sin(length(vUv - 0.5) * 20.0 - time * 3.0) * 0.5 + 0.5;
        vec3 finalColor = mix(color, vec3(0.7, 0.9, 1.0), ripple * 0.3);
        gl_FragColor = vec4(finalColor, 0.8);
      }
    `,
    transparent: true,
  })

  return (
    <mesh ref={rippleRef} position={[0, -3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[20, 20, 32, 32]} />
      <primitive object={waterMaterial} />
    </mesh>
  )
}

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0)
  const [reviewFade, setReviewFade] = useState(true)
  const { t } = useLanguage()

  // Google Reviews data
  const googleReviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Absolutely stunning property! The fishing was incredible and the cabin exceeded our expectations. Can't wait to return!",
      date: "2 weeks ago"
    },
    {
      name: "Mike Thompson",
      rating: 5,
      text: "Best trout fishing experience in Arkansas. The White River location is perfect and Unit 750 is a gem!",
      date: "1 month ago"
    },
    {
      name: "Emily Davis",
      rating: 5,
      text: "The perfect getaway! Beautiful views, amazing fishing, and the cabin had everything we needed. Highly recommend!",
      date: "3 weeks ago"
    },
    {
      name: "Robert Chen",
      rating: 5,
      text: "Unit 750 is paradise for fishing enthusiasts. Caught my personal best trout here. The accommodations are top-notch!",
      date: "1 month ago"
    },
    {
      name: "Lisa Martinez",
      rating: 5,
      text: "Incredible experience! The limestone cliffs are breathtaking and the fishing is world-class. Will definitely be back!",
      date: "2 months ago"
    }
  ]

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setReviewFade(false)
      setTimeout(() => {
        setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % googleReviews.length)
        setReviewFade(true)
      }, 500) // Half second for fade out before changing
    }, 10000) // Change every 10 seconds

    return () => clearInterval(interval)
  }, [])

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero-section">
      {/* Real limestone cliff background image */}
      <div className="limestone-cliff-bg">
        <img
          src="/limestone-cliffs.png"
          alt="Calico Rock Arkansas limestone cliffs overlooking White River - premier trout fishing destination"
          className="cliff-image"
          role="img"
          aria-label="Calico Rock Arkansas limestone cliffs overlooking White River - premier trout fishing destination"
        />
        <div className="cliff-overlay"></div>
      </div>
      
      {/* Animated limestone cliff layers for depth */}
      <div className="cliff-background">
        <div className="cliff-layer"></div>
        <div className="cliff-layer"></div>
        <div className="cliff-layer"></div>
      </div>
      
      {/* River flow animation */}
      <div className="river-flow"></div>

      {/* Three.js Canvas for 3D elements */}
      <div className="canvas-container">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 50 }}
          style={{ background: 'transparent' }}
        >
          <Suspense fallback={null}>
            {/* Lighting */}
            <ambientLight intensity={0.6} />
            <directionalLight 
              position={[10, 10, 5]} 
              intensity={1} 
              color="#ffffff"
              castShadow
            />
            <pointLight position={[-10, -10, -10]} intensity={0.3} color="#4a6fa5" />
            
            {/* Environment for reflections */}
            <Environment preset="sunset" />
            
            {/* 3D Rainbow Trout */}
            <RainbowTrout />
            
            {/* Water ripples */}
            <WaterRipples />
            
            {/* Camera controls */}
            <OrbitControls 
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.5}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 3}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Hero content overlay */}
      <div className="canvas-overlay">
        <div className="container">
          <div className={`hero-content ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h1 className="hero-title">
              {t.heroTitle}
            </h1>
            
            <div className="hero-subtitle">
              <span className="hero-golden-title">{t.heroSubtitle}</span>
            </div>
            
            {/* Google Reviews Rotation */}
            <div className={`google-reviews-container ${reviewFade ? 'fade-in' : 'fade-out'}`}>
              <div className="google-review">
                <div className="review-header">
                  <img 
                    src={`https://ui-avatars.com/api/?name=${googleReviews[currentReviewIndex].name}&background=4285F4&color=fff&rounded=true&size=40`}
                    alt={googleReviews[currentReviewIndex].name}
                    className="review-avatar"
                  />
                  <div className="review-meta">
                    <h4 className="review-name">{googleReviews[currentReviewIndex].name}</h4>
                    <div className="review-rating">
                      {[...Array(googleReviews[currentReviewIndex].rating)].map((_, i) => (
                        <Star key={i} className="star-icon" fill="#FFC107" color="#FFC107" size={16} />
                      ))}
                      <span className="review-date">{googleReviews[currentReviewIndex].date}</span>
                    </div>
                  </div>
                  <img 
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_74x24dp.png"
                    alt="Google"
                    className="google-logo"
                  />
                </div>
                <p className="review-text">"{googleReviews[currentReviewIndex].text}"</p>
              </div>
            </div>

            <div className="hero-buttons">
              <a
                href="https://www.airbnb.com/rooms/24137137?photo_id=1231840799&source_impression_id=p3_1755455096_P3Ruo8hnVULuZNfa&previous_page_section_name=1000"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary animate-river-shimmer"
              >
                {t.bookOnAirbnb}
              </a>
              
              <button
                onClick={scrollToNext}
                className="btn btn-ghost"
              >
                {t.virtualTour}
              </button>
            </div>

            {/* Scroll indicator */}
            <div className="scroll-indicator" onClick={scrollToNext}>
              <span>{t.exploreArkansas}</span>
              <div className="scroll-arrow"></div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero
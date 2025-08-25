import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

const TermsOfService: React.FC = () => {
  const { t } = useLanguage()

  return (
    <div className="legal-page">
      <div className="legal-header">
        <div className="legal-container">
          <Link to="/" className="back-link">
            ← Back to Home
          </Link>
          <h1 className="legal-title">Terms of Service</h1>
          <p className="legal-subtitle">Unit 750 Calico Rock - Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
      
      <div className="legal-content">
        <div className="legal-container">
          <section className="legal-section">
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using Unit 750 Calico Rock's services, website, and property, you accept and agree to be bound by the terms and provision of this agreement.</p>
          </section>

          <section className="legal-section">
            <h2>2. Property Description</h2>
            <p>Unit 750 Calico Rock is a vacation rental property located in Calico Rock, Arkansas, offering access to the White River for fishing and recreational activities. The property includes accommodations, amenities, and access to fishing areas.</p>
          </section>

          <section className="legal-section">
            <h2>3. Booking and Reservations</h2>
            <ul>
              <li>All bookings must be made through authorized platforms (Airbnb, direct booking, etc.)</li>
              <li>Reservations are confirmed upon receipt of full payment</li>
              <li>Guests must be at least 21 years old to make a reservation</li>
              <li>Maximum occupancy limits must be strictly adhered to</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Check-in and Check-out</h2>
            <ul>
              <li>Check-in time: 3:00 PM</li>
              <li>Check-out time: 11:00 AM</li>
              <li>Early check-in or late check-out may be available upon request</li>
              <li>Guests must return keys and leave the property in the same condition as found</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. House Rules and Conduct</h2>
            <ul>
              <li>No smoking inside the property</li>
              <li>No pets allowed without prior approval</li>
              <li>Quiet hours from 10:00 PM to 7:00 AM</li>
              <li>No parties or large gatherings without permission</li>
              <li>Respect for neighbors and the surrounding environment</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>6. Fishing and Recreational Activities</h2>
            <ul>
              <li>Fishing activities are at your own risk</li>
              <li>All guests must comply with Arkansas fishing regulations</li>
              <li>Fishing licenses are required and not provided</li>
              <li>Equipment damage due to misuse may result in additional charges</li>
              <li>Guests are responsible for their own safety during outdoor activities</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>7. Property Damage and Liability</h2>
            <ul>
              <li>Guests are responsible for any damage to the property</li>
              <li>Security deposits may be required and held until after check-out</li>
              <li>Unit 750 Calico Rock is not liable for personal injury or property loss</li>
              <li>Guests should secure personal belongings and lock doors when away</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>8. Cancellation Policy</h2>
            <ul>
              <li>Cancellations made 30+ days before arrival: Full refund</li>
              <li>Cancellations made 14-29 days before arrival: 50% refund</li>
              <li>Cancellations made less than 14 days before arrival: No refund</li>
              <li>Force majeure events may result in full refunds</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>9. Privacy and Data Protection</h2>
            <p>We collect and process personal information in accordance with our Privacy Policy. By using our services, you consent to such processing.</p>
          </section>

          <section className="legal-section">
            <h2>10. Limitation of Liability</h2>
            <p>Unit 750 Calico Rock's liability is limited to the amount paid for the reservation. We are not liable for indirect, incidental, or consequential damages.</p>
          </section>

          <section className="legal-section">
            <h2>11. Governing Law</h2>
            <p>These terms are governed by the laws of the State of Arkansas. Any disputes will be resolved in the courts of Izard County, Arkansas.</p>
          </section>

          <section className="legal-section">
            <h2>12. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of any changes.</p>
          </section>

          <section className="legal-section">
            <h2>13. Contact Information</h2>
            <p>For questions about these terms, please contact us at:</p>
            <ul>
              <li>Email: dan@whiteriverfishingcabins.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: Calico Rock, Arkansas</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

export default TermsOfService

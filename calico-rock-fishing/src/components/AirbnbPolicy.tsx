import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

const AirbnbPolicy: React.FC = () => {
  const { t } = useLanguage()

  return (
    <div className="legal-page">
      <div className="legal-header">
        <div className="legal-container">
          <Link to="/" className="back-link">
            ← Back to Home
          </Link>
          <h1 className="legal-title">Airbnb Policy</h1>
          <p className="legal-subtitle">Unit 750 Calico Rock - Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
      
      <div className="legal-content">
        <div className="legal-container">
          <section className="legal-section">
            <h2>1. Airbnb Booking Platform</h2>
            <p>Unit 750 Calico Rock is available for booking through Airbnb. This policy outlines the specific terms and conditions that apply to Airbnb reservations, in addition to our general Terms of Service.</p>
          </section>

          <section className="legal-section">
            <h2>2. Booking Process</h2>
            <ul>
              <li>All Airbnb bookings are processed through Airbnb's secure platform</li>
              <li>Reservations are confirmed upon Airbnb's confirmation</li>
              <li>Payment is processed through Airbnb's payment system</li>
              <li>Airbnb's cancellation and refund policies apply</li>
              <li>Guest verification is handled by Airbnb</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Airbnb Host Standards</h2>
            <p>As your Airbnb host, we commit to:</p>
            <ul>
              <li>Maintain high cleanliness standards</li>
              <li>Provide accurate property descriptions and photos</li>
              <li>Respond to messages within 2 hours</li>
              <li>Ensure all amenities are in working order</li>
              <li>Provide clear check-in instructions</li>
              <li>Be available for support during your stay</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Check-in and Check-out</h2>
            <h3>Check-in (3:00 PM)</h3>
            <ul>
              <li>Self-check-in with keypad access</li>
              <li>Detailed instructions sent 24 hours before arrival</li>
              <li>Early check-in available upon request (subject to availability)</li>
              <li>Welcome packet with property information</li>
            </ul>
            
            <h3>Check-out (11:00 AM)</h3>
            <ul>
              <li>Self-check-out process</li>
              <li>Keys automatically deactivated at check-out time</li>
              <li>Late check-out available upon request (subject to availability)</li>
              <li>Please leave property in the same condition as found</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. House Rules for Airbnb Guests</h2>
            <ul>
              <li><strong>No Smoking:</strong> Smoking is strictly prohibited inside the property</li>
              <li><strong>No Parties:</strong> Quiet, respectful behavior expected</li>
              <li><strong>Pet Policy:</strong> No pets allowed without prior approval</li>
              <li><strong>Quiet Hours:</strong> 10:00 PM to 7:00 AM</li>
              <li><strong>Maximum Occupancy:</strong> Strictly enforced for safety</li>
              <li><strong>Parking:</strong> Designated parking area only</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>6. Fishing and Recreational Activities</h2>
            <p>As an Airbnb guest, you have access to:</p>
            <ul>
              <li>Private fishing access to the White River</li>
              <li>Fishing equipment storage area</li>
              <li>Outdoor seating and river viewing areas</li>
              <li>Local fishing guide recommendations</li>
              <li>Fishing report updates during your stay</li>
            </ul>
            <p><strong>Important:</strong> All fishing activities are at your own risk. Arkansas fishing licenses are required and not provided.</p>
          </section>

          <section className="legal-section">
            <h2>7. Amenities and Services</h2>
            <h3>Included in Your Stay</h3>
            <ul>
              <li>Fully equipped kitchen with appliances</li>
              <li>Linens, towels, and basic toiletries</li>
              <li>Wi-Fi and streaming services</li>
              <li>Air conditioning and heating</li>
              <li>Outdoor grill and seating</li>
              <li>Parking for up to 2 vehicles</li>
            </ul>
            
            <h3>Additional Services Available</h3>
            <ul>
              <li>Fishing guide bookings (additional cost)</li>
              <li>Airport transfers (additional cost)</li>
              <li>Grocery delivery service (additional cost)</li>
              <li>Laundry service (additional cost)</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>8. Cancellation and Refund Policy</h2>
            <p>We follow Airbnb's standard cancellation policy:</p>
            <ul>
              <li><strong>Flexible:</strong> Full refund if canceled at least 1 day before check-in</li>
              <li><strong>Moderate:</strong> Full refund if canceled at least 5 days before check-in</li>
              <li><strong>Strict:</strong> Full refund if canceled at least 7 days before check-in</li>
              <li><strong>Long-term:</strong> First month non-refundable, 30 days notice for remaining time</li>
            </ul>
            <p>Force majeure events may result in full refunds regardless of policy.</p>
          </section>

          <section className="legal-section">
            <h2>9. Security Deposit</h2>
            <ul>
              <li>Security deposit may be required by Airbnb</li>
              <li>Deposit is held by Airbnb, not by us</li>
              <li>Returned within 14 days after check-out</li>
              <li>Deductions only for damage or rule violations</li>
              <li>Photos and documentation required for any claims</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>10. Communication and Support</h2>
            <ul>
              <li>Primary communication through Airbnb messaging</li>
              <li>Emergency contact number provided upon check-in</li>
              <li>24/7 support for urgent issues</li>
              <li>Local recommendations and tips available</li>
              <li>Feedback and reviews encouraged</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>11. Local Information</h2>
            <p>As your local host, we provide:</p>
            <ul>
              <li>Restaurant and dining recommendations</li>
              <li>Local attraction information</li>
              <li>Weather updates and fishing conditions</li>
              <li>Emergency services information</li>
              <li>Transportation options</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>12. Dispute Resolution</h2>
            <p>In case of disputes:</p>
            <ul>
              <li>First, contact us directly to resolve issues</li>
              <li>If unresolved, use Airbnb's resolution center</li>
              <li>Airbnb's terms of service apply to all bookings</li>
              <li>Local laws and regulations must be followed</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>13. Contact Information</h2>
            <p>For Airbnb-specific questions or support:</p>
            <ul>
              <li>Airbnb Host: Unit 750 Calico Rock</li>
              <li>Email: dan@whiteriverfishingcabins.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Emergency: Available 24/7 during your stay</li>
              <li>Airbnb Support: Available through Airbnb platform</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>14. Updates to Policy</h2>
            <p>This Airbnb policy may be updated periodically. Changes will be communicated through:</p>
            <ul>
              <li>Airbnb listing updates</li>
              <li>Direct communication with confirmed guests</li>
              <li>Website policy updates</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

export default AirbnbPolicy

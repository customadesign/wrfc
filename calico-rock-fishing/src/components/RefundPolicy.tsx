import React from 'react'
import { Link } from 'react-router-dom'

const RefundPolicy: React.FC = () => {

  return (
    <div className="legal-page">
      <div className="legal-header">
        <div className="legal-container">
          <Link to="/" className="back-link">
            ← Back to Home
          </Link>
          <h1 className="legal-title">Refund Policy</h1>
          <p className="legal-subtitle">Unit 750 Calico Rock - Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
      
      <div className="legal-content">
        <div className="legal-container">
          <section className="legal-section">
            <h2>1. Overview</h2>
            <p>This refund policy outlines the terms and conditions for refunds at Unit 750 Calico Rock. Our goal is to provide fair and transparent refund policies while ensuring the sustainability of our business operations.</p>
          </section>

          <section className="legal-section">
            <h2>2. Standard Cancellation and Refund Policy</h2>
            <h3>Direct Bookings</h3>
            <ul>
              <li><strong>30+ days before arrival:</strong> 100% refund</li>
              <li><strong>14-29 days before arrival:</strong> 50% refund</li>
              <li><strong>7-13 days before arrival:</strong> 25% refund</li>
              <li><strong>Less than 7 days before arrival:</strong> No refund</li>
            </ul>
            
            <h3>Airbnb Bookings</h3>
            <p>Airbnb bookings follow Airbnb's standard cancellation policies:</p>
            <ul>
              <li><strong>Flexible:</strong> Full refund if canceled at least 1 day before check-in</li>
              <li><strong>Moderate:</strong> Full refund if canceled at least 5 days before check-in</li>
              <li><strong>Strict:</strong> Full refund if canceled at least 7 days before check-in</li>
              <li><strong>Long-term:</strong> First month non-refundable, 30 days notice for remaining time</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Force Majeure Events</h2>
            <p>Full refunds will be provided for cancellations due to force majeure events beyond our control:</p>
            <ul>
              <li>Natural disasters (hurricanes, floods, earthquakes)</li>
              <li>Government-mandated travel restrictions</li>
              <li>Public health emergencies</li>
              <li>Severe weather conditions making the property inaccessible</li>
              <li>Utility failures beyond our control</li>
              <li>Acts of terrorism or civil unrest</li>
            </ul>
            <p><strong>Note:</strong> Documentation may be required to verify force majeure events.</p>
          </section>

          <section className="legal-section">
            <h2>4. Property-Related Issues</h2>
            <h3>Full Refunds Available For:</h3>
            <ul>
              <li>Property becomes uninhabitable due to maintenance issues</li>
              <li>Major appliance failures that cannot be repaired within 24 hours</li>
              <li>Safety concerns that cannot be resolved</li>
              <li>Significant misrepresentation of property features</li>
            </ul>
            
            <h3>Partial Refunds Available For:</h3>
            <ul>
              <li>Minor maintenance issues that affect comfort but not safety</li>
              <li>Non-essential amenities being temporarily unavailable</li>
              <li>Construction noise or disruption (if not disclosed in advance)</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Guest-Related Cancellations</h2>
            <h3>Valid Reasons for Full Refunds:</h3>
            <ul>
              <li>Death or serious illness of guest or immediate family member</li>
              <li>Military deployment or duty requirements</li>
              <li>Job loss or significant financial hardship (documentation required)</li>
              <li>Travel restrictions due to visa or passport issues</li>
            </ul>
            
            <h3>Documentation Required:</h3>
            <ul>
              <li>Medical certificates for health-related cancellations</li>
              <li>Military orders for deployment cancellations</li>
              <li>Employment termination letters for job loss</li>
              <li>Official travel restriction notices</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>6. Refund Processing</h2>
            <h3>Processing Time:</h3>
            <ul>
              <li>Credit card refunds: 5-10 business days</li>
              <li>Bank transfers: 7-14 business days</li>
              <li>Airbnb refunds: According to Airbnb's processing timeline</li>
            </ul>
            
            <h3>Refund Methods:</h3>
            <ul>
              <li>Refunds will be processed through the original payment method</li>
              <li>Processing fees are non-refundable</li>
              <li>Currency conversion rates may affect refund amounts</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>7. No-Show Policy</h2>
            <ul>
              <li>No-shows without prior notification: No refund</li>
              <li>Late arrivals (after 11:00 PM on check-in day): No refund</li>
              <li>Early departures: No refund for unused nights</li>
              <li>Failure to provide required identification: No refund</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>8. Special Circumstances</h2>
            <h3>Weather-Related Cancellations:</h3>
            <ul>
              <li>Light rain or normal weather: No refund</li>
              <li>Severe storms making travel dangerous: Full refund</li>
              <li>Road closures preventing access: Full refund</li>
              <li>Fishing conditions affected by weather: No refund</li>
            </ul>
            
            <h3>Fishing-Related Cancellations:</h3>
            <ul>
              <li>Poor fishing conditions: No refund</li>
              <li>River closures due to safety: Full refund</li>
              <li>Fishing license issues: No refund</li>
              <li>Equipment availability: No refund</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>9. Group and Long-term Bookings</h2>
            <h3>Group Bookings (4+ guests):</h3>
            <ul>
              <li>Require 45 days notice for full refund</li>
              <li>30-44 days notice: 75% refund</li>
              <li>15-29 days notice: 50% refund</li>
              <li>Less than 15 days: No refund</li>
            </ul>
            
            <h3>Long-term Bookings (30+ days):</h3>
            <ul>
              <li>First month non-refundable</li>
              <li>30 days notice required for remaining time</li>
              <li>Pro-rated refunds for unused time</li>
              <li>Special rates apply to long-term stays</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>10. Dispute Resolution</h2>
            <p>If you disagree with a refund decision:</p>
            <ul>
              <li>Contact us directly within 30 days of the decision</li>
              <li>Provide detailed explanation and supporting documentation</li>
              <li>We will review and respond within 5 business days</li>
              <li>If unresolved, mediation services may be available</li>
              <li>Legal action should be a last resort</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>11. Refund Exclusions</h2>
            <p>The following are not eligible for refunds:</p>
            <ul>
              <li>Processing fees and service charges</li>
              <li>Travel insurance premiums</li>
              <li>Additional services already provided</li>
              <li>Damage deposits (unless no damage occurred)</li>
              <li>Taxes and government fees</li>
              <li>Currency conversion fees</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>12. Contact Information</h2>
            <p>For refund-related questions or requests:</p>
            <ul>
              <li>Email: dan@whiteriverfishingcabins.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: Calico Rock, Arkansas</li>
              <li>Response time: Within 24 hours</li>
              <li>Urgent matters: Available 24/7</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>13. Policy Updates</h2>
            <p>This refund policy may be updated periodically. Changes will be communicated through:</p>
            <ul>
              <li>Website updates</li>
              <li>Email notifications to past guests</li>
              <li>Booking confirmation updates</li>
              <li>Social media announcements</li>
            </ul>
            <p>Guests are responsible for reviewing the current policy before booking.</p>
          </section>

          <section className="legal-section">
            <h2>14. Legal Compliance</h2>
            <p>This refund policy complies with:</p>
            <ul>
              <li>Arkansas state laws and regulations</li>
              <li>Federal consumer protection laws</li>
              <li>Airbnb terms of service (for Airbnb bookings)</li>
              <li>Industry best practices for vacation rentals</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

export default RefundPolicy

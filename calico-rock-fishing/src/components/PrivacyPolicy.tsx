import React from 'react'
import { Link } from 'react-router-dom'

const PrivacyPolicy: React.FC = () => {

  return (
    <div className="legal-page">
      <div className="legal-header">
        <div className="legal-container">
          <Link to="/" className="back-link">
            ← Back to Home
          </Link>
          <h1 className="legal-title">Privacy Policy</h1>
          <p className="legal-subtitle">Unit 750 Calico Rock - Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
      
      <div className="legal-content">
        <div className="legal-container">
          <section className="legal-section">
            <h2>1. Information We Collect</h2>
            <h3>Personal Information</h3>
            <ul>
              <li>Name, email address, and phone number</li>
              <li>Billing and payment information</li>
              <li>Travel dates and guest information</li>
              <li>Communication preferences</li>
            </ul>
            
            <h3>Usage Information</h3>
            <ul>
              <li>Website usage and browsing patterns</li>
              <li>Device information and IP addresses</li>
              <li>Cookies and similar technologies</li>
              <li>Analytics data</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>2. How We Use Your Information</h2>
            <ul>
              <li>Process and confirm your reservations</li>
              <li>Communicate with you about your stay</li>
              <li>Provide customer support and assistance</li>
              <li>Send important updates and notifications</li>
              <li>Improve our services and website</li>
              <li>Comply with legal obligations</li>
              <li>Send marketing communications (with your consent)</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Information Sharing</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
            <ul>
              <li><strong>Service Providers:</strong> With trusted partners who help us operate our business (payment processors, booking platforms)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with a merger or sale of assets</li>
              <li><strong>With Your Consent:</strong> When you explicitly authorize us to do so</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information:</p>
            <ul>
              <li>Encryption of sensitive data</li>
              <li>Secure servers and networks</li>
              <li>Regular security assessments</li>
              <li>Limited access to personal information</li>
              <li>Secure payment processing</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Cookies and Tracking</h2>
            <p>Our website uses cookies and similar technologies to:</p>
            <ul>
              <li>Remember your preferences</li>
              <li>Analyze website traffic</li>
              <li>Improve user experience</li>
              <li>Provide personalized content</li>
            </ul>
            <p>You can control cookie settings through your browser preferences.</p>
          </section>

          <section className="legal-section">
            <h2>6. Third-Party Services</h2>
            <p>We may use third-party services that collect information:</p>
            <ul>
              <li><strong>Google Analytics:</strong> Website usage analytics</li>
              <li><strong>Payment Processors:</strong> Secure payment processing</li>
              <li><strong>Booking Platforms:</strong> Airbnb, direct booking systems</li>
              <li><strong>Email Services:</strong> Communication and marketing</li>
            </ul>
            <p>These services have their own privacy policies.</p>
          </section>

          <section className="legal-section">
            <h2>7. Data Retention</h2>
            <p>We retain your personal information for as long as necessary to:</p>
            <ul>
              <li>Provide our services</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes</li>
              <li>Enforce our agreements</li>
            </ul>
            <p>Typically, we retain data for 7 years after your last interaction with us.</p>
          </section>

          <section className="legal-section">
            <h2>8. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of your personal information</li>
              <li><strong>Correction:</strong> Update inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your data</li>
              <li><strong>Portability:</strong> Receive your data in a portable format</li>
              <li><strong>Objection:</strong> Object to certain processing activities</li>
              <li><strong>Withdraw Consent:</strong> Revoke consent for marketing communications</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>9. Children's Privacy</h2>
            <p>Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.</p>
          </section>

          <section className="legal-section">
            <h2>10. International Transfers</h2>
            <p>Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data during such transfers.</p>
          </section>

          <section className="legal-section">
            <h2>11. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by:</p>
            <ul>
              <li>Posting the updated policy on our website</li>
              <li>Sending an email notification</li>
              <li>Displaying a prominent notice on our website</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>12. Contact Us</h2>
            <p>If you have questions about this Privacy Policy or our data practices, please contact us:</p>
            <ul>
              <li>Email: dan@whiteriverfishingcabins.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: Calico Rock, Arkansas</li>
              <li>Data Protection Officer: dan@whiteriverfishingcabins.com</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>13. California Privacy Rights</h2>
            <p>California residents have additional rights under the California Consumer Privacy Act (CCPA). Please contact us for more information about these rights.</p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy

import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './PrivacyPolicy.css'

function PrivacyPolicy() {
  return (
    <div className="privacy-page">
      <Header />
      
      <main className="privacy-main">
        <div className="privacy-container">
          <h1 className="privacy-title">Privacy Policy</h1>
          <p className="privacy-date">Last updated: June 2026</p>
          
          <div className="privacy-content">
            <section className="privacy-section">
              <h2>1. Introduction</h2>
              <p>
                Welcome to <strong>eseyem</strong>. We are committed to protecting your personal information 
                and your right to privacy. This Privacy Policy explains how we collect, use, disclose, 
                and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section className="privacy-section">
              <h2>2. Information We Collect</h2>
              <p>
                We may collect information about you in a variety of ways. The information we may 
                collect includes:
              </p>
              <ul>
                <li>
                  <strong>Personal Data:</strong> Personally identifiable information (such as your 
                  name and email address) that you voluntarily give to us when you contact us or 
                  sign up for our newsletter.
                </li>
                <li>
                  <strong>Derivative Data:</strong> Information our servers automatically collect 
                  when you visit the website, such as your IP address, browser type, operating 
                  system, and access times.
                </li>
              </ul>
            </section>

            <section className="privacy-section">
              <h2>3. Use of Your Information</h2>
              <p>
                We may use the information we collect about you for a variety of purposes, including:
              </p>
              <ul>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To send you newsletters and marketing communications (with your consent)</li>
                <li>To improve our website and services</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section className="privacy-section">
              <h2>4. Disclosure of Your Information</h2>
              <p>
                We may share information we have collected about you in certain situations. Your 
                information may be disclosed as follows:
              </p>
              <ul>
                <li>
                  <strong>By Law or to Protect Rights:</strong> If we believe the release of 
                  information about you is necessary to respond to legal process, to investigate 
                  or remedy potential violations of our policies, or to protect the rights, 
                  property, and safety of others.
                </li>
                <li>
                  <strong>Business Transfers:</strong> We may share or transfer your information 
                  in connection with, or during negotiations of, any merger, sale of company assets, 
                  financing, or acquisition of all or a portion of our business to another company.
                </li>
              </ul>
            </section>

            <section className="privacy-section">
              <h2>5. Security of Your Information</h2>
              <p>
                We use administrative, technical, and physical security measures to help protect 
                your personal information. While we have taken reasonable steps to secure the 
                personal information you provide to us, please be aware that no security measures 
                are perfect or impenetrable.
              </p>
            </section>

            <section className="privacy-section">
              <h2>6. Cookies and Tracking</h2>
              <p>
                We may use cookies, web beacons, tracking pixels, and other tracking technologies 
                when you visit our website to help customize the site and improve your experience. 
                You can instruct your browser to refuse all cookies or to indicate when a cookie 
                is being sent.
              </p>
            </section>

            <section className="privacy-section">
              <h2>7. Third-Party Services</h2>
              <p>
                Our website may contain links to third-party websites and applications of interest, 
                including Steam and itch.io. These third-party sites have their own privacy policies 
                that govern their use of your information. We are not responsible for the practices 
                employed by these third parties.
              </p>
            </section>

            <section className="privacy-section">
              <h2>8. Children's Privacy</h2>
              <p>
                We do not knowingly collect personally identifiable information from children under 
                the age of 13. If you are under the age of 13, please do not submit any personal 
                information through our website.
              </p>
            </section>

            <section className="privacy-section">
              <h2>9. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any 
                changes by posting the new Privacy Policy on this page and updating the "Last updated" 
                date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section className="privacy-section">
              <h2>10. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us <a href="mailto:privacy@eseyem.com" className="contact-info"> here.</a>
              </p>
            </section>
          </div>

          <div className="privacy-back">
            <Link to="/" className="back-link">← Back to Home</Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default PrivacyPolicy
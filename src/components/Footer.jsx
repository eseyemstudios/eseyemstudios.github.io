import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p className="copyright">
            © {currentYear} Eseyem Studios. All rights reserved.
          </p>
          <Link to="/privacy" className="privacy-link">
            Privacy Policy
          </Link>
        </div>
        <div className="footer-right">
          {/* Social links placeholder - to be implemented */}
          <div className="social-placeholder">
            <span>Follow Us</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
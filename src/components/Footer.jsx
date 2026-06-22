import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-links">
            <Link to="/privacy" className="footer-link">
              Privacy Policy
            </Link>
            <span className="footer-divider">·</span>
            <Link to="/license" className="footer-link">
              License
            </Link>
            <span className="footer-divider">·</span>
            <a href="mailto:contact@eseyem.com" className="footer-link">
              Contact Us
            </a>
          </div>
          <p className="copyright">
            © {currentYear} eseyem. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
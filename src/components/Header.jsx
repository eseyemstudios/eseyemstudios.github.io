import logoHeader from '../assets/logo-header.png'

import youtubeIcon from '../assets/icons/icons8-youtube-150.png'
import './Header.css'

function Header() {
  // Social media links - hidden for now, uncomment to enable
  const socialLinks = [
    { name: 'YouTube', url: 'https://www.youtube.com/@eseyemcom', icon: youtubeIcon },
  ]

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <a href="/">
            <img src={logoHeader} alt="Eseyem Studios" className="logo-image" />
          </a>
        </div>
        <nav className="platform-nav">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="platform-link"
              title={social.name}
            >
              <img src={social.icon} alt={social.name} className="platform-icon" />
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
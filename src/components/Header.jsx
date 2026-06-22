import logoHeader from '../assets/logo-header.png'
// Social media icons - uncomment when ready to enable
// import instagramIcon from '../assets/icons/instagram.png'
// import youtubeIcon from '../assets/icons/youtube.png'
// import twitterIcon from '../assets/icons/twitter.png'
import './Header.css'

function Header() {
  // Social media links - hidden for now, uncomment to enable
  // const socialLinks = [
  //   { name: 'Instagram', url: '#', icon: instagramIcon },
  //   { name: 'YouTube', url: '#', icon: youtubeIcon },
  //   { name: 'Twitter', url: '#', icon: twitterIcon },
  // ]

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <a href="/">
            <img src={logoHeader} alt="Eseyem Studios" className="logo-image" />
          </a>
        </div>
        <nav className="platform-nav">
          {/* Social media icons - hidden for now */}
          {/* {socialLinks.map((social) => (
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
          ))} */}
        </nav>
      </div>
    </header>
  )
}

export default Header
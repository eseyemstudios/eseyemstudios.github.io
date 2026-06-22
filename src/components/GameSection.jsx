import Button from './Button'
import steamIcon from '../assets/icons/icons8-steam-500.png'
import itchIcon from '../assets/icons/icons8-itch-io-120.png'
import './GameSection.css'

function GameSection({ 
  title,
  logo,
  description, 
  backgroundImage, 
  platforms = []
}) {
  // Default platforms if none provided
  const defaultPlatforms = [
    { 
      name: 'Steam', 
      url: 'https://store.steampowered.com/app/yourgame',
      variant: 'steam',
      icon: steamIcon,
      buttonText: 'Wishlist on Steam'
    },
    { 
      name: 'itch.io', 
      url: 'https://eseyem.itch.io/yourgame',
      variant: 'itch',
      icon: itchIcon, // Add itch.io icon if available
      buttonText: "Buy Supporter's Edition"
    }
  ]

  const platformList = platforms.length > 0 ? platforms : defaultPlatforms

  return (
    <section className="game-section">
      <div 
        className="game-section-bg" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="game-section-overlay" />
      <div className="game-section-content">
        <div className="game-info">
          {logo ? (
            <img src={logo} alt={title || 'Game logo'} className="game-logo" />
          ) : (
            <h2 className="game-title">{title}</h2>
          )}
          <p className="game-description">{description}</p>
        </div>
        <div className="game-actions">
          {platformList.map((platform) => (
            <Button 
              key={platform.name}
              variant={platform.variant} 
              href={platform.url}
              icon={platform.icon}
            >
              {platform.buttonText}
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GameSection
import Button from './Button'
import steamIcon from '../assets/icons/icons8-steam-500.png'
import itchIcon from '../assets/icons/icons8-itch-io-120.png'
import './ReleaseCard.css'

function ReleaseCard({ 
  title,
  logo,
  image,
  description,
  steamUrl,
  steamText = 'Wishlist on Steam',
  itchUrl,
  itchText = 'Get on itch.io',
  moreInfoUrl
}) {
  return (
    <div className="release-card">
      <div className="release-card__background">
        {image && (
          <img 
            src={image} 
            alt="" 
            className="release-card__background-image"
          />
        )}
        <div className="release-card__gradient-overlay" />
      </div>
      
      <div className="release-card__content">
        <div className="release-card__bottom-row">
          <div className="release-card__info">
            {logo ? (
              <img 
                src={logo} 
                alt={title || 'Game logo'} 
                className="release-card__logo"
              />
            ) : (
              <h3 className="release-card__title">{title}</h3>
            )}
            {description && (
              <p className="release-card__description">{description}</p>
            )}
          </div>
          
          <div className="release-card__actions">
            {steamUrl && (
              <Button 
                variant="steam" 
                href={steamUrl} 
                icon={steamIcon}
              >
                {steamText}
              </Button>
            )}
            
            {itchUrl && (
              <Button 
                variant="itch" 
                href={itchUrl} 
                icon={itchIcon}
              >
                {itchText}
              </Button>
            )}
            
            {moreInfoUrl && (
              <Button 
                variant="primary" 
                href={moreInfoUrl}
              >
                More Info
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReleaseCard
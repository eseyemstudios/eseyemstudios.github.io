import Button from './Button'
import itchIcon from '../assets/icons/icons8-itch-io-120.png'
import './GameJamCard.css'

function GameJamCard({ 
  title,
  thumbnail,
  jamName,
  description,
  itchUrl 
}) {
  return (
    <div className="game-jam-card">
      <div className="game-jam-card__thumbnail-container">
        {thumbnail ? (
          <img 
            src={thumbnail} 
            alt={title || 'Game thumbnail'} 
            className="game-jam-card__thumbnail"
          />
        ) : (
          <div className="game-jam-card__thumbnail-placeholder">
            <span>No Image</span>
          </div>
        )}
      </div>
      
      <div className="game-jam-card__content">
        <h3 className="game-jam-card__title">{title}</h3>
        
        {jamName && (
          <span className="game-jam-card__jam">{jamName}</span>
        )}
        
        {description && (
          <p className="game-jam-card__description">{description}</p>
        )}
        
        <Button 
          variant="itch" 
          href={itchUrl} 
          icon={itchIcon}
          className="game-jam-card__button"
        >
          Play on itch.io
        </Button>
      </div>
    </div>
  )
}

export default GameJamCard

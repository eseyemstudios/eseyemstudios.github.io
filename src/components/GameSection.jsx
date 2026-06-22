import Button from './Button'
import './GameSection.css'

function GameSection({ 
  title, 
  description, 
  backgroundImage, 
  steamUrl, 
  itchUrl,
  steamButtonText = 'Wishlist on Steam',
  itchButtonText = 'Buy Supporter\'s Edition'
}) {
  return (
    <section className="game-section">
      <div 
        className="game-section-bg" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="game-section-overlay" />
      <div className="game-section-content">
        <div className="game-info">
          <h2 className="game-title">{title}</h2>
          <p className="game-description">{description}</p>
        </div>
        <div className="game-actions">
          {steamUrl && (
            <Button variant="steam" href={steamUrl}>
              {steamButtonText}
            </Button>
          )}
          {itchUrl && (
            <Button variant="itch" href={itchUrl}>
              {itchButtonText}
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}

export default GameSection
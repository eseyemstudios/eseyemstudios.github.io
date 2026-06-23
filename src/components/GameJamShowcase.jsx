import { useRef, useState, useCallback, useEffect } from 'react'
import GameJamCard from './GameJamCard'
import './GameJamShowcase.css'

function GameJamShowcase({ games = [], title = 'Game Jam Projects' }) {
  const [isHovering, setIsHovering] = useState(false)

  if (!games || games.length === 0) {
    return null
  }

  // If only 1 game, center it and don't show marquee
  const isSingleItem = games.length === 1

  // Create duplicated array for seamless infinite scroll
  const displayGames = isSingleItem ? games : [...games, ...games]

  return (
    <section className="game-jam-showcase">
      <div 
        className={`game-jam-showcase__scroll-container ${isSingleItem ? 'single-item' : ''} ${isHovering ? 'hovering' : ''}`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="game-jam-showcase__track">
          {displayGames.map((game, index) => (
            <GameJamCard
              key={`${game.title}-${index}`}
              title={game.title}
              thumbnail={game.thumbnail}
              jamName={game.jamName}
              description={game.description}
              itchUrl={game.itchUrl}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default GameJamShowcase
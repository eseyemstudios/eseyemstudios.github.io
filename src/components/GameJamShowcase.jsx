import GameJamCard from './GameJamCard'
import './GameJamShowcase.css'

function GameJamShowcase({ games = [], title = 'Game Jam Projects' }) {
  if (!games || games.length === 0) {
    return null
  }

  return (
    <section className="game-jam-showcase">
      <div className="game-jam-showcase__marquee-container">
        <div className="game-jam-showcase__marquee">
          {/* Duplicate cards for seamless loop */}
          <div className="game-jam-showcase__track">
            {games.map((game, index) => (
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
          <div className="game-jam-showcase__track" aria-hidden="true">
            {games.map((game, index) => (
              <GameJamCard
                key={`duplicate-${game.title}-${index}`}
                title={game.title}
                thumbnail={game.thumbnail}
                jamName={game.jamName}
                description={game.description}
                itchUrl={game.itchUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GameJamShowcase
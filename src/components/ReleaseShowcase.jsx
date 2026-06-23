import { useState } from 'react'
import ReleaseCard from './ReleaseCard'
import './ReleaseShowcase.css'

function ReleaseShowcase({ releases = [], title = 'TITLES' }) {
  const [isHovering, setIsHovering] = useState(false)

  if (!releases || releases.length === 0) {
    return null
  }

  // If only 1 release, center it and don't show marquee
  const isSingleItem = releases.length === 1

  // Create duplicated array for seamless infinite scroll
  const displayReleases = isSingleItem ? releases : [...releases, ...releases]

  return (
    <section className="release-showcase">
      <div 
        className={`release-showcase__scroll-container ${isSingleItem ? 'single-item' : ''} ${isHovering ? 'hovering' : ''}`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="release-showcase__track">
          {displayReleases.map((release, index) => (
            <ReleaseCard
              key={`${release.title}-${index}`}
              title={release.title}
              image={release.image}
              description={release.description}
              steamUrl={release.steamUrl}
              steamText={release.steamText}
              itchUrl={release.itchUrl}
              itchText={release.itchText}
              moreInfoUrl={release.moreInfoUrl}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReleaseShowcase
import ReleaseCard from './ReleaseCard'
import './ReleaseShowcase.css'

function ReleaseShowcase({ releases = [], title = 'TITLES' }) {
  if (!releases || releases.length === 0) {
    return null
  }

  return (
    <section className="release-showcase">
      <div className="release-showcase__content">
        {releases.map((release, index) => (
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
    </section>
  )
}

export default ReleaseShowcase
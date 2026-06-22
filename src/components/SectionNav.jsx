import './SectionNav.css'

function SectionNav({ activeSection, onSectionChange }) {
  return (
    <nav className="section-nav">
      <div className="section-nav__container">
        <button
          className={`section-nav__tab ${activeSection === 'releases' ? 'section-nav__tab--active' : ''}`}
          onClick={() => onSectionChange('releases')}
          aria-selected={activeSection === 'releases'}
          role="tab"
        >
          Titles
        </button>
        <button
          className={`section-nav__tab ${activeSection === 'game-jam' ? 'section-nav__tab--active' : ''}`}
          onClick={() => onSectionChange('game-jam')}
          aria-selected={activeSection === 'game-jam'}
          role="tab"
        >
          Game Jams
        </button>
      </div>
    </nav>
  )
}

export default SectionNav
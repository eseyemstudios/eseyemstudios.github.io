import { useState, useCallback, useEffect } from 'react'
import './Carousel.css'

function Carousel({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goToSlide = useCallback((index) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex(index)
    setTimeout(() => setIsTransitioning(false), 500)
  }, [isTransitioning])

  const goToPrevious = useCallback(() => {
    const newIndex = currentIndex === 0 ? children.length - 1 : currentIndex - 1
    goToSlide(newIndex)
  }, [currentIndex, children.length, goToSlide])

  const goToNext = useCallback(() => {
    const newIndex = currentIndex === children.length - 1 ? 0 : currentIndex + 1
    goToSlide(newIndex)
  }, [currentIndex, children.length, goToSlide])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') goToPrevious()
      if (e.key === 'ArrowRight') goToNext()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goToPrevious, goToNext])

  const slides = Array.isArray(children) ? children : [children]
  const totalSlides = slides.length

  return (
    <div className="carousel">
      <div className="carousel-track-container">
        <div 
          className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div 
              key={index} 
              className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {totalSlides > 1 && (
        <>
          <button 
            className="carousel-arrow carousel-arrow--left"
            onClick={goToPrevious}
            aria-label="Previous slide"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button 
            className="carousel-arrow carousel-arrow--right"
            onClick={goToNext}
            aria-label="Next slide"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </>
      )}

      {/* Dots Navigation */}
      {totalSlides > 1 && (
        <div className="carousel-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Carousel
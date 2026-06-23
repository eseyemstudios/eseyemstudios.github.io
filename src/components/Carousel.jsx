import { useState, useEffect, useRef, useCallback } from 'react'
import './Carousel.css'

function Carousel({ children, autoPlay = true, autoPlayInterval = 5000 }) {
  const slides = Array.isArray(children) ? children : [children]
  const total = slides.length

  const [current, setCurrent] = useState(0)
  const currentRef = useRef(0)
  const rafRef = useRef(null)
  const startTimeRef = useRef(null)
  const activeDotRef = useRef(null)

  const stopTimer = () => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
  }

  const startTimer = useCallback(() => {
    stopTimer()
    startTimeRef.current = null
    if (activeDotRef.current) activeDotRef.current.style.setProperty('--dot-progress', 0)

    const tick = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      const elapsed = timestamp - startTimeRef.current
      const p = Math.min(elapsed / autoPlayInterval, 1)
      if (activeDotRef.current) activeDotRef.current.style.setProperty('--dot-progress', p)

      if (p >= 1) {
        const next = currentRef.current === total - 1 ? 0 : currentRef.current + 1
        currentRef.current = next
        setCurrent(next)
        startTimeRef.current = null
        if (activeDotRef.current) activeDotRef.current.style.setProperty('--dot-progress', 0)
        rafRef.current = requestAnimationFrame(tick)

      } else {
        rafRef.current = requestAnimationFrame(tick)
      }
    }

    rafRef.current = requestAnimationFrame(tick)
  }, [autoPlayInterval, total])

  useEffect(() => {
    if (autoPlay) startTimer()
    return stopTimer
  }, [autoPlay, startTimer])

  const goTo = useCallback((index) => {
    currentRef.current = index
    setCurrent(index)
    if (autoPlay) startTimer()
  }, [autoPlay, startTimer])

  const prev = useCallback(() => {
    goTo(currentRef.current === 0 ? total - 1 : currentRef.current - 1)
  }, [goTo, total])

  const next = useCallback(() => {
    goTo(currentRef.current === total - 1 ? 0 : currentRef.current + 1)
  }, [goTo, total])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [prev, next])

  return (
    <div className="carousel">
      <div className="carousel-track-container">
        <div className="carousel-track" style={{ transform: `translateX(-${current * 100}%)` }}>
          {slides.map((slide, i) => (
            <div key={i} className={`carousel-slide ${i === current ? 'active' : ''}`}>
              {slide}
            </div>
          ))}
        </div>
      </div>

      {total > 1 && (
        <>
          <button className="carousel-arrow carousel-arrow--left" onClick={prev} aria-label="Previous slide">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button className="carousel-arrow carousel-arrow--right" onClick={next} aria-label="Next slide">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div className="carousel-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                ref={i === current ? activeDotRef : null}
                className={`carousel-dot ${i === current ? 'active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Carousel
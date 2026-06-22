import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './License.css'

function License() {
  return (
    <div className="license-page">
      <Header />
      
      <main className="license-main">
        <div className="license-container">
          <h1 className="license-title">Licenses</h1>
          <p className="license-date">Last updated: June 2026</p>
          
          <div className="license-content">
            <section className="license-section">
              <h2>icons8 License</h2>
              <p>
                We use icons and assets from <a href="https://icons8.com" target="_blank" rel="noopener noreferrer">icons8.com</a> under 
                their Free License terms.
              </p>
              <p>
                According to the icons8 Free License, you are required to link back to icons8.com 
                when using their free assets. We comply with this requirement and acknowledge their 
                contribution to our project.
              </p>
              <p>
                For more information about the icons8 license, please visit:
              </p>
              <ul>
                <li>
                  <a href="https://icons8.com/license" target="_blank" rel="noopener noreferrer">
                    icons8 License Agreement
                  </a>
                </li>
              </ul>
            </section>

            <section className="license-section">
              <h2>Platform Trademarks</h2>
              <p>
                Steam and the Steam logo are trademarks and/or registered trademarks of Valve Corporation 
                in the U.S. and/or other countries.
              </p>
              <p>
                itch.io and the itch.io logo are trademarks of itch.io LLC.
              </p>
              <p>
                All related icons and assets are used for identification and linking purposes only.
              </p>
            </section>

            <section className="license-section">
              <h2>Game Content</h2>
              <p>
                All game content, including but not limited to game titles, logos, artwork, code, 
                music, and characters, is the intellectual property of eseyem.
              </p>
              <p>
                © 2026 eseyem. All rights reserved.
              </p>
            </section>
          </div>

          <div className="license-back">
            <Link to="/" className="back-link">← Back to Home</Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default License
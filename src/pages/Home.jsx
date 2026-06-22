import Header from '../components/Header'
import GameSection from '../components/GameSection'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import steamIcon from '../assets/icons/icons8-steam-500.png'
import itchIcon from '../assets/icons/icons8-itch-io-120.png'

function Home() {
  return (
    <div className="home">
      <Header />
      
      <main>
        <Carousel>
          {/* Game 1 */}
          <GameSection
            title="Between Circuits"
            logo="src/assets/images/between_circuits-logo.png"
            description="Navigate a decaying sector, repair aggressive corporate machinery, and out-smart the surveillance algorithm. As an android unit serving a dead regime, you must collect fragmented logs to discover why the 'Corporation' sounds exactly like you. Efficiency is mandatory. Curiosity is a malfunction."
            backgroundImage="src/assets/images/between_circuits-bg.png"
            platforms={[
              {
                name: 'Steam',
                url: 'https://store.steampowered.com/app/4183820/Between_Circuits/',
                variant: 'steam',
                icon: steamIcon,
                buttonText: 'Wishlist on Steam'
              },
              {
                name: 'itch.io',
                url: 'https://eseyem.itch.io/between-circuits-se',
                variant: 'itch',
                icon: itchIcon,
                buttonText: "Supporter's Edition"
              }
            ]}
          />
        </Carousel>
      </main>

      <Footer />
    </div>
  )
}

export default Home
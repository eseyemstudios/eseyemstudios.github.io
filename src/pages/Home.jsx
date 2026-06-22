import Header from '../components/Header'
import GameSection from '../components/GameSection'
import Footer from '../components/Footer'

function Home() {
  // Placeholder image - replace with actual game screenshots
  const placeholderBg = 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1920&q=80'

  return (
    <div className="home">
      <Header />
      
      <main>
        {/* First Game Section */}
        <GameSection
          title="Project Alpha"
          description="An immersive gaming experience that pushes the boundaries of interactive storytelling. Dive into a world where every choice matters and every decision shapes your destiny."
          backgroundImage={placeholderBg}
          steamUrl="https://store.steampowered.com/app/yourgame"
          itchUrl="https://eseyem.itch.io/yourgame"
        />

        {/* Add more game sections as needed */}
        {/* 
        <GameSection
          title="Project Beta"
          description="Another amazing game description here..."
          backgroundImage="path/to/image.jpg"
          steamUrl="https://store.steampowered.com/app/yourgame2"
          itchUrl="https://eseyem.itch.io/yourgame2"
        />
        */}
      </main>

      <Footer />
    </div>
  )
}

export default Home
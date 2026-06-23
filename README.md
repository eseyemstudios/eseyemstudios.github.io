# Eseyem Studios Website

A minimalist portfolio website for Eseyem Studios, a game development studio. Built with React, Vite, and deployed to GitHub Pages.

## Features

- Minimalist design with dark theme (#050505 background, #FAFAFA text)
- Full-page game showcase sections with gradient overlays
- Platform-specific buttons (Steam, itch.io)
- Responsive design
- Privacy Policy page
- Ready for future Steam leaderboard integration

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **CSS3** - Styling with CSS custom properties

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/eseyemstudios/eseyemstudios.github.io.git
cd eseyemstudios.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

### Deploying to GitHub Pages

```bash
npm run deploy
```

This command builds the project and deploys it to the `gh-pages` branch.

## Project Structure

```
eseyemstudios.github.io/
├── public/
│   ├── 404.html
│   ├── CNAME
│   └── favicon.png
├── src/
│   ├── assets/
│   │   ├── favicon.png
│   │   ├── logo-header.png
│   │   ├── icons/
│   │   │   ├── icons8-itch-io-120.png
│   │   │   ├── icons8-steam-500.png
│   │   │   └── icons8-youtube-150.png
│   │   └── images/
│   │       ├── between_circuits-bg.png
│   │       ├── between_circuits-logo.png
│   │       ├── blindspot-gameplay.png
│   │       ├── blindspot-logo.png
│   │       ├── blindspot.png
│   │       ├── centrix-gameplay.png
│   │       ├── centrix.png
│   │       ├── liwanag-gameplay.png
│   │       ├── liwanag.png
│   │       ├── starlit-veil-gameplay.png
│   │       ├── starlit-veil.png
│   │       ├── stillhere-gameplay.png
│   │       ├── stillhere-logo.png
│   │       └── stillhere.png
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Button.css
│   │   ├── Carousel.jsx
│   │   ├── Carousel.css
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   │   ├── GameJamCard.jsx
│   │   ├── GameJamCard.css
│   │   ├── GameJamShowcase.jsx
│   │   ├── GameJamShowcase.css
│   │   ├── GameSection.jsx
│   │   ├── GameSection.css
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── ReleaseCard.jsx
│   │   ├── ReleaseCard.css
│   │   ├── ReleaseShowcase.jsx
│   │   ├── ReleaseShowcase.css
│   │   ├── ScrollToTop.jsx
│   │   ├── SectionNav.jsx
│   │   └── SectionNav.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── License.jsx
│   │   ├── License.css
│   │   ├── PrivacyPolicy.jsx
│   │   └── PrivacyPolicy.css
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Customization

### Adding New Games

Edit `src/pages/Home.jsx` and add new `GameSection` components:

```jsx
<GameSection
  title="Your Game Title"
  description="Game description here..."
  backgroundImage="/path/to/your/game-background.jpg"
  steamUrl="https://store.steampowered.com/app/yourgame"
  itchUrl="https://yourstudio.itch.io/yourgame"
/>
```

### Updating Colors

Edit the CSS custom properties in `src/styles/globals.css`:

```css
:root {
  --bg-primary: #050505;
  --text-primary: #FAFAFA;
  --steam-blue: #1B2838;
  --steam-blue-light: #66C0F4;
  --itch-red: #FA5C5C;
}
```

## Future Considerations

### Steam Leaderboard Integration

The codebase is structured to easily add Steam leaderboard functionality in the future:

1. Create a new component: `src/components/Leaderboard.jsx`
2. Use React hooks (`useState`, `useEffect`) to fetch data from Steam Web API
3. Add API configuration in a separate config file
4. Consider adding environment variables for API keys

Example structure for future implementation:
```jsx
// src/services/steamApi.js
export const fetchLeaderboard = async (appId, leaderboardId) => {
  // Steam API call here
}
```

## License

© 2026 eseyem. All rights reserved.
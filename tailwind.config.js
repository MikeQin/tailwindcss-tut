/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateAreas: {
        'layout': [
          'header header   header',
          'nav    content  sidebar',
          'nav    footer   footer',
        ],
      },
      gridTemplateColumns: {
        'layout': '1fr 4fr 1fr',
      },
      gridTemplateRows: {
        'layout': '80px 1fr 70px',
      },
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        }
      },
      fontFamily: {
        body: ['Nunito']
      }
    },
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas')
  ]
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('/bg-img.svg')",
      },
      colors: {
        'primary': "#02161E", 'secondary': "#002431", 'primary-yellow': "#FE8A1D",
        'primary-text': "#87A5B7", 'primary-light': "#013746", "primary-nav": "#02161e", "primary-pink": "#F90DC8"
      }
    },
  },
  plugins: [],
}

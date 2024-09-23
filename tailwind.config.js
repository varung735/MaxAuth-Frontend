/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/home_page/HomePage.js',
    // Common Components
    './src/common_components/Navbar.js'
  ],
  theme: {
    colors: {
      'blue': '#7CB9E8',
      'grey': '#f5f5f5'
    },
    fontFamily: {
      'mont': ['Montserrat', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}


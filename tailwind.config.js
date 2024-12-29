/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Pages
    './src/pages/home_page/HomePage.js',
    './src/pages/authentication/Auth.js',
    // Common Components
    './src/common_components/Navbar.js',
    './src/common_components/Footer.js',
    // Homepage components
    './src/pages/home_page/components/Features.js',
    './src/pages/home_page/components/Reachus.js',
    // Authentication componenets
    './src/pages/authentication/components/Signup.js',
    './src/pages/authentication/components/Login.js'
  ],
  theme: {
    colors: {
      'blue': '#42A5F6',
      'grey': '#f5f5f5',
      'white': '#ffffff',
      'grey': '#494848',
      'gray-400': 'rgb(156 163 175 / var(--tw-bg-opacity, 1))',
      'transparent_black': 'rgba(0, 0, 0, 0.5)'
    },
    fontFamily: {
      'mont': ['Montserrat', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'feature': "url('https://res.cloudinary.com/dr61rg1rq/image/upload/v1735392983/MaxAuth/ubewcg1sfqtimeke2c7s.jpg')",
        'authentication': "url('https://res.cloudinary.com/dr61rg1rq/image/upload/v1735398673/MaxAuth/nyputyk4mr5fa9rl2mon.jpg')"
      }
    },
  },
  plugins: [],
}


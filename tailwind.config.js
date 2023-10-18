/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#16C687',
        offWhite: '#F9F9F9'
      },
      animation: {
        wiggle: 'wiggle .5s ease-in-out forwards',
      },
      keyframes: {
        wiggle: {
          '0%': {transform: 'rotate(0)'},
          '50%': {transform: 'rotate(5deg)'},
          '75%': {transform: 'rotate(-5deg)'},
          '100%': {transform: 'rotate(0)'},
        }
      }
    },
  },
  plugins: [],
}


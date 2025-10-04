/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        swiggy: {
          50: '#fff5f0',
          100: '#ffe8db',
          200: '#ffd1b8',
          300: '#ffb794',
          400: '#ff8a47',
          500: '#ff5200', // Official Swiggy Orange
          600: '#e64a00',
          700: '#cc4200',
          800: '#b33a00',
          900: '#993300',
        }
      }
    },
  },
  plugins: [],
}
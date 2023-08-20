/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#272727',
          200: '#3A3A3A'
        },
        Purple: {
          50: '#C3BEDE',
          100: '#B2AADB',
          200: '#A197D9',
          300: '#9185D7',
          400: '#8273D6',
          500: '#6B5BC7',
          600: '#504499',
          700: '#413490'
        }
      }
    },
  },
  plugins: [],
}
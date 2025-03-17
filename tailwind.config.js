/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'], //extend an existing font family
      },
      colors: {
        'danger': '#cf1430' //override theme colors
      }
    }
  },
  plugins: [],
}


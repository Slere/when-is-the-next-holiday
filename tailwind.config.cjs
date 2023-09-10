/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend:{
      animation:{
        'bounce-slow':'bounce 5s infinite',
      },
    },
    fontFamily: {
      sans: ['Montserrat Variable', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif']
    },
    screens: {
      ...defaultTheme.screens
    },
    extend: {},
  },
  plugins: [],
}

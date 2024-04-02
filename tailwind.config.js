/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {fontFamily: {
      'noto-sans': ['Noto Sans', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
      'raleway': ['Raleway', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif'],
      'rubik': ['Rubik', 'sans-serif'],
    },},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
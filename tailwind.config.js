/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js" // add this line
  ],
  darkMode: 'media',
  theme: {
    extend: {},
  },

  plugins: [
    require('flowbite/plugin') // add this line
  ],
}



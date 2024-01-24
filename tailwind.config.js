/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js" // add this line
  ],
  darkMode: 'media',
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        'blue-chill': {
          '50': '#f1f9f2',
          '100': '#dcefe3',
          '200': '#c0e3d3',
          '300': '#92cebe',
          '400': '#5eb0a9',
          '500': '#448f97',
          '600': '#3a687e',
          '700': '#355069',
          '800': '#323e58',
          '900': '#2d324d',
          '950': '#1c1a32',
      },
    }

    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

  },

  plugins: [
    require('flowbite/plugin') // add this line
  ],
}



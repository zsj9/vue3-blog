// Example `tailwind.config.js` file
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  theme: {
    colors: { ...colors },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
    boxShadow: {
      "login": '0 2px 10px 0 rgb(0 0 0 / 15%)'
    }
  },
  variants: {
    extend: {
      display: ['hover', 'focus', 'group-hover'],
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
      zIndex: ['hover', 'active'],
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
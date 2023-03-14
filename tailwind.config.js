const { fontFamily, transitionProperty } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryDark: '#212027',
        secondaryDark: '#26252C',
        tertiaryDark: '#2E2D34',
        primaryLight: '#F4F3F6',
        secondaryLight: '#B6A9BC',

        borderLight: '#424048',

        purple: '#7048ec',
        purpleLight: '#5325e1'
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans]
      },
      transitionProperty: {
        width: ' width',
        spacing: 'margin, padding'
      },
      screens: {
        sm: '500px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};

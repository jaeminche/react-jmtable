/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#cc1266',
        primaryLight: '#F5E9E9',
        fontPrimary: '#333333',
        fontSecondary: '#787878',
        blockBackColor: '#eaeaea',
        borderPrimary: '#cccccc',
      },
      fontFamily: {
        // poppins: ['Nanum Gothic', 'sans-serif'],
      },
      width: {
        '417px': '417px',
      },
      margin: {
        '5px': '5px',
      },
      animation: {
        openmenu: 'openmenu 1s ease-in',
        closemenu: 'closemenu 1s ease-in',
      },
      keyframes: {
        openmenu: {
          // initial position
          '0%': { left: '-224px' },
          // final position
          '100%': { left: '0px' },
        },
        closemenu: {
          // initial position
          '0%': { left: '0px' },
          // final position
          '100%': { left: '-224px' },
        },
      },
    },
    screens: {
      lg: '1400px',
      xl: '1600px',
    },
  },
  plugins: [],
};

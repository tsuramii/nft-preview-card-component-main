/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    fontFamily: {
      'outfit': ['Outfit', 'sans-serif']
    },
    extend: {
      colors: {
        'softblue': '#8bacda',
        'cyan': '#00fff7',
        'mainbg': '#0d192b',
        'cardbg': '#14253d',
        'line': '	#2f415b'
      }
    },
  },
  plugins: [],
}


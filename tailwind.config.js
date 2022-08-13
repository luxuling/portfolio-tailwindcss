/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: '16px',
      },
      fontFamily: {
          'inter': ['Inter'],
        },
        animation: {
          'spin-slow': 'spin 3s linear infinite',
        },
        colors:{
            primary : '#22d3ee',
            secondary: '#94a3b8',
            dark : '#0f172a'
          },
        screens: {
          '2xl': '1320px'
        }
    },
  },
  plugins: [],
}

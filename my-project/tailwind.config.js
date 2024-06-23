/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#fff',
      'black': '#000',
      'darkBlue': '#002C55',
      'darkBlue': '#002C55',
      'blue': '#00579E',
      'lightBlue': '#7FBDEE',
      'Darkgray': '#767E86',
      'gray': '#A5A5A5',
      'lightGray': '#D9D9D9',
    },

    fontFamily: {
      'Inter': ["Inter", 'sans-serif'],
      'Red': ["Red Hat Display", 'sans-serif']
    },
    extend: {}
  },
  plugins: []
};
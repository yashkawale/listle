/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/components/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily : {
        'Lobster' : ['Lobster'],
        'Kalam': ['Kalam']
      }
    },
  },
  plugins: [],
}


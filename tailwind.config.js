/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F9F8F6',
        sidebar: '#2D2A26',
        primary: '#C87941',
        positive: '#7A8B76',
        negative: '#A35C5C',
        bordercolor: '#D4CFC7'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

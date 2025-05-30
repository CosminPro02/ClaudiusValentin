/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Lugrasimo': ['Lugrasimo', 'sans-serif'],
        'Oswald': ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
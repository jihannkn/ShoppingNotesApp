/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#283618',
        'custom-beige': '#fefae0',
        'custom-yellow': '#dda15e',
        'custom-background': '#fefae0',
        'custom-dark': '#283618',
        'custom-red': '#ff0000',
      },
      fontFamily: {
        comfortaa: ['Comfortaa', 'sans-serif'],
        borel: ['Borel', 'serif'],
      },
    },
  },
  plugins: [],
}

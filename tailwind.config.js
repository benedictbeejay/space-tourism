/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // backgroundImage : {
      //   "Mobile": "url('/src/starter-code/assets/home/background-home-mobile.jpg')",
      //   'Desktop': "url('/src/starter-code/assets/home/background-home-desktop.jpg')"

      // }
    },
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
  },
  plugins: [],
}


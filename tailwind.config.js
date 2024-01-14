/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#111222',
        white: '#FFFFFF',
        cyan: '#40E0D0',
        blue: '#016EFF',
        darkblue: '#111222',
        gray: '#A6A6A6',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif' , 'bold'],
      },
      fontWeight: {
        bold: 700,
      },
      boxShadow: {
        '3xl': '0 30px 30px -15px #40E0D0',
      }
    },
  },
  plugins: [],
}


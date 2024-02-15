/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        wiggle: {
          // '0%, 100%': { transform: 'translateX(2px)' },
          '50%': { transform: 'translateX(3px)' },
        }
      }
    },
  },
  plugins: [],
}


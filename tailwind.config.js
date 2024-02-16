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
        karla: ["Karla", "sans-serif"]
      },
      keyframes: {
        wiggle: {
          '50%': { transform: 'translateX(3px)' },
        }
      }
    },
  },
  plugins: [],
}


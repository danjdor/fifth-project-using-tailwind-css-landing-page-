/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"], // tells Tailwind to scan all html/js files
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

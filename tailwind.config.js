/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")({strategy:"class"})],
  extend: {
    // Define your custom colors here
    colors: {
      customBlue: '#9DE9F7',
    },
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        coinsB: "linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)",
        rgba: "rgba(64, 64, 64, 0.3)",
      },
    },
  },
  plugins: [],
};

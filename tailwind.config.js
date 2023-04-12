/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        grayishBlue: "hsl(237, 18%, 59%)",
        softRed: "hsl(345, 95%, 68%)",
        white: "hsl(0, 0%, 100%)",
        DarkDesaturatedDlue: "hsl(236, 21%, 26%)",
        veryDarkBlue: "hsl(235, 16%, 14%)",
        veryDarkBlueBlack: "hsl(234, 17%, 12%)",
      },
    },
  },
  plugins: [],
};

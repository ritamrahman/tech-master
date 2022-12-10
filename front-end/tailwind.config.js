/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    colors: {
      white: "#F5F9FF",
      dimWhite: "#e8e9eb",
      midnight: "#0D1117",
      fadeMidNight: "#161B22",
      black: "#1F2428",
      darkText: "#969BA5",
      gs: "#4CA5FF",
      ge: "#B374F8",
      errorMsg: "#f57a76",
      successMsg: "#79d452",
      goldText: "#FCD34D",
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/forms")],
};

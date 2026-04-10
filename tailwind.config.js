/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#004225",
        primaryDark: "#002B18",
        brandGold: "#C9A227",
        background: "#FDFCF0",
        card: "#FCFCFA",
        button: "#C9A227",
        iconBg: "#BDBD9D",
        favorite: "#ECE8B9"
      },
      borderRadius: {
        md: "8px",
        lg: "12px"
      },
      boxShadow: {
        soft: "0px 4px 12px rgba(0,0,0,0.05)"
      }
    }
  },
  plugins: [],
}

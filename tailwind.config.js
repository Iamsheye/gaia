module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00995F",
        dark: "#333333",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        changeBg: {
          "0%": { background: "#ee6055" },
          "25%": { background: "#60d394" },
          "50%": { background: "#aaf683" },
          "75%": { background: "#ffd97d" },
          "100%": { background: "#ff9b85" },
        },
        changetext: {
          "0%": { color: "#ee6055" },
          "25%": { color: "#60d394" },
          "50%": { color: "#aaf683" },
          "75%": { color: "#ffd97d" },
          "100%": { color: "#ff9b85" },
        },
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        changeBg: "changeBg 5s infinite",
        wave: "wave 2s linear infinite",
      },
    },
  },
  plugins: [],
};

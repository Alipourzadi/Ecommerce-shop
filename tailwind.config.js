/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      yekanThin: ["iranyekan-thin", "sans-serif"],
      yekanLight: ["iranyekan-light", "sans-serif"],
      yekan: ["iranyekan", "sans-serif"],
      yekanMedium: ["iranyekan-medium", "sans-serif"],
      yekanBold: ["iranyekan-bold", "sans-serif"],
      yekanExtraBold: ["iranyekan-extrabold", "sans-serif"],
      yekanBlack: ["iranyekan-black", "sans-serif"],
      yekanExtraBlack: ["iranyekan-extrablack", "sans-serif"],
    },
    extend: {
      keyframes: {
        vibrate: {
          "0% ,50% ,100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(10px)" },
          "75%": { transform: "translateX(-10px)" },
        },
        appearance: {
          "0%": { opacity: "0", transform: "translateY(100%)" },
          "50%": { opacity: "0.5", transform: "translateY(50%)" },
          "100%": { opacity: "1", transform: "translateY(0%)" },
        },
      },
      animation: {
        vibrate: "vibrate 0.25s linear ",
        appearance: "appearance 0.1s linear ",
      },
    },
  },
  plugins: [
    // ...
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};

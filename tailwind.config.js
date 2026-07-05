/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}", // if using the app router
  ],
  theme: {
    extend: {
      keyframes: {
        "mouse-wheel": {
          "0%": { top: "29%" },
          "15%": { top: "50%" },
          "50%": { top: "50%" },
          "100%": { top: "29%" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.5s ease forwards",
        "mouse-wheel": "mouse-wheel 2s linear infinite",
      },
    },
  },
  plugins: [],
};

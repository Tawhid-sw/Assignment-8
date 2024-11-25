/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Quicksand: ["Quicksand", "sans-serif"],
      },
      screens: {
        md: "880px",
      },
      colors: {
        prime: "#9538E2",
      },
    },
  },
  plugins: [],
};

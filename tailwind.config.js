/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4B5EFC",
        secondary: "#2E2F38",
      },
      boxShadow: {
        input: "0 0 0px 2px white, 0 0 0px 4px #4B5EFC",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundImage: {
        pattern: `linear-gradient(rgba(0, 0, 0, .1) 2px, transparent 2px), linear-gradient(90deg, rgba(0, 0, 0, .1) 1px, transparent 1px);`,
      },
      backgroundSize: {
        pattern: "80px 80px, 80px 80px",
      },
      backgroundPosition: {
        pattern: "-2px -2px, -2px -2px, -1px -1px, -1px -1px",
      },
      animation: {
        list: "completed 1s linear",
      },
      keyframes: {
        completed: {
          "0%, 70%": {
            scale: "1",
            rotate: "0deg",
          },
          "10%, 70%": {
            scale: "1.02",
            rotate: "1deg",
          },
          "100%": {
            scale: "1",
            rotate: "0deg",
          },
        },
      },
    },
  },
  plugins: [],
};

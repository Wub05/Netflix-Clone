/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "red",
        secondary: "blue",
      },
      scale: {
        1.08: "1.08",
        1.09: "1.09",
      },
      backgroundImage: {
        fadeOut:
          "linear-gradient(180deg, transparent, rgb(37, 37, 37, 0.91),#111)",
      },
    },
  },
  plugins: [],
};

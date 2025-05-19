import { colors } from "@mui/material";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "red",
      },
      backgroundImage: {
        fadeOut:
          "linear-gradient(180deg, transparent, rgba(37,37,37,0.91), #111)",
      },
    },
  },
  plugins: [],
};

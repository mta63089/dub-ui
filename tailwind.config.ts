import type { Config } from "tailwindcss";

const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {},
      keyframes: {},
      animation: {},
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;

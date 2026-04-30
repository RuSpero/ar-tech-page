import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f766e",
        secondary: "#0f172a", // negro azulado
        accent: "#38bdf8", // azul suave
      },
    },
  },
  plugins: [],
};

export default config;
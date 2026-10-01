import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        buggy: {
          base: "#0f172a",
          surface: "#0f172a",
          border: "rgba(51, 65, 85, 0.6)",
          inactive: "#94a3b8",
          blue: "#3b82f6",
          blueLight: "#60a5fa",
          primary: "#f8fafc"
        }
      }
    }
  },
  plugins: []
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-pink": "#FF007F",
        "brand-purple": "#7000FF",
        "brand-cyan": "#00E5FF",
        "deep-space": "#050505",
      },
      fontFamily: {
        orbitron: ["var(--font-orbitron)", "sans-serif"],
        "space-grotesk": ["var(--font-space-grotesk)", "sans-serif"],
      },
      animation: {
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "star-twinkle": "star-twinkle 3s ease-in-out infinite",
        // 👇 YE NAYA ADD KIYA HAI (Train chalane ke liye)
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        // 👇 YE BHI NAYA HAI (Train ka rasta)
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 20px rgba(255, 0, 127, 0.5)" },
          "50%": { opacity: "0.8", boxShadow: "0 0 40px rgba(255, 0, 127, 0.8)" },
        },
        "star-twinkle": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
        glitch: {
          "0%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(2px, -2px)" },
          "60%": { transform: "translate(-2px, -2px)" },
          "80%": { transform: "translate(2px, 2px)" },
          "100%": { transform: "translate(0)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
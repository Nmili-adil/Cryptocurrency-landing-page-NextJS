/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        crypto: {
          purple: "#7C3AED",
          "purple-light": "#A78BFA",
          "purple-dark": "#4C1D95",
          cyan: "#06B6D4",
          "cyan-light": "#67E8F9",
          gold: "#F59E0B",
          "gold-light": "#FCD34D",
          dark: "#0A0A0F",
          "dark-2": "#0F0F1A",
          "dark-3": "#14142B",
          "card": "#111127",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "ticker": "ticker 30s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(124,58,237,0.4)" },
          "50%": { boxShadow: "0 0 60px rgba(124,58,237,0.8), 0 0 100px rgba(6,182,212,0.4)" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.3) 0%, rgba(6,182,212,0.1) 40%, transparent 70%)",
        "card-gradient": "linear-gradient(135deg, rgba(124,58,237,0.1) 0%, rgba(6,182,212,0.05) 100%)",
        "glow-purple": "radial-gradient(circle, rgba(124,58,237,0.6) 0%, transparent 70%)",
        "glow-cyan": "radial-gradient(circle, rgba(6,182,212,0.6) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};

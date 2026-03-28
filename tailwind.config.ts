import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "arcade-black": "#0a0a0a",
        "arcade-yellow": "#FFD700",
        "arcade-white": "#FFFFFF",
        "arcade-gray": "#1a1a1a",
        "arcade-darkgray": "#111111",
        "arcade-green": "#00ff41",
        "arcade-red": "#ff2222",
        "arcade-cyan": "#00ffff",
      },
      fontFamily: {
        pixel: ["var(--font-pixel)", "monospace"],
        terminal: ["var(--font-terminal)", "monospace"],
      },
      animation: {
        blink: "blink 1s step-end infinite",
        marquee: "marquee 30s linear infinite",
        flicker: "flicker 4s infinite",
        glitch: "glitch 0.4s infinite",
        "neon-pulse": "neonPulse 2s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "fade-in-up-2": "fadeInUp 0.8s ease-out 0.2s both",
        "fade-in-up-3": "fadeInUp 0.8s ease-out 0.4s both",
        "fade-in-up-4": "fadeInUp 0.8s ease-out 0.6s both",
        "fade-in": "fadeIn 1s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "pixel-pulse": "pixelPulse 2s ease-in-out infinite",
        "text-flicker": "textFlicker 3s infinite",
        "border-glow": "borderGlow 2s ease-in-out infinite",
        "scan-line": "scanLine 6s linear infinite",
        "float-up": "floatUp 3s ease-in-out infinite",
        "charge": "charge 2s ease-in-out forwards",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(100vw)" },
          "100%": { transform: "translateX(-100%)" },
        },
        flicker: {
          "0%, 90%, 100%": { opacity: "1" },
          "91%": { opacity: "0.8" },
          "92%": { opacity: "1" },
          "93%": { opacity: "0.5" },
          "94%": { opacity: "1" },
          "95%": { opacity: "0.9" },
        },
        glitch: {
          "0%, 100%": { transform: "translate(0,0)", filter: "none" },
          "20%": { transform: "translate(-3px, 1px)", filter: "hue-rotate(90deg)" },
          "40%": { transform: "translate(3px, -1px)", filter: "hue-rotate(180deg)" },
          "60%": { transform: "translate(-2px, 2px)", filter: "none" },
          "80%": { transform: "translate(2px, -2px)", filter: "hue-rotate(270deg)" },
        },
        neonPulse: {
          "0%, 100%": {
            textShadow:
              "0 0 4px #FFD700, 0 0 8px #FFD700, 0 0 16px #FFD700, 0 0 32px #FFD700",
          },
          "50%": {
            textShadow:
              "0 0 8px #FFD700, 0 0 16px #FFD700, 0 0 32px #FFD700, 0 0 64px #FFD700, 0 0 100px rgba(255,215,0,0.5)",
          },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideInLeft: {
          from: { opacity: "0", transform: "translateX(-30px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        pixelPulse: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(255,215,0,0.5)" },
          "50%": { boxShadow: "0 0 0 10px rgba(255,215,0,0)" },
        },
        textFlicker: {
          "0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%": { opacity: "1" },
          "20%, 24%, 55%": { opacity: "0.6" },
        },
        borderGlow: {
          "0%, 100%": {
            boxShadow:
              "4px 4px 0 #FFD700, -4px -4px 0 #FFD700, 4px -4px 0 #FFD700, -4px 4px 0 #FFD700, 0 0 8px rgba(255,215,0,0.3)",
          },
          "50%": {
            boxShadow:
              "4px 4px 0 #FFD700, -4px -4px 0 #FFD700, 4px -4px 0 #FFD700, -4px 4px 0 #FFD700, 0 0 30px rgba(255,215,0,0.8), 0 0 60px rgba(255,215,0,0.4)",
          },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)", opacity: "0.3" },
          "100%": { transform: "translateY(100vh)", opacity: "0.3" },
        },
        floatUp: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        charge: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // User custom color combinations
        cream: "#E6F2DD",
        creamdeep: "#B1D3B9",
        sage: "#88BDA4",
        sagedeep: "#659287",
        ink: "#1B1B18",
        inksoft: "#54524A",
        violet: "#7C6CF6",
        violetdeep: "#5B4CD6",
        coral: "#FF7A59",
        mint: "#3DD9B3",
        skyblue: "#5EA0F7",
        // kept for chart contrast on the light bg
        cardline: "rgba(27,27,24,0.08)",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["Inter", "sans-serif"],
        ui: ["Inter", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 60px -15px rgba(91,76,214,0.25)",
        card: "0 2px 24px rgba(27,27,24,0.06)",
      },
      borderRadius: {
        blob: "42% 58% 65% 35% / 45% 40% 60% 55%",
      },
    },
  },
  plugins: [],
};

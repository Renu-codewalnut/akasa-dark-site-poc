module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100vw)" },
          "100%": { transform: "translateX(-99%)" },
        },
      },
      animation: {
        marquee: "marquee 15s linear infinite",
      },
      backgroundImage: {},
      colors: {
        "background-primary": "#F5F5F5",
        "background-secondary": "#E1E1DF",
      },
      fontFamily: {},
    },
  },
  plugins: [],
};

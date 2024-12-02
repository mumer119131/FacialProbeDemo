module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#01d17b",
        lightPrimary: "#3399FF",
        darkGray: "#333F48",
        lightGray: "#D9D9D9",
        orange: "#FFA500",
        green: "#3E9E3D",
        red: "#FF0000",
        white: "#FFFFFF",
        black: "#000000",
        background: "#111",
      },
      screens: {
        "dark-mode": { raw: "(prefers-color-scheme: dark)" },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["black"],
      borderColor: ["black"],
      textColor: ["black"],
    },
  },
  plugins: [require("tailwindcss-dark-mode")()],
};

// White: #FFFFFF
// Pale pink: #F5DAD9
// Lavender: #BDB0FF
// Light blue: #B5EAEA
// Neon green: #39FF14
// Hot pink: #FF69B4
// Gold: #FFD700
// Silver: #C0C0C0
// Terracotta: #E2725B
// Deep burgundy: #800020

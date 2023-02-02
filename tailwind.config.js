module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
      },
      height: {
        "48/100": "48%",
        "7/100": "7%",
        "10/100": "10%",
        "90/100": "90%",
        "95/100": "95%",
        "93/100": "93%",
      },
      screens: {
        xs: " 0px",
        sm: "600px",
        // => @media (min-width: 640px) { ... }

        md: "900px",
        // => @media (min-width: 768px) { ... }

        lg: "1200px",
        // => @media (min-width: 1024px) { ... }

        xl: "1536px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
      },
      screen: {
        xs: { max: "575px" }, // Mobile (iPhone 3 - iPhone XS Max).
        sm: { min: "576px", max: "897px" }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
      },
    },
  },
  plugins: [],
};

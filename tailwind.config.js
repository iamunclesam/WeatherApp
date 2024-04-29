
// eslint-disable-next-line no-undef
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}", 'node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins",
      },
    },
  },
  colors: {
    "locked-overlay":
      "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 2.60%, #FFF 37.50%)",
    // cream: "#FFFDD0",
    "primary": "#F3BA2F",
    "cream": "#FFFDD0",
    cindigo: "rgba(11, 70, 84, 1)",
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('flowbite/plugin')
  ],
};

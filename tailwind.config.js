module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { sans: ["Poppins", "sans-serif"] },
  },
  plugins: [require("flowbite/plugin")],
};
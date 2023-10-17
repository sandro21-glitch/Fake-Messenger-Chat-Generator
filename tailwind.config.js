/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        teal: "#085f63",
        modalHeader: "#f0f0f0",
        fbBlue: "#0084ff",
        fbLightBlue: "#1da1f2",
      },
      fontSize: {
        heading: "13px",
        labels: "11px",
        icons: "13px",
      },
      backgroundImage: {
        liveboxBg: "url('https://fakedetail.com/assets/images/pattern.png')",
      },
      boxShadow: {
        shadowBottom: "0px 2px 2px rgba(0, 0, 0, .1)",
      },
    },
  },
  plugins: [],
};

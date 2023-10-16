/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        teal: "#085f63",
      },
      fontSize: {
        heading: "14px",
        labels: "12px",
      },
    },
  },
  plugins: [],
};

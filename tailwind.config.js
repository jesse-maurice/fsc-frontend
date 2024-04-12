/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          101: "#D6DBE5",
          102: "#97A5BD",
          103: "#526992",
          104: "#304B7C",
          105: "#283E67",
          106: "#18253E",
          107: "#0A0F19",
        },
        yellow: {
          101: "#FFFFE5",
          102: "#E7D9AA",
          103: "#CEB255",
          104: "#B68C00",
          105: "#987500",
          106: "#5B4600",
          107: "#241C00",
        },
        red: {
          101: "#FFE5E5",
          102: "#FFC2C2",
          103: "#FF6666",
          104: "#FF0000",
          105: "#B30000",
          106: "#800000",
          107: "#330000",
        },
        white: {
          100: "#fff",
          110: "#EEEEEE",
          115: "#EBEEEF",
          120: "#E1E3E2",
          130: "#E6F5EA",
          140: "#EBFDF3",
          200: "#f2f2f2",
        },
        primary: "#041D3E",
        secondary: "#D9920D",
        gray: "#101010",
        Error: "#FF0505",
        Success: "#01AF47",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        geo: ["Geologica", 'sans-serif']
      },
      fontSize: {
        heading1: "64px",
        heading2: "54px",
        subHeading: "20px",
        body: "16px",
        small: "16px",
        button: "24px",
        subSubHeading: "32px",
      },
      fontWeight: {
        ppReg: 400,
        ppB: 600,
        ppEB: 900,
        gcReg: 400,
        gcB: 600,
        gcEB: 900,
      },
    },
  },
  plugins: [],
};
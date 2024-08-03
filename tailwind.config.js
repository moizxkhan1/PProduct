/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8B6CEA",
        secondary: "#161C2D",
        divBg: "#8B6CEA26",
        main: "#F7F5FF",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
      },
      fontSize: {
        heading: ["54px", { lineHeight: "1.2", fontWeight: "700" }],
        subheading: ["32px", { lineHeight: "1.2", fontWeight: "700" }],
        subheadingPrimary: ["32px", { lineHeight: "1.2", fontWeight: "800" }],
        breadcrumb: ["24px", { lineHeight: "1.2", fontWeight: "700" }],
        timeline: ["18px", { lineHeight: "1.2", fontWeight: "700" }],
        label: ["18px", { lineHeight: "21.6px", fontWeight: "600" }],
        logo: ["24px", { lineHeight: "1.2", fontWeight: "700" }],
        footer: ["15px", { lineHeight: "1.2", fontWeight: "600" }],
        input: ["16px", { lineHeight: "1.2", fontWeight: "500" }],
        checkout: ["16px", { lineHeight: "19.2px", fontWeight: "600" }],
        normal: ["20px", { lineHeight: "24px", fontWeight: "400" }],
        normalSecondary: ["19px", { lineHeight: "32px", fontWeight: "400" }],
        button: ["18px", { lineHeight: "1.2", fontWeight: "700" }],
      },
      container: {
        center: true,
        padding: "5%",
      },
    },
  },
  plugins: [],
};

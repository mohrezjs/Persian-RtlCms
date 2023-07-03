/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                // dark colors
                darkCard: "#292f45",
                darkText: "#fcfbff",
                darkSkinnyText: "#4f5771",
                darkBack: "#141c31",
                darkBlue: "#0da6ff",
                darkBlue2: "#128eda",

                // light colors
                lightCard: "#fff",
                lightText: "#0f172a",
                lightSkinnyText: "#64748b",
                lightBack: "#ecedef",
                lightPurple: "#6625ff",
                lightPurple2: "#d0cef7",
            },

            fontFamily: {
                yekanReg: "yekanReg",
                yekanMed: "yekanMed",
                yekanLight: "yekanLight",
                yekanFat: "yekanFat",
                YekanBakhBold: "YekanBakhBold",
            },
        },
    },
    plugins: [require("tailwindcss-rtl")],
};

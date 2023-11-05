/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./components/**/*.{vue,js,ts,jsx,tsx}", "./pages/**/*.{vue,js,ts,jsx,tsx}",],
    theme: {
        screens: {
            md: "843px",
            lg: "1280px",
        },
        colors: {
            black: "#2B2B2B",
            gray: "#3B3B3B",
            "gray-light": "#858584",
            "gray-100": "#CCCCCC",
            white: "#FFFFFF",
            purple: "#A259FF",
        },
        fontFamily: {
            main: ["Work Sans"],
            second: ["Space Mono"],
        },
        fontSize: {
            sm: ["0.75rem", "0.825rem"],
            base: ["1rem", "1.4rem"],
            xl: ["1.375rem", "1.925rem"],
            "2xl": ["1.75rem", "2.45rem"],
            "3xl": ["2.375rem", "2.85rem"],
            "4xl": ["3.1875rem", " 3.5rem"],
            "5xl": ["4.1875rem", "4.6rem"],
        },
        borderRadius: {
            none: 0,
            sm: "0.125rem",
            md: "0.375rem",
            lg: "0.5rem",
            xl: "0.75rem",
            DEFAULT: "1.25rem",
            full: "9999px",
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "1.87rem",
                md: "4.5rem",
                lg: "7.2rem",
            },
        },
        extend: {},
    },
    plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
        "./src/app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                "primary-dark-blue": "#121921",
                "primary-blue": "#242F42",
                "primary-light=orange": "#FC9727",
                "primary-orange": "#E67A01",
                "secondary-blue": "#007EB9",
                "secondary-orange": "#FF5900",
                "secondary-red": "#B2341F",
                "gray-1": "#D6D6D6",
                "gray-2": "#E9EAEC",
                "gray-3": "#F7F7F7",
            },
        },
    },
    plugins: [],
};

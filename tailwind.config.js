/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            backgroundImage: {
                'hero-primary': 'url("/images/bg-primary.jpg")',
                'hero-secondary': 'url("/images/bg-secondary.jpg")',
                'hero-error': 'url("/images/bg-error.png")',
            }
        },
    },
    plugins: [require("daisyui")],

    daisyui: {
        themes: [
            "night",
            "winter",
        ],
        darkTheme: "night",
    }
};

import type { Config } from "tailwindcss";

const fontConfig = {
    nunito: "var(--font-nunito)",
};

const config = {
    darkMode: ["class"],
    content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },

        screens: {
            sm: "640px",

            md: "768px",

            lg: "1024px",

            xl: "1280px",

            "2xl": "1536px",

            "3xl": "1601px",

            massive: "1600px",

            "4xl": "2560px",
        },
        extend: {
            fontFamily: {
                ...fontConfig,
            },
            colors: {
                primary: "#141414",
                secondary: "#262626",
                placeholder: "#d9d9d9",
                white: "#ffffff",
                gray: "#C5C1C2",

                success: "#00975C",
                error: "#bd0a0a",
                lines: "#00000026",
                green: {
                    light: "#00a64c",
                    medium: "#008545",
                    strong: "#00531f",
                    dark: "#013318",
                },
            },
            backgroundImage: {},
            keyframes: {
                "caret-blink": {
                    "0%,70%,100%": { opacity: "1" },
                    "20%,50%": { opacity: "0" },
                },
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                smoothBounce: {
                    "0%, 100%": { transform: "translateY(0)" }, // Posição inicial e final
                    "50%": { transform: "translateY(-10px)" }, // Posição intermediária mais suave
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "caret-blink": "caret-blink 1.25s ease-out infinite",
                smoothBounce: "smoothBounce 1.8s infinite",
            },
        },
    },
    plugins: [require("tailwindcss-animate"), require("@khoohaoyit/tailwind-grid-center")],
} satisfies Config;

export default config;

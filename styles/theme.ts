import { extendTheme } from "@chakra-ui/react";
import { Autour_One, DM_Sans, PT_Serif, Poppins } from "next/font/google";

export const dmSans = DM_Sans({
    subsets: ["latin"],
    variable: "--dm-sans",
    weight: ["400", "500", "700"],
    style: ["normal", "italic"],
    fallback: ["system-ui", "arial"],
});
export const poppins = Poppins({
    subsets: ["latin"],
    variable: "--font-poppins",
    weight: ["300", "400", "500", "600", "700", "900"],
    style: ["normal", "italic"],
    fallback: ["system-ui", "arial"],
});

export const autour = Autour_One({
    subsets: ["latin"],
    weight: ["400"],
});

export const ptSerif = PT_Serif({
    subsets: ["latin"],
    variable: "--pt-serif",
    weight: ["400", "700"],
    style: ["normal", "italic"],
    fallback: ["system-ui", "arial"],
});

export const theme = extendTheme({
    fonts: {
        heading: ptSerif.style.fontFamily,
        body: dmSans.style.fontFamily,
    },
    colors: {
        brand: {
            orange: {
                100: "#ff9966",
                200: "#f5bb84",
                500: "#dc785d", // For colorScheme solid color
                600: "#e2842f",
                700: "#e98b4d",
                10: "#c94f47",
            },
            brown: {
                500: "#c07253", // For colorScheme solid color
            },
            blue: {
                100: "#16a0ce",
                500: "#84bcc0",
                600: "#95d5dd",
                10: "#1f303a",
            },
            gray: {
                500: "#cebaab",
            },
            yellow: {
                100: "#f3ca3f",
                200: "#f5e04f",
                500: "#e5bd66",
                600: "#eed173",
            },
            black: {
                100: "#1b1c1d",
            },
            purple: {
                100: "#c78db5",
                200: "#a04f89",
                500: "#9f2d9d",
            },
        },
    },
    styles: {
        global: {
            body: {
                color: "brand.black.100",
            },
        },
    },
});

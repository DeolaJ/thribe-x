import { extendTheme } from "@chakra-ui/react";
import { DM_Sans, PT_Serif } from "next/font/google";

export const dmSans = DM_Sans({
    subsets: ["latin"],
    variable: "--dm-sans",
    weight: ["400", "500", "700"],
    style: ["normal", "italic"],
    fallback: ["system-ui", "arial"],
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
                500: "#dc785d", // For colorScheme solid color
            },
            brown: {
                500: "#c07253", // For colorScheme solid color
            },
            blue: {
                500: "#84bcc0",
            },
            gray: {
                500: "#cebaab",
            },
            yellow: {
                100: "#f3bf40",
                500: "#e5bd66",
            },
            black: {
                100: "#1b1c1d",
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

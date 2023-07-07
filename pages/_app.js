import Head from "next/head";
import { ChakraProvider, Box } from "@chakra-ui/react";
import PlausibleProvider from "next-plausible";
import { AnimatePresence } from "framer-motion";

import { theme } from "../styles/theme";

import scatter from "../public/images/background/scatter.svg";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="icon" type="image/jpeg" href="/logo.jpeg" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <ChakraProvider theme={theme}>
                <AnimatePresence mode="wait">
                    <Box
                        bgImage={`url(${scatter.src})`}
                        bgRepeat={{ base: "repeat", md: "round" }}
                        backgroundSize={{ base: "1000px 60vh", xl: "initial" }}
                    >
                        <PlausibleProvider domain="thribe-x.com" enabled selfHosted>
                            <Component {...pageProps} />
                        </PlausibleProvider>
                    </Box>
                </AnimatePresence>
            </ChakraProvider>
        </>
    );
}

import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";

import { theme } from "../styles/theme";

export default function App({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <AnimatePresence mode="wait">
                <Component {...pageProps} />
            </AnimatePresence>
        </ChakraProvider>
    );
}

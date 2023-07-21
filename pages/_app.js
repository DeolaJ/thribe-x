import Head from "next/head";
import { useState } from "react";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ChakraProvider, Box } from "@chakra-ui/react";
import PlausibleProvider from "next-plausible";
import { AnimatePresence } from "framer-motion";

import { theme } from "../styles/theme";

import scatter from "../public/images/background/scatter.svg";

export default function App({ Component, pageProps }) {
    const [supabaseClient] = useState(() => createPagesBrowserClient());

    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        refetchOnWindowFocus: false,
                    },
                },
            })
    );

    return (
        <>
            <Head>
                <link rel="icon" type="image/jpeg" href="/logo.jpeg" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <SessionContextProvider
                supabaseClient={supabaseClient}
                initialSession={pageProps.initialSession}
            >
                <QueryClientProvider client={queryClient}>
                    <Hydrate state={pageProps.dehydratedState}>
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
                    </Hydrate>
                    <ReactQueryDevtools initialIsOpen={false} />
                </QueryClientProvider>
            </SessionContextProvider>
        </>
    );
}

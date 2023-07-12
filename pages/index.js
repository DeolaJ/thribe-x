import Head from "next/head";
import { Box, Text } from "@chakra-ui/react";

import Header from "../src/components/Header";
import Hero from "../src/components/home/Hero";
import About from "../src/components/home/About";
import Teams from "../src/components/home/Teams";
import DNA from "../src/components/home/DNA";
import DrivingForce from "../src/components/home/DrivingForce";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";
import ChakraNextLink from "../src/components/ChakraNextLink";

export default function Home() {
    return (
        <>
            <Head>
                <title>Thribe-X</title>
                <meta
                    name="description"
                    content="Welcome to Thribe-X, The Youthful Expression of The Covenant Nation, Iganmu"
                />
                <meta
                    name="keywords"
                    content="thribe-x, covenant nation, youth, youth church, thribe x"
                />
            </Head>

            <>
                <Header
                    bgImage="linear-gradient(to right, brand.purple.500, brand.orange.100, brand.purple.500)"
                    isLight
                />
                <Hero />
                <About />
                <Teams bgColor="brand.orange.100" />
                <DNA />
                <DrivingForce bgColor="brand.purple.200" />

                {/* Banner for Small groups */}
                <Box
                    as="section"
                    pt={{ base: "14", md: "16" }}
                    pb={{ base: "14", md: "16" }}
                    px={{ base: "6", md: "12" }}
                    // bg="brand.blue.600"
                    bg="brand.yellow.100"
                    mixBlendMode="multiply"
                >
                    <Box maxW={480} mx="auto">
                        <Text
                            fontSize={{ base: "lg", md: "2xl" }}
                            fontWeight={500}
                            textAlign="center"
                        >
                            {`Registrations to join a small group will close on July 30th. To register, click `}
                            <ChakraNextLink href="/small-groups" fontWeight={700}>
                                here
                            </ChakraNextLink>
                        </Text>
                    </Box>
                </Box>
                {/*  */}

                <Contact />
                <Footer />
            </>
        </>
    );
}

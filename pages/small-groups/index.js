import Head from "next/head";

import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";

import Hero from "../../src/components/small-groups/Hero";
import About from "../../src/components/small-groups/About";
import WhyJoinUs from "../../src/components/small-groups/WhyJoinUs";
import Contact from "../../src/components/small-groups/Contact";
import Groups from "../../src/components/small-groups/Groups";
import FAQs from "../../src/components/small-groups/FAQs";
import { Box, Text } from "@chakra-ui/react";
import ChakraNextLink from "../../src/components/ChakraNextLink";

export default function SmallGroups() {
    return (
        <>
            <Head>
                <title>Thribe-X | Small groups</title>
                <meta
                    name="description"
                    content="Welcome to The Glass House, where our small groups embody the principles of openness, transparency, support, growth, fostering personal and collective development in a fun and engaging way!"
                />
                <meta
                    name="keywords"
                    content="thribe-x, covenant nation, youth, youth church, glass house, small groups, thribe-x small groups"
                />
            </Head>
            <>
                <Header />
                <Hero />
                <About />
                <WhyJoinUs />
                <Groups />
                {/* Banner for Small groups */}
                <Box
                    as="section"
                    pt={{ base: "10", md: "12" }}
                    pb={{ base: "10", md: "12" }}
                    px={{ base: "6", md: "12" }}
                    // bg="brand.blue.600"
                    bg="brand.yellow.100"
                    mixBlendMode="multiply"
                >
                    <Box maxW={480} mx="auto">
                        <Text
                            fontSize={{ base: "lg", md: "xl" }}
                            fontWeight={500}
                            textAlign="center"
                        >
                            {`If you have registered, feel free to generate a social media flyer `}
                            <ChakraNextLink href="/small-groups/flyers" fontWeight={700}>
                                here
                            </ChakraNextLink>
                        </Text>
                    </Box>
                </Box>
                <FAQs />
                <Contact />
                <Footer />
            </>
        </>
    );
}

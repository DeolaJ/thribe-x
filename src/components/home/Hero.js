import { Heading, Text, Box, ButtonGroup, Center, Link } from "@chakra-ui/react";

import PrimaryButton from "../button/PrimaryButton";

function Hero() {
    return (
        <Box
            as="section"
            bgColor="brand.gray.500"
            pt={{ base: "52", md: "60" }}
            pb={{ base: "24", md: "72" }}
            px={{ base: "8", md: "16" }}
            bgImage="linear-gradient(to right, brand.purple.500, brand.orange.100, brand.purple.500)"
            mixBlendMode="multiply"
        >
            <Center maxW="8xl" mx="auto">
                <Box flexDir="column" mb={{ base: "14", md: "0" }} textAlign="center" color="white">
                    <Heading
                        fontWeight={700}
                        fontSize={{ base: "3xl", sm: "5xl", md: "6xl", xl: "8xl" }}
                        lineHeight={{ base: "1.125", md: "1.25" }}
                    >
                        Welcome to Thribe-X
                    </Heading>
                    <Text
                        fontSize={{ base: "md", md: "xl" }}
                        mt="3"
                        mb="5"
                        maxW={{ base: "300px", sm: "450px", md: "initial" }}
                        mx="auto"
                        lineHeight={{ base: "short", md: "shorter" }}
                    >
                        We are the youthful expression of the Covenant Nation, Iganmu Campus.
                    </Text>
                    <ButtonGroup
                        alignItems={{ base: "flex-start", lg: "center" }}
                        gap="3"
                        flexDir={{ base: "column", lg: "row" }}
                    >
                        <Link
                            href="https://bit.ly/thribe-x"
                            rel="noopener noreferrer"
                            isExternal
                            target="_blank"
                            fontSize="sm"
                            _hover={{ textDecoration: "none" }}
                        >
                            <PrimaryButton size="lg">Join us</PrimaryButton>
                        </Link>
                    </ButtonGroup>
                </Box>
            </Center>
        </Box>
    );
}

export default Hero;

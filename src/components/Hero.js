import { Heading, Text, Box, ButtonGroup, Center, Link } from "@chakra-ui/react";

import PrimaryButton from "./button/PrimaryButton";

function Hero() {
    return (
        <Box
            as="section"
            bgColor="brand.gray.500"
            py={{ base: "24", md: "60" }}
            px={{ base: "12", md: "16" }}
        >
            <Center maxW="8xl" mx="auto">
                <Box flexDir="column" mb={{ base: "14", md: "0" }} textAlign="center">
                    <Heading
                        fontWeight={700}
                        fontSize={{ base: "5xl", sm: "6xl", md: "8xl" }}
                        lineHeight={{ base: "1.125", md: "1.25" }}
                    >
                        Welcome to Thribe-X
                    </Heading>
                    <Text
                        fontSize={{ base: "lg", md: "xl" }}
                        mt="7"
                        mb="7"
                        maxW={{ base: "300px", sm: "450px", md: "initial" }}
                        mx="auto"
                        lineHeight="shorter"
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

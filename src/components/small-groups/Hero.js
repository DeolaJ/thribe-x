import Image from "next/image";
import { Heading, Text, Box, ButtonGroup, Link, Grid, GridItem } from "@chakra-ui/react";

import SecondaryButton from "../button/SecondaryButton";

function Hero() {
    return (
        <Box
            as="section"
            pt={{ base: "12", md: "60" }}
            pb={{ base: "10", md: "48" }}
            px={{ base: "6", md: "16" }}
        >
            <Grid
                templateColumns={{ base: "1fr", md: "1.2fr 1fr" }}
                mx="auto"
                maxW="8xl"
                alignItems="center"
                placeContent="center"
            >
                <GridItem>
                    <Box textAlign={{ base: "center", md: "left" }}>
                        <Heading
                            fontWeight={700}
                            maxW={{ md: 500 }}
                            fontSize={{ base: "3xl", sm: "5xl", md: "6xl", lg: "8xl" }}
                            lineHeight={{ base: "1.125", md: "1.125" }}
                        >
                            The Glass House
                        </Heading>
                        <Text
                            fontSize={{ base: "md", md: "xl" }}
                            mt="3"
                            mb="5"
                            lineHeight="shorter"
                            fontWeight={500}
                        >
                            Thribe-X small groups
                        </Text>
                        <ButtonGroup
                            alignItems="flex-start"
                            gap="3"
                            flexDir={{ base: "column", lg: "row" }}
                        >
                            <Link
                                href="https://forms.gle/Tw9eYJjykWzNg7689"
                                rel="noopener noreferrer"
                                isExternal
                                target="_blank"
                                fontSize="lg"
                                _hover={{ textDecoration: "none" }}
                            >
                                <SecondaryButton size="lg">Register</SecondaryButton>
                            </Link>
                        </ButtonGroup>
                    </Box>
                </GridItem>
                <GridItem h="100%" order={{ base: "-1", md: "1" }}>
                    <Box mx="auto" maxW="550px" mt={{ md: "12" }} w="100%">
                        <Image
                            width={2700}
                            height={2700}
                            src="https://res.cloudinary.com/dzpntisxj/image/upload/v1688124861/thribe-x/guard2_aoicbd.jpg"
                            alt="picture of floating body"
                            priority
                        />
                    </Box>
                </GridItem>
            </Grid>
        </Box>
    );
}

export default Hero;

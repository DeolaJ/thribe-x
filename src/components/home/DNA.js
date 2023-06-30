import Image from "next/image";
import { Text, Box, Grid, GridItem, Flex, Heading } from "@chakra-ui/react";

function DNA({ ...props }) {
    return (
        <Box
            as="section"
            pt={{ base: "24", md: "28" }}
            pb={{ base: "24", md: "40" }}
            px={{ base: "12", md: "16" }}
            {...props}
        >
            <Heading
                textAlign="center"
                size="xl"
                mb={{ base: "12", md: "24" }}
                textTransform="uppercase"
            >
                Our DNA
            </Heading>
            <Grid
                templateColumns={{ base: "1fr", md: "1fr 1.05fr 1fr" }}
                minH={{ md: "50vh", "2xl": "55vh" }}
                mx="auto"
                alignItems="center"
                maxW="8xl"
                placeContent="center"
            >
                <GridItem>
                    <Flex
                        flexDir="column"
                        gap="10"
                        alignItems="center"
                        mb={{ base: "16", md: "0" }}
                    >
                        <Text
                            fontSize={{ base: "sm", md: "md" }}
                            lineHeight="short"
                            p="4"
                            border="2px solid"
                            borderColor="brand.black.100"
                            maxW={{ base: "60", md: "48" }}
                            textAlign="center"
                        >
                            Meaningful organic relationships
                        </Text>
                        <Text
                            fontSize={{ base: "sm", md: "md" }}
                            lineHeight="short"
                            p="4"
                            border="2px solid"
                            borderColor="brand.black.100"
                            maxW={{ base: "60", md: "48" }}
                            textAlign="center"
                        >
                            Powerful praying communities
                        </Text>
                        <Text
                            fontSize={{ base: "sm", md: "md" }}
                            lineHeight="short"
                            p="4"
                            border="2px solid"
                            borderColor="brand.black.100"
                            maxW={{ base: "60", md: "48" }}
                            textAlign="center"
                        >
                            Spontaneous worshippers
                        </Text>
                    </Flex>
                </GridItem>
                <GridItem h="100%" mt="12" maxW="800px" mb={{ base: "4", md: "0" }}>
                    <Image
                        alt="picture of lady inspired by light"
                        src="https://res.cloudinary.com/dzpntisxj/image/upload/v1680716895/thribe-x/light_tfuzxv.png"
                        width={700}
                        height={840}
                    />
                </GridItem>
                <GridItem>
                    <Flex flexDir="column" gap="10" alignItems="center">
                        <Text
                            fontSize={{ base: "sm", md: "md" }}
                            lineHeight="short"
                            p="4"
                            border="2px solid"
                            borderColor="brand.black.100"
                            maxW={{ base: "60", md: "48" }}
                            textAlign="center"
                        >
                            Effective cell systems and small groups
                        </Text>
                        <Text
                            fontSize={{ base: "sm", md: "md" }}
                            lineHeight="short"
                            p="4"
                            border="2px solid"
                            borderColor="brand.black.100"
                            maxW={{ base: "60", md: "48" }}
                            textAlign="center"
                        >
                            Devoted bible scholars
                        </Text>
                        <Text
                            fontSize={{ base: "sm", md: "md" }}
                            lineHeight="short"
                            p="4"
                            border="2px solid"
                            borderColor="brand.black.100"
                            maxW={{ base: "60", md: "48" }}
                            textAlign="center"
                        >
                            Creative intellectuals
                        </Text>
                    </Flex>
                </GridItem>
            </Grid>
        </Box>
    );
}

export default DNA;

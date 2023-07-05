import Image from "next/image";
import {
    Text,
    Box,
    Grid,
    GridItem,
    Flex,
    Heading,
    Divider,
    AbsoluteCenter,
} from "@chakra-ui/react";

function DNA({ ...props }) {
    return (
        <Box
            as="section"
            pt={{ base: "24", md: "28" }}
            pb={{ base: "24", md: "40" }}
            px={{ base: "6", md: "16" }}
            {...props}
        >
            <Box maxW="8xl" mx="auto">
                <Heading
                    textAlign="center"
                    fontSize={{ base: "xl", md: "3xl" }}
                    mb={{ base: "8", md: "12" }}
                >
                    <Box position="relative" padding={{ md: "10" }}>
                        <Divider borderColor="black" />
                        <AbsoluteCenter px="4" bgColor="white">
                            Building blocks
                        </AbsoluteCenter>
                    </Box>
                </Heading>
                <Grid
                    templateColumns={{ base: "1fr", lg: "1fr 1.05fr 1fr" }}
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
                            mb={{ base: "10", lg: "0" }}
                        >
                            <Box
                                p="3"
                                border="2px solid"
                                borderColor="black"
                                maxW="60"
                                width={{ base: "100%", sm: "52", md: "56" }}
                            >
                                <Text
                                    bgColor="black"
                                    pt="3"
                                    px="1"
                                    pb="0"
                                    fontSize={{ base: "2xl", md: "4xl" }}
                                    color="white"
                                    fontWeight={700}
                                    mb="2"
                                    lineHeight="none"
                                    width="fit-content"
                                >
                                    01
                                </Text>
                                <Text fontSize={{ base: "md", md: "lg" }} lineHeight="1.2">
                                    Meaningful organic <br />
                                    relationships
                                </Text>
                            </Box>
                            <Box
                                p="3"
                                border="2px solid"
                                borderColor="black"
                                maxW="60"
                                width={{ base: "100%", sm: "52", md: "56" }}
                            >
                                <Text
                                    bgColor="black"
                                    pt="3"
                                    px="1"
                                    pb="0"
                                    fontSize={{ base: "2xl", md: "4xl" }}
                                    color="white"
                                    fontWeight={700}
                                    mb="2"
                                    lineHeight="none"
                                    width="fit-content"
                                >
                                    02
                                </Text>
                                <Text fontSize={{ base: "md", md: "lg" }} lineHeight="1.2">
                                    Effective cell systems <br />
                                    and small groups
                                </Text>
                            </Box>
                            <Box
                                p="3"
                                border="2px solid"
                                borderColor="black"
                                maxW="60"
                                width={{ base: "100%", sm: "52", md: "56" }}
                            >
                                <Text
                                    bgColor="black"
                                    pt="3"
                                    px="1"
                                    pb="0"
                                    fontSize={{ base: "2xl", md: "4xl" }}
                                    color="white"
                                    fontWeight={700}
                                    mb="2"
                                    lineHeight="none"
                                    width="fit-content"
                                >
                                    03
                                </Text>
                                <Text fontSize={{ base: "md", md: "lg" }} lineHeight="1.2">
                                    Powerful praying <br />
                                    communities
                                </Text>
                            </Box>
                        </Flex>
                    </GridItem>
                    <GridItem
                        h="100%"
                        mt="12"
                        maxW={{ base: "300px", lg: "800px" }}
                        mx="auto"
                        mb={{ base: "4", md: "0" }}
                        order={{ base: "-1", lg: "initial" }}
                    >
                        <Image
                            alt="picture of lady inspired by light"
                            src="https://res.cloudinary.com/dzpntisxj/image/upload/v1680716895/thribe-x/light_tfuzxv.png"
                            width={700}
                            height={840}
                        />
                    </GridItem>
                    <GridItem>
                        <Flex flexDir="column" gap="10" alignItems="center">
                            <Box
                                p="3"
                                border="2px solid"
                                borderColor="black"
                                maxW="60"
                                width={{ base: "100%", sm: "52", md: "56" }}
                            >
                                <Text
                                    bgColor="black"
                                    pt="3"
                                    px="1"
                                    pb="0"
                                    fontSize={{ base: "2xl", md: "4xl" }}
                                    color="white"
                                    fontWeight={700}
                                    mb="2"
                                    lineHeight="none"
                                    width="fit-content"
                                >
                                    04
                                </Text>
                                <Text fontSize={{ base: "md", md: "lg" }} lineHeight="1.2">
                                    Devoted bible <br />
                                    scholars
                                </Text>
                            </Box>
                            <Box
                                p="3"
                                border="2px solid"
                                borderColor="black"
                                maxW="60"
                                width={{ base: "100%", sm: "52", md: "56" }}
                            >
                                <Text
                                    bgColor="black"
                                    pt="3"
                                    px="1"
                                    pb="0"
                                    fontSize={{ base: "2xl", md: "4xl" }}
                                    color="white"
                                    fontWeight={700}
                                    mb="2"
                                    lineHeight="none"
                                    width="fit-content"
                                >
                                    05
                                </Text>
                                <Text fontSize={{ base: "md", md: "lg" }} lineHeight="1.2">
                                    Spontaneous <br />
                                    worshippers
                                </Text>
                            </Box>
                            <Box
                                p="3"
                                border="2px solid"
                                borderColor="black"
                                maxW="60"
                                width={{ base: "100%", sm: "52", md: "56" }}
                            >
                                <Text
                                    bgColor="black"
                                    pt="3"
                                    px="1"
                                    pb="0"
                                    fontSize={{ base: "2xl", md: "4xl" }}
                                    color="white"
                                    fontWeight={700}
                                    mb="2"
                                    lineHeight="none"
                                    width="fit-content"
                                >
                                    06
                                </Text>
                                <Text fontSize={{ base: "md", md: "lg" }} lineHeight="1.2">
                                    Creative <br />
                                    intellectuals
                                </Text>
                            </Box>
                        </Flex>
                    </GridItem>
                </Grid>
            </Box>
        </Box>
    );
}

export default DNA;

import Image from "next/image";
import { Heading, Text, Box, ButtonGroup, Link, Grid, GridItem } from "@chakra-ui/react";

import SecondaryButton from "../../button/SecondaryButton";

const questions = [
    "Are you an undergraduate student seeking a community of like-minded individuals who understand the unique challenges and opportunities of university life? Look no further! Welcome to NextGen, where we come together to support, inspire, and empower one another on our academic journeys.",
    "Being an undergraduate can be a lot!!! The good, the bad and the ugly as well as factors that pose to be antagonistic rather than supportive. It's a phase in life where one has to juggle things like relationships, faith, life, finance, purpose, commitments, etc with academics and still make headway with expectations of success from friends and family.",
    "Whether you're navigating challenging coursework, seeking study strategies, or exploring career paths, our community is here to support you. Engage in peer discussions, share insights, and access valuable resources to excel in your studies and make the most of your educational opportunities.",
];

function UndergraduatesGroup() {
    return (
        <>
            <Box
                as="section"
                pt={{ base: "14", md: "16" }}
                pb={{ base: "20", md: "24" }}
                px={{ base: "6", md: "16" }}
            >
                {/* Hero section */}
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
                                maxW={{ md: 600 }}
                                fontSize={{ base: "3xl", sm: "5xl", md: "6xl", lg: "8xl" }}
                                lineHeight={{ base: "1.125", md: "1.125" }}
                            >
                                NextGen
                            </Heading>
                            <Text
                                fontSize={{ base: "md", md: "xl" }}
                                mt="3"
                                mb="5"
                                lineHeight="shorter"
                                fontWeight={500}
                            >
                                {`Thribe-X's Undergraduate small group`}
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
                        <Box
                            mx="auto"
                            maxW={{ base: "400px", md: "550px" }}
                            w="100%"
                            mb={{ base: "8", md: "0" }}
                        >
                            <Image
                                width={1080}
                                height={1080}
                                src="https://res.cloudinary.com/dzpntisxj/image/upload/v1688143240/thribe-x/undergrad_dkxk1r.png"
                                alt="Undergraduate small group"
                                priority
                            />
                        </Box>
                    </GridItem>
                </Grid>
            </Box>

            <Box
                as="section"
                pt={{ base: "24", md: "24" }}
                pb={{ base: "24", md: "28" }}
                px={{ base: "6", md: "12" }}
                bg="brand.orange.200"
            >
                <Box maxW={650} mx="auto">
                    <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight={500} textAlign="center">
                        {`NextGen Small group is fortified to empower undergraduates to achieve academic excellence, 
                        maximize the opportunities and resources available at this phase of life. You'd also get insights 
                        into effective time management strategies, study techniques, and networking tips; self and purpose 
                        discovery, setting smart goals, and overall personal development.`}
                    </Text>
                </Box>
            </Box>

            <Box
                as="section"
                pt={{ base: "20", md: "28" }}
                pb={{ base: "16", md: "40" }}
                px={{ base: "6", md: "16" }}
            >
                <Box maxW="4xl" mx="auto">
                    <Heading
                        textAlign="center"
                        fontSize={{ base: "lg", md: "2xl" }}
                        mb={{ base: "10", md: "16" }}
                        fontWeight={700}
                    >
                        More Information
                    </Heading>
                    <Grid
                        templateColumns={{
                            base: "1fr",
                        }}
                        templateRows="auto"
                        columnGap={{ base: "4", md: "16" }}
                        rowGap={{ base: "10", md: "10" }}
                        placeContent="center"
                        mt={{ base: "8", md: "10" }}
                    >
                        {questions.map((question) => (
                            <GridItem key={question} gridColumn={{ md: "1 / span 2" }}>
                                <Text fontSize={{ base: "md", md: "lg" }} fontWeight={500}>
                                    {question}
                                </Text>
                            </GridItem>
                        ))}
                        <GridItem gridColumn={{ md: "1 / span 2" }}>
                            <Text fontSize={{ base: "md", md: "lg" }} fontWeight={500}>
                                {`NextGen is a community where the undergraduate struggles are understood 
                                and mitigating measures are meted out to help emerge victorious so your 
                                undergraduate days don't leave you 'on-the-ground'.`}
                            </Text>
                        </GridItem>
                        <GridItem gridColumn={{ md: "1 / span 2" }}>
                            <Text
                                fontSize={{ base: "md", md: "xl" }}
                                mt="4"
                                p="5"
                                textAlign="center"
                                borderRadius="md"
                                bg="brand.orange.200"
                            >
                                For further enquiries, kindly send us a mail at{" "}
                                <Link
                                    href="mailto:thribe.xsmallgroups@gmail.com"
                                    textDecoration="underline"
                                    wordBreak="break-all"
                                >
                                    thribe.xsmallgroups@gmail.com
                                </Link>{" "}
                                or leave us a message on our social media pages.
                            </Text>
                        </GridItem>
                    </Grid>
                </Box>
            </Box>
        </>
    );
}

export default UndergraduatesGroup;

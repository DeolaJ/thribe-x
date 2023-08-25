import Image from "next/image";
import { Heading, Text, Box, ButtonGroup, Link, Grid, GridItem } from "@chakra-ui/react";

import SecondaryButton from "../../button/SecondaryButton";

const questions = [
    "Are you single, in a relationship, engaged or married?",
    "Are you waiting on the Lord for marriage?",
    "Are you willing to engage in meaningful conversations about love, relationships, and personal growth?",
    "Are you currently in a relationship that's not going well and you have no clue how to turn it around?",
    "After all your years of dating, do you feel like you still have never been able to get the type of man/woman you know in your heart you really want and deserve?",
    "Do you have troubling questions about relationships that you need practical answers to?",
    "Do you find romantic relationships too complex to understand?",
    "Does it bother you to know why you keep attracting the people you do not want and the ones you want, don't want you back?",
    "Do you desire to have healthy relationships by knowing and applying God's principles to romantic relationships?",
];

function RelationshipsGroup() {
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
                                Wholesome Cuts
                            </Heading>
                            <Text
                                fontSize={{ base: "md", md: "xl" }}
                                mt="3"
                                mb="5"
                                lineHeight="shorter"
                                fontWeight={500}
                            >
                                {`Thribe-X's Relationship small group`}
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
                                src="https://res.cloudinary.com/dzpntisxj/image/upload/v1688143243/thribe-x/relationship_qsbxd5.png"
                                alt="Relationship small group"
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
                bg="brand.blue.600"
            >
                <Box maxW={650} mx="auto">
                    <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight={500} textAlign="center">
                        {`The Wholesome Cuts small group explores the core aspects and diverse
                        elements of a God-centered romantic relationship, providing valuable
                        insights and tools for participants to manifest their ideal connections.
                        Through discussions with like-minded individuals, members cultivate
                        self-sufficiency and a deep understanding of nurturing healthy romantic
                        bonds. With newfound knowledge and a God-centered approach, you are
                        empowered to pursue and enjoy your dream relationships.`}
                    </Text>
                </Box>
            </Box>

            <Box
                as="section"
                pt={{ base: "20", md: "28" }}
                pb={{ base: "16", md: "40" }}
                px={{ base: "6", md: "16" }}
            >
                <Box maxW="7xl" mx="auto">
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
                            md: "minmax(300px, 400px) minmax(300px, 400px)",
                            lg: "minmax(200px, 300px) minmax(200px, 300px) minmax(200px, 300px)",
                        }}
                        templateRows="auto"
                        columnGap={{ base: "4", md: "16" }}
                        rowGap={{ base: "10", md: "10" }}
                        placeContent="center"
                        mt={{ base: "8", md: "10" }}
                    >
                        {questions.map((question) => (
                            <GridItem key={question}>
                                <Text
                                    fontSize={{ base: "md", md: "lg" }}
                                    fontWeight={500}
                                    maxW={{ md: "400px" }}
                                >
                                    {question}
                                </Text>
                            </GridItem>
                        ))}
                        <GridItem gridColumn={{ md: "1 / span 2", lg: "1 / span 3" }}>
                            <Text fontSize={{ base: "md", md: "lg" }} fontWeight={500}>
                                {`If you answered yes to any of these questions, then this community
                                is specially suited to meet your relational needs. As far as
                                relationships are concerned, every step you take towards
                                self-improvement is a step towards enjoying the romantic
                                relationship of your dreams. That's why I'm excited to invite you to
                                Wholesome Cuts: The relationship small group designed to help you
                                navigate the complexities of romantic relationships and build
                                healthy, God-centered connections.`}
                            </Text>
                        </GridItem>
                        <GridItem gridColumn={{ md: "1 / span 2", lg: "1 / span 3" }}>
                            <Text
                                fontSize={{ base: "md", md: "xl" }}
                                mt="4"
                                p="5"
                                textAlign="center"
                                borderRadius="md"
                                bg="brand.blue.600"
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

export default RelationshipsGroup;

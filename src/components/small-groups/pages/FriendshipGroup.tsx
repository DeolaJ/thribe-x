import Image from "next/image";
import { Heading, Text, Box, ButtonGroup, Link, Grid, GridItem } from "@chakra-ui/react";

import SecondaryButton from "../../button/SecondaryButton";

const questions = [
    "As children, finding friendship and companionship came easily for most, the burdens of life were limited to finding missing socks or not being late for school and you could take your peers at face value without the worries of toxic friendships or ulterior motives, we were placed in environments with peers where communication was five days a week and we never doubted the genuity of a shared laughter.",
    "Now we are older and have found friendships as adults to be a different story, life experiences have tainted and twisted the meaning of the word “friendship” and now we either see how friends can become foes or the lack of depth in the “friendships” created. Daily we realise that God never created us to live life isolated and in the struggle.",
    "If that is you, if you have wandered through life without understanding the principles of creating and retaining true friendships, if you’re worried you’ve never truly fit in anywhere, if you believe you haven’t found people with whom your soul rejoices with when you fellowship, people who inspire you to do better and with whom you can grow mentally, emotionally and spiritually with, fellow believers with whom you have a common foundation of love that is God.",
];

function FriendshipGroup() {
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
                                Lifelines
                            </Heading>
                            <Text
                                fontSize={{ base: "md", md: "xl" }}
                                mt="3"
                                mb="5"
                                lineHeight="shorter"
                                fontWeight={500}
                            >
                                {`Thribe-X's Friendship small group`}
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
                                src="https://res.cloudinary.com/dzpntisxj/image/upload/v1688143241/thribe-x/friendship_qzypsc.png"
                                alt="Friendship small group"
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
                        {`Lifelines Small Group is a circle of trust designed to support individuals
                        from diverse backgrounds in discovering, building, nurturing, and sustaining
                        meaningful friendships. The group not only fosters the formation of
                        strategic connections but also imparts essential skills for enhancing and
                        expanding these friendships, fostering personal growth and enrichment within
                        these valuable relationships.`}
                    </Text>
                </Box>
            </Box>

            <Box
                as="section"
                pt={{ base: "20", md: "28" }}
                pb={{ base: "16", md: "40" }}
                px={{ base: "6", md: "16" }}
            >
                <Box maxW="3xl" mx="auto">
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
                                {`We at LifeLines, have created a safe and welcoming space with a
                                focus of ensuring communal inclusivity and acceptance where people
                                can connect with each other and most importantly, speak and be truly
                                heard.`}
                            </Text>
                        </GridItem>
                        <GridItem gridColumn={{ md: "1 / span 2", lg: "1 / span 3" }}>
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

export default FriendshipGroup;

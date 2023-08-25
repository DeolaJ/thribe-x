import Image from "next/image";
import { Heading, Text, Box, ButtonGroup, Link, Grid, GridItem } from "@chakra-ui/react";

import SecondaryButton from "../../button/SecondaryButton";

const questions = [
    "Imagine a safe space where your fears are confronted, addictions are overcome, self-esteem is restored, discipline is cultivated, and depression is lifted. In the Mental Health small group, we believe that God's love and grace are the catalysts for inner transformation.",
    "Through engaging discussions, interactive activities, and compassionate support, we explore biblical principles and practical strategies to conquer the challenges that hold us back.",
    "Join the Mental Health group and experience the power of collective healing and transformation. Discover the courage to face your fears, break free from addictions, embrace your true worth, cultivate discipline, navigate depression and journey through grief.",
    "Our passionate coordinators will journey alongside you, providing a comforting presence, understanding hearts, guidance, encouragement, and unwavering support during the most difficult times.",
];

function MentalHealthGroup() {
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
                                {`Fortress & Zion`}
                            </Heading>
                            <Text
                                fontSize={{ base: "md", md: "xl" }}
                                mt="3"
                                mb="5"
                                lineHeight="shorter"
                                fontWeight={500}
                            >
                                {`Thribe-X's Mental Health small group`}
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
                                src="https://res.cloudinary.com/dzpntisxj/image/upload/v1688143241/thribe-x/mental-health_blzyzs.png"
                                alt="Mental Health"
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
                bg="brand.purple.200"
            >
                <Box maxW={650} mx="auto">
                    <Text
                        fontSize={{ base: "lg", md: "2xl" }}
                        fontWeight={500}
                        textAlign="center"
                        color="white"
                    >
                        {`Embark on a transformative journey in our mental health group, where we will 
                        provide support in dealing with fear, anxiety, depression, loss & grief and addiction. 
                        Gain practical tools, insightful guidance, and a tribe of supportive individuals 
                        who will cheer you on as you conquer challenges, boost resilience, and embrace a life 
                        of emotional well-being. Join us today and empower yourself to thrive.`}
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
                                {`Together, we will unlock the potential within us, walk in faith, 
                                and build a foundation of strength and resilience. Don't let fear 
                                and despair define you—choose faith, choose healing, and choose to 
                                live a life marked by victory.`}
                            </Text>
                        </GridItem>
                        <GridItem gridColumn={{ md: "1 / span 2", lg: "1 / span 3" }}>
                            <Text
                                fontSize={{ base: "md", md: "xl" }}
                                mt="4"
                                p="5"
                                textAlign="center"
                                borderRadius="md"
                                bg="brand.purple.200"
                                color="white"
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

export default MentalHealthGroup;

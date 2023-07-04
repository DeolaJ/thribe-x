import Image from "next/image";
import { Heading, Text, Box, ButtonGroup, Link, Grid, GridItem } from "@chakra-ui/react";

import SecondaryButton from "../../button/SecondaryButton";

const questions = [
    "Are you seeking refuge and growth on your spiritual journey?",
    "Imagine a place where you can explore the depths of the Bible, experience the power of prayer, encounter the transformative Holy Spirit, and uplift your spirit through worship. Could Adullam Small Group be the sanctuary you've been searching for? Just like the ancient Cave of Adullam, this community provides a safe haven where seekers of truth can gather, support one another, and embark on a transformative journey together.",
    "Join us as we dive deep into the Bible and explore its profound teachings, gaining fresh insights and allowing the Scriptures to illuminate our paths. Experience the power of prayer as we engage in heartfelt intercessions, witnessing the miracles that unfold through our communion with God.",
    "Encounter the transformative presence of the Holy Spirit, deepening our understanding of His guidance, gifts, and His work within us. Lift your voice in worship and gratitude, cultivating a deeper connection with God and experiencing the transformative power of His presence.",
];

function SpiritualGrowthGroup() {
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
                                Adullam
                            </Heading>
                            <Text
                                fontSize={{ base: "md", md: "xl" }}
                                mt="3"
                                mb="5"
                                lineHeight="shorter"
                                fontWeight={500}
                            >
                                {`Thribe-X's Spiritual Growth small group`}
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
                                src="https://res.cloudinary.com/dzpntisxj/image/upload/v1688143242/thribe-x/spiritual_hagmua.png"
                                alt="Spiritual Growth"
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
                bg="brand.yellow.500"
            >
                <Box maxW={650} mx="auto">
                    <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight={500} textAlign="center">
                        {`The Adullam small group is a transformative space where members learn how to 
                        study the Bible,  engage in prayers and fasting, how to write confessions, how 
                        to worship & understand the Holy Spirit, and more. Through shared experiences, 
                        insights, and collective wisdom, members will deepen their spiritual understanding 
                        and connection with God. Adullam fosters self-reliance and a sense of community, 
                        providing support, encouragement, and accountability on the spiritual journey, leading 
                        to a profound and intimate relationship with God.
`}
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
                            md: "1fr 1fr",
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
                                {`Don't wait! Take the step toward refuge, growth, and a community 
                                of like-minded individuals who are on a similar spiritual journey. 
                                Let the Adullam Small Group be your sanctuary for spiritual exploration, 
                                connection, and transformation!`}
                            </Text>
                        </GridItem>
                        <GridItem gridColumn={{ md: "1 / span 2", lg: "1 / span 3" }}>
                            <Text
                                fontSize={{ base: "md", md: "xl" }}
                                mt="4"
                                p="5"
                                textAlign="center"
                                borderRadius="md"
                                bg="brand.yellow.500"
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

export default SpiritualGrowthGroup;

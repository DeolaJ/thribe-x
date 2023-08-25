import Image from "next/image";
import { Heading, Text, Box, ButtonGroup, Link, Grid, GridItem } from "@chakra-ui/react";

import SecondaryButton from "../../button/SecondaryButton";

const questions = [
    "In a world filled with professional opportunities, have you ever wondered if finding meaning and purpose in your work is truly possible? Well, wonder no more! Welcome to our faith-based career community Megaminds, where we firmly believe that doing meaningful and purposeful work is not only possible but within your reach.",
    "Picture a career where purpose and passion coexist, where you wake up every morning excited to tackle the day ahead, embracing the idea that happiness and satisfaction can be found in our daily jobs. We're here to guide you on a journey that will help you discover your true calling and experience a profound sense of fulfillment.",
    "Navigating the complexities of office politics while maintaining unwavering ethical standards may seem like a challenge, but trust us, it's absolutely achievable. Megaminds equips you with the knowledge and strategies to navigate the corporate landscape while staying true to your values. We empower you to be a beacon of integrity, positively impacting your workplace and beyond.",
    "Believers, listen closely! Excellence at work is not just a lofty dream—it's our lot as believers. In this community, we celebrate the inherent skillfulness found in the lot of the righteous. Together, we'll tap into our extraordinary capabilities and unlock our true potential. Engage in insightful discussions, receive practical guidance, and network with like-minded individuals who share your passion for integrating faith into every aspect of their professional lives.",
];

function CareerGrowthGroup() {
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
                                fontSize={{ base: "3xl", sm: "5xl", md: "6xl", lg: "7xl" }}
                                lineHeight={{ base: "1.125", md: "1.125" }}
                            >
                                Megaminds
                            </Heading>
                            <Text
                                fontSize={{ base: "md", md: "xl" }}
                                mt="3"
                                mb="5"
                                lineHeight="shorter"
                                fontWeight={500}
                            >
                                {`Thribe-X's Career Growth small group`}
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
                                src="https://res.cloudinary.com/dzpntisxj/image/upload/v1688143237/thribe-x/career_nqatyo.png"
                                alt="Career Growth small group"
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
                        {`The Megaminds small group is a supportive space dedicated to helping
                        individuals advance in their careers. Through focused discussions and
                        activities, participants gain valuable insights and practical strategies for
                        career progression, enhancing productivity at work, finding purpose in their
                        career or business, and navigating the ever-evolving landscape of work. By
                        coming together with like-minded individuals, members receive guidance,
                        support, and inspiration to thrive in their professional lives, empowering
                        them to unlock their full potential and achieve meaningful success.`}
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
                                {`Are you ready to embrace a career path that's infused with purpose,
                                passion, and skillfulness? It's time to step into a world where your
                                work becomes a testament to your faith.`}
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

export default CareerGrowthGroup;

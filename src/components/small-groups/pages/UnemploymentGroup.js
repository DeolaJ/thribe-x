import Image from "next/image";
import { Heading, Text, Box, ButtonGroup, Link, Grid, GridItem } from "@chakra-ui/react";

import SecondaryButton from "../../button/SecondaryButton";

const questions = [
    "So adulthood is setting in...😏 Service is over but PPA didn't retain you. ",
    "Bills are-a-piling and Funds are-a-vanishing",
    "Resumes yet unedited and CVs not submitted, Applications are not applicating and Interviews are not interviewing.",
    "You can't call your folks again for some bucks because God no go shame us.",
    "See finish is on 90% loading and Mama Amaka won't give you bread and coke on credit anymore.",
    "If care is not taken, Palmpay will soon be asking you to pay.",
    "At this point, you just heave a sigh of relief and say 'It's well even in the well'",
    "Many things you should have known or done but could not and time is running out fast. There's a possibility and place for you to redeem time and begin your journey to being established and professionally settled in life.",
];

function UnemploymentGroup() {
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
                                Hired
                            </Heading>
                            <Text
                                fontSize={{ base: "md", md: "xl" }}
                                mt="3"
                                mb="5"
                                lineHeight="shorter"
                                fontWeight={500}
                            >
                                {`Thribe-X's Unemployment small group`}
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
                                src="https://res.cloudinary.com/dzpntisxj/image/upload/v1688143243/thribe-x/unemployment_kdrees.png"
                                alt="Unemployment small group"
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
                        {`HIRED is a small group created and tailored to effectively support you in
                        your job search by providing resources and guidance on job hunting, resume
                        writing, and interview skills all towards making you full-fledged or
                        employable. You'd learn how to maximise the opportunities and resources
                        available at this phase of your life.`}
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
                        <GridItem gridColumn={{ md: "1 / span 2" }}>
                            <Text fontSize={{ base: "md", md: "lg" }} fontWeight={500}>
                                {`HIRED is the place for this possibility, where you're no longer on
                                the edge or chased with a sledge (hammer). It is a small group of
                                individuals yet to be employed, underemployed or looking for a
                                change/upscale in career.`}
                            </Text>
                        </GridItem>
                        <GridItem gridColumn={{ md: "1 / span 2" }}>
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

export default UnemploymentGroup;

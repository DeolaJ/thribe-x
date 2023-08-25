import { Heading, Box, Grid, GridItem, Text, Link, BoxProps } from "@chakra-ui/react";

const questions = [
    {
        title: "What is the duration of the Glass House?",
        description: "The Glass House will last for a period of three (3) months.",
    },
    {
        title: "Who can join the Glass House?",
        description: "Anyone from any tribe, denomination, religion, between ages 18-30.",
    },
    {
        title: "Will there be group meetings?",
        description:
            "The groups will meet online once every week, either on Saturday, 8am-10am or on Sundays 5pm-7pm.",
    },
    {
        title: "How can I register?",
        description: (
            <>
                Kindly register via the{" "}
                <Link
                    href="https://forms.gle/Tw9eYJjykWzNg7689"
                    rel="noopener noreferrer"
                    isExternal
                    target="_blank"
                    fontSize="lg"
                    textDecoration="underline"
                >
                    registration link
                </Link>
                .
            </>
        ),
    },
    {
        title: "How do I know my registration is successful?",
        description:
            "You will receive a confirmation email, so kindly ensure you provide a valid e-mail address.",
    },
    {
        title: "When does the Glass House commence?",
        description: "The Glass House commences on July 30, 2023.",
    },
    {
        title: "When does registration end?",
        description: "Registration for the Glass House will close on July 30, 2023.",
    },
    {
        title: "Can I join more than one group?",
        description: (
            <>
                In order to create a focused and cohesive environment within each small group, we
                kindly request that you choose and commit to only one group at a time. This allows
                for deeper connections, more meaningful discussions, and a stronger sense of
                community within each group.
                <br />
                <br />
                {`We understand the desire to explore multiple areas of interest, but by committing to
                a single group, you'll have the opportunity to fully immerse yourself in the
                discussions, activities, and growth opportunities that your chosen group offers.`}
            </>
        ),
    },
    {
        title: "After registration, what do I need to do?",
        description: `As a participant, all you need to do is eagerly anticipate the follow-up email that we will be sending you soon. 
            This email will contain your assigned small group information, including the group you've been placed in, its details, 
            and any additional instructions. Simply review the information, mark your calendar for the group's meetings, and come prepared 
            with an open mind and a willingness to connect and grow. We'll take care of the rest and ensure you have a fulfilling experience 
            within the Glass House community.`,
    },
];

function FAQs({ ...props }: BoxProps) {
    return (
        <Box
            as="section"
            pt={{ base: "20", md: "28" }}
            pb={{ base: "16", md: "40" }}
            px={{ base: "6", md: "16" }}
            {...props}
        >
            <Box maxW="8xl" mx="auto">
                <Heading
                    textAlign="center"
                    fontSize={{ base: "lg", md: "2xl" }}
                    mb={{ base: "10", md: "16" }}
                    fontWeight={700}
                >
                    Frequently Asked Questions
                </Heading>
                <Grid
                    templateColumns={{
                        base: "1fr",
                        md: "minmax(200px, 500px) minmax(200px, 500px)",
                        lg: "minmax(300px, 400px) minmax(300px, 400px) minmax(300px, 400px)",
                    }}
                    templateRows="auto"
                    columnGap={{ base: "4", md: "16" }}
                    rowGap={{ base: "10", md: "10" }}
                    placeContent="center"
                    mt={{ base: "8", md: "10" }}
                >
                    {questions.map((question) => (
                        <GridItem key={question.title}>
                            <Text
                                fontSize={{ base: "md", md: "lg" }}
                                mb="1"
                                fontWeight={700}
                                maxW="400px"
                            >
                                {question.title}
                            </Text>
                            <Text
                                fontSize={{ base: "md", md: "lg" }}
                                fontWeight={400}
                                maxW={{ md: "400px" }}
                            >
                                {question.description}
                            </Text>
                        </GridItem>
                    ))}
                    <GridItem
                        gridColumn={{
                            md: "1 / span 2",
                            lg: "1 / span 3",
                        }}
                    >
                        <Text
                            fontSize={{ base: "md", md: "xl" }}
                            mt="4"
                            p="5"
                            color="white"
                            textAlign="center"
                            borderRadius="md"
                            bgColor="brand.purple.200"
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
    );
}

export default FAQs;

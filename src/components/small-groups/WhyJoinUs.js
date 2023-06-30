import { Heading, Box, Grid, GridItem, Text } from "@chakra-ui/react";

const reasons = [
    {
        title: "Connect and Build Relationships",
        description:
            "Forge genuine connections with fellow members, fostering friendships and a sense of belonging within our vibrant community",
    },
    {
        title: "Grow Spiritually",
        description:
            "Deepen your faith and explore your spiritual journey through meaningful discussions, shared experiences, and engaging activities.",
    },
    {
        title: "Find Support and Guidance",
        description:
            "Receive valuable support, guidance, and resources tailored to your specific needs, whether it's navigating your career, addressing mental health concerns, or facing challenges as an undergraduate or during unemployment.",
    },
    {
        title: "Foster Personal Development",
        description:
            "Embrace opportunities for personal growth, discovering your strengths, unlocking your potential, and finding purpose in your life and endeavors.",
    },
];

function WhyJoinUs({ ...props }) {
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
                    fontSize={{ base: "lg", md: "xl" }}
                    mb="2"
                    fontWeight={700}
                >
                    {`By joining a small group at Thribe-X, you'll have the opportunity to`}
                </Heading>
                <Grid
                    templateColumns={{
                        base: "1fr",
                        md: "minmax(300px, 400px) minmax(300px, 400px)",
                    }}
                    templateRows="auto"
                    columnGap={{ base: "4", md: "16" }}
                    rowGap={{ base: "6", md: "10" }}
                    placeContent="center"
                    mt={{ base: "8", md: "10" }}
                >
                    {reasons.map((reason) => (
                        <GridItem key={reason.title}>
                            <Text
                                fontSize={{ base: "md", md: "lg" }}
                                mb="1"
                                fontWeight={700}
                                maxW="400px"
                            >
                                {reason.title}
                            </Text>
                            <Text
                                fontSize={{ base: "md", md: "lg" }}
                                fontWeight={400}
                                maxW={{ md: "400px" }}
                            >
                                {reason.description}
                            </Text>
                        </GridItem>
                    ))}
                    <GridItem gridColumn={{ md: "1 / span 2", xl: "1 / span 2" }}>
                        <Text fontSize={{ base: "md", md: "lg" }}>
                            {`Thribe-X's small groups are designed to empower and equip you with the necessary
                            tools to navigate life's challenges and seize opportunities for growth. Join us
                            as we embark on a collective journey of connection, exploration, and
                            transformation. Together, we'll navigate the path to a fulfilling and purposeful
                            life.`}
                        </Text>
                    </GridItem>
                </Grid>
            </Box>
        </Box>
    );
}

export default WhyJoinUs;

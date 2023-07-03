import { Heading, Box, Grid, GridItem, Text, Icon } from "@chakra-ui/react";

import { FaFly } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { RiPlantLine } from "react-icons/ri";
import { SiHandshake } from "react-icons/si";

const reasons = [
    {
        title: "Connect and Build Relationships",
        description:
            "Forge genuine connections with fellow members, fostering friendships and a sense of belonging within our vibrant community",
        icon: SiHandshake,
    },
    {
        title: "Grow Spiritually",
        description:
            "Deepen your faith and explore your spiritual journey through meaningful discussions, shared experiences, and engaging activities.",
        icon: RiPlantLine,
    },
    {
        title: "Find Support and Guidance",
        description:
            "Receive valuable support, guidance, and resources tailored to your specific needs, whether it's navigating your career, addressing mental health concerns, or facing challenges as an undergraduate or during unemployment.",
        icon: FiSearch,
    },
    {
        title: "Foster Personal Development",
        description:
            "Embrace opportunities for personal growth, discovering your strengths, unlocking your potential, and finding purpose in your life and endeavors.",
        icon: FaFly,
    },
];

function WhyJoinUs({ ...props }) {
    return (
        <Box
            as="section"
            pt={{ base: "24", md: "32" }}
            pb={{ base: "24", md: "32" }}
            px={{ base: "6", md: "16" }}
            mixBlendMode="darken"
            bgColor="brand.purple.200"
            color="white"
            {...props}
        >
            <Box maxW="8xl" mx="auto">
                <Heading
                    textAlign={{ base: "left", md: "center" }}
                    fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
                    mb={{ base: "10", md: "16" }}
                    maxW={500}
                    mx={{ md: "auto" }}
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
                    columnGap={{ base: "4", md: "24" }}
                    rowGap={{ base: "8", md: "16" }}
                    placeContent="center"
                    mt={{ base: "8", md: "10" }}
                >
                    {reasons.map((reason) => (
                        <GridItem key={reason.title} textAlign={{ md: "center" }}>
                            <Box
                                mb="3"
                                border="2px solid"
                                borderColor="white"
                                borderRadius="50%"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                width="10"
                                height="10"
                                mx={{ md: "auto" }}
                            >
                                <Icon as={reason.icon} boxSize="5" aria-label="icon" />
                            </Box>
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
                    <GridItem
                        gridColumn={{ md: "1 / span 2", xl: "1 / span 2" }}
                        textAlign={{ md: "center" }}
                    >
                        <Text fontSize={{ base: "md", md: "lg" }} mt={{ base: "6", md: "0" }}>
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

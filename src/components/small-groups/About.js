import Image from "next/image";
import { Text, Box, Grid, GridItem, VStack, Heading } from "@chakra-ui/react";

function About({ ...props }) {
    return (
        <Box
            as="section"
            pt={{ base: "32", md: "20" }}
            pb={{ base: "24", md: "28" }}
            px={{ base: "6", md: "12" }}
            {...props}
        >
            <Grid
                templateColumns={{ base: "1fr", md: "1.05fr 1fr" }}
                mx="auto"
                alignItems="center"
                maxW="8xl"
                placeContent="center"
            >
                <GridItem
                    maxW={{ base: "550px", md: "550px" }}
                    mx="auto"
                    mb={{ base: "12", md: "0" }}
                    mt={{ base: "0", md: "0" }}
                >
                    <Image
                        alt="picture of a believer walkingz"
                        src="https://res.cloudinary.com/dzpntisxj/image/upload/v1688143619/thribe-x/chosen2_qd0vs0.jpg"
                        width={2700}
                        height={1600}
                    />
                </GridItem>
                <GridItem>
                    <Heading fontSize="xl" mb="4" fontWeight={700}>
                        Thribe-X Small Groups
                    </Heading>
                    <VStack spacing="4" alignItems="flex-start">
                        <Text fontSize={{ base: "md", md: "lg" }} fontWeight={400}>
                            Welcome to Thribe-X, The Youthful Expression of The Covenant Nation,
                            Iganmu!!! Thribe-X is a vibrant and youth-oriented church community that
                            values growth and connection.
                        </Text>
                        <Text fontSize={{ base: "md", md: "lg" }} fontWeight={400}>
                            Welcome to The Glass House, where our small groups embody the principles
                            of openness, transparency, support, growth, fostering personal and
                            collective development in a fun and engaging way! Just like a Glass
                            House, our small groups provide a unique environment that allows you to
                            flourish and thrive.
                        </Text>
                        <Text fontSize={{ base: "md", md: "lg" }} fontWeight={400}>
                            Imagine stepping into a magnificent Glass House. The transparent walls
                            symbolize the openness and honesty we embrace within our small groups.
                            Just as the glass walls let in abundant natural light, our groups foster
                            an atmosphere of openness, where you can freely share your thoughts,
                            experiences, and challenges without fear of judgment.
                        </Text>
                    </VStack>
                </GridItem>
            </Grid>
        </Box>
    );
}

export default About;

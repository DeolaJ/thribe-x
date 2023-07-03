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
                templateColumns={{ base: "1fr", lg: "1.05fr 1fr" }}
                mx="auto"
                alignItems="center"
                maxW="8xl"
                placeContent="center"
            >
                <GridItem
                    maxW="550px"
                    mx="auto"
                    mb={{ base: "12", lg: "0" }}
                    mt={{ base: "0", lg: "0" }}
                >
                    <Image
                        alt="picture of a believer walking"
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
                            Welcome to the Glass House, a vibrant community where openness, support,
                            and growth intertwine to create an extraordinary experience. Imagine
                            entering a glass house where transparency and authenticity reign. In our
                            small groups, we foster an environment that encourages you to freely
                            express your thoughts, challenges, and triumphs without fear of
                            judgment. Embrace the power of genuine connections as you embark on a
                            journey of self-discovery and personal growth.
                        </Text>
                        <Text fontSize={{ base: "md", md: "lg" }} fontWeight={400}>
                            {`Just as a glass house allows natural light to illuminate its
                            surroundings, our small groups illuminate the path to personal
                            development and fulfillment. Within this transparent space, you'll find
                            a tribe of kindred spirits, ready to journey alongside you, offering
                            encouragement, guidance, and unwavering support. Together, we'll
                            cultivate an atmosphere that nurtures your dreams, fosters resilience,
                            and empowers you to embrace your full potential.`}
                        </Text>
                        <Text fontSize={{ base: "md", md: "lg" }} fontWeight={400}>
                            {`In the Glass House, growth is not only encouraged, but celebrated. We
                            provide a rich tapestry of learning opportunities, self-reflection
                            exercises, and practical tools that will equip you to thrive in various
                            areas of your life. As you engage with our fun and engaging activities,
                            you'll form lasting bonds, share laughter, and create cherished
                            memories. Join us in the Glass House and embark on a transformative
                            adventure, where you'll discover the beauty of personal growth,
                            authentic connections, and a community that uplifts and inspires.`}
                        </Text>
                    </VStack>
                </GridItem>
            </Grid>
        </Box>
    );
}

export default About;

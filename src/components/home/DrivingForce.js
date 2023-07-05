import { Heading, Box, Grid, GridItem, Text, Divider, AbsoluteCenter } from "@chakra-ui/react";

const drivingForces = [
    {
        title: "Service",
        description: "Is Our Culture",
    },
    {
        title: "Love",
        description: "Is Our DNA",
    },
    {
        title: "Holy Spirit",
        description: "Is Our Energy Source",
    },
];

function DrivingForce({ ...props }) {
    return (
        <Box
            as="section"
            pt={{ base: "20", md: "28" }}
            pb={{ base: "16", md: "40" }}
            px={{ base: "6", md: "16" }}
            mixBlendMode="multiply"
            {...props}
        >
            <Box maxW="8xl" mx="auto" color="white" textAlign="center">
                <Heading
                    textAlign="center"
                    fontSize={{ base: "lg", md: "3xl" }}
                    mb={{ base: "16", md: "16" }}
                    fontWeight={700}
                >
                    <Box position="relative" padding={{ md: "10" }}>
                        <Divider />
                        <AbsoluteCenter px="4" bgColor="brand.purple.200">
                            The Driving Force
                        </AbsoluteCenter>
                    </Box>
                </Heading>
                <Grid
                    templateColumns={{
                        base: "1fr",
                        md: "1fr 1fr 1fr",
                        // md: "minmax(300px, 400px) minmax(300px, 400px) minmax(300px, 400px)",
                    }}
                    templateRows="auto"
                    columnGap={{ base: "4", md: "16" }}
                    rowGap={{ base: "10", md: "10" }}
                    placeContent="center"
                    mt={{ base: "8", md: "16" }}
                >
                    {drivingForces.map((force) => (
                        <GridItem key={force.title}>
                            <Text
                                fontSize={{ base: "xl", md: "2xl" }}
                                mb="1"
                                fontWeight={700}
                                textTransform="uppercase"
                            >
                                {force.title}
                            </Text>
                            <Text fontSize={{ base: "md", md: "lg" }} fontWeight={400}>
                                {force.description}
                            </Text>
                        </GridItem>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}

export default DrivingForce;

import Image from "next/image";
import { Text, Box, Grid, GridItem } from "@chakra-ui/react";

function About({ ...props }) {
    return (
        <Box as="section" py={{ base: "28", md: "40" }} px={{ base: "12", md: "16" }} {...props}>
            <Grid
                templateColumns={{ base: "1fr", md: "1.05fr 1fr" }}
                minH={{ md: "50vh", "2xl": "55vh" }}
                mx="auto"
                alignItems="center"
                maxW="8xl"
                placeContent="center"
            >
                <GridItem
                    h="100%"
                    mt="12"
                    maxW={{ base: "400px", md: "800px" }}
                    mx="auto"
                    mb={{ base: "4", md: "0" }}
                >
                    <Image
                        alt="picture of lady showing our mantra"
                        src="https://res.cloudinary.com/dzpntisxj/image/upload/v1680716897/thribe-x/fill-your-space_nsr3cm.png"
                        width={700}
                        height={840}
                    />
                </GridItem>
                <GridItem>
                    <Box>
                        <Text fontSize={{ base: "xl", md: "3xl" }} lineHeight="short">
                            Navigating life can be a lonely and strenuous task. However, going
                            through life with a community that supports, celebrates, prays and helps
                            you grow is a blessing.
                        </Text>
                    </Box>
                </GridItem>
            </Grid>
        </Box>
    );
}

export default About;

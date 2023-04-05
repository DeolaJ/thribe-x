import Image from "next/image";
import { Text, Box, Heading, Link } from "@chakra-ui/react";
import PrimaryButton from "./button/PrimaryButton";

function Contact({ ...props }) {
    return (
        <Box
            as="section"
            pt={{ base: "24", md: "28" }}
            pb={{ base: "24", md: "40" }}
            px={{ base: "12", md: "16" }}
            {...props}
        >
            <Heading textAlign="center" size="xl" mb="4" textTransform="uppercase">
                Before you go
            </Heading>
            <Box mx="auto" maxW="8xl">
                <Box maxW="600px" mb={{ base: "12", md: "12" }} mx="auto">
                    <Image
                        alt="picture of guy with confessions"
                        src="https://res.cloudinary.com/dzpntisxj/image/upload/v1680716900/thribe-x/confessions_vepsyp.png"
                        width={700}
                        height={840}
                    />
                </Box>
                <Box>
                    <Text fontSize={{ base: "lg", md: "xl" }} lineHeight="short" textAlign="center">
                        Join us and find a family you can do life with
                    </Text>
                    <Text textAlign="center" mt="6">
                        <Link
                            href="https://bit.ly/thribe-x"
                            rel="noopener noreferrer"
                            isExternal
                            target="_blank"
                            fontSize="sm"
                            _hover={{ textDecoration: "none" }}
                        >
                            <PrimaryButton size="lg">Join us</PrimaryButton>
                        </Link>
                    </Text>
                </Box>
            </Box>
        </Box>
    );
}

export default Contact;

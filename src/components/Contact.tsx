import Image from "next/image";
import { Text, Box, Link, BoxProps } from "@chakra-ui/react";

import PrimaryButton from "./button/PrimaryButton";

function Contact({ ...props }: BoxProps) {
    return (
        <Box
            as="section"
            pt={{ base: "20", md: "24" }}
            pb={{ base: "24", md: "28" }}
            px={{ base: "12", md: "16" }}
            {...props}
        >
            <Box mx="auto" maxW="8xl">
                <Box maxW={{ base: "300px", lg: "400px" }} mb={{ base: "12", md: "12" }} mx="auto">
                    <Image
                        alt="picture of guy with confessions"
                        src="https://res.cloudinary.com/dzpntisxj/image/upload/v1689154760/thribe-x/confessions_jzc7qw.jpg"
                        width={2250}
                        height={2700}
                    />
                </Box>
                <Box>
                    <Text
                        fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
                        lineHeight="short"
                        textAlign="center"
                        maxWidth={{ base: "400px", md: "600px" }}
                        mx="auto"
                    >
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

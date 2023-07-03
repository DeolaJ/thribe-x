import Image from "next/image";
import { Text, Box, Link } from "@chakra-ui/react";

import SecondaryButton from "../button/SecondaryButton";

function Contact({ ...props }) {
    return (
        <Box
            as="section"
            pt={{ base: "20", md: "18" }}
            pb={{ base: "24", md: "40" }}
            px={{ base: "12", md: "16" }}
            {...props}
        >
            <Box mx="auto" maxW="8xl">
                <Box maxW={{ base: "300px", md: "450px" }} mx="auto" mb={{ base: "12", md: "12" }}>
                    <Image
                        alt="picture of a believer reading the Bible"
                        src="https://res.cloudinary.com/dzpntisxj/image/upload/v1688380501/thribe-x/Untitled_Artwork_5_ex0pvo.png"
                        width={2700}
                        height={2700}
                    />
                </Box>
                <Box>
                    <Text
                        fontSize={{ base: "xl", md: "3xl" }}
                        lineHeight="short"
                        textAlign="center"
                    >
                        What are you waiting for?
                    </Text>
                    <Text textAlign="center" mt="6">
                        <Link
                            href="https://forms.gle/Tw9eYJjykWzNg7689"
                            rel="noopener noreferrer"
                            isExternal
                            target="_blank"
                            fontSize="sm"
                            _hover={{ textDecoration: "none" }}
                        >
                            <SecondaryButton size="lg">Register Now</SecondaryButton>
                        </Link>
                    </Text>
                </Box>
            </Box>
        </Box>
    );
}

export default Contact;

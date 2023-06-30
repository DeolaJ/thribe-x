import { Text, Box, Link } from "@chakra-ui/react";

import SecondaryButton from "../button/SecondaryButton";

function Contact({ ...props }) {
    return (
        <Box
            as="section"
            pt={{ base: "24", md: "28" }}
            pb={{ base: "24", md: "40" }}
            px={{ base: "12", md: "16" }}
            {...props}
        >
            <Box mx="auto" maxW="8xl">
                <Box>
                    <Text fontSize={{ base: "xl", md: "3xl" }} lineHeight="short" textAlign="center">
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

import Image from "next/image";
import { Text, Box } from "@chakra-ui/react";

// import SecondaryButton from "../button/SecondaryButton";

// import useLogEvent from "../../hooks/useLogEvent";

function Contact({ ...props }) {
    // const logEvent = useLogEvent();

    return (
        <Box
            as="section"
            pt={{ base: "20", md: "18" }}
            pb={{ base: "24", md: "40" }}
            px={{ base: "12", md: "16" }}
            {...props}
        >
            <Box mx="auto" maxW="8xl">
                <Box
                    maxW={{ base: "300px", md: "350px", lg: "450px" }}
                    mx="auto"
                    mb={{ base: "12", md: "12" }}
                >
                    <Image
                        alt="picture of a believer reading the Bible"
                        src="https://res.cloudinary.com/dzpntisxj/image/upload/c_scale,w_1700/v1688385692/thribe-x/Untitled_Artwork_7_nljotr.jpg"
                        width={1700}
                        height={1700}
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
                        Registrations are officially closed for this semester!!!
                        {/* {message || "What are you waiting for?"} */}
                    </Text>
                    {/* <Text textAlign="center" mt="6">
                        <Link
                            href="https://forms.gle/Tw9eYJjykWzNg7689"
                            rel="noopener noreferrer"
                            isExternal
                            target="_blank"
                            fontSize="sm"
                            _hover={{ textDecoration: "none" }}
                        >
                            <SecondaryButton
                                size="lg"
                                onClick={() => {
                                    logEvent({
                                        action: "apply_to_small_groups",
                                    });
                                }}
                            >
                                Register Now
                            </SecondaryButton>
                        </Link>
                    </Text> */}
                </Box>
            </Box>
        </Box>
    );
}

export default Contact;

import { Flex, IconButton, Text, Link } from "@chakra-ui/react";
import { FaTwitter, FaInstagram } from "react-icons/fa";

function Footer({ ...props }) {
    const socials = [
        {
            type: "twitter",
            icon: <FaTwitter />,
            link: "https://www.twitter.com/thribex",
        },
        {
            type: "instagram",
            icon: <FaInstagram />,
            link: "https://instagram.com/thribe-x",
        },
    ];

    return (
        <Flex py="4" px="4" w="100%" {...props}>
            <Flex
                justifyContent={{ base: "flex-start", md: "space-between" }}
                gap={{ base: "1", md: "6" }}
                borderTop="1px solid"
                borderColor="brand.gray.30"
                flexDir={{ base: "column-reverse", md: "row" }}
                w="100%"
                py={{ base: "5", md: "8" }}
                alignItems={{ base: "flex-start", md: "center" }}
            >
                <Flex
                    alignItems={{ base: "flex-start", md: "center" }}
                    gap={{ base: "3", md: "6" }}
                    flexDir={{ base: "column", md: "row" }}
                >
                    <Text color="brand.gray.30" fontSize={{ base: "sm", md: "md" }}>
                        © {new Date().getFullYear()} Thribe-X team.
                    </Text>
                </Flex>
                <Flex alignItems="center" gap="2">
                    {socials.map((social) => (
                        <Link
                            key={social.type}
                            route={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IconButton
                                icon={social.icon}
                                fontSize={{ base: "md", md: "xl" }}
                                color="brand.gray.30"
                                bg="transparent"
                                p="0"
                            />
                        </Link>
                    ))}
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Footer;

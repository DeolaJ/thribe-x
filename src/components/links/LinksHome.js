import { Box, VStack, Link, Text } from "@chakra-ui/react";

import ShareButton from "../button/ShareButton";
import ChakraNextLink from "../ChakraNextLink";

import { useLinks } from "../../hooks/useLinks";

import { formatUrl } from "../../utils/format";

function LinksHome({ initialLinks }) {
    const { data: txLinks } = useLinks(initialLinks);

    return (
        <Box
            as="section"
            pt={{ base: "32", md: "20" }}
            pb={{ base: "24", md: "28" }}
            px={{ base: "6", md: "12" }}
            minH="75vh"
        >
            <Box maxW={500} mx="auto">
                <Text fontSize="lg" fontWeight={700} textAlign="center">
                    Thribe-X Links
                </Text>
                <Text
                    fontSize="sm"
                    mb="6"
                    textAlign="center"
                    lineHeight="shorter"
                    maxW={350}
                    mx="auto"
                >
                    {`A Tribe of young hearts for God, dedicated to 
                    learning & living out God's will.`}
                </Text>

                <VStack spacing="4" w="100%">
                    {txLinks?.map((txLink) => (
                        <LinkItem key={txLink.id} info={txLink} />
                    ))}
                </VStack>
            </Box>
        </Box>
    );
}

function LinkItem({ info }) {
    const formattedURL = formatUrl(info.url || "");
    return (
        <Box w="100%">
            {info.isInternal ? (
                <ChakraNextLink
                    href={formattedURL}
                    rel="noopener noreferrer"
                    target="_blank"
                    w="100%"
                >
                    <ShareButton>{info.title}</ShareButton>
                </ChakraNextLink>
            ) : (
                <Link
                    href={formattedURL}
                    isExternal
                    rel="noopener noreferrer"
                    target="_blank"
                    w="100%"
                >
                    <ShareButton>{info.title}</ShareButton>
                </Link>
            )}
        </Box>
    );
}

export default LinksHome;

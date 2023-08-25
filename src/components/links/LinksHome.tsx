import { Box, VStack, Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

import ShareButton from "../button/ShareButton";

import { useLinks } from "../../hooks/useLinks";

import { formatUrl } from "../../utils/format";

import { Link as TxLink } from "../../types";

function LinksHome({ initialLinks }: { initialLinks: TxLink[] }) {
    const { data: txLinks } = useLinks(initialLinks);

    return (
        <Box
            as="section"
            pt={{ base: "24", md: "20" }}
            pb={{ base: "24", md: "28" }}
            px={{ base: "6", md: "12" }}
            minH="75vh"
        >
            <Box maxW={550} mx="auto">
                <Text fontSize="lg" fontWeight={700} textAlign="center" mb="1">
                    Thribe-X Links
                </Text>
                <Text
                    fontSize="sm"
                    mb="6"
                    textAlign="center"
                    lineHeight="shorter"
                    maxW={450}
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

function LinkItem({ info }: { info: TxLink }) {
    const formattedURL = formatUrl(info.url || "");
    return (
        <Box w="100%">
            <Link href={formattedURL} rel="noopener noreferrer" target="_blank" w="100%">
                <ShareButton fontSize={{ base: "sm", md: "md" }}>{info.title}</ShareButton>
            </Link>
        </Box>
    );
}

export default LinksHome;

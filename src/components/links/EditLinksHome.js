import { useState } from "react";
import { Box, Center, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";

import LinkItemForm from "./LinksItemForm";
import EditLinksPreview from "./EditLinksPreview";

import { useLinks } from "../../hooks/useLinks";

import { cleanInput } from "../../utils/format";

function EditLinksHome({ initialLinks }) {
    const { data: txLinks } = useLinks(initialLinks);

    return (
        <Box
            as="section"
            pt="20"
            pb={{ base: "24", md: "28" }}
            px={{ base: "6", md: "12" }}
            minH="75vh"
        >
            <Box maxW={550} mx="auto">
                <EditPassword>
                    <Text fontSize="lg" mb="6" fontWeight={700}>
                        Update/Reorder Links
                    </Text>

                    <EditLinksPreview links={txLinks} />

                    <Box mt="12">
                        <Text fontSize="md" mb="4" fontWeight={700}>
                            Add link
                        </Text>
                        <Box p="5" border="1px solid" borderRadius="lg" borderColor="black">
                            <LinkItemForm order={txLinks?.length || 0} />
                        </Box>
                    </Box>
                </EditPassword>
            </Box>
        </Box>
    );
}

function EditPassword({ children }) {
    const [password, setPassword] = useState("");

    const hasError = password.length > 0 && password.length > 25;

    if (password === process.env.NEXT_PUBLIC_TX_LINKS_PASSWORD) {
        return children;
    }

    return (
        <Center minH="40vh" maxW={400} mx="auto">
            <FormControl isInvalid={hasError} mb="6">
                <FormLabel mb="1.5" fontSize="sm" mr="0">
                    Enter the password to proceed
                </FormLabel>
                <Input
                    placeholder="******"
                    value={password}
                    onChange={(e) => {
                        const value = cleanInput(e.target.value);
                        setPassword(value);
                    }}
                />
            </FormControl>
        </Center>
    );
}

export default EditLinksHome;

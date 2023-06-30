import NextLink from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";

function ChakraNextLink({ href, children, ...props }) {
    return (
        <NextLink {...props} href={href} passHref legacyBehavior>
            <ChakraLink {...props}>{children}</ChakraLink>
        </NextLink>
    );
}

export default ChakraNextLink;

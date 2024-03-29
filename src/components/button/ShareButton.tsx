import { Button, ButtonProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

function ShareButton({ children, ...props }: PropsWithChildren<ButtonProps>) {
    return (
        <Button
            py="2"
            w="100%"
            px="4"
            border="1.5px solid"
            borderColor="brand.black.100"
            bgColor="white"
            boxShadow="3px 3px 0 0 var(--chakra-colors-brand-black-100)"
            color="brand.black.100"
            lineHeight="short"
            fontWeight={700}
            fontSize="md"
            whiteSpace="pre-line"
            h="auto"
            minH="54px"
            _hover={{ transform: "scale(1.03)", textDecoration: "none" }}
            _disabled={{ cursor: "not-allowed", opacity: "0.5" }}
            {...props}
        >
            {children}
        </Button>
    );
}

export default ShareButton;

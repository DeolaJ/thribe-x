import { Button } from "@chakra-ui/react";

function SecondaryButton({ children, ...props }) {
    return (
        <Button
            py="2"
            px="4"
            border="1.5px solid"
            borderColor="brand.black.100"
            bgColor="brand.yellow.100"
            boxShadow="2px 2px 0 0 var(--chakra-colors-brand-black-100)"
            color="brand.black.100"
            lineHeight="short"
            fontWeight={700}
            _hover={{ transform: "scale(1.1)", textDecoration: "none" }}
            _disabled={{ cursor: "not-allowed", opacity: "0.5" }}
            {...props}
        >
            {children}
        </Button>
    );
}

export default SecondaryButton;

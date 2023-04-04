import { useRef } from "react";
import {
    Flex,
    Button,
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerBody,
    Icon,
    Link,
} from "@chakra-ui/react";
import { ImMenu } from "react-icons/im";

import PrimaryButton from "./button/PrimaryButton";

function Header({ ...props }) {
    return (
        <Flex
            width="100%"
            px={{ base: "10px", md: "8" }}
            py={{ base: "10px", md: "5" }}
            justify="flex-end"
            alignItems="center"
            {...props}
        >
            <DesktopMenu />
            <MobileMenu />
        </Flex>
    );
}

function DesktopMenu() {
    return (
        <Flex
            alignItems="center"
            justifyContent="flex-end"
            display={{ base: "none", md: "inherit" }}
        >
            <Link
                href="https://bit.ly/thribe-x"
                rel="noopener noreferrer"
                isExternal
                target="_blank"
                fontSize="sm"
                _hover={{ textDecoration: "none" }}
            >
                <PrimaryButton>Join us</PrimaryButton>
            </Link>
        </Flex>
    );
}

function MobileMenu() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();

    return (
        <>
            <Button
                ref={btnRef}
                size="md"
                display={{ base: "inherit", md: "none" }}
                onClick={onOpen}
                variant="unstyled"
            >
                <Icon as={ImMenu} w="6" color="brand.black.500" />
            </Button>
            <Drawer
                size="sm"
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody display="flex" flexDir="column" justifyContent="center" margin="4">
                        <Flex flexDir="column" gap="5">
                            <Link
                                href="https://bit.ly/thribe-x"
                                rel="noopener noreferrer"
                                isExternal
                                target="_blank"
                                _hover={{ textDecoration: "none" }}
                            >
                                <PrimaryButton>Join us</PrimaryButton>
                            </Link>
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}

export default Header;

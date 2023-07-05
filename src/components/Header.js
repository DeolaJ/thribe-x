import { useRef } from "react";
import { usePathname } from "next/navigation";

import Image from "next/image";
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
import ChakraNextLink from "./ChakraNextLink";

import logo from "../../public/logo.png";

function Header({ isLight, ...props }) {
    return (
        <Flex
            width="100%"
            px={{ base: "10px", md: "8" }}
            py={{ base: "10px", md: "5" }}
            justify="space-between"
            alignItems="center"
            {...props}
        >
            <ChakraNextLink
                href="/"
                maxW={{ base: "120px", sm: "140px", md: "160px" }}
                transition="all 0.2s"
            >
                <Image src={logo.src} alt="Thribe-X logo" width={logo.width} height={logo.height} />
            </ChakraNextLink>
            <DesktopMenu isLight={isLight} />
            <MobileMenu />
        </Flex>
    );
}

function DesktopMenu({ isLight }) {
    const pathname = usePathname();
    const isSmallGroup = pathname?.includes("small-groups");
    return (
        <Flex
            alignItems="center"
            justifyContent="flex-end"
            display={{ base: "none", md: "inherit" }}
            gap="8"
        >
            <ChakraNextLink
                href="/small-groups"
                fontWeight={500}
                borderBottom={isSmallGroup ? "1px solid" : ""}
                borderColor={isSmallGroup ? `${isLight ? "white" : "black"}` : ""}
                color={isLight ? "white" : ""}
                _hover={{
                    textDecoration: "none",
                    borderBottom: "1px solid",
                    borderColor: isSmallGroup
                        ? "brand.purple.200"
                        : `${isLight ? "white" : "black"}`,
                    color: isSmallGroup ? "brand.purple.200" : "",
                }}
            >
                Small groups
            </ChakraNextLink>
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
    const pathname = usePathname();
    const isSmallGroup = pathname?.includes("small-groups");

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
                            <ChakraNextLink
                                href="/small-groups"
                                fontWeight={500}
                                borderBottom={isSmallGroup ? "1px solid" : ""}
                                borderColor={isSmallGroup ? "black" : ""}
                                width="fit-content"
                                _hover={{
                                    textDecoration: "none",
                                    borderBottom: "1px solid",
                                    borderColor: isSmallGroup ? "brand.purple.200" : "black",
                                    color: isSmallGroup ? "brand.purple.200" : "",
                                }}
                            >
                                Small groups
                            </ChakraNextLink>
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

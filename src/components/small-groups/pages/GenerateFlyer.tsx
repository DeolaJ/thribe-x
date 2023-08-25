import {
    Box,
    Input,
    FormControl,
    FormErrorMessage,
    Text,
    Flex,
    FormLabel,
    IconButton,
    Icon,
    Spinner,
    chakra,
} from "@chakra-ui/react";
import { ChangeEvent, Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { FiEdit2 } from "react-icons/fi";
import imageCompression from "browser-image-compression";
import confetti from "canvas-confetti";

import SecondaryButton from "../../button/SecondaryButton";
import FlyerPreview from "../FlyerPreview";

import useUploadAvatar from "../../../hooks/useUploadAvatar";
import useLogEvent from "../../../hooks/useLogEvent";

import { getBucketUrl } from "../../../utils/image";
import { cleanInput, generateAlphaNumericString, truncateText } from "../../../utils/format";

import { AVATARS_BUCKET } from "../../../constants/supabase";

import orange from "../../../../public/images/background/blob-orange.svg";
import blue from "../../../../public/images/background/blob-blue.svg";

function GenerateFlyer() {
    const logEvent = useLogEvent();
    const [avatar, setAvatar] = useState("");
    const [firstName, setFirstName] = useState("");
    const [isPreview, setIsPreview] = useState(false);

    const canViewFlyer = avatar && firstName?.length > 0;

    function reset() {
        setAvatar("");
        setFirstName("");
        setIsPreview(false);
    }

    return (
        <>
            <Box
                as="section"
                pt={{ base: "14", md: "16" }}
                pb={{ base: "20", md: "24" }}
                px={{ base: "6", md: "16" }}
                minH="75vh"
                sx={{
                    "background-image": `url(${orange.src}), url(${blue.src})`,
                }}
                bgSize={{ base: "60px, 70px", md: "150px, 180px" }}
                bgRepeat="no-repeat"
                bgPosition={{
                    base: "-5% 5%, 105% 35%",
                    md: "-9% 5%, 109% 50%",
                    lg: "-4% 5%, 104% 50%",
                }}
            >
                {!isPreview && (
                    <Box maxW={500} mx="auto" pt="8">
                        <Text fontSize="xl" mb="4" fontWeight={600}>
                            Generate Small Groups Flyer
                        </Text>
                        <FirstNameInput firstName={firstName} setFirstName={setFirstName} />
                        <UploadAvatar setAvatar={setAvatar} />
                        <Flex mt="12" justifyContent="flex-end">
                            <SecondaryButton
                                fontSize="sm"
                                height="36px"
                                isDisabled={!canViewFlyer}
                                onClick={() => {
                                    setIsPreview(true);
                                    confetti({
                                        particleCount: 100,
                                        spread: 160,
                                    });
                                    logEvent({
                                        action: "generate_small_groups_flyer",
                                    });
                                }}
                            >
                                View Preview
                            </SecondaryButton>
                        </Flex>
                    </Box>
                )}
                {canViewFlyer && (
                    <FlyerPreview
                        avatar={avatar}
                        firstName={firstName}
                        reset={reset}
                        isPreview={isPreview}
                    />
                )}
            </Box>
        </>
    );
}

function FirstNameInput({
    firstName,
    setFirstName,
}: {
    firstName: string;
    setFirstName: Dispatch<SetStateAction<string>>;
}) {
    const hasError = firstName.length > 0 && firstName.length > 25;

    return (
        <FormControl isInvalid={hasError} mb="6">
            <FormLabel
                mb="1.5"
                fontSize="sm"
                mr="0"
                alignItems="center"
                display="flex"
                justifyContent="space-between"
            >
                <chakra.span>What is your first name?</chakra.span>
                <chakra.span opacity="0.9" fontSize="xs">
                    {firstName.length}/25
                </chakra.span>
            </FormLabel>
            <Input
                placeholder="Mayowa"
                value={firstName}
                onChange={(e) => {
                    const value = cleanInput(e.target.value);
                    setFirstName(value);
                }}
            />
            <FormErrorMessage>Too long!</FormErrorMessage>
        </FormControl>
    );
}

function UploadAvatar({ setAvatar }: { setAvatar: Dispatch<SetStateAction<string>> }) {
    const supabaseClient = useSupabaseClient();
    const version = useRef(generateAlphaNumericString(6));
    const [uploadError, setUploadError] = useState("");
    const [avatarFile, setAvatarFile] = useState<File | null>();
    const inputRef = useRef<HTMLInputElement>(null);

    const {
        mutateAsync: uploadAvatarAsync,
        isLoading: isUploadingAvatar,
        data: uploadedAvatar,
    } = useUploadAvatar();

    useEffect(() => {
        if (uploadedAvatar?.path) {
            const fullPath = AVATARS_BUCKET + "/" + uploadedAvatar?.path;
            const avatar = getBucketUrl(supabaseClient, AVATARS_BUCKET, fullPath);
            console.log({ avatar });
            setAvatar(avatar);
        }
    }, [uploadedAvatar?.path, setAvatar, supabaseClient]);

    function resetUploadWrapper() {
        setUploadError("");
    }

    async function handleUpload(event: ChangeEvent<HTMLInputElement>) {
        try {
            resetUploadWrapper();
            let file = event.target.files?.[0];
            if (!file) {
                return setUploadError("Please upload a file.");
            }
            if (file.size > 1024 * 1024 * 2) {
                file = await imageCompression(file, {
                    maxSizeMB: 2,
                    useWebWorker: true,
                });
            }
            setAvatarFile(file);
            uploadAvatarAsync(file);
        } catch (e) {
            console.log({ e });
            version.current = generateAlphaNumericString(6);
            setAvatarFile(null);
            setUploadError("Error occurred! Please try again.");
        }
    }
    return (
        <>
            <FormControl isInvalid={Boolean(uploadError)}>
                <FormLabel mb="1.5" fontSize="sm">
                    Upload a personal image for the flyer
                </FormLabel>
                <Box>
                    <Input
                        type="file"
                        key={version.current} // Fixes bug where same file can't be uploaded twice
                        onChange={handleUpload}
                        accept="image/*"
                        ref={inputRef}
                        display="none"
                    />
                    {avatarFile ? (
                        <>
                            <Flex alignItems="center" gap="2">
                                <Text fontSize="sm">{truncateText(avatarFile.name, 25)}</Text>
                                {isUploadingAvatar && (
                                    <Spinner size="sm" mr="1" color="brand.gray.900" />
                                )}
                                {!isUploadingAvatar && (
                                    <IconButton
                                        variant="unstyled"
                                        w="24px"
                                        h="24px"
                                        minW="24px"
                                        display="flex"
                                        icon={
                                            <Icon
                                                as={FiEdit2}
                                                w="10px"
                                                color="brand.gray.600"
                                                display="block"
                                            />
                                        }
                                        cursor="pointer"
                                        bg="brand.gray.20"
                                        border="2px solid"
                                        borderColor="white"
                                        borderRadius="8px"
                                        _hover={{
                                            color: "brand.gray.900",
                                            transform: "scale(1.08)",
                                        }}
                                        onClick={() => inputRef?.current?.click()}
                                        aria-label="Upload avatar"
                                    />
                                )}
                            </Flex>
                        </>
                    ) : (
                        <Flex gap="2" alignItems="center">
                            <SecondaryButton
                                fontSize="sm"
                                px="2"
                                onClick={() => inputRef?.current?.click()}
                                display="flex"
                                alignItems="center"
                                height="28px"
                                bgColor="brand.purple.200"
                                color="white"
                            >
                                Select image
                            </SecondaryButton>
                            <Text fontSize="sm" color="brand.gray.30" letterSpacing="0.5px">
                                jpg, png
                            </Text>
                        </Flex>
                    )}
                </Box>
                {uploadError && (
                    <FormErrorMessage mt="3" fontSize="sm">
                        {uploadError}
                    </FormErrorMessage>
                )}
            </FormControl>
        </>
    );
}

export default GenerateFlyer;

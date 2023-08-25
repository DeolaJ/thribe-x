import {
    Box,
    Button,
    ButtonGroup,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    chakra,
} from "@chakra-ui/react";
// eslint-disable-next-line import/named
import { Field, FieldProps, Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

import SecondaryButton from "../button/SecondaryButton";

import useUpdateLinks from "../../hooks/useUpdateLinks";

import { Link } from "../../types";

interface MyFormValues {
    title: string;
    url: string;
}

function LinkItemForm({
    order,
    link,
    cancel,
    size,
    isEditing,
}: {
    order?: number;
    link?: Link;
    cancel?: () => void;
    size?: string;
    isEditing?: boolean;
}) {
    const { mutateAsync: updateLinksAsync, isLoading: isUpdatingLinks } = useUpdateLinks();

    const maxLength = 100;
    const maxLengthLinks = 150;

    const initialValues: MyFormValues = {
        title: link?.title || "",
        url: link?.url || "",
    };

    const LinksSchema = Yup.object().shape({
        title: Yup.string().max(maxLength, "Too long.").required("Required."),
        url: Yup.string().max(maxLengthLinks, "Too long.").required("Required."),
    });

    async function handleSubmit(values: MyFormValues, { resetForm }: FormikHelpers<MyFormValues>) {
        const { title, url } = values;
        const linkDetails = {
            ...link,
            title,
            url,
            isInternal: url?.includes("thribe-x.com") || false,
            ...(order ? { order } : null), // If order exists
        };
        try {
            await updateLinksAsync({ ...linkDetails });
            if (!link) {
                resetForm();
            }
            cancel?.();
        } catch (error) {
            console.log("Error occurred", { error });
        }
    }

    return (
        <Box w="100%">
            <Formik
                enableReinitialize
                initialValues={initialValues}
                validationSchema={LinksSchema}
                onSubmit={handleSubmit}
            >
                {({ isValid }) => (
                    <Form>
                        <Field name="title">
                            {({ field, meta }: FieldProps<string>) => (
                                <FormControl isInvalid={Boolean(meta.error && meta.touched)} mb="4">
                                    <FormLabel
                                        fontSize="sm"
                                        mb="2"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="space-between"
                                        gap="2"
                                        mr="0"
                                    >
                                        <chakra.span>Title</chakra.span>

                                        <chakra.span
                                            color={meta.error ? "red.500" : "gray"}
                                            fontSize="xs"
                                        >
                                            {field.value?.length}/{maxLength}
                                        </chakra.span>
                                    </FormLabel>
                                    <Input {...field} placeholder="Join us..." />
                                    <FormErrorMessage fontSize="sm">{meta.error}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>

                        <Field name="url">
                            {({ field, meta }: FieldProps<string>) => (
                                <FormControl isInvalid={Boolean(meta.error && meta.touched)} mb="4">
                                    <FormLabel
                                        fontSize="sm"
                                        mb="2"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="space-between"
                                        gap="2"
                                        mr="0"
                                    >
                                        <chakra.span>Link</chakra.span>

                                        <chakra.span
                                            color={meta.error ? "red.500" : "gray"}
                                            fontSize="xs"
                                        >
                                            {field.value?.length}/{maxLengthLinks}
                                        </chakra.span>
                                    </FormLabel>
                                    <Input {...field} placeholder="https://" />
                                    <FormErrorMessage fontSize={{ base: "sm", sm: "md" }}>
                                        {meta.error}
                                    </FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>

                        <ButtonGroup display="flex" justifyContent="flex-end" gap="4">
                            {isEditing && cancel && (
                                <Button
                                    onClick={cancel}
                                    variant="unstyled"
                                    height="32px"
                                    fontSize={size}
                                    _hover={{ transform: "scale(1.05)" }}
                                >
                                    Cancel
                                </Button>
                            )}
                            <SecondaryButton
                                type="submit"
                                disabled={!isValid}
                                isLoading={isUpdatingLinks}
                                size={size}
                                bgColor="white"
                            >
                                {isEditing ? "Update" : "Add"}
                            </SecondaryButton>
                        </ButtonGroup>
                    </Form>
                )}
            </Formik>
        </Box>
    );
}

export default LinkItemForm;

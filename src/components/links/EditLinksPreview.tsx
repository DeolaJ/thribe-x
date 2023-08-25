import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    useSortable,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { ReactNode, useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
    closestCenter,
    DndContext,
    // eslint-disable-next-line import/named
    DragEndEvent,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { Box, Button, Icon, IconButton, VStack, chakra } from "@chakra-ui/react";
import { RxDragHandleDots2 } from "react-icons/rx";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";

import ShareButton from "../button/ShareButton";
import LinkItemForm from "./LinksItemForm";

import { useDeleteLinksById, useUpdateLinksOrder } from "../../hooks/useUpdateLinks";

import { Link } from "../../types";

function EditLinksPreview({ links }: { links: Link[] }) {
    const { mutateAsync: updateOrderAsync } = useUpdateLinksOrder();
    const [items, setItems] = useState(links);

    const linksOrder = useMemo(
        () => links?.map((link, index) => `${link.id}-${index}`).join(" "),
        [links]
    );
    const itemsOrder = useMemo(
        () => items?.map((item, index) => `${item.id}-${index}`).join(" "),
        [items]
    );

    const updateOrder = useCallback(async () => {
        try {
            const newLinksOrder: Link[] = items?.map(({ id, title, url }, index) => ({
                id,
                title,
                url,
                order: index,
            }));
            await updateOrderAsync(newLinksOrder);
        } catch (error) {
            console.log("Error occurred", { error });
        }
    }, [updateOrderAsync, items]);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;

        if (active.id !== over?.id) {
            setItems((items) => {
                const oldIndex = items.findIndex(({ id }) => id === active.id);
                const newIndex = items.findIndex(({ id }) => id === over?.id);

                return arrayMove(items, oldIndex, newIndex);
            });
        }
    }

    useEffect(() => {
        setItems(links);
    }, [links]);

    useEffect(() => {
        if (linksOrder !== itemsOrder) {
            updateOrder();
        }
    }, [linksOrder, itemsOrder, updateOrder]);

    const itemsID = items.map(({ id }) => id as string);

    return (
        <DndContext
            sensors={sensors}
            modifiers={[restrictToVerticalAxis]}
            onDragEnd={handleDragEnd}
            collisionDetection={closestCenter}
        >
            <SortableContext items={itemsID} strategy={verticalListSortingStrategy}>
                <VStack spacing="4" w="100%">
                    {items?.map((link) => (
                        <EditLinkWrapper key={link.id} id={link.id as string}>
                            <EditLink link={link} />
                        </EditLinkWrapper>
                    ))}
                </VStack>
            </SortableContext>
        </DndContext>
    );
}

function EditLinkWrapper({ children, id }: { children: ReactNode; id: string }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
        id,
    });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <Box
            w="100%"
            ref={setNodeRef}
            style={style}
            {...attributes}
            display="flex"
            position="relative"
        >
            <Button
                {...listeners}
                position="absolute"
                left="0"
                top="0"
                zIndex="1"
                height="100%"
                background="transparent"
                variant="unstyled"
                display="flex"
                _hover={{ cursor: "grab" }}
            >
                <Icon as={RxDragHandleDots2} _hover={{ transform: "scale(1.05)" }} m="auto" />
            </Button>
            {children}
        </Box>
    );
}

function EditLink({ link }: { link: Link }) {
    const { mutateAsync: deleteLinkAsync, isLoading: isDeletingLink } = useDeleteLinksById(
        link.id as string
    );
    const [isEditing, setIsEditing] = useState(false);

    const editViewRef = useRef<HTMLDivElement>(null);

    async function deleteLink() {
        try {
            await deleteLinkAsync();
        } catch (error) {
            console.log("Error occurred", { error });
        }
    }

    const closeOuter = useRef((e: MouseEvent) => {
        const eventPath = e?.composedPath();
        // Close edit view when clicking outside
        if (!eventPath?.includes((editViewRef?.current as HTMLDivElement) || null)) {
            setIsEditing(false);
        }
    });

    useEffect(() => {
        const closeOuterFunc = closeOuter.current;

        window.addEventListener("click", closeOuterFunc);

        return () => {
            window.removeEventListener("click", closeOuterFunc);
        };
    }, []);

    return (
        <Box flexGrow="1" position="relative" ref={editViewRef}>
            {!isEditing ? (
                <>
                    <ShareButton
                        _hover={{ transform: "none" }}
                        cursor="initial"
                        pl="40px"
                        pr="60px"
                        alignItems="flex-start"
                        display="flex"
                        flexDir="column"
                        py="3"
                        gap="0.5"
                        minH="60px"
                    >
                        <chakra.span textAlign="left" fontSize="sm" lineHeight="shorter">
                            {link.title}
                        </chakra.span>
                        <chakra.span
                            textAlign="left"
                            opacity="0.5"
                            fontWeight={400}
                            fontSize="sm"
                            wordBreak="break-all"
                            sx={{
                                whiteSpace: "nowrap",
                                maxWidth: "350px",
                                WebkitLineClamp: 1,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                                textOverflow: "ellipsis",

                                "@media (max-width: 600px)": {
                                    maxWidth: "220px",
                                },

                                "@media (max-width: 400px)": {
                                    maxWidth: "150px",
                                },
                            }}
                        >
                            {link.url}
                        </chakra.span>
                    </ShareButton>
                    <Box
                        position="absolute"
                        right="0"
                        top="0"
                        zIndex="1"
                        height="100%"
                        display="flex"
                        alignItems="center"
                        gap="1"
                        mr="1.5"
                    >
                        <IconButton
                            icon={<FiEdit2 />}
                            onClick={() => setIsEditing(true)}
                            fontSize="xs"
                            bg="transparent"
                            color="black"
                            p="0"
                            minW="6"
                            _hover={{ transform: "scale(1.1)" }}
                            aria-label="Edit link"
                        />
                        <IconButton
                            icon={<FaRegTrashAlt />}
                            isLoading={isDeletingLink}
                            onClick={deleteLink}
                            fontSize="xs"
                            bg="transparent"
                            color="black"
                            p="0"
                            minW="6"
                            _hover={{ transform: "scale(1.1)" }}
                            aria-label="Delete link"
                        />
                    </Box>
                </>
            ) : (
                <Box p="5" border="1px solid" borderRadius="lg" borderColor="gray.200">
                    <LinkItemForm
                        link={link}
                        cancel={() => setIsEditing(false)}
                        isEditing
                        size="sm"
                    />
                </Box>
            )}
        </Box>
    );
}

export default EditLinksPreview;

import React from "react";
import { Heading, Box, Grid, GridItem, Image, Icon, BoxProps } from "@chakra-ui/react";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";

const list = [
    {
        title: "Fortress & Zion",
        image: "https://res.cloudinary.com/dzpntisxj/image/upload/v1688143241/thribe-x/mental-health_blzyzs.png",
        url: "/small-groups/mental-health",
    },
    {
        title: "Megaminds",
        image: "https://res.cloudinary.com/dzpntisxj/image/upload/v1688143237/thribe-x/career_nqatyo.png",
        url: "/small-groups/career-growth",
    },
    {
        title: "Wholesome Cuts",
        image: "https://res.cloudinary.com/dzpntisxj/image/upload/v1688143243/thribe-x/relationship_qsbxd5.png",
        url: "/small-groups/relationships",
    },
    {
        title: "Lifelines",
        image: "https://res.cloudinary.com/dzpntisxj/image/upload/v1688143241/thribe-x/friendship_qzypsc.png",
        url: "/small-groups/friendship",
    },
    {
        title: "Hired",
        image: "https://res.cloudinary.com/dzpntisxj/image/upload/v1688143243/thribe-x/unemployment_kdrees.png",
        url: "/small-groups/unemployment",
    },
    {
        title: "Adullam",
        image: "https://res.cloudinary.com/dzpntisxj/image/upload/v1688143242/thribe-x/spiritual_hagmua.png",
        url: "/small-groups/spiritual-growth",
    },
    {
        title: "NextGen",
        image: "https://res.cloudinary.com/dzpntisxj/image/upload/v1688143240/thribe-x/undergrad_dkxk1r.png",
        url: "/small-groups/undergraduates",
    },
];

function Groups({ ...props }: BoxProps) {
    function getTemplateAreas() {
        const baseBreakpoint = list?.reduce((base, _, index) => {
            return `
                ${base}
                "section-${index + 1}-content"
                "section-${index + 1}-image"
            `;
        }, ``);
        const mdBreakpoint = list?.reduce((md, _, index) => {
            if (index % 2 === 0) {
                return `
                    ${md}
                    "section-${index + 1}-content section-${index + 1}-image"
                `;
            }
            return `
                ${md}
                "section-${index + 1}-image section-${index + 1}-content"
            `;
        }, ``);

        return { baseBreakpoint, mdBreakpoint };
    }

    const { baseBreakpoint, mdBreakpoint } = getTemplateAreas();

    return (
        <Box
            as="section"
            pt={{ base: "20", md: "28" }}
            pb={{ base: "2", md: "28" }}
            px={{ base: "12", md: "16" }}
            {...props}
        >
            <Grid
                templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                templateRows="auto"
                templateAreas={{
                    base: baseBreakpoint,
                    md: mdBreakpoint,
                }}
                rowGap={{ base: 4, md: 16 }}
                columnGap={14}
                maxW={1200}
                alignItems="center"
                mx="auto"
            >
                {list?.map((listItem, index) => (
                    <React.Fragment key={listItem.title}>
                        <GridItem
                            area={`section-${index + 1}-content`}
                            justifySelf={index % 2 === 1 ? "flex-start" : "flex-end"}
                            maxW={{ md: "300px" }}
                            mx="auto"
                        >
                            <Link href={listItem.url} target="_blank">
                                <Heading
                                    fontSize={{ base: "xl", md: "3xl" }}
                                    textAlign={{ base: "center", md: "left" }}
                                    lineHeight="short"
                                    mb={{ base: "1.5", md: "3" }}
                                    fontWeight={700}
                                    _hover={{ textDecoration: "underline" }}
                                >
                                    {listItem.title}
                                    <Icon
                                        as={BiLinkExternal}
                                        boxSize={{ base: "3", md: "5" }}
                                        mb={{ base: "-1px", md: "-0.5" }}
                                        ml="2"
                                        aria-label="icon"
                                    />
                                </Heading>
                            </Link>
                        </GridItem>
                        <GridItem
                            area={`section-${index + 1}-image`}
                            justifySelf={{ base: "flex-start", md: "flex-end" }}
                            maxW={{ base: "300px", md: "400px" }}
                            mx="auto"
                            mb={{ base: "14", md: "0" }}
                        >
                            <Link href={listItem.url} target="_blank">
                                <Image src={listItem.image} alt="subheader image" />
                            </Link>
                        </GridItem>
                    </React.Fragment>
                ))}
            </Grid>
        </Box>
    );
}

export default Groups;

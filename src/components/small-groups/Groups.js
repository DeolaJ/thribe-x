import React from "react";
import { Heading, Box, Grid, GridItem, Image } from "@chakra-ui/react";

const list = [
    {
        title: "Fortress & Zion",
        image: "https://res.cloudinary.com/dzpntisxj/image/upload/v1688143241/thribe-x/mental-health_blzyzs.png",
    },
    {
        title: "Megaminds",
        image: "https://res.cloudinary.com/dzpntisxj/image/upload/v1688143237/thribe-x/career_nqatyo.png",
    },
    {
        title: "Wholesome Cuts",
        image: "https://res.cloudinary.com/dzpntisxj/image/upload/v1688143243/thribe-x/relationship_qsbxd5.png",
    },
    {
        title: "Lifelines",
        image: "https://res.cloudinary.com/dzpntisxj/image/upload/v1688143241/thribe-x/friendship_qzypsc.png",
    },
    {
        title: "Hired",
        image: "https://res.cloudinary.com/dzpntisxj/image/upload/v1688143243/thribe-x/unemployment_kdrees.png",
    },
    {
        title: "Adullam",
        image: "https://res.cloudinary.com/dzpntisxj/image/upload/v1688143242/thribe-x/spiritual_hagmua.png",
    },
    {
        title: "NextGen",
        image: "https://res.cloudinary.com/dzpntisxj/image/upload/v1688143240/thribe-x/undergrad_dkxk1r.png",
    },
];

function Groups({ ...props }) {
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
                            maxW={{ md: "250px" }}
                            mx="auto"
                        >
                            <Heading
                                fontSize={{ base: "lg", md: "3xl" }}
                                textAlign={{ base: "center", md: "left" }}
                                lineHeight="short"
                                mb="3"
                                fontWeight={700}
                            >
                                {listItem.title}
                            </Heading>
                        </GridItem>
                        <GridItem
                            area={`section-${index + 1}-image`}
                            justifySelf={{ base: "flex-start", md: "flex-end" }}
                            maxW="450px"
                            mx="auto"
                            mb={{ base: "24", md: "0" }}
                        >
                            <Image src={listItem.image} alt="subheader image" />
                        </GridItem>
                    </React.Fragment>
                ))}
            </Grid>
        </Box>
    );
}

export default Groups;

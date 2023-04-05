import { Heading, Box, Grid, GridItem, Flex, Icon, Text } from "@chakra-ui/react";

import { TbChessKnight } from "react-icons/tb";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { GiMicrophone, GiStonePath } from "react-icons/gi";
import { VscSymbolProperty } from "react-icons/vsc";

const teams = [
    {
        name: "Big Ops & Amplify",
        icon: VscSymbolProperty,
    },
    {
        name: "Thribe-x Worship",
        icon: GiMicrophone,
    },
    {
        name: "Paparazzi Geng",
        icon: HiOutlineSpeakerphone,
    },
    {
        name: "Knights & Oasis",
        icon: TbChessKnight,
    },
    {
        name: "Pathfinders",
        icon: GiStonePath,
    },
];

function Teams({ ...props }) {
    return (
        <Box
            as="section"
            pt={{ base: "20", md: "28" }}
            pb={{ base: "24", md: "40" }}
            px={{ base: "12", md: "16" }}
            {...props}
        >
            <Box maxW="8xl" mx="auto">
                <Heading
                    textAlign="center"
                    size="xl"
                    mb={{ base: "12", md: "24" }}
                    textTransform="uppercase"
                >
                    Teams
                </Heading>
                <Grid
                    templateColumns={{
                        base: "minmax(300px, 400px)",
                        md: "minmax(300px, 400px) minmax(300px, 400px)",
                        xl: "minmax(300px, 400px) minmax(300px, 400px) minmax(300px, 400px)",
                    }}
                    templateRows="auto"
                    columnGap={{ base: "4", md: "8" }}
                    rowGap={{ base: "10", md: "14" }}
                    placeContent="center"
                    alignItems="center"
                >
                    {teams.map((team) => (
                        <GridItem key={team.name}>
                            <Flex
                                w="14"
                                h="14"
                                borderRadius="50%"
                                bg="white"
                                border="8px solid"
                                borderColor="white"
                                mb="3"
                                mx="auto"
                            >
                                <Icon
                                    as={team.icon}
                                    transform="scale(2)"
                                    m="auto"
                                    color="brand.orange.100"
                                    bg="white"
                                />
                            </Flex>
                            <Text fontSize="lg" mb="2" fontWeight={600} textAlign="center">
                                {team.name}
                            </Text>
                        </GridItem>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}

export default Teams;

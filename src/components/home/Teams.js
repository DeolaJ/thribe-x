import {
    Heading,
    Box,
    Grid,
    GridItem,
    Icon,
    Text,
    Divider,
    AbsoluteCenter,
} from "@chakra-ui/react";

import { TbChessKnight } from "react-icons/tb";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { GiMicrophone, GiStonePath } from "react-icons/gi";
import { VscSymbolProperty } from "react-icons/vsc";
import { SiSoundcharts } from "react-icons/si";

const teams = [
    {
        name: "Big Ops",
        icon: VscSymbolProperty,
    },
    {
        name: "Amplify",
        icon: SiSoundcharts,
    },
    {
        name: "Thribe-W Worship",
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
            pt={{ base: "24", md: "32" }}
            pb={{ base: "24", md: "32" }}
            px={{ base: "6", md: "16" }}
            mixBlendMode="multiply"
            {...props}
        >
            <Box maxW="8xl" mx="auto">
                <Heading
                    textAlign="center"
                    fontSize={{ base: "xl", md: "3xl" }}
                    mb={{ base: "12", md: "24" }}
                    mx="auto"
                >
                    <Box position="relative" padding={{ md: "10" }}>
                        <Divider borderColor="black" />
                        <AbsoluteCenter px="4" bgColor="brand.orange.100">
                            Teams
                        </AbsoluteCenter>
                    </Box>
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
                            <Box
                                mb="3"
                                border="2px solid"
                                borderRadius="50%"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                width="10"
                                height="10"
                                mx="auto"
                            >
                                <Icon as={team.icon} boxSize="5" aria-label="icon" />
                            </Box>
                            <Text
                                fontSize={{ base: "md", md: "lg" }}
                                mb="2"
                                fontWeight={600}
                                textAlign="center"
                            >
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

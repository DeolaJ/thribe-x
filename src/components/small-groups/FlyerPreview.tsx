import { Box, Flex, Button, Link } from "@chakra-ui/react";
import { Cloudinary, Transformation } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";

import { source } from "@cloudinary/url-gen/actions/overlay";
import { fetch, text } from "@cloudinary/url-gen/qualifiers/source";
import { TextStyle } from "@cloudinary/url-gen/qualifiers/textStyle";
import { Position } from "@cloudinary/url-gen/qualifiers/position";
import { compass, focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { crop, scale } from "@cloudinary/url-gen/actions/resize";
import { face } from "@cloudinary/url-gen/qualifiers/focusOn";
import { max } from "@cloudinary/url-gen/actions/roundCorners";
import { attachment } from "@cloudinary/url-gen/qualifiers/flag";
import { format } from "@cloudinary/url-gen/actions/delivery";
import { auto } from "@cloudinary/url-gen/qualifiers/format";

import SecondaryButton from "../button/SecondaryButton";

const cloud = new Cloudinary({
    cloud: {
        cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUDNAME,
    },
});

const publicId = process.env.NEXT_PUBLIC_CLOUDINARY_FLYER;

function FlyerPreview({
    isPreview,
    firstName,
    avatar,
    reset,
}: {
    isPreview: boolean;
    firstName: string;
    avatar: string;
    reset: () => void;
}) {
    const myImage = cloud
        .image(publicId)
        .overlay(
            source(text(firstName, new TextStyle("Arial", 30))).position(
                new Position().gravity(compass("north_west")).offsetY(0.18).offsetX(0.07)
            )
        )
        .overlay(
            source(
                fetch(avatar).transformation(
                    new Transformation()
                        .resize(scale().width(500))
                        .resize(crop().width(400).height(400).gravity(focusOn(face())))
                        .roundCorners(max())
                )
            ).position(new Position().gravity(compass("north_east")).offsetY(0.19).offsetX(0.08))
        );

    const downloadLink = myImage.delivery(format(auto())).addFlag(attachment("flyer")).toURL();

    return (
        <Box
            maxW={500}
            mx="auto"
            position={!isPreview ? "absolute" : undefined}
            left={!isPreview ? "-10000000px" : ""}
        >
            <AdvancedImage cldImg={myImage} />
            <Flex mt="8" gap="6" justifyContent="center">
                <Button variant="unstyled" onClick={reset} _hover={{ textDecoration: "underline" }}>
                    Restart
                </Button>
                <Link href={downloadLink}>
                    <SecondaryButton>Download</SecondaryButton>
                </Link>
            </Flex>
        </Box>
    );
}

export default FlyerPreview;

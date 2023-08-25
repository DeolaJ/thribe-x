import Head from "next/head";

import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";

import GenerateFlyer from "../../src/components/small-groups/pages/GenerateFlyer";

export default function Flyers() {
    return (
        <>
            <Head>
                <title>Generate small groups flyers</title>
                <meta
                    name="description"
                    content="Create a sharable flyer for thribe-x small groups"
                />
                <meta
                    name="keywords"
                    content="thribe-x, covenant nation, youth, youth church, glass house, small groups, thribe-x small groups, image generation, flyers, small group flyers"
                />
            </Head>
            <>
                <Header />
                <GenerateFlyer />
                <Footer />
            </>
        </>
    );
}

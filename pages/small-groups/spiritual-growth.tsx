import Head from "next/head";

import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";

import Contact from "../../src/components/small-groups/Contact";
import SpiritualGrowthGroup from "../../src/components/small-groups/pages/SpiritualGrowthGroup";

export default function SpiritualGrowth() {
    return (
        <>
            <Head>
                <title>Small groups | Spiritual Growth</title>
                <meta
                    name="description"
                    content="The Adullam small group is a transformative space where members learn how to study the Bible,  engage in prayers and fasting, how to write confessions, how to worship & understand the Holy Spirit, and more."
                />
                <meta
                    name="keywords"
                    content="thribe-x, covenant nation, youth, youth church, glass house, small groups, thribe-x small groups, spiritual growth small group, adullam"
                />
            </Head>
            <>
                <Header />
                <SpiritualGrowthGroup />
                <Contact />
                <Footer />
            </>
        </>
    );
}

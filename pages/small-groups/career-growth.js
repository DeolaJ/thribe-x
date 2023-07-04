import Head from "next/head";

import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";

import Contact from "../../src/components/small-groups/Contact";
import CareerGrowthGroup from "../../src/components/small-groups/pages/CareerGrowthGroup";

export default function CareerGrowth() {
    return (
        <>
            <Head>
                <title>Small groups | Career Growth</title>
                <meta
                    name="description"
                    content="The Megaminds small group is a supportive space dedicated to helping individuals advance in their careers."
                />
                <meta
                    name="keywords"
                    content="thribe-x, covenant nation, youth, youth church, glass house, small groups, thribe-x small groups, career growth small group, nextgen"
                />
            </Head>
            <>
                <Header />
                <CareerGrowthGroup />
                <Contact message="Join our faith-based career community today and unlock the transformative power of aligning your professional journey with your spiritual convictions." />
                <Footer />
            </>
        </>
    );
}

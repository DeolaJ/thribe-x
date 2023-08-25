import Head from "next/head";

import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";

import Contact from "../../src/components/small-groups/Contact";
import MentalHealthGroup from "../../src/components/small-groups/pages/MentalHealthGroup";

export default function MentalHealth() {
    return (
        <>
            <Head>
                <title>Small groups | Mental Health</title>
                <meta
                    name="description"
                    content="Embark on a transformative journey in our mental health group, where we will provide support in dealing with fear, anxiety, depression, loss & grief and addiction."
                />
                <meta
                    name="keywords"
                    content="thribe-x, covenant nation, youth, youth church, glass house, small groups, thribe-x small groups, mental health small group, adullam"
                />
            </Head>
            <>
                <Header />
                <MentalHealthGroup />
                <Contact />
                <Footer />
            </>
        </>
    );
}

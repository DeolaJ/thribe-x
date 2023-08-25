import Head from "next/head";

import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";

import Contact from "../../src/components/small-groups/Contact";
import UndergraduatesGroup from "../../src/components/small-groups/pages/UndergraduatesGroup";

export default function Undergraduates() {
    return (
        <>
            <Head>
                <title>Small groups | Undergraduates</title>
                <meta
                    name="description"
                    content="NextGen Small group is fortified to empower undergraduates to achieve academic excellence, maximize the opportunities and resources available at this phase of life."
                />
                <meta
                    name="keywords"
                    content="thribe-x, covenant nation, youth, youth church, glass house, small groups, thribe-x small groups, undergraduates small group, nextgen"
                />
            </Head>
            <>
                <Header />
                <UndergraduatesGroup />
                <Contact message="So join in today and make the best of this extremely crucial season where God's plan for you is to be set way high not shoved deep underground." />
                <Footer />
            </>
        </>
    );
}

import Head from "next/head";

import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";

import Contact from "../../src/components/small-groups/Contact";
import RelationshipsGroup from "../../src/components/small-groups/pages/RelationshipsGroup";

export default function Relationships() {
    return (
        <>
            <Head>
                <title>Small groups | Relationships</title>
                <meta
                    name="description"
                    content="The Wholesome Cuts small group explores the core aspects and diverse elements of a God-centered romantic relationship, providing valuable insights and tools for participants to manifest their ideal connections."
                />
                <meta
                    name="keywords"
                    content="thribe-x, covenant nation, youth, youth church, glass house, small groups, thribe-x small groups, relationships small group, wholesome cuts"
                />
            </Head>
            <>
                <Header />
                <RelationshipsGroup />
                <Contact message="Join us today and embark on a transformative journey of building meaningful relationships that will enrich your life!" />
                <Footer />
            </>
        </>
    );
}

import Head from "next/head";

import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

import Hero from "../src/components/small-groups/Hero";
import About from "../src/components/small-groups/About";
import WhyJoinUs from "../src/components/small-groups/WhyJoinUs";
import Contact from "../src/components/small-groups/Contact";
import Groups from "../src/components/small-groups/Groups";
import FAQs from "../src/components/small-groups/FAQs";

export default function SmallGroups() {
    return (
        <>
            <Head>
                <title>Thribe-X | Small groups</title>
                <meta
                    name="description"
                    content="Welcome to The Glass House, where our small groups embody the principles of openness, transparency, support, growth, fostering personal and collective development in a fun and engaging way!"
                />
            </Head>
            <>
                <Header />
                <Hero />
                <About />
                <WhyJoinUs />
                <Groups />
                <FAQs />
                <Contact />
                <Footer />
            </>
        </>
    );
}

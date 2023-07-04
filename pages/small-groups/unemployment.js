import Head from "next/head";

import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";

import Contact from "../../src/components/small-groups/Contact";
import UnemploymentGroup from "../../src/components/small-groups/pages/UnemploymentGroup";

export default function Unemployment() {
    return (
        <>
            <Head>
                <title>Small groups | Unemployment</title>
                <meta
                    name="description"
                    content="HIRED is a small group created and tailored to effectively support you in your job search by providing resources and guidance on job hunting, resume writing, and interview skills all towards making you full-fledged or employable"
                />
                <meta
                    name="keywords"
                    content="thribe-x, covenant nation, youth, youth church, glass house, small groups, thribe-x small groups, Unemployment small group, nextgen"
                />
            </Head>
            <>
                <Header />
                <UnemploymentGroup />
                <Contact message="Do join in now!!!" />
                <Footer />
            </>
        </>
    );
}

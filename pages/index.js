import Head from "next/head";

import Header from "../src/components/Header";
import Hero from "../src/components/home/Hero";
import About from "../src/components/home/About";
import Teams from "../src/components/home/Teams";
import DNA from "../src/components/home/DNA";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";

export default function Home() {
    return (
        <>
            <Head>
                <title>Thribe X</title>
                <meta name="description" content="Youthful expression of the convenant nation" />
            </Head>

            <>
                <Header bgColor="brand.gray.500" />
                <Hero />
                <About />
                <Teams bgColor="brand.orange.100" />
                <DNA />
                <Contact bgColor="brand.blue.500" />
                <Footer bgColor="brand.blue.500" />
            </>
        </>
    );
}

import Head from "next/head";

import Header from "../src/components/Header";
import Hero from "../src/components/Hero";
import Footer from "../src/components/Footer";
import About from "../src/components/About";
import Teams from "../src/components/Teams";
import DNA from "../src/components/DNA";
import Contact from "../src/components/Contact";

export default function Home() {
    return (
        <>
            <Head>
                <title>Thribe X</title>
                <meta name="description" content="Youthful expression of the convenant nation" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
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

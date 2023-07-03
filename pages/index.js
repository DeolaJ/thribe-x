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
                <title>Thribe-X</title>
                <meta
                    name="description"
                    content="Welcome to Thribe-X, The Youthful Expression of The Covenant Nation, Iganmu"
                />
                <meta
                    name="keywords"
                    content="thribe-x, covenant nation, youth, youth church, thribe x"
                />
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

import Head from "next/head";
import { QueryClient, dehydrate } from "@tanstack/react-query";

import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";

import LinksHome from "../../src/components/links/LinksHome";

import { getLinks } from "../../lib/ssg/getLinks";

import { Link } from "../../src/types";

export async function getStaticProps() {
    const queryClient = new QueryClient();
    let links;
    try {
        links = await queryClient.fetchQuery(["links"], () => getLinks());
    } catch (error) {
        links = [];
    }
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
            initialLinks: links,
        },
        revalidate: 30,
    };
}

export default function Links({ initialLinks }: { initialLinks: Link[] }) {
    return (
        <>
            <Head>
                <title>Thribe-X Links</title>
                <meta
                    name="description"
                    content="Get all the links to join us, our events, feedback and general announcements here"
                />
                <meta
                    name="keywords"
                    content="thribe-x, covenant nation, youth, youth church, share, links, announcements, feedback, linktree"
                />
            </Head>
            <>
                <Header isMenuHidden />
                <LinksHome initialLinks={initialLinks} />
                <Footer />
            </>
        </>
    );
}

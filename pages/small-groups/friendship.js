import Head from "next/head";

import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";

import Contact from "../../src/components/small-groups/Contact";
import FriendshipGroup from "../../src/components/small-groups/pages/FriendshipGroup";

export default function Friendship() {
    return (
        <>
            <Head>
                <title>Small groups | Friendship</title>
                <meta
                    name="description"
                    content="Lifelines Small Group is a circle of trust designed to support individuals from diverse backgrounds in discovering, building, nurturing, and sustaining meaningful friendships."
                />
                <meta
                    name="keywords"
                    content="thribe-x, covenant nation, youth, youth church, glass house, small groups, thribe-x small groups, friendship small group, nextgen"
                />
            </Head>
            <>
                <Header />
                <FriendshipGroup />
                <Contact />
                <Footer />
            </>
        </>
    );
}

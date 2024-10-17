import React from "react";
import RootLayout from "../../src/layout/RootLayout";
import NewHero from "../../src/newHomepage/NewHero";
import CallToAction from "../../src/newHomepage/CallToAction";
import NewAbout from "../../src/newHomepage/NewAbout";
import Services from "../../src/newHomepage/Services";
import ServiceUnit from "../../src/newHomepage/ServiceUnit";
import Thribexmoment from "../../src/newHomepage/Thribexmoment";
import UpcomingEvents from "../../src/newHomepage/UpcomingEvents";
import NewContact from "../../src/newHomepage/NewContact";

const newHomePage = () => {
    return (
        <RootLayout>
            <main className="">
                <NewHero />
                <CallToAction />
                <NewAbout />
                <Services />
                <ServiceUnit />
                <Thribexmoment />
                <UpcomingEvents />
                <NewContact />
            </main>
        </RootLayout>
    );
};

export default newHomePage;

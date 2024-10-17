import ThribexServices from "../components/ThribexServices";

function Services() {
    return (
        <div className="px-[1.25rem] md:px-[2rem] lg:px-[2.5rem] pb-[1.5rem] lg:pb-[6.25rem] mt-[-3.813rem] lg:mt-[-12.125rem] flex flex-col lg:flex-row gap-[2.25rem] lg:gap-[4.25rem] relative z-[1]">
            <ThribexServices title="Mid Week Service- KOSMOS" dataText="Mid Week Service- KOSMOS">
                <span>
                    <br className="hidden lg:block" /> Dive into KOSMOS, our midweek services - the
                    ultimate online Bible study experience.
                </span>
                <span>
                    Connect with a cool community, have deep chats, and discover new
                    perspectives—all from your screen!!
                </span>
            </ThribexServices>
            <ThribexServices
                title={
                    <>
                        {`Saturday Service`} <span className="hidden md:inline">-</span>{" "}
                        <br className="md:hidden" />{" "}
                        <>
                            <span className="lg:hidden">(</span>4PM{" "}
                            <span className="lg:hidden">)</span>
                        </>
                    </>
                }
                dataText="Saturday Service - 4PM"
            >
                <span>Looking for something exciting this Saturday? 🤩</span>
                <span>
                    Join us at 4PM for an exciting youth service! With great music, inspiring talks,
                    and a chance to hang out with friends; it&apos;s not your typical gathering.
                </span>
                <span>
                    Whether you&apos;re into deep conversations or fun activities, we&apos;ve got
                    you covered. Don&apos;t miss out on the fun and good vibes.
                    <br /> See you there🥳🥳!!!
                </span>
            </ThribexServices>
        </div>
    );
}

export default Services;

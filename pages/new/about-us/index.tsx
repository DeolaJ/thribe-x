import Image from "next/image";
import RootLayout from "../../../src/layout/RootLayout";
import { autour } from "../../../styles/theme";
import Button from "../../../src/components/button/Button";
import { ArrowRightIcon } from "../../../src/newHomepage/assets/Icons";

const NewAboutUsPage = () => {
    return (
        <RootLayout>
            <div className="px-[1.25rem] md:px-[2.8rem] lg:px-[3.75rem]">
                <h1 className="pt-[3rem] min-[1440px]:pt-[6.25rem] pb-[2.25rem] xl:pb-[4rem] text-[1.5rem] xl:text-[3.125rem] text-center font-[600]">
                    ABOUT US
                </h1>
                <p className="text-justify lg:text-center xl:text-[1.1rem] min-[1440px]:text-[1.5rem] font-[500]">
                    Thribe-X is one of the youthful expression of The Covenant Nation, Global.{" "}
                    <br /> We are an{" "}
                    <span className={`${autour.className} text-[#9F2D9D]`}>Xpansion</span> of light
                    with a unique{" "}
                    <span className={`${autour.className} text-[#9F2D9D]`}>Xpression</span> of love
                    to give <span className={`${autour.className} text-[#9F2D9D]`}>Xtensions</span>{" "}
                    of life to our world through Jesus Christ and His Word. <br />
                    <br /> Thribe-X is an atmosphere where young people discover, develop and deploy
                    their full potentials and uniqueness in christ to stand out as true role models.
                </p>
                <div className="about-us-style relative z-[1] my-[3rem] lg:my-[4rem] px-[0.75rem] lg:px-[1.5rem]">
                    <Image
                        className="mx-auto lg:hidden"
                        src="/homepageImages/homepage-about.png"
                        alt="thribex members"
                        layout="responsive"
                        width={366}
                        height={223}
                    />
                    <Image
                        className="hidden lg:inline mx-auto "
                        src="/core-team.png"
                        alt="thribex members"
                        layout="responsive"
                        width={1272}
                        height={637}
                    />
                </div>
                <p className="text-justify lg:text-center xl:text-[1.1rem] min-[1440px]:text-[1.5rem] font-[500]">
                    We are a vibrant youth church devoted to the Word and Prayer, fostering deep
                    relationships through homogenous groups. Our community thrives on love, care,
                    and the expression of the supernatural life through signs and wonders. We are a
                    unique tribe, full of God&apos;s Spirit, operating with wisdom, understanding,
                    and knowledge. <br />
                    <br /> We are highly intelligent and an extremely creative group of young
                    believers who offer incense, and spontaneous worship to God as worshipping
                    priests. Our journey is marked by favor, increase, growth, and excellence as
                    craftsmen.
                </p>
                <p className="mt-[1.75rem] lg:mt-[3rem] text-[1.125rem] lg:text-[1.5rem] xl:text-[1.875rem] font-[600] text-center italic">
                    Till every member Find their Place! Fill their Space! Run their Race!
                </p>
            </div>
            <div className="relative flex flex-col md:flex-row gap-[1.88rem] lg:gap-[3.75rem] px-[1.25rem] md:px-[2.8rem] lg:px-[3.75rem] lg:pb-[7.563rem] my-[3rem] lg:my-[6.25rem] xl:mb-[11.313rem]">
                <div className="hidden lg:block absolute bottom-[-6rem] left-[-10rem] xl:left-0">
                    <Image
                        src="/homepageImages/dashed-single-left.png"
                        alt="background design"
                        width="506"
                        height="145"
                    />
                </div>
                <div className="hidden lg:block absolute top-[-6rem] right-0">
                    <Image
                        src="/homepageImages/dashed-single-right.png"
                        alt="background design"
                        width="489"
                        height="145"
                    />
                </div>
                <div className="flex flex-col h-auto md:w-1/2 gap-[1.5rem] lg:gap-[2rem] min-[1440px]:gap-[4.438rem] px-[1.75rem] lg:px-[1.5rem] py-[1.5rem] lg:py-[2rem] xl:py-[2.25rem] rounded-[20px] border bg-[#F1F1EE]">
                    <h2
                        data-text="OUR VISION"
                        className="custom-text-stroke text-shadow-class text-[1.25rem] lg:text-[1.9rem] min-[1440px]:text-[2.25rem] font-[500]"
                    >
                        OUR VISION
                    </h2>
                    <p className="text-center font-[600] lg:text-[1.1rem] xl:text-[1.5rem]">
                        “our vision is to build a tribe of young hearts, minds and lives for God,
                        dedicated to learning, growing and living out His Will”
                    </p>
                </div>
                <div className="flex flex-col md:w-1/2 gap-[1.5rem] lg:gap-[2rem] min-[1440px]:gap-[4.438rem] lg:translate-y-[7.563rem] px-[1.75rem] lg:px-[1.5rem] py-[1.5rem] lg:py-[2rem] xl:py-[2.25rem] rounded-[20px] border bg-[#F1F1EE]">
                    <h2
                        data-text="OUR MISSION"
                        className="custom-text-stroke text-shadow-class text-[1.25rem] lg:text-[1.9rem] min-[1440px]:text-[2.25rem] font-[500]"
                    >
                        OUR MISSION
                    </h2>
                    <p className="text-center font-[600] lg:text-[1.1rem] xl:text-[1.5rem]">
                        “Our mission is to experience the supernatural in our everyday lives, the
                        daily practices, habits, routines, the systems, and lifestyle with depth of
                        understanding, applicable wisdom and consistently getting results.”
                    </p>
                </div>
            </div>

            <div className="px-[1.25rem] md:px-[2.8rem] lg:px-[3.75rem] mb-[3rem] lg:mb-[6.25rem]">
                <h3 className="text-[1.25rem] lg:text-[2.25rem] font-[600] text-center mb-[2.25rem] lg:mb-[3.375rem]">
                    OUR SERVICES
                </h3>
                <div className="flex flex-col lg:flex-row gap-[2.25rem] lg:gap-[3.25rem]">
                    <div className="flex flex-col px-[1.375rem] py-[1.5rem] md:p-[1.7rem] xl:p-[2.25rem] lg:w-1/2 rounded-[20px] border bg-[#F1F1EE] shadow-[0px_2.46px_6.15px_0px_#00000040]">
                        <div>
                            <Image
                                className=""
                                src="/service1.png"
                                alt="thribex service"
                                layout="responsive"
                                width={562}
                                height={232}
                            />
                        </div>
                        <h4
                            data-text="Mid Week Service- KOSMOS"
                            className="custom-text-stroke text-shadow-class text-[0.923rem] md:text-[1.3rem] lg:text-[1.5rem] mt-[1.5rem] lg:mt-[3.25rem] mb-[0.938rem] lg:mb-[1.25rem]"
                        >
                            Mid Week Service- KOSMOS
                        </h4>
                        <p className="text-[0.75rem] md:text-[1rem] min-[1440px]:text-[1.125rem]">
                            Dive into KOSMOS, our midweek services - the ultimate online Bible study
                            experience. <br />
                            <br /> Connect with a cool community, have deep chats, and discover new
                            perspectives—all from your screen!!
                        </p>
                    </div>
                    <div className="flex flex-col px-[1.375rem] py-[1.5rem] md:p-[1.7rem] xl:p-[2.25rem] lg:w-1/2 rounded-[20px] border bg-[#F1F1EE] shadow-[0px_2.46px_6.15px_0px_#00000040]">
                        <div>
                            <Image
                                className=""
                                src="/service2.png"
                                alt="thribex service"
                                layout="responsive"
                                width={562}
                                height={232}
                            />
                        </div>
                        <h4
                            data-text="Saturday Service- 4PM"
                            className="custom-text-stroke text-shadow-class text-[0.923rem] md:text-[1.3rem] lg:text-[1.5rem] mt-[1.5rem] lg:mt-[3.25rem] mb-[0.938rem] lg:mb-[1.5rem]"
                        >
                            Saturday Service- 4PM
                        </h4>
                        <p className="text-[0.75rem] md:text-[1rem] min-[1440px]:text-[1.125rem]">
                            Looking for something exciting this Saturday? 🤩
                            <br />
                            <br /> Join us at <span className="lg:text-[#9F2D9D]">4PM</span> for an
                            exciting youth service!
                            <br />
                            <br /> With great music, inspiring talks, and a chance to hang out with
                            friends; it&apos;s not your typical gathering.
                            <br /> Whether you&apos;re into deep conversations or fun activities,
                            we&apos;ve got you covered. Don&apos;t miss out on the fun and good
                            vibes.
                            <br /> See you there!!!
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-[1.5rem] lg:gap-[3.375rem] px-[1.25rem] md:px-[2.8rem] lg:px-[3.75rem] pb-[4.25rem] lg:pb-[6.25rem]">
                <h4 className="text-[1.25rem] lg:text-[2.25rem] font-[600] text-center">
                    OUR LEADERS
                </h4>
                <div className="relative pt-[38.9%] overflow-hidden rounded-[5.9px] lg:rounded-[20px]">
                    <Image
                        className="absolute top-[-1.2rem] lg:top-[-4rem] inset-0"
                        src="/core-team.png"
                        alt="thribex members"
                        layout="responsive"
                        width={1320}
                        height={541}
                    />
                </div>
                <Button
                    label="Meet Our Leaders"
                    className="flex lg:relative z-10 items-center gap-[1rem] mx-auto justify-center w-[10.625rem] lg:w-[29.75rem]"
                >
                    <ArrowRightIcon />
                </Button>
            </div>
        </RootLayout>
    );
};

export default NewAboutUsPage;

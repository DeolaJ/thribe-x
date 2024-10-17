import Image from "next/image";
import Link from "next/link";
import { autour } from "../../styles/theme";

const NewAbout = () => {
    return (
        <div className="relative bg-[#41403E] text-white px-[1.25rem] md:px-[2rem] lg:px-[3.75rem] pb-[7.625rem] lg:pb-[19.563rem]">
            <div className="absolute top-0 left-[-6.4rem] lg:hidden">
                <Image src="/homepageImages/dashed-line.png" alt="hurray" width="288" height="99" />
            </div>
            <h1 className="relative pt-[2.25rem] lg:pt-[4.438rem] z-[1] pb-[2.188rem] text-center text-[2rem] md:text-[2.2rem] lg:text-[2.5rem] xl:text-[3.125rem] font-[600] uppercase">
                About Us
            </h1>
            <p className="md:text-[1.15rem] lg:text-[1.3rem] min-[1440px]:text-[1.5rem]">
                Thribe-x is one of the youthful expression of The Covenant Nation, Global.
            </p>
            <br className="hidden lg:block" />
            <div className="my-[1.5rem] lg:hidden">
                <Image
                    src="/homepageImages/homepage-about.png"
                    alt="thribex members"
                    layout="responsive"
                    width={390}
                    height={249}
                />
            </div>
            <p className="text-justify md:text-[1.15rem] lg:text-[1.3rem] min-[1440px]:text-[1.5rem]">
                We are an <span className={autour.className}>Xpansion</span> of light with a unique{" "}
                <span className={autour.className}>Xpression</span> of love to give Xtensions of
                life to our world through Jesus Christ and His Word. <br />
                <br className="hidden md:block" />
                Thribe-X is an atmosphere where young people discover, develop and deploy their full
                potentials and uniqueness in christ to stand out as true role models.{" "}
                <Link href="#" className="text-[#CF60F2]">
                    (Learn more)
                </Link>
            </p>
            <div className="my-[1.5rem] lg:mt-[4.563rem] lg:mb-0 hidden lg:block">
                <Image
                    src="/homepageImages/homepage-about-desk.png"
                    alt="thribex members"
                    layout="responsive"
                    width={1319}
                    height={851}
                />
            </div>
        </div>
    );
};

export default NewAbout;

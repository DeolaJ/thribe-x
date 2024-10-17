import Image from "next/image";
import logo from "../../public/Image.png";
import twitter from "../../public/images/icons/twitter.svg";
import instagram from "../../public/images/icons/instagram.svg";
import youtube from "../../public/images/icons/youtube.svg";
import Link from "next/link";

const NewFooter = () => {
    const today = new Date();

    const footerNavLinks = [
        {
            title: " Home",
            url: "#",
        },
        {
            title: "About US",
            url: "#",
        },
        {
            title: "Services",
            url: "#",
        },
        {
            title: "Small Groups",
            url: "#",
        },
        {
            title: "Volunteer",
            url: "#",
        },
    ];

    return (
        <footer className="bg-[#180017] text-white pt-[48px]  text-[18px] font-medium leading-[27px]">
            <div className="flex justify-between px-[60px] customSm:px-[20px] customMd:flex-col customSm:justify-normal">
                <div className="flex flex-col gap-[47px] pr-[182px] customMd:pr-0 border-[#D7D7D733] customMd:border-none border-r-2 h-[304px] customSm:h-fit customSm:mb-[30px]  ">
                    <Image src={logo} height={54} width={206} alt="logo" className="select-none" />
                    <div className="flex items-center gap-4 customSm:hidden">
                        <a
                            href=" "
                            className="hover:scale-105 transition-transform ease-in-out delay-75"
                        >
                            <Image
                                src={twitter}
                                height={50}
                                width={50}
                                alt="logo"
                                className="select-none"
                            />
                        </a>
                        <a
                            href=" "
                            className="hover:scale-105 transition-transform ease-in-out delay-75"
                        >
                            <Image
                                src={instagram}
                                height={50}
                                width={50}
                                alt="logo"
                                className="select-none"
                            />
                        </a>
                        <a
                            href=" "
                            className="hover:scale-105 transition-transform ease-in-out delay-75"
                        >
                            <Image
                                src={youtube}
                                height={50}
                                width={50}
                                alt="logo"
                                className="select-none"
                            />
                        </a>
                    </div>
                </div>

                <div className="flex gap-[107px] customSm:gap-[30px] customLg:flex-col    ">
                    <div>
                        <span className="text-primary leading-[30px] font-semibold text-[20px] customSm:text-base  mb-[18px] inline-block uppercase">
                            Quicklinks
                        </span>
                        <ul className=" customSm:flex customSm:flex-wrap customSm:border-b customSm:border-[#9F2D9D69] customSm:py-2 ">
                            {footerNavLinks.map((item) => (
                                <li
                                    key={item.title}
                                    className="text-[18px] customSm:text-sm customSm:w-1/2 hover:text-primary/65 leading-[27px] font-medium mb-[10px]"
                                >
                                    <Link href={item.url} className="w-full">
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="customSm:border-b customSm:border-[#9F2D9D69] customSm:py-2 ">
                        <span className="text-primary leading-[30px] font-semibold text-[20px] customSm:text-base  mb-[18px] inline-block uppercase">
                            Contact US
                        </span>
                        <ul className="customSm:text-sm text-[18px]">
                            <li className=" leading-[27px] font-medium mb-[10px]">
                                +234 8012345678
                            </li>
                            <li className=" leading-[27px] font-medium mb-[10px]">
                                +234 8012345678
                            </li>
                            <li className=" leading-[27px] font-medium mb-[10px]">
                                tcnthribe.x@gmail.com
                            </li>
                        </ul>
                    </div>
                    <div className="customSm:border-b customSm:border-[#9F2D9D69] customSm:py-2">
                        <span className="text-primary customSm:text-base  leading-[30px] font-semibold text-[20px] mb-[18px] inline-block uppercase">
                            ADDRESS
                        </span>
                        <div className="max-w-[184px] w-full text-[18px] customSm:text-sm leading-[27px] font-medium mb-[10px]">
                            The Covenant Place Iganmu, Lagos Nigeria.
                        </div>
                    </div>
                </div>
            </div>
            <div className="items-center gap-6 hidden customSm:flex justify-center customSm:mt-[30px]">
                <a
                    href="
        "
                >
                    <Image
                        src={twitter}
                        height={50}
                        width={50}
                        alt="logo"
                        className="select-none"
                    />
                </a>
                <a
                    href="#
        "
                >
                    <Image
                        src={instagram}
                        height={50}
                        width={50}
                        alt="logo"
                        className="select-none"
                    />
                </a>
                <a href="# ">
                    <Image
                        src={youtube}
                        height={50}
                        width={50}
                        alt="logo"
                        className="select-none"
                    />
                </a>
            </div>
            <p className="text-center mt-[53px] pb-[26px] customSm:text-sm customSm:mt-[30px]">
                &copy; {today.getFullYear()} Thribe-X team. All right reserved
            </p>
        </footer>
    );
};

export default NewFooter;

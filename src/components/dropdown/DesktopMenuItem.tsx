import Image from "next/image";
import twitter from "../../../public/images/icons/twitter.svg";
import instagram from "../../../public/images/icons/instagram.svg";
import youtube from "../../../public/images/icons/youtube.svg";
import Link from "next/link";

type DesktopMenuItemProps = {
    handleShowMenu: () => void;
};

const DesktopMenuItem = ({ handleShowMenu }: DesktopMenuItemProps) => {
    const menuItems = [
        {
            menuTitle: "Sermon",
            menuLink: "/",
        },
        {
            menuTitle: " Service Units",
            menuLink: "/",
        },
        {
            menuTitle: "Gallery",
            menuLink: "/",
        },
        {
            menuTitle: "Fun & Games",
            menuLink: "/",
        },
        {
            menuTitle: "Anonymous",
            menuLink: "/",
        },
        {
            menuTitle: "Trending",
            menuLink: "/",
        },
        {
            menuTitle: "FAQ",
            menuLink: "/",
        },
    ];
    return (
        <div
            className="absolute right-0 top-full transition-all ease-in-out delay-[2000ms] customLg:hidden  "
            tabIndex={0}
            onKeyDown={(e) => {
                console.log(e.key);
                if (e.key === "Escape" || e.key === " ") {
                    handleShowMenu();
                }
            }}
            onClick={handleShowMenu}
            role="menu"
        >
            <div className="fixed inset-0 bg-slate-900/70   "></div>
            <div
                onClick={(e) => e.stopPropagation()}
                role="menu"
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === "Escape" || e.key === " ") {
                        e.stopPropagation();
                    }
                }}
                className="absolute top-full right-0 bg-[#222222] z-[50] rounded-bl-[20px] text-white shadow pl-[24px] pt-[25px] w-[464px]  "
            >
                <div className=" ">
                    <ul className=" overflow-y-auto max-h-[calc(100vh-240px)] no-scrollbar">
                        {menuItems.map((item) => (
                            <li
                                key={item.menuTitle}
                                className="border-b pb-4 border-[#FFFFFF33] transition-colors ease-in-out delay-75  hover:text-primary/65 mb-[41px] cursor-pointer leading-[30px] font-medium text-[20px]"
                            >
                                <Link href={item.menuLink}>{item.menuTitle}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex items-center gap-[24px] mb-[42px]  ">
                        <Link
                            className="hover:scale-105 transition-transform ease-in-out delay-75"
                            href={""}
                        >
                            <Image
                                src={twitter}
                                height={50}
                                width={50}
                                alt="logo"
                                className="select-none"
                            />
                        </Link>
                        <Link
                            className="hover:scale-105 transition-transform ease-in-out delay-75"
                            href={""}
                        >
                            <Image
                                src={instagram}
                                height={50}
                                width={50}
                                alt="logo"
                                className="select-none"
                            />
                        </Link>
                        <Link
                            className="hover:scale-105 transition-transform ease-in-out delay-75"
                            href={""}
                        >
                            <Image
                                src={youtube}
                                height={50}
                                width={50}
                                alt="logo"
                                className="select-none"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesktopMenuItem;

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

type MobileMenuItemProps = {
    handleShowMenu: () => void;
};
const MobileMenuItem = ({ handleShowMenu }: MobileMenuItemProps) => {
    const pathname = usePathname();
    const mobileRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (mobileRef.current && !mobileRef.current.contains(event.target as Node)) {
                handleShowMenu();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [mobileRef, handleShowMenu]);

    const menuItems = [
        {
            menuTitle: "Home",
            menuLink: "/new",
        },
        {
            menuTitle: " Service Units",
            menuLink: "/",
        },
        {
            menuTitle: "About Us",
            menuLink: "/new/about-us",
        },
        {
            menuTitle: "Gallery",
            menuLink: "/",
        },
        {
            menuTitle: "Small Groups",
            menuLink: "/",
        },
        {
            menuTitle: "Trending",
            menuLink: "/",
        },
        {
            menuTitle: "Store",
            menuLink: "/",
        },
        {
            menuTitle: "FAQ",
            menuLink: "/",
        },
        {
            menuTitle: "Contact Us",
            menuLink: "/new-contact-us",
        },
        {
            menuTitle: "Fun & Games",
            menuLink: "/",
        },
    ];
    return (
        <div
            ref={mobileRef}
            onClick={(e) => e.stopPropagation()}
            role="menu"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === "Escape" || e.key === " ") {
                    e.stopPropagation();
                }
            }}
            className="absolute top-0 left-0 bg-[#000000E8] z-[50] text-white shadow pl-[24px] pr-[22px]  pt-[25px] w-full lg:hidden "
        >
            <div className="flex justify-center flex-col items-center ">
                <button className="ml-auto select-none ">
                    <svg
                        onClick={handleShowMenu}
                        className="ml-auto   "
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4 4L20 20"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M4 20L20 4"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>

                <ul className="flex flex-wrap justify-between w-[266px] sm:w-[500px] ">
                    {menuItems.map((item) => (
                        <li
                            key={item.menuTitle}
                            className=" w-1/2  pb-4  mb-[12px] cursor-pointer hover:text-primary/65 leading-[18px] font-medium text-sm "
                        >
                            <Link
                                href={item.menuLink}
                                className={` ${pathname === item.menuLink ? "text-primary  " : ""}`}
                            >
                                {item.menuTitle}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MobileMenuItem;

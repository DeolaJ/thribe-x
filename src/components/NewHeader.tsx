import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../public/Image.png";
import hamburger from "../../public/images/icons/hamburger-button.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DesktopDropDown from "./dropdown/DesktopMenuItem";
import MobileDropDown from "./dropdown/MobileMenuItem";

const NewHeader = () => {
    const pathname = usePathname();
    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setShowMenu(!showMenu);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [showMenu]);

    const navLinks = [
        {
            linkTitle: "Home",
            linkUrl: "/new",
        },
        {
            linkTitle: "About Us",
            linkUrl: "/new/about-us",
        },
        {
            linkTitle: "Small Groups",
            linkUrl: "/new-small-groups",
        },
        {
            linkTitle: "Store",
            linkUrl: "/new-store",
        },
        {
            linkTitle: "Contact Us",
            linkUrl: "/new-contact-us",
        },
    ];

    return (
        <div className=" customSm:bg-gradient-to-r from-[#FFFFFF] to-[#999999BA] bg-white sticky top-0 left-0   ">
            <nav className="flex items-center justify-between py-[27px] customSm:py-2 px-[20px] sm:px-[60px] relative transition-all ease-in-out delay-[5000ms]   ">
                <Image src={logo} height={54} width={206} alt="logo" className="select-none" />
                <ul className=" items-center gap-[30px] hidden lg:flex">
                    {navLinks.map((link) => (
                        <li key={link.linkUrl} className="">
                            <Link
                                className={`font-medium text-[20px]  leading-[30px] transition-colors ease-out delay-75  hover:text-primary/65 ${
                                    pathname === link.linkUrl
                                        ? "text-primary border-b-2  border-primary "
                                        : ""
                                }`}
                                href={link.linkUrl}
                            >
                                {link.linkTitle}
                            </Link>
                        </li>
                    ))}
                </ul>
                <button className=" " onClick={handleShowMenu}>
                    <Image src={hamburger} height={40} width={40} alt="hamburger" />
                </button>
                {showMenu && (
                    <>
                        <DesktopDropDown handleShowMenu={handleShowMenu} />
                        <MobileDropDown handleShowMenu={handleShowMenu} />
                    </>
                )}
            </nav>
        </div>
    );
};

export default NewHeader;

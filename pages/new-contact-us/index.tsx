import Image from "next/image";
import RootLayout from "../../src/layout/RootLayout";
import ContactForm from "../../src/newHomepage/ContactForm";
import React from "react";
import useGlobal from "../../src/_context/useGlobal";

const socials = [
    {
        src: "/phone.png",
        title: "Phone Number",
        social: "+2345663725",
    },
    {
        src: "/instagram.png",
        title: "Instagram",
        social: "thribex",
    },
    {
        src: "/email.png",
        title: "Email Address",
        social: "thribex@gmail.com",
    },
    {
        src: "/location.png",
        title: "Location",
        social: "The Covenant Place",
        span: "Iganmu Lagos Nigeria",
    },
];

const NewContactUsPage = () => {
    const { firstName, setFirstName, lastName, setLastName } = useGlobal();

    return (
        <RootLayout>
            <div className="relative bg-[url('/contact-us.png')] lg:bg-[url('/contact-desktop.png')] bg-cover bg-center pt-[80.93%] md:pt-[70%] lg:pt-[30.76%]">
                <div className="absolute inset-0 bg-[linear-gradient(64.05deg,rgba(0,0,0,0.6)_0%,rgba(246,246,246,0)_100%)]">
                    <div className="absolute inset-0 flex flex-col lg:gap-[0.875rem] justify-center items-center text-white">
                        <h1 className="text-[1.5rem] lg:text-[3rem] font-[600] uppercase">
                            Contact Us
                        </h1>
                        <p className="font-[500] lg:text-[2rem]">Find your feet here at Thribe-X</p>
                    </div>
                </div>
            </div>
            <div className="lg:mx-[2.75rem] xl:mx-[3.75rm] lg:my-[4.5rem] xl:my-[6.25rem] lg:flex lg:flex-row-reverse lg:justify-between">
                <div className="relative mx-[1.25rem] md:mx-[2.25rem] lg:mx-0 lg:w-[69.62%] px-[1.313rem] md:px-[1.7rem] py-[2.25rem] lg:pt-[1.5rem] lg:pb-[2.313rem] lg:px-[2.125rem] xl:pl-[3.125rem] xl:pr-[2.063rem] rounded-[20px] bg-white shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] mt-[-2.25rem] mb-[2.25rem] md:mt-[-3.5rem] md:mb-[3.5rem] lg:my-0">
                    <h2 className="mb-[1.5rem] lg:mb-[2rem] text-center text-[1.25rem] lg:text-[2.25rem] font-[600] lg:uppercase">
                        Send a Message
                    </h2>
                    <ContactForm
                        formWidth="w-full"
                        inputWidth="customXs:w-[60%] w-[55%] md:w-[calc(55%-0.1rem)] xl:w-[65%]"
                        CCInputWidth="customXs:w-[40%] w-[45%] md:w-[calc(45%+0.1rem)] xl:w-[35%]"
                        firstName={firstName}
                        lastName={lastName}
                        setFirstName={setFirstName}
                        setLastName={setLastName}
                    >
                        <div className="lg:flex lg:gap-[2.25rem]">
                            <div className="flex flex-col gap-[0.75rem] w-full">
                                <label className="label-class" htmlFor="first-name">
                                    <span className="lg:hidden">Full name:</span>{" "}
                                    <span className="hidden lg:inline">First name:</span>
                                    <span className="text-[0.625rem] lg:hidden">
                                        (first name last name)
                                    </span>
                                </label>
                                <input
                                    id="first-name"
                                    className="input-class py-[0.963rem]"
                                    type="text"
                                    placeholder="John Doe"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div className="hidden lg:flex flex-col gap-[0.75rem] w-full">
                                <label className="label-class" htmlFor="last-name">
                                    Last name:
                                </label>
                                <input
                                    id="last-name"
                                    className="input-class py-[0.963rem]"
                                    type="text"
                                    placeholder="Elijah"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                        </div>
                    </ContactForm>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-none lg:w-[28.56%] gap-[1.125rem] mx-[1.25rem] md:mx-[2.5rem] mb-[3rem] lg:m-0">
                    {socials.map((social, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-[0.625rem] lg:gap-[1.5rem] px-[0.75rem] lg:px-[1.125rem] py-[1rem] lg:py-[1.188rem] bg-white border-[0.064rem] border-[#0000004D] rounded-[15px]"
                        >
                            <div className="lg:w-[5.25rem] xl:w-[6.25rem] flex-shrink-0">
                                <Image
                                    className="lg:hidden"
                                    src={social.src}
                                    alt="socials"
                                    width={60}
                                    height={60}
                                />
                                <Image
                                    className="hidden lg:inline"
                                    src={social.src}
                                    alt="socials"
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <div className="flex flex-col min-w-0 gap-[5px]">
                                <p className="customXs:text-[0.7rem] text-[0.75rem] lg:text-[1rem] xl:text-[1.25rem] font-[500]">
                                    {social.title}
                                </p>
                                <p className="text-[0.563rem] lg:text-[0.75rem] xl:text-[1.125rem] font-[500] text-[#00000099]">
                                    {social.social}{" "}
                                    <span className="customXs:hidden">{social.span}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mx-[1.25rem] md:mx-[2.5rem] text-center">
                <h2 className="text-[1.25rem] lg:text-[2.25rem] font-[600]">
                    FIND US ON GOOGLE MAP
                </h2>
                <p className="font-[500] mt-[1rem] lg:mt-[1.5rem] lg:text-[1.25rem]">
                    Lorem ipsum dolor sit amet consectetur. In maecenas diam suscipit facilisi
                    sagittis vitae nunc lorem proin.
                </p>
                <div className="mt-[1.5rem] lg:mt-[2.875rem] pb-[4.24rem] lg:pb-[6.25rem]">
                    <div className="relative pt-[49%] lg:pt-[49%]">
                        <iframe
                            className="lg:hidden absolute top-0 left-0 w-full h-full rounded-[6px]"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.3348548394097!2d3.3647250740456296!3d6.479205323678463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b891a7fbdeb%3A0xf35bfdd74cb59da9!2sThe%20Covenant%20Place%2C%20Iganmu!5e0!3m2!1sen!2sng!4v1728042729101!5m2!1sen!2sng"
                            width="100%"
                            height="100%"
                            loading="lazy"
                            title="The covenant place iganmu lagos"
                        ></iframe>
                        <iframe
                            className="hidden lg:inline absolute top-0 left-0 w-full h-full rounded-[20px]"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.3348548394097!2d3.3647250740456296!3d6.479205323678463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b891a7fbdeb%3A0xf35bfdd74cb59da9!2sThe%20Covenant%20Place%2C%20Iganmu!5e0!3m2!1sen!2sng!4v1728047895616!5m2!1sen!2sng"
                            width="100%"
                            height="100%"
                            loading="lazy"
                            title="The covenant place iganmu lagos"
                        ></iframe>
                    </div>{" "}
                </div>
            </div>
        </RootLayout>
    );
};

export default NewContactUsPage;

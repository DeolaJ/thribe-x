import Image from "next/image";
import ContactForm from "./ContactForm";
import useGlobal from "../_context/useGlobal";

function NewContact() {
    const { firstName, setFirstName, lastName, setLastName } = useGlobal();

    return (
        <div className="pt-[3rem] pb-[4.25rem] px-[1.25rem] md:px-[2.5rem] lg:py-[2.25rem] lg:mx-[3.75rem] lg:my-[6.25rem] lg:rounded-[20px] lg:bg-white shadow-[0px_4px_10px_0px_#00000040]">
            <h2 className="mb-[2.25rem] text-[2rem] md:text-[2.2rem] lg:text-[2.5rem] xl:text-[3.125rem] font-[600] xl:uppercase xl:text-center">
                Send a message
            </h2>
            <div className="xl:flex xl:items-center">
                <ContactForm
                    formWidth="xl:w-[55.61%]"
                    inputWidth="w-[calc(60%-2rem)] xl:w-[55%]"
                    CCInputWidth="w-[calc(40%+2rem)] xl:w-[45%]"
                    firstName={firstName}
                    lastName={lastName}
                    setFirstName={setFirstName}
                    setLastName={setLastName}
                >
                    <div className="flex gap-[0.75rem] lg:gap-[2.25rem]">
                        <div className="flex flex-col gap-[0.75rem] w-full">
                            <label className="label-class" htmlFor="first-name">
                                First name:
                            </label>
                            <input
                                id="first-name"
                                className="input-class py-[0.963rem]"
                                type="text"
                                placeholder="Gbemisola"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col gap-[0.75rem] w-full">
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
                <div className="hidden xl:block">
                    <Image
                        src="/homepageImages/send-a-message.png"
                        alt="send a message"
                        // layout="responsive"
                        width="532"
                        height="511"
                    />
                </div>
            </div>
        </div>
    );
}

export default NewContact;

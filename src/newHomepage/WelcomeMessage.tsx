import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { ExitIcon } from "./assets/Icons";
import Image from "next/image";

interface WelcomeMessageProps {
    welcomeMessage: boolean;
    setWelcomeMessage: Dispatch<SetStateAction<boolean>>;
}

function WelcomeMessage({ welcomeMessage, setWelcomeMessage }: WelcomeMessageProps) {
    const modalRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setWelcomeMessage(false);
            }
        };

        welcomeMessage
            ? document.addEventListener("mousedown", handleClickOutside)
            : document.removeEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [welcomeMessage, setWelcomeMessage]);

    return (
        <div
            className={`${
                welcomeMessage ? "opacity-[1] z-[9999]" : "opacity-0 z-[-1]"
            } fixed inset-0 flex flex-col justify-center bg-[rgb(0,0,0,0.3)] transition-all duration-[0.5s]`}
        >
            <div
                ref={modalRef}
                className="relative flex flex-col gap-[1rem] md:gap-[1.5rem] px-[1.438rem] lg:px-[3rem] py-[2.25rem] lg:py-[2.5rem] min-[1440px]:p-[5.063rem] rounded-[10px] text-center text-[0.75rem] md:text-[1rem] xl:text-[1.125rem] w-[23rem] md:w-[40rem] lg:w-[50rem] xl:w-[70.813rem] mx-auto font-[500] bg-[linear-gradient(180deg,_#F1F1EE_0%,_#FFFFC7_100%)] "
            >
                <div className="absolute top-0 left-0">
                    <Image
                        src="/homepageImages/confetti.gif"
                        alt="confetti"
                        width="150"
                        height="150"
                    />
                </div>
                <div className="absolute bottom-0 right-0">
                    <Image
                        src="/homepageImages/confetti.gif"
                        alt="confetti"
                        width="150"
                        height="150"
                    />
                </div>
                <button
                    onClick={() => setWelcomeMessage(false)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                            setWelcomeMessage(false);
                        }
                    }}
                    className="absolute top-[1.25rem] right-[1.313rem] cursor-pointer md-w-[3rem]"
                >
                    <ExitIcon />
                </button>
                <p>“Yo! You made it. Welcome Home!</p>
                <p>I am super excited to have you join us. There is a promise for you.</p>
                <p>
                    It’s the Promise of Total Transformation: the person you will become simply by
                    being a part of Thribe-X.
                </p>
                <p>
                    You will find and run with your Prophetic Purpose and Divine Destiny while
                    enjoying the journey so much that you will bring others to join you!
                    <p>
                        As a young believer, you will have The Spirit and The Skill for creative
                        intelligence, extreme productivity and value creation to influence your
                        world.
                    </p>
                </p>
                <div>
                    <p>
                        I can’t wait for the world to see your radiant light and supernatural glow
                        in God.
                    </p>
                    <p>Side Gist - Some people call me PM, and others call me CM </p>
                    <p>Never forget, I AM ROOTING FOR YOU!” </p>
                </div>

                <div className="mt-[1rem] lg:mt-[1.85rem]">
                    <p>-Yours in Service,</p>
                    <p className="text-[1rem] lg:text-[1.5rem] xl:text-[1.75rem] font-[600] italic">
                        Mayowa Ojo Glorious
                    </p>
                </div>
            </div>
        </div>
    );
}

export default WelcomeMessage;

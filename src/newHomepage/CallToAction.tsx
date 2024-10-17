import { useState } from "react";
import Button from "../components/button/Button";
import WelcomeMessage from "./WelcomeMessage";

const CallToAction = () => {
    const [welcomeMessage, setWelcomeMessage] = useState<boolean>(false);
    return (
        <>
            <div className="flex flex-col align-center gap-[1.5rem] lg:gap-[2.75rem] mx-[1.25rem] mt-[2.25rem] mb-[3rem] lg:my-[6.25rem]">
                <p className="text-center lg:text-[1.25rem] font-[600] italic">
                    <span className="block lg:mb-[2.25rem]">
                        Yo! You made it!! Welcome Home!!!{" "}
                    </span>
                    <span className="block">
                        I am super excited to have you join us. There is a promise for you!!
                    </span>
                    <span className="block">You want to know what it is?</span>
                </p>
                <Button
                    label="Read more"
                    onClick={() => setWelcomeMessage(true)}
                    className="w-[8rem] lg:w-[15.438rem] mx-auto"
                />
            </div>
            {welcomeMessage && (
                <WelcomeMessage
                    welcomeMessage={welcomeMessage}
                    setWelcomeMessage={setWelcomeMessage}
                />
            )}
        </>
    );
};

export default CallToAction;

import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { ArrowSendIcon } from "./assets/Icons";
import Button from "../components/button/Button";
import Toast from "../components/Toast";
import CountryCodeList from "../components/CountryCode";
import Spinner from "../components/Spinner";

interface ContactFormProps {
    children: ReactNode;
    formWidth: string;
    inputWidth: string;
    CCInputWidth: string;
    firstName: string;
    lastName: string;
    setFirstName: Dispatch<SetStateAction<string>>;
    setLastName: Dispatch<SetStateAction<string>>;
}

interface ValidationProps {
    phoneNumber?: string;
    email?: string;
    message?: string;
}

function ContactForm({
    children,
    formWidth,
    inputWidth,
    CCInputWidth,
    firstName,
    lastName,
    setFirstName,
    setLastName,
}: ContactFormProps) {
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [errors, setErrors] = useState<ValidationProps>({});
    const [countryCode, setCountryCode] = useState<string>("");
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [toastMessage, setToastMessage] = useState<string>("");
    const [showToast, setShowToast] = useState<boolean>(false);

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validatePhoneNumber = (phone: string) => /^\d+$/.test(phone) && phone.length >= 10;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setErrors({});
        setIsSubmitting(true);

        let validationErrors: ValidationProps = {};

        if (!phoneNumber) {
            validationErrors.phoneNumber = "Your phone number is requried.";
        }
        if (phoneNumber && !validatePhoneNumber(phoneNumber)) {
            validationErrors.phoneNumber = "Enter a valid phone number.";
        }
        if (email && !validateEmail(email)) {
            validationErrors.email = "Please enter a valid email address.";
        }
        if (message.trim() === "") {
            validationErrors.message = "Message cannot be empty.";
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setIsSubmitting(false);
            return;
        }

        try {
            // for test purpose
            console.log({
                firstname: firstName,
                lastname: lastName,
                phonenumber: `${countryCode}${phoneNumber}`,
                email: email,
                message: message,
            });

            await new Promise((resolve) => setTimeout(resolve, 2000));
            //****//

            setToastMessage("Submitted successfully!");
            setShowToast(true);

            setFirstName("");
            setLastName("");
            setPhoneNumber("");
            setEmail("");
            setMessage("");
        } catch (error) {
            setToastMessage("There was an error submitting the form.");
            setShowToast(true);
        } finally {
            setIsSubmitting(false);
            setTimeout(() => {
                setShowToast(false);
            }, 5000);
        }
    };

    return (
        <>
            {showToast && <Toast setShowToast={setShowToast}>{toastMessage} </Toast>}
            <form
                onSubmit={handleSubmit}
                className={`flex flex-col gap-[1rem] lg:gap-[1.5rem] ${formWidth} lg:text-[1.125rem]`}
            >
                {children}

                <div className="flex flex-col md:flex-row gap-[1rem] lg:gap-[2.25rem]">
                    <div className="flex flex-col gap-[0.75rem] w-full md:w-1/2">
                        <label className="label-class" htmlFor="phone-numbeer">
                            Phone Number:
                        </label>
                        <div className="flex gap-[6px]">
                            <CountryCodeList
                                CCInputWidth={CCInputWidth}
                                onSetCountryCode={setCountryCode}
                            />
                            <div className={inputWidth}>
                                <input
                                    id="phone-number"
                                    className="input-class py-[0.963rem]"
                                    type="text"
                                    placeholder="8145663725"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                                {errors.phoneNumber && (
                                    <p className="error-class">{errors.phoneNumber}</p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <div className="flex flex-col gap-[0.75rem] w-full">
                            <label className="label-class" htmlFor="email-input">
                                Email:
                            </label>
                            <input
                                id="email-input"
                                className="input-class py-[0.963rem]"
                                type="text"
                                placeholder="name.surname@gmail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        {errors.email && <p className="error-class">{errors.email}</p>}
                    </div>
                </div>
                <div>
                    <div className="flex flex-col gap-[0.75rem]">
                        <label className="label-class" htmlFor="message">
                            Message:
                        </label>
                        <textarea
                            id="message"
                            className="w-full bg-[#f5f5f5] border border-[#0000001A] focus:outline-[#686565e5] rounded-[8px] text-[0.75rem] lg:text-[1rem] h-[4.875rem] md:h-[5.5rem] lg:h-[7.25rem] pl-[1rem] pt-[0.75rem]"
                            placeholder="Write your message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>{" "}
                    {errors.message && <p className="error-class">{errors.message}</p>}
                </div>
                <Button
                    label={isSubmitting ? "Submitting" : "Send"}
                    className="w-full flex items-center gap-[1rem] justify-center mt-[0.5rem] lg:mt-[0.75rem]"
                >
                    {isSubmitting ? <Spinner /> : <ArrowSendIcon />}
                </Button>
            </form>
        </>
    );
}

export default ContactForm;

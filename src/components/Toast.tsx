import { Dispatch, ReactNode, SetStateAction } from "react";
import { ExitIcon } from "../newHomepage/assets/Icons";

interface ToastProps {
    children: ReactNode;
    setShowToast: Dispatch<SetStateAction<boolean>>;
}

function Toast({ children, setShowToast }: ToastProps) {
    return (
        <span className="fixed flex items-center whitespace-nowrap gap-[0.5rem] z-[999] w-auto left-1/2 transform -translate-x-1/2 top-[6rem] md:top-[8rem] text-[0.87rem] lg:text-[0.95rem] xl:text-[1rem] text-[#00000099] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] text-center bg-gradient-to-r from-[#FFFFFF] to-[#999999] p-[0.5rem] md:p-[0.8rem] rounded-[10px]">
            {children}

            <button
                onClick={() => setShowToast(false)}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        setShowToast(false);
                    }
                }}
            >
                <ExitIcon />
            </button>
        </span>
    );
}

export default Toast;

import { ReactNode } from "react";

interface ThribexServicesProps {
    title: ReactNode;
    children: ReactNode;
    dataText: string;
}

function ThribexServices({ title, children, dataText }: ThribexServicesProps) {
    return (
        <div className="activity-card relative flex flex-col gap-[1.5rem] lg:w-[50%] rounded-[10px] bg-[#F1F1EE] py-[1.125rem] px-[1rem] md:p-[1.7rem] lg:p-[2.25rem] border border-[#0000004D] shadow-[2px_3px_8px_0px_#00000052]">
            <h2
                data-text={dataText}
                className="font-[600] text-[1.25rem] md:text-[1.4rem] lg:text-[1.6rem] xl:text-[1.9rem] min-[1440px]:text-[2.25rem] w-auto mx-auto text-center lg:text-[transparent] text-stroke relative italic"
            >
                {title}
            </h2>
            <p className="flex flex-col gap-[1rem] lg:gap-[1.85rem] text-[0.75rem] md:text-[1rem] min-[1440px]:text-[1.25rem] font-[500] italic">
                {children}
            </p>
        </div>
    );
}

export default ThribexServices;

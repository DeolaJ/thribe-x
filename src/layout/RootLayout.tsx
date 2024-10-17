import { ReactNode } from "react";
import NewHeader from "../components/NewHeader";
import NewFooter from "../components/NewFooter";
import { poppins } from "../../styles/theme";

type LayoutProps = {
    children: ReactNode;
};

const RootLayout = ({ children }: LayoutProps) => {
    return (
        <div className=" ">
            <NewHeader />
            <div className={`${poppins.className} bg-[#f9f9f9]`}>{children}</div>
            <NewFooter />
        </div>
    );
};

export default RootLayout;

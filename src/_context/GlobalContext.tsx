"use client";
import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface GlobalContextProps {
    firstName: string;
    setFirstName: Dispatch<SetStateAction<string>>;
    lastName: string;
    setLastName: Dispatch<SetStateAction<string>>;
}

const defaultGlobalProps: GlobalContextProps = {
    firstName: "",
    setFirstName: () => {},
    lastName: "",
    setLastName: () => {},
};

interface GlobalProviderProps {
    children: ReactNode;
}

const GlobalContext = createContext<GlobalContextProps>(defaultGlobalProps);

function GlobalProvider({ children }: GlobalProviderProps) {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");

    return (
        <GlobalContext.Provider
            value={{
                firstName,
                setFirstName,
                lastName,
                setLastName,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

export { GlobalProvider, GlobalContext };

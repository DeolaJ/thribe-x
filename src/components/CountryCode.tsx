import Image from "next/image";
import { AngleDownUp } from "../newHomepage/assets/Icons";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

interface CountryProps {
    name: {
        common: string;
    };
    cca2: string;
    idd?: {
        root: string;
        suffixes: string[];
    };
    flags: {
        png: string;
    };
}

interface CountryListProps {
    CCInputWidth: string;
    onSetCountryCode: Dispatch<SetStateAction<string>>;
}

function CountryCodeList({ CCInputWidth, onSetCountryCode }: CountryListProps) {
    const [countries, setCountries] = useState<CountryProps[]>([]);
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const [selectedCountry, setSelectedCountry] = useState<string>("");
    const [query, setQuery] = useState<string>("");
    const inputRef = useRef<HTMLInputElement | null>(null);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (isClicked && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isClicked]);

    useEffect(() => {
        async function getCountries() {
            try {
                const res = await fetch(`https://restcountries.com/v3.1/all`);
                const data = await res.json();
                setCountries(data);
            } catch (error) {
                console.log("data not fetched");
            }
        }
        getCountries();
    }, []);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsClicked(false);
            }
        }
        isClicked
            ? document.addEventListener("mousedown", handleClickOutside)
            : document.removeEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isClicked]);

    const isSelectedCountry = countries.find((country) => country.name.common === selectedCountry);

    const defaultCountry = countries.find((country) => country.name.common === "Nigeria");
    useEffect(() => {
        if (defaultCountry) {
            onSetCountryCode(`${defaultCountry.idd?.root}${defaultCountry.idd?.suffixes?.[0]}`);
        }
    }, [defaultCountry, onSetCountryCode]);

    const searchedCountries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(query.toLowerCase())
    );

    const getCountryCode = () => {
        return isSelectedCountry
            ? `${isSelectedCountry.idd?.root}${isSelectedCountry.idd?.suffixes?.[0]}`
            : `${defaultCountry?.idd?.root}${defaultCountry?.idd?.suffixes?.[0]}`;
    };

    return (
        <div
            ref={dropdownRef}
            className={`relative ${CCInputWidth} bg-[#f5f5f5] text-[#000000BF] font-[500] border border-[#0000001A] rounded-[8px] text-[0.75rem] xl:text-[0.85rem] h-[2.25rem] md:h-[2.85rem] lg:h-[3.125rem] pl-[1rem]`}
        >
            <button
                type="button"
                onClick={() => setIsClicked(!isClicked)}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        setIsClicked(!isClicked);
                    }
                }}
                className="flex items-center h-full my-auto cursor-pointer"
            >
                <Image
                    src={
                        isSelectedCountry
                            ? isSelectedCountry?.flags.png
                            : defaultCountry?.flags.png || ""
                    }
                    alt={`${isSelectedCountry?.name.common} flag`}
                    width={18}
                    height={18}
                />
                <span className="ml-2">{getCountryCode()} </span>
                <div className="absolute right-[0.653rem]">
                    <AngleDownUp isClicked={isClicked} />
                </div>
            </button>
            {isClicked && (
                <div className="absolute left-[-2px] w-[calc(100%+1.5rem)] xl:w-[calc(100%+4rem)] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] mt-[0.3rem] md:mt-[0.5rem] bg-white border rounded-lg">
                    <div className="px-2 absolute top-0 w-full">
                        {" "}
                        <input
                            ref={inputRef}
                            className=" h-[1.5rem] w-full shadow-[2px_2px_5px_0px_rgba(0,0,0,0.25)] focus:outline-none text-[0.55rem] xl:text-[0.75rem] mt-2 pl-1"
                            type="text"
                            placeholder="search by countries"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </div>

                    <ul className="mt-[2.3rem] z-10 max-h-[13.3rem] xl:max-h-[15rem] text-[0.75rem] lg:text-[0.8rem] overflow-y-scroll no-scrollbar">
                        {searchedCountries.length === 0 ? (
                            <li className="p-2 text-center">No countries found</li>
                        ) : (
                            searchedCountries.map((country) => (
                                <li key={country.cca2}>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setSelectedCountry(country.name.common);
                                            setIsClicked(false);
                                            onSetCountryCode(
                                                `${country.idd?.root}${country.idd?.suffixes?.[0]}`
                                            );
                                            setQuery("");
                                        }}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter" || e.key === " ") {
                                                setSelectedCountry(country.name.common);
                                                setIsClicked(false);
                                                setQuery("");
                                            }
                                        }}
                                        className="flex w-full items-center py-2 px-3 hover:bg-gray-100 cursor-pointer"
                                    >
                                        <Image
                                            src={country.flags.png}
                                            alt={`${country.name.common} flag`}
                                            width={20}
                                            height={20}
                                        />
                                        <span className="ml-2 text-start">
                                            {country.name.common}
                                        </span>
                                    </button>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default CountryCodeList;

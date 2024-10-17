import Image from "next/image";
import { ThribexMomentSwiper } from "./Swiperjs";
import Button from "../components/button/Button";

function Thribexmoment() {
    return (
        <div className="relative mt-[3rem] px-[1.25rem] md:px-[2.5rem] lg:px-0 mb-[11.375rem] lg:mb-[0.875rem]">
            <div className="absolute top-[-1rem] lg:top-[-5rem] xl:top-[3rem] left-[-2.7rem] xl:left-[-7rem] min-[1440px]:left-[-1.5rem]">
                <Image
                    className=" xl:hidden"
                    src="/homepageImages/dashed-line.png"
                    alt="background design"
                    width="288"
                    height="99"
                />
                <Image
                    className="hidden xl:inline"
                    src="/homepageImages/dashed-single-left.png"
                    alt="background design"
                    width="482"
                    height="147"
                />
            </div>
            <div className="absolute top-[-6rem] xl:right-0 hidden xl:block">
                <Image
                    src="/homepageImages/dashed-single-right.png"
                    alt="background design"
                    width="390"
                    height="147"
                />
            </div>
            <h2 className="relative mt-[0.938rem] lg:mt-[6.563rem] z-[1] text-center text-[2rem] md:text-[2.2rem] lg:text-[2.5rem] xl:text-[3.125rem] font-[600] uppercase">
                Thribe-x moment
            </h2>
            <div className="grid grid-cols-4 gap-[0.25rem] md:gap-[0.5rem] mt-[3.813rem] mb-[1.5rem] lg:hidden">
                {Array(16)
                    .fill(null)
                    .map((_, index) => (
                        <Image
                            key={index}
                            className=""
                            src={`/homepageImages/moments/moment${index + 1}.png`}
                            alt="thribex moment"
                            layout="responsive"
                            width="95"
                            height="63"
                        />
                    ))}
            </div>
            <div className="hidden lg:block mt-[6.063rem] mb-[3.375rem]">
                <ThribexMomentSwiper />
            </div>
            <Button
                label="View Gallery"
                href="#"
                className="block w-[9.875rem] lg:w-[15.438rem] mx-auto"
            />
        </div>
    );
}

export default Thribexmoment;

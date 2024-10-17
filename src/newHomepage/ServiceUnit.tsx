import Image from "next/image";
import Button from "../components/button/Button";
import { ArrowRightIcon } from "./assets/Icons";
import { ServiceUnitSwiper } from "./Swiperjs";

function ServiceUnit() {
    return (
        <div className="relative mt-[3rem] lg:mt-0 lg:py-[4rem] lg:bg-[url('/homepageImages/service-unit-bg.png')] lg:bg-cover lg:bg-center">
            <div className="hidden lg:block absolute inset-0 bg-[#000000CC]"></div>
            <div className="absolute top-0 right-[0] z-[10] lg:hidden">
                <Image
                    src="/homepageImages/dashed-right.png"
                    alt="background-design"
                    width="191"
                    height="101"
                />
            </div>
            <h2 className="text-[2rem] lg:text[2.5rem] lg:text-white min-[1440px]:text-[3.125rem] lg:relative z-10 font-[600] text-center uppercase text-[#000000E5]">
                Service Units <span className="hidden lg:inline">and voluteer teams</span>
            </h2>
            <p className="hidden lg:block relative z-10 lg:text-[1rem] xl:text-[1.25rem] min-[1440px]:text-[1.438rem] text-white mt-[0.75rem] mb-[3rem] font-[500] text-center max-w-[86.11%] mx-auto">
                Lorem ipsum dolor sit amet consectetur. Amet nunc lobortis neque maecenas ipsum
                risus maecenas. Tortor quisque sollicitudin quis sit turpis malesuada. Ultrices vel
                nunc amet amet et aliquet scelerisque.{" "}
            </p>
            <div className="mt-[4.313rem] lg:relative z-10">
                <ServiceUnitSwiper />
            </div>
            <Button
                label="View more units"
                href="#"
                className="flex lg:relative z-10 items-center gap-[1rem] mx-auto justify-center mt-[1.5rem] lg:mt-[3rem] w-[10.625rem] lg:w-[16.875rem]"
            >
                <ArrowRightIcon />
            </Button>
        </div>
    );
}

export default ServiceUnit;

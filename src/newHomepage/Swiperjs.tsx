import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";
import { EffectCoverflow } from "swiper/modules";
import Link from "next/link";

const serviceUnitData = [
    {
        src: "/homepageImages/greeters.png",
        alt: "hurray",
        title: "Just Dey Pray (JDP)",
        description:
            "At JDP, we build intercessors and worshipping priests. A community where we birth new realities through journeying in the spirit for Thribe-x and our lives.",
        linkHref: "#",
    },
    {
        src: "/homepageImages/greeters.png",
        alt: "hurray",
        title: "Oasis - Hospitality and Greeters arm of Thribe-1X",
        description: "Ever walked into a church and your spirit gets lifted right from the doors!",
        linkHref: "#",
    },
    {
        src: "/homepageImages/greeters.png",
        alt: "hurray",
        title: "Design Mavericks - Graphic Design arm of Thribe-X",
        description:
            "The gospel is better told with visuals. Design Mavericks bring information to life through flyers and beautiful designs.",
        linkHref: "#",
    },
    {
        src: "/homepageImages/greeters.png",
        alt: "hurray",
        title: "Oasis - Hospitality and Greeters arm of Thribe-1X",
        description: "Ever walked into a church and your spirit gets lifted right from the doors!",
        linkText: "(Learn more)",
        linkHref: "#",
    },
];

export function ServiceUnitSwiper() {
    return (
        <>
            <div className="w-full lg:hidden">
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        slideShadows: false,
                        modifier: 3,
                    }}
                    modules={[EffectCoverflow]}
                    breakpoints={{
                        320: {
                            slidesPerView: 1.5,
                            spaceBetween: 60,
                        },
                        640: {
                            slidesPerView: 1.8,
                            spaceBetween: 80,
                        },
                    }}
                >
                    {serviceUnitData.map((unit, index) => (
                        <SwiperSlide
                            key={index}
                            className="px-[1.125rem] pt-[1.125rem] pb-[3rem] rounded-[10px] text-[#000000e5] bg-[linear-gradient(143.73deg,rgba(255,255,255,0.75)_0%,#999999_100%)]"
                        >
                            <Image
                                className="block rounded-[5px]"
                                src={unit.src}
                                alt={unit.alt}
                                layout="responsive"
                                width="227"
                                height="122"
                            />
                            <h3 className="text-[0.875rem] md:text-[1rem] pt-[0.875rem] pb-[1rem] font-[500]">
                                {unit.title}
                            </h3>
                            <p className="text-[0.75rem] md:text-[0.9rem]">
                                {unit.description}{" "}
                                <Link href={unit.linkHref} className="text-[#9F2D9D]">
                                    (Learn more)
                                </Link>
                            </p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="hidden lg:flex item gap-[1.5rem] xl:gap-[2.75rem] max-w-[91.74%] mx-auto">
                {serviceUnitData.slice(0, 3).map((unit, index) => (
                    <div
                        key={index}
                        className="px-[1rem] xl:px-[1.5rem] w-[33.3%] pt-[1rem] xl:pt-[1.5rem] pb-[3rem] rounded-[15px] xl:rounded-[20px] text-[#000000e5] bg-white"
                    >
                        <Image
                            className="block rounded-[7px] xl:rounded-[10px]"
                            src={unit.src}
                            alt={unit.alt}
                            layout="responsive"
                            width="363"
                            height="222"
                        />
                        <h3
                            className={`text-[1.1rem] xl:text-[1.3rem] min-[1440px]:text-[1.5rem] pt-[1.5rem] pb-[0.875rem] font-[500] ${
                                index === 1
                                    ? "[text-shadow:0px_4px_4px_#CF60F2]"
                                    : "[text-shadow:0px_4px_4px_#60f2cf]"
                            }`}
                        >
                            {unit.title}
                        </h3>
                        <p className="text-[0.85rem] xl:text-[1rem]">
                            {unit.description}{" "}
                            <Link href={unit.linkHref} className="text-[#9F2D9D]">
                                (Learn more)
                            </Link>
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
}

export function ThribexMomentSwiper() {
    return (
        <div className="w-full">
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    slideShadows: false,
                    modifier: 3,
                }}
                modules={[EffectCoverflow]}
                breakpoints={{
                    320: {
                        slidesPerView: 1.5,
                        spaceBetween: 90,
                    },
                    1280: {
                        spaceBetween: 120,
                        slidesPerView: 1.8,
                    },
                }}
            >
                {Array(6)
                    .fill(null)
                    .map((_, index) => (
                        <SwiperSlide key={index}>
                            <Image
                                className="block rounded-[5px]"
                                src={`/homepageImages/moments/moment-desktop${1}.png`}
                                alt="moment"
                                layout="responsive"
                                width="657"
                                height="519"
                            />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
}

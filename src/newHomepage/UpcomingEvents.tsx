import Image from "next/image";
import Button from "../components/button/Button";

function UpcomingEvents() {
    return (
        <div className="relative">
            <div className="bg-[#41403E] pt-[8.563rem] md:pt-[10rem] lg:pt-[3rem] min-[1440px]:pt-[5.875rem] pb-[2.125rem] min-[1440px]:pb-[4.563rem] px-[1.25rem] md:px-[2.5rem] lg:pl-[2.375rem] lg:pr-[5rem] xl:pr-[7.813rem] text-white lg:w-[56.04%] lg:rounded-[20px] lg:mt-[6.25rem] lg:ml-[3.875rem]">
                <div className="absolute top-[-9rem] left-1/2 transform -translate-x-1/2 md:left-auto md:right-[2.5rem] md:transform-none md:translate-x-0 lg:hidden">
                    <div className="w-[350px] md:w-[450px]">
                        <Image
                            src="/homepageImages/upcoming-event.png"
                            alt="background design"
                            layout="responsive"
                            width="350"
                            height="238"
                        />
                    </div>
                </div>
                <div className="hidden absolute lg:block lg:right-[3.75rem] top-1/2 transform -translate-y-1/2">
                    <div className="w-[380px] xl:w-[551px] min-[1440px]:w-[601px]">
                        <Image
                            src="/homepageImages/upcoming-event-desktop.png"
                            alt="upcoming event"
                            layout="responsive"
                            width="601"
                            height="738"
                        />{" "}
                    </div>
                </div>
                <h2 className="text-[2rem] md:text-[2.2rem] lg:text-[2.5rem] xl:text-[3.125rem] font-[600] uppercase lg:capitalize">
                    Upcoming Event
                </h2>
                <p className="pt-[1.75rem] lg:pt-[2.25rem] pb-[1.938rem] lg:pb-[2.5rem] xl:pb-[4.25rem] lg:text-[1.25rem] font-[500] text-justify">
                    <span className="xl:hidden">
                        Lorem ipsum dolor sit amet consectetur. Egestas pellentesque aliquam mi
                        curabitur. Sed ac at aliquam mauris maecenas vulputate dui ultricies
                        volutpat. Sed morbi lacus eu porttitor pretium nunc. Fringilla sit pharetra
                        orci nunc sed morbi turpis ipsum sed. Eget et amet augue ultrices interdum.
                        cursus imperdiet semper leo feugiat.
                    </span>
                    <span className="hidden xl:inline">
                        Lorem ipsum dolor sit amet consectetur. Egestas pellentesque aliquam mi
                        curabitur. Sed ac at aliquam mauris maecenas vulputate dui ultricies
                        volutpat. Sed morbi lacus eu porttitor pretium nunc. Fringilla sit pharetra
                        orci nunc sed morbi turpis ipsum sed. Eget et amet augue ultrices interdum.
                        Turpis aliquet facilisis vulputate augue. Posuere eu etiam facilisis amet
                        aliquam. Malesuada vestibulum eu quis odio molestie ut. A facilisis mi nisi
                        nunc sed quam ut. Quis nam feugiat cursus imperdiet semper leo feugiat.{" "}
                        <br />
                        <br />
                        Tincidunt arcu amet gravida imperdiet donec. Donec mi sed at amet enim in
                        id. Turpis pellentesque turpis egestas adipiscing Tincidunt arcu amet
                        gravida imperdiet donec. Donec mi sed at amet enim in id. Turpis
                        pellentesque turpis egestas adipiscing Tincidunt arcu amet gravida imperdiet
                        donec. Donec mi sed at amet enim in id. Turpis pellentesque turpis egestas
                        adipiscing
                    </span>{" "}
                </p>
                <Button
                    label="View All Events"
                    href="#"
                    className="block w-[9.875rem] lg:w-[15.438rem] ml-auto lg:mr-auto lg:ml-0"
                />
            </div>
        </div>
    );
}

export default UpcomingEvents;

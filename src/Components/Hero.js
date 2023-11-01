import React from "react";
import companyVideo from "../assets/vids/SSCO-video.mp4";
import AOS from "aos";
// Components
import NavBar from "./hero-sub-comp/NavBar";
import Btn from "./Btn";
const Hero = () => {
    return (
        <div
            className=" relative h-screen  overflow-hidden p-6 flex flex-col  justify-between"
            data-aos="fade"
            data-aos-offset="0"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-once="true">
            {/* Hero Video */}
            <div className="absolute -z-20 w-full h-screen -top-0 left-0 ">
                <video
                    src={companyVideo}
                    className="w-full h-screen object-cover"
                    loop
                    muted
                    autoPlay></video>
            </div>

            {/* Hero Mask */}
            <div className="-z-10 absolute bg-[#001c307d] w-full h-full top-0 left-0"></div>

            {/* Nav Bar */}
            <div
                className="flex-1"
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-delay="300"
                data-aos-duration="1000"
                data-aos-once="true">
                <NavBar
                    links={["تواصل معنا", "خدماتنا", "انجازاتنا", "عن سلامة"]}
                />
            </div>

            {/* adding Text */}
            <div className="container">
                <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6 md:gap-0">
                    <div
                        className="order-2 md:order-1 w-full md:w-1/4 flex flex-col gap-2"
                        data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-delay="900"
                        data-aos-duration="1000"
                        data-aos-once="true">
                        <p className="text-base">
                            مع حلولنا المبتكرة، نحقق أهداف الأمن والسلامة بطرق
                            فريدة وجودة لا مثيل لها.
                        </p>
                        {/* <div className="group flex flex-col items-center justify-end m-4 transition-shadow ease duration-150 shadow-slate-700 hover:shadow-2xl">
                            <span>تعرف على المزيد</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-7 h-7 transition-transform ease duration-300 group-hover:translate-y-2 ">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </div> */}
                    </div>

                    <div
                        className="order-1 md:order-2 w-full md:w-1/2 flex-1"
                        data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-delay="600"
                        data-aos-duration="1000"
                        data-aos-once="true">
                        <h2 className="font-bold text-2xl ">
                            واحدة من اكبر الشركات الرائدة في مجال الحماية من
                            الحرائق و الامن و السلامة
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Hero;

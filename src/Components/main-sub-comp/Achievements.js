import React, { useState } from "react";

import achievementImg from "../../assets/imgs/toolsImg.webp";
const Achievements = () => {
    return (
        <div
            className="bg-muted  flex flex-col md:flex-row "
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-delay="000"
            data-aos-duration="1000"
            data-aos-once="true"
            id="AchiveSection">
            <div
                className="w-full h-[232px] md:h-[464px] md:w-1/2  bg-cover bg-center"
                style={{ backgroundImage: `url(${achievementImg})` }}></div>

            <div className="w-full md:w-1/2 p-10 flex flex-col gap-10 md:gap-20">
                <h3 className="text-xl font-bold">انجازتنا</h3>
                <div className="flex w-[80%] justify-between  mx-auto text-center">
                    <p
                        className="font-bold text-base"
                        data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-delay="300"
                        data-aos-duration="1000"
                        data-aos-once="true">
                        6+ <br /> سنوات خبرة
                    </p>
                    <p
                        className="font-bold text-base"
                        data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-delay="500"
                        data-aos-duration="1000"
                        data-aos-once="true">
                        1000+ <br /> عميل سعيد
                    </p>
                    <p
                        className="font-bold text-base"
                        data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-delay="700"
                        data-aos-duration="1000"
                        data-aos-once="true">
                        24/7 <br /> خدمات صيانة
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Achievements;

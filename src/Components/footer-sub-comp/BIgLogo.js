import React from "react";
//media
import bigLogo from "../../assets/imgs/LogoEdited.webp";

const BigLogo = () => {
    return (
        <div
            className="flex flex-col items-center "
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-delay="000"
            data-aos-duration="1000"
            data-aos-once="true">
            <img src={bigLogo} alt="" className="w-[85%]" typeof="image/webp" />
        </div>
    );
};
export default BigLogo;

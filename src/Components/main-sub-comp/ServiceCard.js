import React from "react";

const ServiceCard = ({ title, text, imgSrc, flipOrder }) => {
    return (
        <div
            className="flex flex-col md:flex-row  h-fit  bg-muted"
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-delay="600"
            data-aos-duration="1000"
            data-aos-once="true">
            <div
                className={`w-full md:w-1/2 flex flex-col items-end justify-start gap-4 p-12 md:${
                    flipOrder && "order-2"
                } `}>
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="text-md">{text}</p>
            </div>
            <div
                className={`w-full bg-slate-700 h-auto md:w-1/2 flex flex-col items-center justify-center md:${
                    flipOrder && "order-1"
                }`}>
                <img
                    src={imgSrc}
                    alt="service"
                    className="w-[100%] h-auto flex-1 "
                    typeof="image/webp"
                />
            </div>
        </div>
    );
};
export default ServiceCard;

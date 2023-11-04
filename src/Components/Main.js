import React from "react";

//Componets
import About from "./main-sub-comp/About";
import Achievements from "./main-sub-comp/Achievements";
import Features from "./main-sub-comp/Features";
import Services from "./main-sub-comp/Services";
import Partners from "./main-sub-comp/Partners";

const Main = () => {
    return (
        <div className="flex flex-col gap-[128px]">
            <About />
            <Achievements />
            <Features />
            <Services />
            <Partners />
        </div>
    );
};
export default Main;

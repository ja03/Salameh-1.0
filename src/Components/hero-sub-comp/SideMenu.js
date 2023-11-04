import React from "react";
import { Link } from "react-scroll";
import xIcon from "../../assets/imgs/X-icon.svg";
const SideMenu = ({ onToggle, show }) => {
    const links = [
        {
            sectionName: "تواصل معنا",
            sectionID: "ContactSection",
        },
        {
            sectionName: "خدماتنا",
            sectionID: "ServiceSection",
        },
        {
            sectionName: "انجازاتنا",
            sectionID: "AchiveSection",
        },
        {
            sectionName: "عن سلامة",
            sectionID: "AboutSection",
        },
    ];
    return (
        <div
            className={`w-[36%] bg-cyan-700/70 backdrop-blur-md h-screen fixed top-0 right-0 z-20 text-white transition-transform ease-in duration-300  
        ${show ? "translate-x-0" : "translate-x-full"} ${
                show === false && "opacity-0"
            }`}>
            <button className="z-50 m-2  p-1  text-lg" onClick={onToggle}>
                <img src={xIcon} alt="close icon" className="w-[18px]" />
            </button>

            <ul className={`flex flex-col items-start gap-4 py-2`}>
                {links.map((link) => (
                    <li key={link.sectionID} className=" w-full p-2 text-md">
                        <Link to={link.sectionID} smooth={true} duration={500}>
                            {link.sectionName}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
//
export default SideMenu;

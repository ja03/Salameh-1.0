import React, { useState } from "react";
import logo from "../../assets/imgs/LOGO.svg";
import burgerIcon from "../../assets/imgs/burger-icon.svg";
import { Link } from "react-scroll";
// Components
import SideMenu from "./SideMenu";

const NavBar = () => {
    const [show, setShow] = useState(false);
    const handelToggle = () => {
        setShow((show) => !show);
    };
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
        <div className="container">
            <div className="flex items-center justify-between  w-full py-1  gap-4 border-b-2 pb-4">
                <div className="flex-1 ">
                    <img src={logo} alt="salameh logo" className="w-[200px]" />
                </div>

                <div className="hidden md:block">
                    <ul className="flex items-center gap-4 text-5xl">
                        {links.map((link) => (
                            <li
                                key={link.sectionID}
                                className="font-bold text-base transition-colors hover:text-accent cursor-pointer">
                                <Link
                                    to={link.sectionID}
                                    smooth={true}
                                    duration={500}>
                                    {link.sectionName}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="block md:hidden">
                    <button
                        className="z-50 m-2 p-1  text-lg "
                        onClick={handelToggle}>
                        <img src={burgerIcon} alt="burger-icon" />
                    </button>
                    <SideMenu
                        links={links}
                        show={show}
                        onToggle={handelToggle}
                    />
                </div>
            </div>
        </div>
    );
};
export default NavBar;

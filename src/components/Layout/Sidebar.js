import React, { useState } from "react";

const Sidebar = () => {
    const [isActive, setIsActive] = useState("");

    const handleToggle = (key) => {
        isActive === key ? setIsActive("") : setIsActive(key);
    };

    return (
        <ul className="navigation">
            <li><a href="/">Home</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li className={`menu-item-has-children ${isActive === "2" ? "active" : ""}`}>
                <a href="#">Expertise</a>
                <ul className="sub-menu" style={{ display: isActive === "2" ? "block" : "none" }}>
                    <li><a href="/about-me">Fullstack Design and Development</a></li>
                    <li><a href="/about-me">UX/UI Design</a></li>
                    <li><a href="/team">Print Media Design</a></li>
                    <li><a href="/team-details">Digital Marketing</a></li>
                    <li><a href="/project-details">Mobile app Development</a></li>
                </ul>
                <div className="dropdown-btn" onClick={() => handleToggle("2")}><span className="fa fa-angle-down" /></div>
            </li>

            {/*<li className={`menu-item-has-children ${isActive === "2" ? "active" : ""}`}>
                <a href="#">Services</a>
                <ul className="sub-menu" style={{ display: isActive === "2" ? "block" : "none" }}>
                    <li><a href="/about-me">About Me</a></li>
                    <li><a href="/team">Team Page</a></li>
                    <li><a href="/team-details">Team Details</a></li>
                    <li><a href="/project-details">Portfolio Details</a></li>
                    <li><a href="/services-details">Services Details</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
                <div className="dropdown-btn" onClick={() => handleToggle("2")}><span className="fa fa-angle-down" /></div>
            </li>*/}
            <li><a href="/contact">Work</a></li>
            <li><a href="/contact">Contact Us</a></li>
        </ul>
    );
};

export default Sidebar;

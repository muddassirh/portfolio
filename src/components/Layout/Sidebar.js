import React, { useState } from "react";

const Sidebar = () => {
    const [isActive, setIsActive] = useState("");

    const handleToggle = (key) => {
        isActive === key ? setIsActive("") : setIsActive(key);
    };

    return (
        <ul className="navigation">
            <li className={`menu-item-has-children ${isActive === "1" ? "active" : ""}`}>
                <a href="#">Home</a>
                <ul className="sub-menu" style={{ display: isActive === "1" ? "block" : "none" }}>
                    <li><a href="/">Creative Agency</a></li>
                    <li className="active"><a href="/index-2">Personal Portfolio</a></li>
                    <li><a href="/index-3">Digital Agency</a></li>
                </ul>
                <div className="dropdown-btn" onClick={() => handleToggle("1")}><span className="fa fa-angle-down" /></div>
            </li>
            <li><a href="/about-us">About Us</a></li>
            <li className={`menu-item-has-children ${isActive === "2" ? "active" : ""}`}>
                <a href="#">Pages</a>
                <ul className="sub-menu" style={{ display: isActive === "2" ? "block" : "none" }}>
                    <li><a href="/about-me">About Me</a></li>
                    <li><a href="/team">Team Page</a></li>
                    <li><a href="/team-details">Team Details</a></li>
                    <li><a href="/project-details">Portfolio Details</a></li>
                    <li><a href="/services-details">Services Details</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
                <div className="dropdown-btn" onClick={() => handleToggle("2")}><span className="fa fa-angle-down" /></div>
            </li>
            <li className={`menu-item-has-children ${isActive === "3" ? "active" : ""}`}>
                <a href="#">News</a>
                <ul className="sub-menu" style={{ display: isActive === "3" ? "block" : "none" }}>
                    <li><a href="/blog">Our Blog</a></li>
                    <li><a href="/blog-details">Blog Details</a></li>
                </ul>
                <div className="dropdown-btn" onClick={() => handleToggle("3")}><span className="fa fa-angle-down" /></div>
            </li>
        </ul>
    );
};

export default Sidebar;

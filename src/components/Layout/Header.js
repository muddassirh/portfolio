import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar'; // Assuming Sidebar component is correctly defined
import logo from '../../images/genxsmedia.png';

export default function Header({ scroll, headercls }) {
    const [isToggled, setToggled] = useState(false);
    const location = useLocation(); // Get the current location

    const handleToggled = () => {
        setToggled(!isToggled);
        if (!isToggled) {
            document.body.classList.add("mobile-menu-visible");
        } else {
            document.body.classList.remove("mobile-menu-visible");
        }
    };

    return (
        <header>
            <div id="sticky-header" className={`menu-area transparent-header ${scroll ? "sticky-menu" : ""} ${headercls ? headercls : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="mobile-nav-toggler" onClick={handleToggled}><i className="fas fa-bars" /></div>
                            <div className="menu-wrap">
                                <nav className="menu-nav">
                                    <div className="logo">
                                        <Link to="/">
                                            <img src={logo} alt="Logo" />
                                        </Link>
                                    </div>
                                    <div className="navbar-wrap main-menu d-none d-lg-flex">
                                        <ul className="navigation">
                                            <li className={location.pathname === "/" ? "active" : ""}>
                                                <Link to="/">Home</Link>
                                            </li>
                                            <li className={location.pathname === "/about-us" ? "active" : ""}>
                                                <Link to="/about-us">About Us</Link>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link to="/">Expertise</Link>
                                                <ul className="sub-menu">
                                                    <li className={location.pathname === "/full-stack-design-development" ? "active" : ""}>
                                                        <Link to="/full-stack-design-development">Fullstack Design and Development</Link>
                                                    </li>
                                                    <li className={location.pathname === "/ux-ui-design-and-consulting-services" ? "active" : ""}>
                                                        <Link to="/ux-ui-design-and-consulting-services">UX/UI Design</Link>
                                                    </li>
                                                    <li className={location.pathname === "/print-media-design-services" ? "active" : ""}>
                                                        <Link to="/print-media-design-services">Print Media Design</Link>
                                                    </li>
                                                    <li className={location.pathname === "/digital-marketing-services" ? "active" : ""}>
                                                        <Link to="/digital-marketing-services">Digital Marketing</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className={location.pathname === "/work" ? "active" : ""}>
                                                <Link to="/work">Work</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="header-action">
                                        <ul className="list-wrap">
                                            <li className="header-btn">
                                                <Link to="/contact" className="btn">Contact <span /></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            {/* Mobile Menu */}
                            <div className="mobile-menu">
                                <nav className="menu-box">
                                    <div className="close-btn" onClick={handleToggled}><i className="fas fa-times" /></div>
                                    <div className="nav-logo">
                                        <Link to="/"><img src="/assets/img/logo/logo.png" alt="Logo" /></Link>
                                    </div>
                                    <div className="menu-outer">
                                        <Sidebar />
                                    </div>
                                    <div className="social-links">
                                        <ul className="clearfix list-wrap">
                                            <li><Link to="/"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link to="/"><i className="fab fa-twitter" /></Link></li>
                                            <li><Link to="/"><i className="fab fa-instagram" /></Link></li>
                                            <li><Link to="/"><i className="fab fa-linkedin-in" /></Link></li>
                                            <li><Link to="/"><i className="fab fa-youtube" /></Link></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            <div className="menu-backdrop" onClick={handleToggled} />
                            {/* End Mobile Menu */}
                        </div>
                    </div>
                </div>
                {/* Header Contact */}
                <div className="header-contact-wrap">
                    {/* ... (rest of the component remains unchanged) ... */}
                </div>
                <div className="body-contact-overlay" onClick={handleToggled} />
            </div>
        </header>
    );
}

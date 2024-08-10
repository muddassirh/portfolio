import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/genxsmedia-w-01.svg';
import cartImg from '../assets/img/images/cart_img.png';
import phoneIcon from '../assets/img/icon/phone_icon.svg';
import mailIcon from '../assets/img/icon/mail_icon.svg';
import locationIcon from '../assets/img/icon/loction_icon.svg';

const Footer1 = () => {
    return (
        <footer>
            <div className="footer-area">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-sm-6">
                                <div className="footer-widget">
                                    <div className="logo">
                                        <Link to="/"><img src={logo} alt="Logo" /></Link>
                                    </div>
                                    <div className='footer-us'>
                                    At Genxsmedia Solutions, we've spent over 15 years perfecting our craft, providing innovative and results-driven creative design, frontend development, branding, and AI solutions to businesses seeking to elevate their online presence and drive growth.
                                    </div>                                    
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-6">
                                <div className="footer-widget">
                                    <h4 className="fw-title">Navigate</h4>
                                    <div className="fw-link">
                                        <ul className="list-wrap">
                                            <li><Link to="/about-us">About</Link></li>
                                            <li><Link to="/contact">Services</Link></li>
                                            <li><Link to="/contact">Contact</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-6">
                                <div className="footer-widget">
                                    <h4 className="fw-title">We Are Social</h4>
                                    <div className="footer-social">
                                        <ul className="list-wrap">
                                            <li><Link to="/#"><i className="fab fa-facebook-f" /></Link></li>
                                            <li className="active"><Link to="/#"><i className="fab fa-twitter" /></Link></li>
                                            <li><Link to="/#"><i className="fab fa-linkedin-in" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="footer-widget">
                                    <h4 className="fw-title">You Can Reach Us</h4>                                    
                                    <div className="footer-about">
                                        <ul className="list-wrap">
                                            <li><img src={phoneIcon} alt="Phone Icon" /><Link to="tel:0123456789">8 (495) 989—20—11</Link></li>
                                            <li><img src={mailIcon} alt="Mail Icon" /><Link to="mailto:marketing@genxsmedia.com">marketing@genxsmedia.com</Link></li>
                                            <li><img src={locationIcon} alt="Location Icon" /><span>Ranelagh Place, Liverpool, L3 5UL, England</span></li>
                                        </ul>
                                    </div>                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row align-items-center">                            
                            <div className="col-md-12">
                                <div className="copyright-text text-center">
                                    <p>© {new Date().getFullYear()} Genxsmedia Solutions - All Rights Reserved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer1;

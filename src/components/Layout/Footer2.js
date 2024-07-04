import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import logo from '../../images/genxsmedia.png'; // Import the logo image
import footerIcon01 from '../assets/img/icon/footer_icon01.png';
import footerIcon02 from '../assets/img/icon/footer_icon02.png';
import footerIcon03 from '../assets/img/icon/footer_icon03.png';
import footerIcon04 from '../assets/img/icon/footer_icon04.png';

const Footer2 = ({ nf3 }) => {
    return (
        <footer>
            <div className={`footer-area-two ${nf3 ? "" : "footer-area-three"}`}>
                <div className="container">
                    <div className="footer-top-two">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-8">
                                <div className="footer-content-two text-center flex flex-col items-center">
                                    <div className="logo">
                                        <Link to="/"><img src={logo} alt="Logo" /></Link>
                                    </div>
                                    <p>Agency is a full-service agency, busy designing and building beautiful digital products, brands, and experiences.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom-two">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="copyright-text">
                                    <p>© {new Date().getFullYear()}, Creative Agency.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="footer-social-two">
                                    <ul className="list-wrap">
                                        <li className="title">Follow us</li>
                                        <li><Link to="#"><img src={footerIcon01} alt="Social Icon" /></Link></li>
                                        <li><Link to="#"><img src={footerIcon02} alt="Social Icon" /></Link></li>
                                        <li><Link to="#"><img src={footerIcon03} alt="Social Icon" /></Link></li>
                                        <li><Link to="#"><img src={footerIcon04} alt="Social Icon" /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer2;

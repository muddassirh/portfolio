import { Link } from "react-router-dom";
import AboutIMG from "./assets/img/images/about_img.jpg";
import icon1 from "./assets/img/icon/about_icon01.png"
import icon2 from "./assets/img/icon/about_icon02.png"

export default function About1() {
    return (
        <>
            <section className="about-area">
                <div className="container custom-container">
                    <div className="about-inner">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-46 order-0 order-lg-2">
                                <div className="about-img text-end">
                                    <img src={AboutIMG} alt="" />
                                </div>
                            </div>
                            <div className="col-54">
                                <div className="about-content">
                                    <div className="section-title mb-25">
                                        <span className="sub-title">About Company</span>
                                        <h2 className="title">A Full Service Design and Branding Agency</h2>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                                    <ul className="list-wrap">
                                        <li>
                                            <div className="icon">
                                                <img src={icon1} alt="" />
                                            </div>
                                            <div className="content">
                                                <h4 className="title">Concept Creation</h4>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <img src={icon2} alt="" />
                                            </div>
                                            <div className="content">
                                                <h4 className="title">Sketch Drawing</h4>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="about-content-bottom">
                                        <span>Think Creative Agency Are a Full Service Design</span>
                                        <div className="read-more-btn">
                                            <Link to="/about-us" className="btn">Read More <span /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

import { Link } from "react-router-dom";
import AboutIMG from "./assets/img/images/about_img.png";
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
                                        <span className="sub-title-white">About Company</span>
                                        <h2 className="title">Transforming visions into digital realities</h2>
                                    </div>
                                    <p>At Genxsmedia Solutions, we've been empowering businesses with cutting-edge creative design and frontend development services since 2007. Our expertise spans branding, AI solutions, and more. We believe every business has a unique story and identity, which is why we deliver 100% personalized strategies that drive real results.</p>
                                    <h3 className="title">Think. Ideate. Elevate.</h3>
                                    <div className="about-content-bottom">
                                        <span className="sub-title-white">This is not the end!!! Our story is about to begun</span>
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

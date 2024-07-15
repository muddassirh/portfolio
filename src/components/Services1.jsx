import { Link } from "react-router-dom";
import icon1 from './assets/img/icon/services_icon01.png';
import icon2 from './assets/img/icon/services_icon02.png';
import icon3 from './assets/img/icon/services_icon03.png';
import icon4 from './assets/img/icon/services_icon04.png';

export default function Services1() {
    return (
        <>
            <section className="services-area px-24 pt-35 pb-95">
                <div className="container ">
                    <div className="row justify-content-center">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item wow fadeInUp" data-wow-delay=".2s">
                                <div className="services-icon">
                                    <img src={icon1} alt="" />
                                </div>
                                <div className="services-content">
                                    <h4 className="title"><Link to="/services-details">Product & Experience Design</Link></h4>
                                    <p>We craft intuitive designs that delight users and drive business results. By combining human insight with design expertise, we create seamless experiences that set our clients apart.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item wow fadeInUp" data-wow-delay=".4s">
                                <div className="services-icon">
                                    <img src={icon2} alt="" />
                                </div>
                                <div className="services-content">
                                    <h4 className="title"><Link to="/services-details">Frontend Design/Development</Link></h4>
                                    <p>We bring designs to life with clean, efficient code that scales. With a focus on usability and performance, we build digital products that look great and work smoothly on all devices.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item wow fadeInUp" data-wow-delay=".6s">
                                <div className="services-icon">
                                    <img src={icon3} alt="" />
                                </div>
                                <div className="services-content">
                                    <h4 className="title"><Link to="/services-details">Campaign & Content Design</Link></h4>
                                    <p>Compelling narratives and visual stories that capture attention and drive action. We help our clients stand out, build their brand, and inspire engagement.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item wow fadeInUp" data-wow-delay=".8s">
                                <div className="services-icon">
                                    <img src={icon4} alt="" />
                                </div>
                                <div className="services-content">
                                    <h4 className="title"><Link to="/services-details">AI Solutions</Link></h4>
                                    <p>Unlocking the power of AI to drive innovation and transform industries. We develop intelligent solutions that help businesses make better decisions, improve efficiency, and reduce costs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

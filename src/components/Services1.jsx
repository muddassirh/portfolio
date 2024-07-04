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
                                    <h4 className="title"><Link to="/services-details">UIUX Design</Link></h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item wow fadeInUp" data-wow-delay=".4s">
                                <div className="services-icon">
                                    <img src={icon2} alt="" />
                                </div>
                                <div className="services-content">
                                    <h4 className="title"><Link to="/services-details">Product Design</Link></h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item wow fadeInUp" data-wow-delay=".6s">
                                <div className="services-icon">
                                    <img src={icon3} alt="" />
                                </div>
                                <div className="services-content">
                                    <h4 className="title"><Link to="/services-details">Website Design</Link></h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item wow fadeInUp" data-wow-delay=".8s">
                                <div className="services-icon">
                                    <img src={icon4} alt="" />
                                </div>
                                <div className="services-content">
                                    <h4 className="title"><Link to="/services-details">Branding Design</Link></h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

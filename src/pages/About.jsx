import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import CounterUp from '../components/elements/CounterUp';
import Layout from '../components/Layout/Layout'; 

// Import images
import innerCounterIcon01 from '../components/assets/img/icon/inner_counter_icon01.png';
import innerCounterIcon02 from '../components/assets/img/icon/inner_counter_icon02.png';
import innerCounterIcon03 from '../components/assets/img/icon/inner_counter_icon03.png';
import innerCounterIcon04 from '../components/assets/img/icon/inner_counter_icon04.png';
import sine from '../components/assets/img/images/sine.png';
import team1 from '../components/assets/img/team/inner_team01.jpg';
import team2 from '../components/assets/img/team/inner_team02.jpg';
import team3 from '../components/assets/img/team/inner_team03.jpg';
import team4 from '../components/assets/img/team/inner_team04.jpg';
import team5 from '../components/assets/img/team/inner_team05.jpg';
import testimonialAvatar1 from '../components/assets/img/images/testimonial_avatar01.png';
import testimonialAvatar2 from '../components/assets/img/images/testimonial_avatar02.png';
import testimonialAvatar3 from '../components/assets/img/images/testimonial_avatar03.png';
import ConsultationShape1 from "../components/assets/img/images/consultation_shape01.png";
import ConsultationShape2 from "../components/assets/img/images/consultation_shape02.png";
import ServicesIcon1 from "../components/assets/img/icon/inner_services_icon01.png";
import ServicesIcon2 from "../components/assets/img/icon/inner_services_icon02.png";
import ServicesIcon3 from "../components/assets/img/icon/inner_services_icon03.png";
import ServicesIcon4 from "../components/assets/img/icon/inner_services_icon04.png";
import ServicesIcon5 from "../components/assets/img/icon/inner_services_icon05.png";
import ServicesIcon6 from "../components/assets/img/icon/inner_services_icon06.png";
import ServicesIcon7 from "../components/assets/img/icon/inner_services_icon07.png";
import ServicesIcon8 from "../components/assets/img/icon/inner_services_icon08.png";
import SuccessImg from "../components/assets/img/images/success_img.png";
import SuccessIcon1 from "../components/assets/img/icon/success_icon01.png"
import SuccessIcon2 from "../components/assets/img/icon/success_icon02.png"
import SuccessIcon3 from "../components/assets/img/icon/success_icon03.png"
import SuccessIcon4 from "../components/assets/img/icon/success_icon04.png"
import SuccessShape1 from "../components/assets/img/images/success_shape01.png"
import SuccessShape2 from "../components/assets/img/images/success_shape02.png"
import HistoryImg from "../components/assets/img/images/history_img.jpg"
import HistoryShape1 from "../components/assets/img/images/history_shape01.png"
import HistoryShape2 from "../components/assets/img/images/history_shape02.png"
import brandImg01 from '../components/assets/img/brand/h3_brand_img01.png';
import brandImg02 from '../components/assets/img/brand/h3_brand_img02.png';
import brandImg03 from '../components/assets/img/brand/h3_brand_img03.png';
import brandImg04 from '../components/assets/img/brand/h3_brand_img04.png';
import brandImg05 from '../components/assets/img/brand/h3_brand_img05.png';
import brandImg06 from '../components/assets/img/brand/h3_brand_img06.png';


const swiperOptions = {
    modules: [Autoplay, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
};

export default function AboutUs() {
    return (
        <Layout breadcrumbTitle="About Us" breadcrumbCls="pt-175 pb-140">
            <section className="counter-area-three px-24">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-0 order-lg-2">
                            <div className="counter-item-wrap-three">
                                <ul className="list-wrap">
                                    <li>
                                        <div className="counter-item-three">
                                            <div className="icon">
                                                <img src={innerCounterIcon01} alt="" />
                                            </div>
                                            <div className="content">
                                                <h2 className="count"><CounterUp className="odometer" count={210} />+</h2>
                                                <p>Satisfied <span>Customers</span></p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="counter-item-three">
                                            <div className="icon">
                                                <img src={innerCounterIcon02} alt="" />
                                            </div>
                                            <div className="content">
                                                <h2 className="count"><CounterUp className="odometer" count={15} />k+</h2>
                                                <p>Project <span>Finished</span></p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="counter-item-three">
                                            <div className="icon">
                                                <img src={innerCounterIcon03} alt="" />
                                            </div>
                                            <div className="content">
                                                <h2 className="count"><CounterUp className="odometer" count={110} />+</h2>
                                                <p>Our <span>Employees</span></p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="counter-item-three">
                                            <div className="icon">
                                                <img src={innerCounterIcon04} alt="" />
                                            </div>
                                            <div className="content">
                                                <h2 className="count"><CounterUp className="odometer" count={12} />+</h2>
                                                <p>International <span>Awards</span></p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="counter-content-three">
                                <div className="section-title title-style-two mb-30">
                                    <h2 className="title">Content Has to Be More That Just Brilliant</h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget imperdiet. Ac scelerisque nibh dolores consectetuer, nulla aptent est pede. Scelerisque euismod varius mi, congue eget sed vestibulum, ornare cras sed nec.</p>
                                <img src={sine} alt="" />
                                <div className="content-bottom">
                                    <h4 className="title-two">Davis Levin</h4>
                                    <span>Director Company</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* team-area */}
            <section className="team-area-two px-24 pt-110 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7">
                            <div className="section-title title-style-two text-center mb-70">
                                <h2 className="title">Meet The Squad</h2>
                                <p>Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget imperdiet. Ac scelerisque nibh dolores</p>
                            </div>
                        </div>
                    </div>
                    <Swiper {...swiperOptions} className="team-active">
                        <SwiperSlide>
                            <div className="team-item">
                                <div className="team-thumb">
                                    <Link to="/team-details"><img src={team1} alt="" /></Link>
                                </div>
                                <div className="team-content">
                                    <h2 className="title"><Link to="/team-details">Alena Rosser</Link></h2>
                                    <span>CEO Kawasaki Inc.</span>
                                    <div className="team-social">
                                        <ul className="list-wrap">
                                            <li><Link to="#"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link to="#"><i className="fab fa-twitter" /></Link></li>
                                            <li><Link to="#"><i className="fab fa-linkedin-in" /></Link></li>
                                            <li><Link to="#"><i className="fab fa-behance" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="team-item">
                                <div className="team-thumb">
                                    <Link to="/team-details"><img src={team2} alt="" /></Link>
                                </div>
                                <div className="team-content">
                                    <h2 className="title"><Link to="/team-details">Tiana Dokidis</Link></h2>
                                    <span>CEO Kawasaki Inc.</span>
                                    <div className="team-social">
                                        <ul className="list-wrap">
                                            <li><Link to="#"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link to="#"><i className="fab fa-twitter" /></Link></li>
                                            <li><Link to="#"><i className="fab fa-linkedin-in" /></Link></li>
                                            <li><Link to="#"><i className="fab fa-behance" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="team-item">
                                <div className="team-thumb">
                                    <Link to="/team-details"><img src={team3} alt="" /></Link>
                                </div>
                                <div className="team-content">
                                    <h2 className="title"><Link to="/team-details">Ryan Vetrovs</Link></h2>
                                    <span>CEO Kawasaki Inc.</span>
                                    <div className="team-social">
                                        <ul className="list-wrap">
                                            <li><Link to="#"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link to="#"><i className="fab fa-twitter" /></Link></li>
                                            <li><Link to="#"><i className="fab fa-linkedin-in" /></Link></li>
                                            <li><Link to="#"><i className="fab fa-behance" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="team-item">
                                <div className="team-thumb">
                                    <Link to="/team-details"><img src={team4} alt="" /></Link>
                                </div>
                                <div className="team-content">
                                    <h2 className="title"><Link to="/team-details">Emerson Saris</Link></h2>
                                    <span>CEO Kawasaki Inc.</span>
                                    <div className="team-social">
                                        <ul className="list-wrap">
                                            <li><Link to="#"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link to="#"><i className="fab fa-twitter" /></Link></li>
                                            <li><Link to="#"><i className="fab fa-linkedin-in" /></Link></li>
                                            <li><Link to="#"><i className="fab fa-behance" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="team-item">
                                <div className="team-thumb">
                                    <Link to="/team-details"><img src={team5} alt="" /></Link>
                                </div>
                                <div className="team-content">
                                    <h2 className="title"><Link to="/team-details">Lindsey Schleifer</Link></h2>
                                    <span>CEO Kawasaki Inc.</span>
                                    <div className="team-social">
                                        <ul className="list-wrap">
                                            <li><Link to="#"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link to="#"><i className="fab fa-twitter" /></Link></li>
                                            <li><Link to="#"><i className="fab fa-linkedin-in" /></Link></li>
                                            <li><Link to="#"><i className="fab fa-behance" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            {/* team-area-end */}
                {/* consultation-area */}
                <section className="consultation-area consultation-area-two px-24 pt-120 pb-120">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div className="consultation-content">
                                    <div className="section-title mb-25">
                                        <span className="sub-title">95% Accuracy</span>
                                        <h2 className="title">Worldwide Best Digital Marketing Agency</h2>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget imperdiet. Ac
                                        scelerisque nibh dolores consectetuer, nulla aptent est pede. Scelerisque euismod varius mi, congue eget sed vestibulum, ornare cras sed nec.</p>
                                    <div className="consultation-list">
                                        <ul className="list-wrap">
                                            <li>
                                                <h6 className="title">12X</h6>
                                                <p>Faster Order <span>Processing</span></p>
                                            </li>
                                            <li>
                                                <h6 className="title">99%</h6>
                                                <p>Processing <span>Accuracy</span></p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="consultation-form-wrap">
                                    <h4 className="title">Free Consultation</h4>
                                    <form action="#">
                                        <div className="form-grp">
                                            <input type="text" placeholder="Name" />
                                        </div>
                                        <div className="form-grp">
                                            <input type="email" placeholder="Email Address" />
                                        </div>
                                        <div className="form-grp">
                                            <input type="text" placeholder="Phone Number" />
                                        </div>
                                        <div className="form-grp">
                                            <select id="shortBy" name="select" className="form-select" aria-label="Default select example">
                                                <option value>Subject</option>
                                                <option>Subject One</option>
                                                <option>Subject Two</option>
                                                <option>Subject Three</option>
                                                <option>Subject Four</option>
                                            </select>
                                        </div>
                                        <button className="btn" type="submit">Consultation</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="consultation-shape-wrap">
                        <img src={ConsultationShape1} alt="" className="shape-one ribbonRotate" />
                        <img src={ConsultationShape2} alt="" className="shape-two float-bob-x" />
                    </div>
                </section>
                {/* consultation-area-end */}
                {/* services-area */}
                <section className="inner-services-area px-24 pt-110 pb-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="section-title title-style-two text-center mb-60">
                                    <span className="sub-title">Graphic Service</span>
                                    <h2 className="title">Creative  Branding Design</h2>
                                </div>
                            </div>
                        </div>
                        <div className="inner-services-item-wrap">
                            <div className="row justify-content-center">
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item-four">
                                        <div className="services-icon-four">
                                            <img src={ServicesIcon1} alt="" />
                                        </div>
                                        <div className="services-content-four">
                                            <h2 className="title"><Link href="/services-details">Advertising</Link></h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item-four">
                                        <div className="services-icon-four">
                                            <img src={ServicesIcon2} alt="" />
                                        </div>
                                        <div className="services-content-four">
                                            <h2 className="title"><Link href="/services-details">Development</Link></h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item-four">
                                        <div className="services-icon-four">
                                            <img src={ServicesIcon3} alt="" />
                                        </div>
                                        <div className="services-content-four">
                                            <h2 className="title"><Link href="/services-details">Branding</Link></h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item-four">
                                        <div className="services-icon-four">
                                            <img src={ServicesIcon4} alt="" />
                                        </div>
                                        <div className="services-content-four">
                                            <h2 className="title"><Link href="/services-details">Product Design</Link></h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item-four">
                                        <div className="services-icon-four">
                                            <img src={ServicesIcon5} alt="" />
                                        </div>
                                        <div className="services-content-four">
                                            <h2 className="title"><Link href="/services-details">Software</Link></h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item-four">
                                        <div className="services-icon-four">
                                            <img src={ServicesIcon6} alt="" />
                                        </div>
                                        <div className="services-content-four">
                                            <h2 className="title"><Link href="/services-details">Marketing</Link></h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item-four">
                                        <div className="services-icon-four">
                                            <img src={ServicesIcon7} alt="" />
                                        </div>
                                        <div className="services-content-four">
                                            <h2 className="title"><Link href="/services-details">Cinematography</Link></h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item-four">
                                        <div className="services-icon-four">
                                            <img src={ServicesIcon8} alt="" />
                                        </div>
                                        <div className="services-content-four">
                                            <h2 className="title"><Link href="/services-details">Strategy Services</Link></h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* services-area-end */}
                {/* success-area */}
                <section className="success-area px-24 pb-120">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 order-0 order-lg-2">
                                <div className="success-img">
                                    <img src={SuccessImg} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="success-content">
                                    <div className="section-title title-style-two mb-30">
                                        <span className="sub-title">Company Success</span>
                                        <h2 className="title">A Company’s Success is An Ongoing Stream of Happiness</h2>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                                    <div className="success-list">
                                        <ul className="list-wrap">
                                            <li>
                                                <div className="content">
                                                    <img src={SuccessIcon1} alt="" />
                                                    <span>App Design 85%</span>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" style={{ width: '85%' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="content">
                                                    <img src={SuccessIcon2} alt="" />
                                                    <span>Website Design 75%</span>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="content">
                                                    <img src={SuccessIcon3} alt="" />
                                                    <span>Product Design 95%</span>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" style={{ width: '95%' }} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="content">
                                                    <img src={SuccessIcon4} alt="" />
                                                    <span>Development 99%</span>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" style={{ width: '99%' }} aria-valuenow={99} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="success-shape-wrap">
                        <img src={SuccessShape1} alt="" />
                        <img src={SuccessShape2} alt="" />
                    </div>
                </section>
                {/* success-area-end */}
                {/* history-area */}
                <section className="history-area ">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-8">
                                <div className="section-title white-title text-center mb-45">
                                    <span className="sub-title">Our Company</span>
                                    <h2 className="title text-white">Company History</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                                </div>
                            </div>
                        </div>
                        <div className="history-inner">
                            <div className="history-img">
                                <img src={HistoryImg} alt="" />
                            </div>
                            <div className="row g-0 justify-content-end">
                                <div className="col-lg-6">
                                    <div className="history-content">
                                        <h2 className="title">The Intention was to Establish The Company</h2>
                                        <p>Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget imperdiet.
                                            Ac scelerisque nibh dolores consectetuer, nulla aptent est pede. Scelerisque euismod varius mi,</p>
                                        <ul className="list-wrap">
                                            <li><i className="far fa-check" />Everyone can design at low cost</li>
                                            <li><i className="far fa-check" />Designing in a different way</li>
                                            <li><i className="far fa-check" />Our designs sill be world wide best designs</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="history-roadmap-wrap">
                            <div className="roadmap-line-shape">
                                <span className="dot-one pulse-one" />
                                <span className="dot-two pulse-two" />
                            </div>
                            <ul className="list-wrap">
                                <li className="wow fadeInDown" data-wow-delay=".2s" data-wow-duration="1.5s">
                                    <span className="dot pulse-three" />
                                    <div className="content">
                                        <h5 className="title">2020</h5>
                                        <p>January 14 th</p>
                                    </div>
                                </li>
                                <li className="wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1.5s">
                                    <span className="dot pulse-four" />
                                    <div className="content">
                                        <h5 className="title">2021</h5>
                                        <p>January 14 th</p>
                                    </div>
                                </li>
                                <li className="wow fadeInDown" data-wow-delay=".2s" data-wow-duration="1.5s">
                                    <span className="dot pulse-five" />
                                    <div className="content">
                                        <h5 className="title">2022</h5>
                                        <p>January 14 th</p>
                                    </div>
                                </li>
                                <li className="wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1.5s">
                                    <span className="dot pulse-six" />
                                    <div className="content">
                                        <h5 className="title">{new Date().getFullYear()}</h5>
                                        <p>January 14 th</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="history-shape-wrap">
                        <img src={HistoryShape1} alt="" />
                        <img src={HistoryShape2} alt="" />
                    </div>
                </section>
                {/* history-area-end */}
            {/* testimonial-area */}
            <section className="testimonial-area-three testimonial-area-four">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <div className="section-title title-style-two mb-45">
                                <h2 className="title">What Our Client’s Say</h2>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="testimonial-nav">
                                <button className="swiper-button-prev" />
                                <button className="swiper-button-next" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="swiper-container testimonial-active-three">
                                <Swiper {...swiperOptions}>
                                    <SwiperSlide>
                                        <div className="testimonial-item-three">
                                            <div className="testimonial-thumb-three">
                                                <img src={testimonialAvatar1} alt="" />
                                            </div>
                                            <div className="testimonial-content-three">
                                                <h4 className="title">James Botosh</h4>
                                                <span>Product Designer</span>
                                                <p>“We seek to get involved early in the design phase so that we can manage the project more efficiently, provide effective building solutions”</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial-item-three">
                                            <div className="testimonial-thumb-three">
                                                <img src={testimonialAvatar2} alt="" />
                                            </div>
                                            <div className="testimonial-content-three">
                                                <h4 className="title">James Botosh</h4>
                                                <span>Product Designer</span>
                                                <p>“We seek to get involved early in the design phase so that we can manage the project more efficiently, provide effective building solutions”</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial-item-three">
                                            <div className="testimonial-thumb-three">
                                                <img src={testimonialAvatar3} alt="" />
                                            </div>
                                            <div className="testimonial-content-three">
                                                <h4 className="title">James Botosh</h4>
                                                <span>Product Designer</span>
                                                <p>“We seek to get involved early in the design phase so that we can manage the project more efficiently, provide effective building solutions”</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="testimonial-item-three">
                                            <div className="testimonial-thumb-three">
                                                <img src={testimonialAvatar1} alt="" />
                                            </div>
                                            <div className="testimonial-content-three">
                                                <h4 className="title">James Botosh</h4>
                                                <span>Product Designer</span>
                                                <p>“We seek to get involved early in the design phase so that we can manage the project more efficiently, provide effective building solutions”</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* testimonial-area-end */}
            {/* brand-area */}
            <div className="brand-area px-24 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <span className="title">We are Already Build Solution for...</span>
                    </div>
                </div>
                <div className="row brand-active">
                    <div className="col-xl-2 col-sm-4 my-3">
                        <div className="brand-item-two">
                            <img src={brandImg01} alt="" />
                        </div>
                    </div>
                    <div className="col-xl-2 col-sm-4 my-3">
                        <div className="brand-item-two">
                            <img src={brandImg02} alt="" />
                        </div>
                    </div>
                    <div className="col-xl-2 col-sm-4 my-3">
                        <div className="brand-item-two">
                            <img src={brandImg03} alt="" />
                        </div>
                    </div>
                    <div className="col-xl-2 col-sm-4 my-3">
                        <div className="brand-item-two">
                            <img src={brandImg04} alt="" />
                        </div>
                    </div>
                    <div className="col-xl-2 col-sm-4 my-3">
                        <div className="brand-item-two">
                            <img src={brandImg05} alt="" />
                        </div>
                    </div>
                    <div className="col-xl-2 col-sm-4 my-3">
                        <div className="brand-item-two">
                            <img src={brandImg06} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
                {/* brand-area-end */}

        </Layout>
    );
}















// import React from 'react';
// import {info} from "../data/info";
// const About = () => {
    
//     return (
//       <>
//       <div className='banner-back w-full text-white py-28'>
//       <h1 className="text-[50px] md:text-[100px] text-center mb-5 font-extrabold">ABOUT ME</h1>
//       <p className="text-[30px] md:text-[60px] text-center px-2">
//         {info.position}
//       </p>
//       </div>
//               <div className='max-w-[1040px] mx-auto text-bold py-[50px] px-5'>
        
//         {/* <h2 className='font-normal uppercase text-center leading-[28px] md:leading-[55px] text-[30px] md:text-[60px]'>{info.position}</h2>   */}
//         <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10'>
//           <div className='my-img'>
//               <img src={info.selfPortrait} alt="Muddassir Hassan"/>
//           </div>
//           <div className='py-28'><p className='font-light leading-[35px] text-[25px]'>{info.bio}</p></div>
//         </div>
        
//       </div>
//       </>
//     );
// }

// export default About;

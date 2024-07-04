import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProjectImg1 from "./assets/img/project/project_img01.jpg";
import ProjectImg2 from "./assets/img/project/project_img02.jpg";
import ProjectImg3 from "./assets/img/project/project_img03.jpg";
import ProjectShape1 from "./assets/img/project/project_shape01.png"
import ProjectShape2 from "./assets/img/project/project_shape02.png"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 0,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination2',
        clickable: true
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
    }
}

export default function Project1() {
    return (
        <>
            <section className="project-area ">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-4">
                            <div className="project-content">
                                <div className="section-title white-title mb-30">
                                    <span className="sub-title">Our Complete Craft</span>
                                    <h2 className="title">Some of Our Work in Craft Digital Agency</h2>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                                <div className="content-bottom">
                                    <Link to="/about-me" className="btn">View All Project <span /></Link>
                                    <div className="project-nav">
                                        <button className="swiper-button-prev" />
                                        <button className="swiper-button-next" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8">
                            <div className="project-item-wrap">
                                <div className="swiper-container project-active">
                                    <Swiper {...swiperOptions} className="swiper-wrapper">
                                        <SwiperSlide>
                                            <div className="project-item">
                                                <Link to="/project-details"><img src={ProjectImg1} alt="" /></Link>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="project-item">
                                                <Link to="/project-details"><img src={ProjectImg2} alt="" /></Link>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="project-item">
                                                <Link to="/project-details"><img src={ProjectImg3} alt="" /></Link>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="project-item">
                                                <Link to="/project-details" className="popup-image"><img src={ProjectImg2} alt="" /></Link>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="project-item">
                                                <Link to="/project-details"><img src={ProjectImg1} alt="" /></Link>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="project-item">
                                                <Link to="/project-details"><img src={ProjectImg2} alt="" /></Link>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                            <div className="mt-30">
                                <div className="swiper-pagination2"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-shape-wrap">
                    <img src={ProjectShape1} alt="" className="shape-one ribbonRotate" />
                    <img src={ProjectShape2} alt="" className="shape-two ribbonRotate" />
                </div>
            </section>
        </>
    );
}

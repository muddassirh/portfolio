import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import TestAvatar1 from "./assets/img/images/testimonial_avatar01.png"
import TestAvatar2 from "./assets/img/images/testimonial_avatar02.png"
import TestAvatar3 from "./assets/img/images/testimonial_avatar03.png"
import TestAvatar4 from "./assets/img/images/testimonial_avatar04.png"

const swiperOptions = {
    modules: [Autoplay, Pagination],
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination3',
        clickable: true
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
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    }
}

export default function Testimonial1() {
    return (
        <>
            <section className="testimonial-area px-24 pt-110 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="section-title text-center mb-20">
                                <span className="sub-title">Testimonials</span>
                                <h2 className="title">What Our Customer Say About Us</h2>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item-wrap">
                        <Swiper {...swiperOptions} className="testimonial-active">
                            <SwiperSlide>
                                <div className="testimonial-item">
                                    <div className="testimonial-content">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and “</p>
                                    </div>
                                    <div className="testimonial-info">
                                        <div className="thumb">
                                            <img src={TestAvatar1} alt="" />
                                        </div>
                                        <div className="content">
                                            <h4 className="title">Davis Levin</h4>
                                            <p>CEO Kawasaki Inc.</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-item">
                                    <div className="testimonial-content">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and “</p>
                                    </div>
                                    <div className="testimonial-info">
                                        <div className="thumb">
                                            <img src={TestAvatar2} alt="" />
                                        </div>
                                        <div className="content">
                                            <h4 className="title">Davis Levin</h4>
                                            <p>CEO Kawasaki Inc.</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-item">
                                    <div className="testimonial-content">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and “</p>
                                    </div>
                                    <div className="testimonial-info">
                                        <div className="thumb">
                                            <img src={TestAvatar3} alt="" />
                                        </div>
                                        <div className="content">
                                            <h4 className="title">Davis Levin</h4>
                                            <p>CEO Kawasaki Inc.</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-item">
                                    <div className="testimonial-content">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and “</p>
                                    </div>
                                    <div className="testimonial-info">
                                        <div className="thumb">
                                            <img src={TestAvatar4} alt="" />
                                        </div>
                                        <div className="content">
                                            <h4 className="title">Davis Levin</h4>
                                            <p>CEO Kawasaki Inc.</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-item">
                                    <div className="testimonial-content">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and “</p>
                                    </div>
                                    <div className="testimonial-info">
                                        <div className="thumb">
                                            <img src={TestAvatar2} alt="" />
                                        </div>
                                        <div className="content">
                                            <h4 className="title">Davis Levin</h4>
                                            <p>CEO Kawasaki Inc.</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-item">
                                    <div className="testimonial-content">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and “</p>
                                    </div>
                                    <div className="testimonial-info">
                                        <div className="thumb">
                                            <img src={TestAvatar3} alt="" />
                                        </div>
                                        <div className="content">
                                            <h4 className="title">Davis Levin</h4>
                                            <p>CEO Kawasaki Inc.</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <div className="mt-30 text-center">
                            <div className="swiper-pagination3"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

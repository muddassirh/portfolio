import React from 'react';
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
const testimonials = [
    {
      quote: "Skilled web developer! Strong communication skills and fast delivery. I'll certainly be repeating business with them!",
      author: "Charles K",
      title: "CEO Quaint Energy",
      avatar: TestAvatar1
    },
    {
      quote: "They did a great job building our new website, we are very happy and it looks great. The price was great also.",
      author: "Tyson Bellamy",
      title: "CEO T Y",
      avatar: TestAvatar2
    },
    {
      quote: "Muhammad is a good guy. Does really excellent work and will definitely use again. He worked on some flash (not easy) and HTML elements. Very pro look.",
      author: "Phillip Colin",
      title: "P C",
      avatar: TestAvatar4
    },
    {
      quote: "Great web developer! Great communication and very quick! Definetly will do business again.",
      author: "Whilly Bermudez",
      title: "CEO. Whilly Bermudez",
      avatar: TestAvatar2
    },
    {
      quote: "Excellent vendor who works hard to complete the project on time and on budget. No complaints at all and would use again in the future.",
      author: "Dan G.",
      title: "DG45",
      avatar: TestAvatar3
    }
  ];
export default function Testimonial1() {
    return (
        <>
            <section className="testimonial-area bg-white px-24 pt-110 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="section-title text-center mb-20">
                                <span className="sub-title">Testimonials</span>
                                <h2 className="title">What Our Customer Say About Us</h2>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item-wrap ">
                        <Swiper {...swiperOptions} className="testimonial-active">
                           { 
                            testimonials.map(testimonial=>{
return(
                     <SwiperSlide >
                                <div className="testimonial-item ">
                                    <div className="testimonial-content">
                                        <p>{testimonial.quote}</p>
                                    </div>
                                    <div className="testimonial-info">
                                        <div className="thumb">
                                            <img src={testimonial.avatar} alt="" />
                                        </div>
                                        <div className="content">
                                            <h4 className="title">{testimonial.author}</h4>
                                            <p>{testimonial.title}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>)
                            })}
                            
                          
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

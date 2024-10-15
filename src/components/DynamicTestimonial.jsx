import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

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
const DynamicTestimonial = ({testimonials}) => {
  return (
    <>
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
                                { 
                            testimonials.map(testimonial=>{
return(
                     <SwiperSlide >
                                 <div className="testimonial-item-three">
                                            <div className="testimonial-thumb-three">
                                                <img src={testimonial.avatar} alt="" />
                                            </div>
                                            <div className="testimonial-content-three">
                                                <h4 className="title">{testimonial.author}</h4>
                                                <span>{testimonial.title}</span>
                                                <p>{testimonial.quote}</p>
                                            </div>
                                        </div>
                            </SwiperSlide>
                            )
                            })}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>  
    </>
  )
}

export default DynamicTestimonial
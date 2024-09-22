import React, {useState, useEffect} from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import PhotoshopIcon from '../components/assets/img/icon/tools_icon01.png';
import IllustratorIcon from '../components/assets/img/icon/tools_icon02.png';
import FigmaIcon from '../components/assets/img/icon/tools_icon03.png';
import SketchIcon from '../components/assets/img/icon/tools_icon04.png';
import PremiereProIcon from '../components/assets/img/icon/tools_icon05.png';
import AfterEffectsIcon from '../components/assets/img/icon/tools_icon06.png';
import HTML5Icon from '../components/assets/img/icon/tools_icon07.png';
import BlenderIcon from '../components/assets/img/icon/tools_icon08.png';

const swiperOptions = {
    modules: [Autoplay],
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
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
            slidesPerView: 5,
            spaceBetween: 30,
        },
    }
};



export default function PrintmediaTools() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };

    return (
        <section className="tools-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="section-title title-style-two white-title text-center mb-50">
                            <span className="sub-title">Print Media Services</span>
                            <h2 className="title">Designing the Physical World</h2>
                        </div>
                    </div>
                </div>
                <div className="tools-item-wrap px-24">
                    <div className='flex flex-col md:flex-row gap-4'>
                        <div className="basis-1/2 md:basis-1/3">
                        <div className="tools-item">
                                <div className="tools-icon">
                                    <img src={PhotoshopIcon} alt="Photoshop" />
                                </div>
                                <div className="tools-content">
                                    <h3 className="title">Brand Identity: Defining Your Visual Voice</h3>
                                    <p>We understand that your brand identity is the cornerstone of your business. Our experts work closely with you to develop a unique and memorable visual identity that reflects your brand's values, personality, and target audience. From logo design to color palettes and typography, we create a cohesive brand identity that sets you apart.</p>
                                </div>
                            </div>
                        </div>
                        <div className="basis-1/2 md:basis-1/3">
                        <div className="tools-item">
                                <div className="tools-icon">
                                    <img src={IllustratorIcon} alt="Illustrator" />
                                </div>
                                <div className="tools-content">
                                    <h3 className="title">Illustrator</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                        </div>
                        <div className="basis-1/2 md:basis-1/3">
                        <div className="tools-item">
                                <div className="tools-icon">
                                    <img src={FigmaIcon} alt="Figma" />
                                </div>
                                <div className="tools-content">
                                    <h3 className="title">Figma</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>                        
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-4'>
                        <div className="basis-1/2 md:basis-1/3">
                        <div className="tools-item">
                                <div className="tools-icon">
                                    <img src={SketchIcon} alt="Sketch" />
                                </div>
                                <div className="tools-content">
                                    <h3 className="title">Sketch</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                        </div>
                        <div className="basis-1/2 md:basis-1/3">
                        <div className="tools-item">
                                <div className="tools-icon">
                                    <img src={PremiereProIcon} alt="Premiere Pro" />
                                </div>
                                <div className="tools-content">
                                    <h3 className="title">Premiere Pro</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                        </div>
                        <div className="basis-1/2 md:basis-1/3">
                        <div className="tools-item">
                                <div className="tools-icon">
                                    <img src={AfterEffectsIcon} alt="After Effects" />
                                </div>
                                <div className="tools-content">
                                    <h3 className="title">After Effects</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                 
                </div>
            </div>
                </section>
    );
}
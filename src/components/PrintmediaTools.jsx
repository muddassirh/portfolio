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
                    <div className='flex flex-col md:flex-row gap-4 content-stretch'>
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
                                    <h3 className="title">Brochures and Flyers: Engaging Your Audience</h3>
                                    <p>Our designers specialize in creating brochures and flyers that are both informative and visually appealing. We use strategic layout, captivating imagery, and compelling copy to effectively communicate your products or services and drive engagement. Whether you need a simple one-pager or a multi-page brochure, we'll deliver a design that leaves a lasting impression.</p>
                                </div>
                            </div>
                        </div>
                        <div className="basis-1/2 md:basis-1/3">
                        <div className="tools-item">
                                <div className="tools-icon">
                                    <img src={FigmaIcon} alt="Figma" />
                                </div>
                                <div className="tools-content">
                                    <h3 className="title">Packaging Design: Making a Statement</h3>
                                    <p>Packaging is the first thing your customers see and touch. Our packaging design experts create visually striking and functional packaging that enhances your brand's appeal and protects your products. We consider factors such as material, shape, and color to create packaging that is both aesthetically pleasing and practical.</p>
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
                                    <h3 className="title">Catalogs and Lookbooks: Showcasing Your Offerings</h3>
                                    <p>Our team excels in creating catalogs and lookbooks that showcase your products in a visually stunning and informative way. We use high-quality imagery, clear product descriptions, and a user-friendly layout to create catalogs that are both engaging and informative.</p>
                                </div>
                            </div>
                        </div>
                        <div className="basis-1/2 md:basis-1/3">
                        <div className="tools-item">
                                <div className="tools-icon">
                                    <img src={PremiereProIcon} alt="Premiere Pro" />
                                </div>
                                <div className="tools-content">
                                    <h3 className="title">Posters and Banners: Making a Big Impact</h3>
                                    <p>Whether you need posters for events or banners for outdoor advertising, our designers can create eye-catching visuals that grab attention and deliver your message. We use bold typography, striking imagery, and strategic placement to ensure your posters and banners are effective marketing tools.</p>
                                </div>
                            </div>
                        </div>
                        <div className="basis-1/2 md:basis-1/3">
                        <div className="tools-item">
                                <div className="tools-icon">
                                    <img src={AfterEffectsIcon} alt="After Effects" />
                                </div>
                                <div className="tools-content">
                                    <h3 className="title">Stationery Design: Building a Professional Image</h3>
                                    <p>Our stationery design services include letterheads, envelopes, business cards, and notepads. We create stationery that complements your brand identity and leaves a professional impression on your clients. Our designers pay attention to detail and ensure that your stationery is both visually appealing and functional.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                 
                </div>
            </div>
                </section>
    );
}
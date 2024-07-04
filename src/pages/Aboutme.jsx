import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Layout from '../components/Layout/Layout'; 
import VideoPopup from '../components/elements/VideoPopup';

// Import your images
import DeveloperImg from '../images/itsme.png'
import developerIcon01 from '../components/assets/img/icon/developer_icon01.png';
import developerIcon02 from '../components/assets/img/icon/developer_icon02.png';
import developerIcon03 from '../components/assets/img/icon/developer_icon03.png';
import developerIcon04 from '../components/assets/img/icon/developer_icon04.png';
import developerIcon05 from '../components/assets/img/icon/developer_icon05.png';
import developerIcon06 from '../components/assets/img/icon/developer_icon06.png';
import PhotoshopIcon from '../components/assets/img/icon/tools_icon01.png';
import IllustratorIcon from '../components/assets/img/icon/tools_icon02.png';
import FigmaIcon from '../components/assets/img/icon/tools_icon03.png';
import SketchIcon from '../components/assets/img/icon/tools_icon04.png';
import PremiereProIcon from '../components/assets/img/icon/tools_icon05.png';
import AfterEffectsIcon from '../components/assets/img/icon/tools_icon06.png';
import HTML5Icon from '../components/assets/img/icon/tools_icon07.png';
import BlenderIcon from '../components/assets/img/icon/tools_icon08.png';
import faqImg1 from '../components/assets/img/images/faq_img.png';
import faqImg2 from '../components/assets/img/images/faq_img02.png';
import faqShape from '../components/assets/img/images/faq_shape.png';
import brandImg1 from '../components/assets/img/brand/h3_brand_img01.png';
import brandImg2 from '../components/assets/img/brand/h3_brand_img02.png';
import brandImg3 from '../components/assets/img/brand/h3_brand_img03.png';
import brandImg4 from '../components/assets/img/brand/h3_brand_img04.png';
import brandImg5 from '../components/assets/img/brand/h3_brand_img05.png';
import brandImg6 from '../components/assets/img/brand/h3_brand_img06.png';
import innerTwoProject01 from '../components/assets/img/project/inner_two_project01.jpg';
import innerTwoProject02 from '../components/assets/img/project/inner_two_project02.jpg';
import innerTwoProject03 from '../components/assets/img/project/inner_two_project03.jpg';
import innerTwoProject04 from '../components/assets/img/project/inner_two_project04.jpg';
import innerTwoProject05 from '../components/assets/img/project/inner_two_project05.jpg';
import innerTwoProject06 from '../components/assets/img/project/inner_two_project06.jpg';
import innerTwoProject07 from '../components/assets/img/project/inner_two_project07.jpg';
import innerTwoProject08 from '../components/assets/img/project/inner_two_project08.jpg';
import innerTwoProject09 from '../components/assets/img/project/inner_two_project09.jpg';
import innerTwoProject10 from '../components/assets/img/project/inner_two_project10.jpg';
import testimonialImg from '../components/assets/img/images/testimonial_img.jpg';
import testimonialAvatar from '../components/assets/img/images/testimonial_avatar01.png';
import blogImg1 from '../components/assets/img/blog/blog_img01.jpg';
import blogImg2 from '../components/assets/img/blog/blog_img02.jpg';
import blogImg3 from '../components/assets/img/blog/blog_img03.jpg';
import avatarImg1 from '../components/assets/img/blog/blog_avatar01.png';
import avatarImg2 from '../components/assets/img/blog/blog_avatar02.png';
import avatarImg3 from '../components/assets/img/blog/blog_avatar03.png';

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
}



export default function AboutMe() {

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
        <>
            <Layout breadcrumbTitle="About Me" breadcrumbCls="about-me-breadcrumb pt-175 pb-110">
                <section className="developr-area px-24 pb-120">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-6 col-md-9 order-0 order-lg-2">
                                <div className="developr-img flex justify-end">
                                    <img className='shadow-2xl' src={DeveloperImg} alt="" />
                                    <div className="work-experience-wrap">
                                        <h2 className="count"><span className="odometer" data-count={18} />+</h2>
                                        <p>Years Of Experience</p>
                                    </div>
                                    <div className="project-completed-wrap">
                                        <h2 className="count"><span className="odometer" data-count={5} />K+</h2>
                                        <p>Have Faithfully Completed Projects Till Date</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="developr-content">
                                    <div className="section-title title-style-two mb-50">
                                        <span className="sub-title">I’m a Frontend UX/UI Designer and Full Stack Developer</span>
                                        <h2 className="title">I Develop Ideas <br /> That Help People</h2>
                                    </div>
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" onClick={() => handleOnClick(1)}>
                                            <button className={activeIndex === 1 ? "nav-link active" : "nav-link"}>My Details</button>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(2)}>
                                            <button className={activeIndex === 2 ? "nav-link active" : "nav-link"}>My Awards</button>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(3)}>
                                            <button className={activeIndex === 3 ? "nav-link active" : "nav-link"}>My Skills</button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        <div className={activeIndex === 1 ? "tab-pane show active" : "tab-pane"}>
                                            <div className="developer-info-wrap">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <ul className="list-wrap">
                                                            <li>
                                                                <div className="icon">
                                                                    <img src={developerIcon01} alt="" />
                                                                </div>
                                                                <div className="content">
                                                                    <span>Name:</span>
                                                                    <p>Jams Robot</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <img src={developerIcon02} alt="" />
                                                                </div>
                                                                <div className="content">
                                                                    <span>Email:</span>
                                                                    <p>Jams Robot</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <img src={developerIcon03} alt="" />
                                                                </div>
                                                                <div className="content">
                                                                    <span>Language:</span>
                                                                    <p>Jams Robot</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <ul className="list-wrap">
                                                            <li>
                                                                <div className="icon">
                                                                    <img src={developerIcon04} alt="" />
                                                                </div>
                                                                <div className="content">
                                                                    <span>Phone No:</span>
                                                                    <p>8 (495) 989—20—11</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <img src={developerIcon05} alt="" />
                                                                </div>
                                                                <div className="content">
                                                                    <span>Address:</span>
                                                                    <p>Ranelagh Place, L3 5UL, England</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <img src={developerIcon06} alt="" />
                                                                </div>
                                                                <div className="content">
                                                                    <span>Nationality:</span>
                                                                    <p>English, Russian, Frisian</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex === 2 ? "tab-pane show active" : "tab-pane"}>
                                            <div className="developer-info-wrap">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <ul className="list-wrap">
                                                            <li>
                                                                <div className="icon">
                                                                    <img src={developerIcon01} alt="" />
                                                                </div>
                                                                <div className="content">
                                                                    <span>Name:</span>
                                                                    <p>Jams Robot</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <img src={developerIcon02} alt="" />
                                                                </div>
                                                                <div className="content">
                                                                    <span>Email:</span>
                                                                    <p>Jams Robot</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <img src={developerIcon03} alt="" />
                                                                </div>
                                                                <div className="content">
                                                                    <span>Language:</span>
                                                                    <p>Jams Robot</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <ul className="list-wrap">
                                                            <li>
                                                                <div className="icon">
                                                                    <img src={developerIcon04} alt="" />
                                                                </div>
                                                                <div className="content">
                                                                    <span>Phone No:</span>
                                                                    <p>8 (495) 989—20—11</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <img src={developerIcon05} alt="" />
                                                                </div>
                                                                <div className="content">
                                                                    <span>Address:</span>
                                                                    <p>Ranelagh Place, L3 5UL, England</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <img src={developerIcon06} alt="" />
                                                                </div>
                                                                <div className="content">
                                                                    <span>Nationality:</span>
                                                                    <p>English, Russian, Frisian</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex === 3 ? "tab-pane show active" : "tab-pane"}>
                                            <div className="developer-info-wrap">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <ul className="list-wrap">
                                                            <li>
                                                                <div className="icon">
                                                                    <img src={developerIcon01} alt="" />
                                                                </div>
                                                                <div className="content">
                                                                    <span>Name:</span>
                                                                    <p>Jams Robot</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <img src={developerIcon02} alt="" />
                                                                </div>
                                                                <div className="content">
                                                                    <span>Email:</span>
                                                                    <p>Jams Robot</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <img src={developerIcon03} alt="" />
                                                                </div>
                                                                <div className="content">
                                                                    <span>Language:</span>
                                                                    <p>Jams Robot</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <ul className="list-wrap">
                                                            <li>
                                                                <div className="icon">
                                                                    <img src={developerIcon04} alt="" />
                                                                </div>
                                                                <div className="content">
                                                                    <span>Phone No:</span>
                                                                    <p>8 (495) 989—20—11</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <img src={developerIcon05} alt="" />
                                                                </div>
                                                                <div className="content">
                                                                    <span>Address:</span>
                                                                    <p>Ranelagh Place, L3 5UL, England</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <img src={developerIcon06} alt="" />
                                                                </div>
                                                                <div className="content">
                                                                    <span>Nationality:</span>
                                                                    <p>English, Russian, Frisian</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* developr-area-end */}
                {/* tools-area */}
                <section className="tools-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-title title-style-two white-title text-center mb-50">
                            <span className="sub-title">My Tools</span>
                            <h2 className="title">What Tools I Use</h2>
                        </div>
                    </div>
                </div>
                <div className="tools-item-wrap px-24">
                    <div className="row justify-content-center">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                            <div className="tools-item">
                                <div className="tools-icon">
                                    <img src={PhotoshopIcon} alt="Photoshop" />
                                </div>
                                <div className="tools-content">
                                    <h3 className="title">Photoshop</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                            <div className="tools-item">
                                <div className="tools-icon">
                                    <img src={HTML5Icon} alt="HTML 5" />
                                </div>
                                <div className="tools-content">
                                    <h3 className="title">HTML 5</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                            <div className="tools-item">
                                <div className="tools-icon">
                                    <img src={BlenderIcon} alt="Blender" />
                                </div>
                                <div className="tools-content">
                                    <h3 className="title">Blender</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </section>
                {/* tools-area-end */}
                {/* faq-area */}
                <section className="faq-area px-24 pt-120">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="faq-img">
                            <img src={faqImg1} alt="FAQ Image 1" />
                            <img src={faqImg2} alt="FAQ Image 2" />
                        </div>
                        <div className="faq-content">
                            <div className="section-title title-style-two mb-20">
                                <h2 className="title">All Your Questions <br /> Are Here</h2>
                            </div>
                            <h3 className="title-two"> Knock Me Directly to Know More</h3>
                            <p>Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget imperdiet. Ac scelerisque nibh dolores consectetuer,</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="accordion faq-wrap" id="accordionExample">
                            <div className="accordion-item" onClick={() => handleToggle(1)}>
                                <h2 className="accordion-header" id="headingOne">
                                    <button className={isActive.key === 1 ? "accordion-button" : "accordion-button collapsed"}>
                                        What's the difference between Pro and Free?
                                    </button>
                                </h2>
                                <div id="collapseOne" className={isActive.key === 1 ? "accordion-collapse show" : "accordion-collapse collapse"}>
                                    <div className="accordion-body">
                                        <p>Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget imperdiet. Ac scelerisque nibh dolores consectetuer,</p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item" onClick={() => handleToggle(2)}>
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className={isActive.key === 2 ? "accordion-button" : "accordion-button collapsed"}>
                                        What's the difference between Pro and Free?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className={isActive.key === 2 ? "accordion-collapse show" : "accordion-collapse collapse"}>
                                    <div className="accordion-body">
                                        <p>Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget imperdiet. Ac scelerisque nibh dolores consectetuer,</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item" onClick={() => handleToggle(3)}>
                                <h2 className="accordion-header" id="headingThree">
                                    <button className={isActive.key === 3 ? "accordion-button" : "accordion-button collapsed"}>
                                        What's the difference between Pro and Free?
                                    </button>
                                </h2>
                                <div id="collapseThree" className={isActive.key === 3 ? "accordion-collapse show" : "accordion-collapse collapse"}>
                                    <div className="accordion-body">
                                        <p>Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget imperdiet. Ac scelerisque nibh dolores consectetuer,</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item" onClick={() => handleToggle(4)}>
                                <h2 className="accordion-header" id="headingFour">
                                    <button className={isActive.key === 4 ? "accordion-button" : "accordion-button collapsed"} type="button">
                                        What's the difference between Pro and Free?
                                    </button>
                                </h2>
                                <div id="collapseFour" className={isActive.key === 4 ? "accordion-collapse show" : "accordion-collapse collapse"}>
                                    <div className="accordion-body">
                                        <p>Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget imperdiet. Ac scelerisque nibh dolores consectetuer,</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="faq-shape-wrap">
                <img src={faqShape} alt="FAQ Shape" />
            </div>
                 </section>
                {/* faq-area-end */}
                {/* client-area */}
                <section className="client-area px-24 pt-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8">
                        <div className="section-title title-style-two text-center mb-55">
                            <span className="sub-title">My Clients</span>
                            <h2 className="title">I Work With Over 175+ Happy Clients</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                        </div>
                    </div>
                </div>
                <div className="row brand-active">
                    <div className="col-xl-2 col-sm-4">
                        <div className="brand-item">
                            <img src={brandImg1} alt="Brand 1" />
                        </div>
                    </div>
                    <div className="col-xl-2 col-sm-4">
                        <div className="brand-item">
                            <img src={brandImg2} alt="Brand 2" />
                        </div>
                    </div>
                    <div className="col-xl-2 col-sm-4">
                        <div className="brand-item">
                            <img src={brandImg3} alt="Brand 3" />
                        </div>
                    </div>
                    <div className="col-xl-2 col-sm-4">
                        <div className="brand-item">
                            <img src={brandImg4} alt="Brand 4" />
                        </div>
                    </div>
                    <div className="col-xl-2 col-sm-4">
                        <div className="brand-item">
                            <img src={brandImg5} alt="Brand 5" />
                        </div>
                    </div>
                    <div className="col-xl-2 col-sm-4">
                        <div className="brand-item">
                            <img src={brandImg6} alt="Brand 6" />
                        </div>
                    </div>
                </div>
            </div>
                </section>
                {/* client-area-end */}
                {/* project-area */}
                <section className="inner-projcet-area-two px-24 pt-140 pb-125">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-8">
                        <div className="section-title title-style-two mb-70">
                            <span className="sub-title">My Latest Project</span>
                            <h2 className="title">Our Best Professional <br /> UI/UX Design</h2>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="inner-project-nav" />
                    </div>
                </div>
            </div>
            <div className="container-fulid p-0">
                <div className="inner-projcet-wrap-two">
                    <Swiper {...swiperOptions} className="inner-project-active">
                        <SwiperSlide>
                            <div className="inner-project-item horizoital-item">
                                <div className="inner-project-thumb">
                                    <Link to="/project-details"><img src={innerTwoProject01} alt="" /></Link>
                                </div>
                                <div className="inner-project-content">
                                    <h3 className="title"><Link to="/project-details">Motion Design</Link></h3>
                                    <p>Lorem Ipsum is simply</p>
                                </div>
                            </div>
                            <div className="inner-project-item vertical-item">
                                <div className="inner-project-thumb">
                                    <Link to="/project-details"><img src={innerTwoProject02} alt="" /></Link>
                                </div>
                                <div className="inner-project-content">
                                    <h3 className="title"><Link to="/project-details">Motion Design</Link></h3>
                                    <p>Lorem Ipsum is simply</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="inner-project-item horizoital-item">
                                <div className="inner-project-thumb">
                                    <Link to="/project-details"><img src={innerTwoProject03} alt="" /></Link>
                                </div>
                                <div className="inner-project-content">
                                    <h3 className="title"><Link to="/project-details">Motion Design</Link></h3>
                                    <p>Lorem Ipsum is simply</p>
                                </div>
                            </div>
                            <div className="inner-project-item vertical-item">
                                <div className="inner-project-thumb">
                                    <Link to="/project-details"><img src={innerTwoProject04} alt="" /></Link>
                                </div>
                                <div className="inner-project-content">
                                    <h3 className="title"><Link to="/project-details">Motion Design</Link></h3>
                                    <p>Lorem Ipsum is simply</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="inner-project-item horizoital-item">
                                <div className="inner-project-thumb">
                                    <Link to="/project-details"><img src={innerTwoProject05} alt="" /></Link>
                                </div>
                                <div className="inner-project-content">
                                    <h3 className="title"><Link to="/project-details">Motion Design</Link></h3>
                                    <p>Lorem Ipsum is simply</p>
                                </div>
                            </div>
                            <div className="inner-project-item vertical-item">
                                <div className="inner-project-thumb">
                                    <Link to="/project-details"><img src={innerTwoProject06} alt="" /></Link>
                                </div>
                                <div className="inner-project-content">
                                    <h3 className="title"><Link to="/project-details">Motion Design</Link></h3>
                                    <p>Lorem Ipsum is simply</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="inner-project-item horizoital-item">
                                <div className="inner-project-thumb">
                                    <Link to="/project-details"><img src={innerTwoProject07} alt="" /></Link>
                                </div>
                                <div className="inner-project-content">
                                    <h3 className="title"><Link to="/project-details">Motion Design</Link></h3>
                                    <p>Lorem Ipsum is simply</p>
                                </div>
                            </div>
                            <div className="inner-project-item vertical-item">
                                <div className="inner-project-thumb">
                                    <Link to="/project-details"><img src={innerTwoProject08} alt="" /></Link>
                                </div>
                                <div className="inner-project-content">
                                    <h3 className="title"><Link to="/project-details">Motion Design</Link></h3>
                                    <p>Lorem Ipsum is simply</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="inner-project-item horizoital-item">
                                <div className="inner-project-thumb">
                                    <Link to="/project-details"><img src={innerTwoProject09} alt="" /></Link>
                                </div>
                                <div className="inner-project-content">
                                    <h3 className="title"><Link to="/project-details">Motion Design</Link></h3>
                                    <p>Lorem Ipsum is simply</p>
                                </div>
                            </div>
                            <div className="inner-project-item vertical-item">
                                <div className="inner-project-thumb">
                                    <Link to="/project-details"><img src={innerTwoProject10} alt="" /></Link>
                                </div>
                                <div className="inner-project-content">
                                    <h3 className="title"><Link to="/project-details">Motion Design</Link></h3>
                                    <p>Lorem Ipsum is simply</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        
                    </Swiper>
                </div>
            </div>
                </section>
                {/* project-area-end */}
                {/* testimonial-area */}
                <section className="testimonial-area-five px-24 pb-120">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-9">
                        <div className="testimonial-img">
                            <img src={testimonialImg} alt="Testimonial Image" />
                            <VideoPopup cls="play-btn" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="testimonial-content">
                            <div className="section-title title-style-two mb-50">
                                <span className="sub-title">Testimonial</span>
                                <h2 className="title">Would be Happy to Hear What <span>Clients</span> <span>Say’s</span> About Me</h2>
                            </div>
                            <div className="testimonial-item-five">
                                <div className="testimonial-info">
                                    <div className="thumb">
                                        <img src={testimonialAvatar} alt="Testimonial Avatar" />
                                    </div>
                                    <div className="content">
                                        <h2 className="title">James Botosh</h2>
                                        <p>Product Designer</p>
                                    </div>
                                </div>
                                <div className="testimonial-content-five">
                                    <p>“We seek to get involved early in the design phase so that we can manage the project more efficiently, provide effective building solutions”</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </section>
                {/* testimonial-area-end */}
                {/* blog-area */}
                <section className="blog-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-title text-center mb-50">
                            <span className="sub-title">My Blog</span>
                            <h2 className="title">News Updates</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-post-item">
                            <div className="blog-post-thumb">
                                <Link to="/blog-details"><img src={blogImg1} alt="" /></Link>
                            </div>
                            <div className="blog-post-content">
                                <Link to="/blog" className="tag">Branding</Link>
                                <h2 className="title"><Link to="/blog-details">How To Create JavaScript Vanilla Gantt Chart: Adding</Link></h2>
                                <div className="blog-meta">
                                    <ul className="list-wrap">
                                        <li className="avatar-img">
                                            <Link to="/blog"><img src={avatarImg1} alt="" /></Link>
                                        </li>
                                        <li>By <Link to="/blog">Ataur</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-post-item">
                            <div className="blog-post-thumb">
                                <Link to="/blog-details"><img src={blogImg2} alt="" /></Link>
                            </div>
                            <div className="blog-post-content">
                                <Link to="/blog" className="tag">Branding</Link>
                                <h2 className="title"><Link to="/blog-details">How To Create JavaScript Vanilla Gantt Chart: Adding</Link></h2>
                                <div className="blog-meta">
                                    <ul className="list-wrap">
                                        <li className="avatar-img">
                                            <Link to="/blog"><img src={avatarImg2} alt="" /></Link>
                                        </li>
                                        <li>By <Link to="/blog">Ataur</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-post-item">
                            <div className="blog-post-thumb">
                                <Link to="/blog-details"><img src={blogImg3} alt="" /></Link>
                            </div>
                            <div className="blog-post-content">
                                <Link to="/blog" className="tag">Branding</Link>
                                <h2 className="title"><Link to="/blog-details">How To Create JavaScript Vanilla Gantt Chart: Adding</Link></h2>
                                <div className="blog-meta">
                                    <ul className="list-wrap">
                                        <li className="avatar-img">
                                            <Link to="/blog"><img src={avatarImg3} alt="" /></Link>
                                        </li>
                                        <li>By <Link to="/blog">Ataur</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </section>
                {/* blog-area-end */}


            </Layout>
        </>
    )
}
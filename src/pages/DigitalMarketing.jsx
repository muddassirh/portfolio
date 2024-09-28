import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Layout from '../components/Layout/Layout';
import brandImg01 from '../components/assets/img/brand/h3_brand_img01.png';
import brandImg02 from '../components/assets/img/brand/h3_brand_img02.png';
import brandImg03 from '../components/assets/img/brand/h3_brand_img03.png';
import brandImg04 from '../components/assets/img/brand/h3_brand_img04.png';
import brandImg05 from '../components/assets/img/brand/h3_brand_img05.png';
import brandImg06 from '../components/assets/img/brand/h3_brand_img06.png';
import testimonialImg from '../components/assets/img/images/testimonial_img.jpg';
import PhotoshopIcon from '../components/assets/img/icon/tools_icon01.png';
import IllustratorIcon from '../components/assets/img/icon/tools_icon02.png';
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
import SketchIcon from '../components/assets/img/icon/tools_icon04.png';
import Newsletter1 from '../components/Newsletter1';
import Faqs from '../components/FaqsFullStack';
import PrintmediaTools from '../components/PrintmediaTools';
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


function DigitalMarketing() {
  return (
    <Layout breadcrumbTitle="Digital Marketing Services" breadcrumbCls=" breadcrumb-area-two pt-175">
          <section className="webdesign-area px-0 pt-10 md:pt-120">
               <div className="container-sm mx-auto mb-12">
                <div className="columns-1 justify-content-center ">
                    <div className="">
                        <div className="section-title title-style-two text-center mb-55">
                        <span className="sub-title">Digital Marketing</span>
                            <h2 className="text-[1.5rem] md:text-4xl">Tailored Marketing Approaches to Drive Business Growth</h2>
                            <p className='text-lg'>Genxsmedia is a premier digital marketing agency committed to empowering businesses to reach their full potential in the digital world. With a team of skilled professionals and a proven track record, we offer a comprehensive suite of digital marketing services tailored to meet your unique needs.</p>
                        </div>
                        <div className='flex justify-center gap-x-8'>
                        <Link to="/contact" className="btn">Contact Us Today<span /></Link>
                        </div>
                    </div>
                </div>
               </div>
              {/* brand-area */}
              <div className="brand-area px-24 pb-12">
            <div className="container">
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
               
                 <section className="webdesign-area-two px-4 md:px-24 pb-5 md:pb-120">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-9">
                        <div className="">
                            <img src={testimonialImg} className='rounded-full' alt="Testimonial Image" />
                          
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="">
                            <div className="flex flex-col gap-y-4 mb-2">
                                <span className="text-[#3482FF] text-lg uppercase">Digital Marketing Services</span>
                                <h2 className="text-[1.5rem] md:text-[2.5rem] font-light">Level Up Your <span className='text-[#3482FF] font-semibold'> Business Essential </span> Digital Marketing Strategies</h2>
                            </div>
                            <div className="w-16">
                                        <hr style={{ height: '2px', backgroundColor: '#000000', border: 'none', opacity: 1 }} />
                                        </div>
                            <div className='text-gray-600 font-light'>

                                <p>
                                Digital marketing is a form of marketing that utilizes digital channels to reach and engage customers. It encompasses a wide range of tactics, including search engine optimization (SEO), pay-per-click (PPC) advertising, social media

 marketing (SMM), content marketing, email marketing, and more. In today's interconnected world, digital marketing has become an essential component of any successful business strategy.
                                </p>       
                                <p>ssss</p>                                                      
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </section>

                {/* project-area */}
                <section className="px-5 md:px-24 pt-5 md:pt-140 pb-5 md:pb-125">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-5">
                        <div className="section-title title-style-two mb-70">
                            <span className="sub-title">Latest Project</span>
                            <h2 className="text-[1.5rem] md:text-4xl">Explore More Trending Design and Development Work</h2>
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
            
                <section className="">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="flex flex-col gap-y-4 justify-center items-center text-center mb-50">
                            <span className="text-[#3482FF] text-lg uppercase">The Print Studio - Where Design Dreams Are Made</span>
                            <h2 className="text-[1.5rem] md:text-[2.5rem] font-light"> <b className='font-semibold'>From Brainwave to Broadcast,</b> Effective Print Media Design Solutions</h2>
                            <div className="w-16">
                                        <hr style={{ height: '2px', backgroundColor: '#000000', border: 'none', opacity: 1 }} />
                                        </div>
                            <div className='px-3 md:px-24' >
                            At Genxsmedia Services, we believe that print design is more than just aesthetics; it's a strategic tool to leave a lasting impression on your audience. Our team of skilled designers combines creativity, technical expertise, and a client-centric approach to deliver exceptional print solutions that help you achieve your goals.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tools-item-wrap px-3 md:px-24">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="">
                            <div className="">
                                <div className="grid grid-cols-1 md:grid-cols-3">
                                    <img src={PhotoshopIcon} alt="Photoshop" />
                                    <div className=" col-span-2">
                                    <h3 className="text-[#3482FF] text-xl">Creative Vision</h3>
                                    <p >Our designers possess a unique ability to transform your brand's essence into visually captivating designs. With a passion for innovation and a keen eye for detail, we create print materials that are both visually stunning and strategically effective. We understand that each brand has its own distinct personality, and we strive to capture and communicate that essence through our designs.</p>
                                </div>
                                </div>

                            </div>
                        </div>
                        <div className="">
                            <div className="">
                            <div className="grid grid-cols-1 md:grid-cols-3">
                                    <img src={IllustratorIcon} alt="Illustrator" />
                                    <div className="col-span-2">
                                    <h3 className="text-[#3482FF] text-xl">Technical Proficiency</h3>
                                    <p>Our team is equipped with the latest design software and printing techniques, ensuring that your print materials are produced to the highest standards of quality. We stay up-to-date with industry trends and advancements to deliver cutting-edge designs that are both visually appealing and technically sound. From initial concept to final production, we oversee every step of the process to guarantee exceptional results.</p>
                                </div>
                                </div>

                            </div>
                        </div>                        
                        <div className="">
                            <div className="">
                            <div className="grid grid-cols-1 md:grid-cols-3">
                                    <img src={SketchIcon} alt="sketch" />
                                    <div className="col-span-2">
                                    <h3 className="text-[#3482FF] text-xl">Client-Centric Approach</h3>
                                    <p>We believe in building strong partnerships with our clients. We work closely with you to understand your goals, target audience, and brand message. By collaborating with you throughout the design process, we ensure that your print materials accurately reflect your vision and resonate with your desired audience. Your satisfaction is our top priority, and we are committed to providing personalized service that exceeds your expectations.</p>
                                </div>
                                </div>

                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className='flex flex-col gap-y-8 justify-center items-center text-center mb-50'>                    
                    <div className='flex justify-center gap-x-8'>
                        <Link to="/contact" className="btnblack">Collaborate With Us<span /></Link>
                        </div>
                    <div></div>
                </div>
            </div>
                </section>            
                <section className='py-10'>
                <PrintmediaTools/>
              </section>          
                <section className='py-10'>
                <Faqs/>
              </section>



            {/* <section className="py-12 bg-gray-100">
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="section-title text-center mb-16 flex flex-col items-center justify-center">
                    <span className="sub-title uppercase">All-Inclusive Solutions</span>
                    <h2 className="text-3xl font-normal">Our web design and development packages</h2>
                    <div className="w-16">
                        <hr style={{ height: '2px', backgroundColor: '#000000', border: 'none', opacity: 1 }} />
                    </div>
                    <div className='px-44'>
                        We've designed our packages to be one part of a complete brand solution, not just a standalone website.
                        That's why
                        <b className='font-semibold'> all of our web design packages require that you have previously engaged us</b>
                        for full branding services or <b className='font-semibold'> will be considering branding in addition to your new website.</b>
                    </div>
                    </div>
                    <div className='grid grid-cols-3 gap-x-6'>
                    <div className='flex flex-col items-center bg-white p-4 h-full justify-between'>
                        <div className="section-title text-center flex flex-col items-center justify-center gap-y-4">
                        <div className='flex flex-col items-center justify-center gap-y-3'>
                            <span className="text-blue-500 uppercase font-normal text-xl tracking-widest">Grow your brand</span>
                            <h2 className="text-[1.6rem] font-normal">Bespoke website</h2>
                            <div className='font-semibold'>Starting at $9,995+GST</div>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-y-3 mb-8'>
                            <div>Launch a stunning, <b>high-performing website</b> that amps up your brand and <b>fuels online growth.</b></div>
                            <div className='text-left'>
                            <ul>
                                <li className='flex items-center gap-x-3 p-2'><TaskAltOutlinedIcon className='text-blue-500'/> Kick-off call with a brand strategist to nail down your ambitions.</li>
                                <li className='flex items-center gap-x-3 p-2'><TaskAltOutlinedIcon className='text-blue-500'/> Clever wireframing and planning for a seamless site structure and user experience that rocks.</li>
                                <li className='flex items-center gap-x-3 p-2'><TaskAltOutlinedIcon className='text-blue-500'/> Built-in content management system for easy-peasy updates. No web designer required!</li>
                                <li className='flex items-center gap-x-3 p-2'><TaskAltOutlinedIcon className='text-blue-500'/> 6-8 static pages packed with top-notch professional copywriting.</li>
                                <li className='flex items-center gap-x-3 p-2'><TaskAltOutlinedIcon className='text-blue-500'/> Slick, mobile-friendly design on each page to captivate your audience no matter the device.</li>
                                <li className='flex items-center gap-x-3 p-2'><TaskAltOutlinedIcon className='text-blue-500'/> Custom development by local, Aussie tech wizards.</li>
                                <li className='flex items-center gap-x-3 p-2'><TaskAltOutlinedIcon className='text-blue-500'/> A handy contact form with email alerts for web enquiries.</li>
                                <li className='flex items-center gap-x-3 p-2'><TaskAltOutlinedIcon className='text-blue-500'/> Unlimited Stock photography to give your site the wow factor.</li>
                                <li className='flex items-center gap-x-3 p-2'><TaskAltOutlinedIcon className='text-blue-500'/> Foundational SEO groundwork to get Google's eyes on your site.</li>
                                <li className='flex items-center gap-x-3 p-2'><TaskAltOutlinedIcon className='text-blue-500'/> A rigorous 20-step quality check before we launch the site into orbit.</li>
                                <li className='flex items-center gap-x-3 p-2'><TaskAltOutlinedIcon className='text-blue-500'/> Bespoke tutorial videos so you can tweak your site like a pro down the track.</li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className='flex justify-center gap-x-8 mt-auto'>
                        <Link to="/" className="btn">GET STARTED <span /></Link>
                        </div>
                    </div>

                    <div className='flex flex-col items-center bg-white p-4 h-full justify-between'>
                        <div className="section-title text-center flex flex-col items-center justify-center gap-y-4">
                        <div className='flex flex-col items-center justify-center gap-y-3'>
                            <span className="text-blue-500 uppercase font-normal text-xl tracking-widest">Online Store</span>
                            <h2 className="text-[1.6rem] font-normal">eCommerce website</h2>
                            <div className='font-semibold'>Starting at $13,995+GST</div>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-y-3 mb-8'>
                            <div>
                            Launch a stunning, <b>high-performing eCommerce website</b> that amps up your brand and <b>sell your products online.</b>
                            <br/><br/>
                            This solution has <b>all of the inclusions from the Website Package,</b> plus:
                            </div>
                            <div className='text-left'>
                            <ul>
                                <li className='flex items-center gap-x-3 p-2'><TaskAltOutlinedIcon className='text-blue-500'/> Built-in scalable content, product and order management system using WordPress & WooCommerce for easy-peasy updates. No web designer required!</li>
                                <li className='flex items-center gap-x-3 p-2'><TaskAltOutlinedIcon className='text-blue-500'/> Enable secure online payments by linking up with external payment providers like Stripe or PayPal.</li>
                                <li className='flex items-center gap-x-3 p-2'><TaskAltOutlinedIcon className='text-blue-500'/> Launch-ready setup for your first 5 products, complete with polished product descriptions (and we're on standby to create more for a little extra).</li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className='flex justify-center gap-x-8 mt-auto'>
                        <Link to="/" className="btn">GET STARTED <span /></Link>
                        </div>
                    </div>

                    <div className='flex flex-col items-center bg-white p-4 h-full justify-between'>
                        <div className="section-title text-center flex flex-col items-center justify-center gap-y-4">
                        <div className='flex flex-col items-center justify-center gap-y-3'>
                            <span className="text-blue-500 uppercase font-normal text-xl tracking-widest">Great for Startups</span>
                            <h2 className="text-[1.6rem] font-normal">One-page website</h2>
                            <div className='font-semibold'>Starting at $13,995+GST</div>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-y-3 mb-8'>
                            <div>
                            An ideal, budget-friendly option for businesses or organisations just starting their journey.
                            <br/><br/>
                            This bundle offers <b>all the perks of the Website Package</b> but streamlined into a single, expansive landing page instead of a multi-page site.
                            </div>
                            <div className='text-left'>
                            <ul>
                                <li className='flex items-center gap-x-3 p-2'><TaskAltOutlinedIcon className='text-blue-500'/> 
                                We'll write <b>up to 1,500 words of expertly crafted content</b> in this package, making sure your single page communicates everything you want it to.
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className='flex justify-center gap-x-8 mt-auto'>
                        <Link to="/" className="btn">GET STARTED <span /></Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section> */}

            <Newsletter1/>
                </section>
                
    </Layout>
  )
}

export default DigitalMarketing
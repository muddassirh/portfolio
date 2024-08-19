import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import brandImg01 from '../components/assets/img/brand/h3_brand_img01.png';
import brandImg02 from '../components/assets/img/brand/h3_brand_img02.png';
import brandImg03 from '../components/assets/img/brand/h3_brand_img03.png';
import brandImg04 from '../components/assets/img/brand/h3_brand_img04.png';
import brandImg05 from '../components/assets/img/brand/h3_brand_img05.png';
import brandImg06 from '../components/assets/img/brand/h3_brand_img06.png';
import testimonialImg from '../components/assets/img/images/testimonial_img.jpg';
import PhotoshopIcon from '../components/assets/img/icon/tools_icon01.png';
import IllustratorIcon from '../components/assets/img/icon/tools_icon02.png';
import FigmaIcon from '../components/assets/img/icon/tools_icon03.png';
import SketchIcon from '../components/assets/img/icon/tools_icon04.png';
import PremiereProIcon from '../components/assets/img/icon/tools_icon05.png';
import AfterEffectsIcon from '../components/assets/img/icon/tools_icon06.png';
import HTML5Icon from '../components/assets/img/icon/tools_icon07.png';
import BlenderIcon from '../components/assets/img/icon/tools_icon08.png';
import AboutIMG from "../components/assets/img/images/about_img.png";
import icon1 from "../components/assets/img/icon/about_icon01.png"
import icon2 from "../components/assets/img/icon/about_icon02.png"


function WebDesign() {
  return (
    <Layout breadcrumbTitle="Web Design" footerStyle={2} breadcrumbCls=" breadcrumb-area-two pt-175">
          <section className="webdesign-area px-0 pt-120">
            <div className="container mb-12">
                <div className="row justify-content-center ">
                    <div className="col-xl-6 col-lg-8 ">
                        <div className="section-title title-style-two text-center mb-55">
                        <span className="sub-title">Web Design Australia</span>
                            <h2 className="text-4xl">We craft high-quality websites that unleash your brand's potential</h2>
                            <p className='text-lg'>Our brand and marketing experts are obsessed with designing stunning online experiences for our clients and their customers. 
                                If you value having a website that doesn't just look great but also grows your business you're in the right place!</p>
                        </div>
                        <div className='flex justify-center gap-x-8'>
                        <Link to="/" className="btn">Meet Our Team <span /></Link>
                        <Link to="/" className="btnblack">View All Project <span /></Link>
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
                {/* brand-area-end */}
                 {/* testimonial-area */}
                 <section className="webdesign-area-two px-24 pb-120">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-9">
                        <div className="">
                            <img src={testimonialImg} className='rounded-full' alt="Testimonial Image" />
                            {/* <VideoPopup cls="play-btn" /> */}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="">
                            <div className="flex flex-col gap-y-4 mb-2">
                                <span className="text-[#3482FF] text-lg uppercase">The importance of website design</span>
                                <h2 className="text-[2.5rem] font-light">Your website is one of your <span className='text-[#3482FF] font-semibold'> most valuable brand assets</span></h2>
                            </div>
                            <div className="w-16">
                                        <hr style={{ height: '2px', backgroundColor: '#000000', border: 'none', opacity: 1 }} />
                                        </div>
                            <div className='text-gray-600 font-light'>
                                <div >According to a recent <span className='text-[#3482FF] font-semibold underline'>survey</span>  from Top Design Firms,
                                <b className='font-bold'> 50% of consumers believe that a website is important to a company's overall brand. </b> 
                                They also found that 31% of people think that an engaging user experience is a top priority for a website.</div>
                                <br/>
                                <div >This data is certainly backed up in our real world experience <b className='font-bold'> working with hundreds of businesses and organisations</b> on their websites. 
                                We've seen first-hand that the way your website looks and functions will definitely <b className='font-bold'> impact the overall success </b> of your brand.</div>
                                <div>
                                <br/>
                                It's important to take this seriously, regardless of what industry you're in. 
                                <b className='font-bold'> But don't worry, we're here to help! </b>
                                We'll work with you to make sure your website not only looks stunning but also provides your visitors with a positive brand experience
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </section>
                {/* testimonial-area-end */}
                                {/* tools-area */}
                                <section className="">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="flex flex-col gap-y-4 justify-center items-center text-center mb-50">
                            <span className="text-[#3482FF] text-lg uppercase">Your website is an asset</span>
                            <h2 className="text-[2.5rem] font-light">Your website will tick all the boxes and drive <b className='font-semibold'>real brand growth</b></h2>
                            <div className="w-16">
                                        <hr style={{ height: '2px', backgroundColor: '#000000', border: 'none', opacity: 1 }} />
                                        </div>
                            <div className='' >
                            Websites are super important for any business, brand or organisation. It's the first place where people will find your business online, 
                            so you want to make sure it's a great experience for the end user and that it effectively communicates with your potential customers.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tools-item-wrap px-24">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="">
                            <div className="">
                                <div className="grid grid-cols-3">
                                    <img src={PhotoshopIcon} alt="Photoshop" />
                                    <div className=" col-span-2">
                                    <h3 className="text-[#3482FF] text-xl">Strategically designed for a phenomenal user experience</h3>
                                    <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                                </div>

                            </div>
                        </div>
                        <div className="">
                            <div className="">
                            <div className="grid grid-cols-3">
                                    <img src={IllustratorIcon} alt="Illustrator" />
                                    <div className="col-span-2">
                                    <h3 className="text-[#3482FF] text-xl">Custom-built by local Australian developers using the latest tech</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                                </div>

                            </div>
                        </div>
                        <div className="">
                            <div className="">
                            <div className="grid grid-cols-3">
                                    <img src={FigmaIcon} alt="Figma" />
                                    <div className="col-span-2">
                                    <h3 className="text-[#3482FF] text-xl">Professionally written content to convert prospects into customers</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                                </div>

                            </div>
                        </div>
                        <div className="">
                            <div className="">
                            <div className="grid grid-cols-3">
                                    <img src={SketchIcon} alt="sketch" />
                                    <div className="col-span-2">
                                    <h3 className="text-[#3482FF] text-xl">Updates? You can make changes yourself (with zero experience)</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                                </div>

                            </div>
                        </div>
                        <div className="">
                            <div className="">
                            <div className="grid grid-cols-3">
                                    <img src={PremiereProIcon} alt="PremiereProIcon" />
                                    <div className="col-span-2">
                                    <h3 className="text-[#3482FF] text-xl">SEO fundamentals are covered to help your site get discovered</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                                </div>

                            </div>
                        </div>
                        <div className="">
                            <div className="">
                            <div className="grid grid-cols-3">
                                    <img src={AfterEffectsIcon} alt="AfterEffectsIcon" />
                                    <div className="col-span-2">
                                    <h3 className="text-[#3482FF] text-xl">Mobile-friendly and fully functional across all browsers and devices</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center gap-y-8 mt-12'>
                    <div>Get a stunning website that doesn't just look great but actually grows your brand!</div>
                    <div className='flex justify-center gap-x-8'>
                        <Link to="/" className="btn">Meet Our Team <span /></Link>
                        <Link to="/" className="btnblack">View All Project <span /></Link>
                        </div>
                    <div></div>
                </div>
            </div>
                </section>
                {/* tools-area-end */}
                <section className="about-area">
                <div className="container custom-container">
                    <div className="about-inner">
                        <div className="grid grid-cols-2">
                            <div className=" order-0 order-lg-2">
                                <div className="about-img text-end">
                                    <img src={AboutIMG} alt="" />
                                </div>
                            </div>
                            <div className="">
                                <div className="about-content">
                                    <div className="section-title mb-25">
                                        <span className="sub-title-white">Web design case study</span>
                                        <h2 className="text-4xl">Before & After: From a slow, dated and ugly website to a professional, modern and mobile-friendly experience</h2>
                                    </div>
                                    <div className="w-16">
                                        <hr style={{ height: '2px', backgroundColor: '#000000', border: 'none', opacity: 1 }} />
                                        </div>


                                    <p>4cRisk has been around since 2006, and although their workplace health solutions company has gone leaps and bounds since then, unfortunately, 
                                        their branding and website were still stuck in the past!. </p>
                            
                                   <p>For this reason, they came to Red Kite for a full rebrand including a professional new website to better suit the dynamic, leading consultancy that they are.</p>
                                   
                                   <p>You can check out the transformation for yourself.</p>
                                    <div className="about-content-bottom">
                                        <div className="read-more-btn">
                                            <Link to="/about-us" className="btn">ENQUIRE ABOUT WEB DESIGN <span /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                </section>
    </Layout>
  )
}

export default WebDesign
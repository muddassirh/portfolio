import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import CounterUp from '../components/elements/CounterUp';

import servicesDetailsImg from '../components/assets/img/images/services_details_img.png';
import servicesDetailsShape from '../components/assets/img/images/services_details_shape.png';
import companyImg01 from '../components/assets/img/images/company_img01.png';
import companyImg02 from '../components/assets/img/images/company_img02.png';
import checkIcon from '../components/assets/img/icon/check_icon.png';
import companyShape from '../components/assets/img/images/company_shape.png';
import innerTwoServicesIcon01 from '../components/assets/img/icon/inner_two_services_icon01.png';
import innerTwoServicesIcon02 from '../components/assets/img/icon/inner_two_services_icon02.png';
import innerTwoServicesIcon03 from '../components/assets/img/icon/inner_two_services_icon03.png';
import innerTwoServicesIcon04 from '../components/assets/img/icon/inner_two_services_icon04.png';
import innerProject01 from '../components/assets/img/project/inner_project01.jpg';
import innerProject02 from '../components/assets/img/project/inner_project02.jpg';
import innerProject03 from '../components/assets/img/project/inner_project03.jpg';
import innerProject04 from '../components/assets/img/project/inner_project04.jpg';
import innerProject05 from '../components/assets/img/project/inner_project05.jpg';
import innerProject06 from '../components/assets/img/project/inner_project06.jpg';
import innerProject07 from '../components/assets/img/project/inner_project07.jpg';
import newsletterBgShape from '../components/assets/img/images/newsletter_bg_shape.png';
import newsletterShape01 from '../components/assets/img/images/newsletter_shape01.png';
import newsletterShape02 from '../components/assets/img/images/newsletter_shape02.png';
import newsletterShape03 from '../components/assets/img/images/newsletter_shape03.png';
import newsletterShape04 from '../components/assets/img/images/newsletter_shape04.png';
import newsletterShape05 from '../components/assets/img/images/newsletter_shape05.png';
import newsletterShape06 from '../components/assets/img/images/newsletter_shape06.png';
import Newsletter1 from '../components/Newsletter1';

export default function ServiceDetails() {
    return (
        <Layout breadcrumbTitle="Web Design" breadcrumbCls="breadcrumb-area-two pt-175">
            {/* services-details-area */}
            <div className="services-details-area px-24">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                            <div className="services-details-img flex justify-center">
                                <img src={servicesDetailsImg} alt="" />
                            </div>
                            <div className="services-details-content text-center">
                                <p>Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget imperdiet. Ac scelerisque nibh dolores consectetuer, nulla aptent est pede. Scelerisque euismod varius mi, congue eget sed vestibulum, ornare cras sed nec.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="services-details-shape">
                    <img src={servicesDetailsShape} alt="" />
                </div>
            </div>
            {/* services-details-area-end */}
            {/* counter-area */}
            <section className="counter-area-four pt-100 pb-120">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="counter-item-wrap-four">
                                <ul className="list-wrap">
                                    <li>
                                        <div className="counter-item-four">
                                            <h2 className="count"><CounterUp className="odometer" count={15} />K+</h2>
                                            <p>Entries in <span>Accunting</span></p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="counter-item-four">
                                            <h2 className="count"><CounterUp className="odometer" count={120} />+</h2>
                                            <p>International <span>Programs</span></p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="counter-item-four">
                                            <h2 className="count"><CounterUp className="odometer" count={46} />+</h2>
                                            <p>Countries in<span>The World</span></p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="counter-item-four">
                                            <h2 className="count"><CounterUp className="odometer" count={17} />+</h2>
                                            <p>Awards <span>Programs</span></p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* counter-area-end */}
            {/* company-area */}
            <section className="company-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-9">
                            <div className="section-title white-title text-center mb-65">
                                <span className="sub-title">Our Company</span>
                                <h2 className="title text-white">We Create Creative Designs For Every Web Page</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="company-img flex justify-end">
                                <img src={companyImg01} alt="" />
                                <img src={companyImg02} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="company-content">
                                <h2 className="title">All Your Questions Are Here</h2>
                                <div className="company-list">
                                    <ul className="list-wrap">
                                        <li>
                                            <img src={checkIcon} alt="" />
                                            Seo quotes to inspire your campaign
                                        </li>
                                        <li>
                                            <img src={checkIcon} alt="" />
                                            Much easier to double your business
                                        </li>
                                        <li>
                                            <img src={checkIcon} alt="" />
                                            Free page speed insights tool to find out exactly
                                        </li>
                                        <li>
                                            <img src={checkIcon} alt="" />
                                            Seo quotes to inspire your campaign
                                        </li>
                                    </ul>
                                </div>
                                <Link to="/about-me" className="btn">Discover More <span /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="company-shape-wrap">
                    <img src={companyShape} alt="" />
                </div>
            </section>
            {/* company-area-end */}
            {/* services-area */}
            <section className="inner-services-area-two px-24 pt-110 pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-8">
                            <div className="section-title text-center mb-65">
                                <h2 className="title">We Create Creative Designs For Every Web Page</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                            </div>
                        </div>
                    </div>
                    <div className="inner-services-wrap-two">
                        <div className="row justify-content-center">
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-10">
                                <div className="services-item-five">
                                    <div className="services-icon-five">
                                        <img src={innerTwoServicesIcon01} alt="" />
                                    </div>
                                    <div className="services-content-five">
                                        <h2 className="title"><Link to="/services-details">User Interaction <span>Design</span></Link></h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-10">
                                <div className="services-item-five">
                                    <div className="services-icon-five">
                                        <img src={innerTwoServicesIcon02} alt="" />
                                    </div>
                                    <div className="services-content-five">
                                        <h2 className="title"><Link to="/services-details">Production <span>Design</span></Link></h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-10">
                                <div className="services-item-five">
                                    <div className="services-icon-five">
                                        <img src={innerTwoServicesIcon03} alt="" />
                                    </div>
                                    <div className="services-content-five">
                                        <h2 className="title"><Link to="/services-details">Branding <span>Design</span></Link></h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-10">
                                <div className="services-item-five">
                                    <div className="services-icon-five">
                                        <img src={innerTwoServicesIcon04} alt="" />
                                    </div>
                                    <div className="services-content-five">
                                        <h2 className="title"><Link to="/services-details">Visual <span>Design</span></Link></h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* services-area-end */}
            {/* project-area */}
            <section className="inner-project-area pt-100 pb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                        <div className="section-title text-center mb-65">
                                    <h2 className="title">Case Studies</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                                </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-4 col-lg-4 col-sm-6">
                            <div className="inner-project-item">
                                <div className="inner-project-thumb">
                                    <Link to="/project-details"><img src={innerProject01} alt="" /></Link>
                                </div>
                                <div className="inner-project-content">
                                    <span>Photography</span>
                                    <h2 className="title"><Link to="/project-details">Product <br /> Photography</Link></h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-sm-6">
                            <div className="inner-project-item">
                                <div className="inner-project-thumb">
                                    <Link to="/project-details"><img src={innerProject02} alt="" /></Link>
                                </div>
                                <div className="inner-project-content">
                                    <span>Photography</span>
                                    <h2 className="title"><Link to="/project-details">Product <br /> Photography</Link></h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-sm-6">
                            <div className="inner-project-item">
                                <div className="inner-project-thumb">
                                    <Link to="/project-details"><img src={innerProject03} alt="" /></Link>
                                </div>
                                <div className="inner-project-content">
                                    <span>Photography</span>
                                    <h2 className="title"><Link to="/project-details">Product <br /> Photography</Link></h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-4 col-sm-6">
                            <div className="inner-project-item">
                                <div className="inner-project-thumb">
                                    <Link to="/project-details"><img src={innerProject04} alt="" /></Link>
                                </div>
                                <div className="inner-project-content">
                                    <span>Photography</span>
                                    <h2 className="title"><Link to="/project-details">Product <br /> Photography</Link></h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-sm-6">
                            <div className="inner-project-item">
                                <div className="inner-project-thumb">
                                    <Link to="/project-details"><img src={innerProject05} alt="" /></Link>
                                </div>
                                <div className="inner-project-content">
                                    <span>Photography</span>
                                    <h2 className="title"><Link to="/project-details">Product <br /> Photography</Link></h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-4 col-sm-6">
                            <div className="inner-project-item">
                                <div className="inner-project-thumb">
                                    <Link to="/project-details"><img src={innerProject06} alt="" /></Link>
                                </div>
                                <div className="inner-project-content">
                                    <span>Photography</span>
                                    <h2 className="title"><Link to="/project-details">Product <br /> Photography</Link></h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-4 col-sm-6">
                            <div className="inner-project-item">
                                <div className="inner-project-thumb">
                                    <Link to="/project-details"><img src={innerProject07} alt="" /></Link>
                                </div>
                                <div className="inner-project-content">
                                    <span>Photography</span>
                                    <h2 className="title"><Link to="/project-details">Product <br /> Photography</Link></h2>
                                </div>
                            </div>
                        </div>
                        <div className="more-btn text-center mt-45">
                                <Link href="/about-me" className="btn">Load More <span /></Link>
                            </div>
                    </div>
                </div>
            </section>
            {/* project-area-end */}
            {/* newsletter-area */}
            <Newsletter1/>
            {/* newsletter-area-end */}
        </Layout>
    );
}

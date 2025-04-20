import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Layout from "../components/Layout/Layout";
import brandImg01 from "../components/assets/img/brand/nextjs.png";
import brandImg02 from "../components/assets/img/brand/angular.png";
import brandImg03 from "../components/assets/img/brand/reactjs.png";
import brandImg04 from "../components/assets/img/brand/nuxtjs.png";
import brandImg05 from "../components/assets/img/brand/vuejs.png";
import FullStackDev from "../components/assets/img/images/full-stack-1.webp";
import DeepIndustry from "../components/assets/img/icon/deep-industry.webp";
import Customized from "../components/assets/img/icon/customized.webp";
import Results from "../components/assets/img/icon/result-driven.webp";
import icon1 from "../components/assets/img/step1-01.svg";
import icon2 from "../components/assets/img/step2-01.svg";
import icon3 from "../components/assets/img/step3-01.svg";
import icon4 from "../components/assets/img/step4-01.svg";
import icon5 from "../components/assets/img/step5-01.svg";
import icon6 from "../components/assets/img/step6-01.svg";
import Newsletter1 from "../components/Newsletter1";
import Faqs from "../components/FaqsFullStack";
import LatestProjects from "../components/LatestProjects";
import { info } from "../data/info";
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
  },
};
function FullStackDesignDevelopment() {
  return (
    <Layout
      breadcrumbTitle="Fullstack Design and Development"
      breadcrumbCls=" breadcrumb-area-two pt-175"
    >
      <section className="webdesign-area px-0 pt-10 md:pt-120">
        <div className="container-sm mx-auto mb-12">
          <div className="columns-1 justify-content-center ">
            <div className="">
              <div className="section-title title-style-two text-center mb-55">
                <span className="sub-title">
                  Front-End Development Services
                </span>
                <h2 className="text-[1.5rem] md:text-4xl">
                  Elevate your brand with our expert full-stack design and
                  development
                </h2>
                <p className="text-lg">
                  Fullstack design and development is essential for businesses
                  that want to create a robust and engaging digital presence. It
                  involves combining design and development skills to build
                  comprehensive websites or applications that offer a seamless
                  user experience.
                </p>
              </div>
              <div className="flex justify-center gap-x-8">
                <Link to="/contact" className="btn">
                  Contact Us Today
                  <span />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* brand-area */}
        <div className="brand-area px-24 pb-12">
          <div className="container">
            <div className="row brand-active justify-content-center">
              <div className="col-xl-2 col-sm-4 my-3">
                <div className="brand-item-two">
                  <img src={brandImg01} alt="" />
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
                  <img src={brandImg02} alt="" />
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
                  <img
                    src={FullStackDev}
                    className=""
                    alt="Fullstack Design and Development"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="">
                  <div className="flex flex-col gap-y-4 mb-2">
                    <span className="text-[#3482FF] text-lg uppercase">
                      Why You Need Fullstack Design and Development
                    </span>
                    <h2 className="text-[1.5rem] md:text-[2.5rem] font-light">
                      A strong full-stack foundation is the cornerstone{" "}
                      <span className="text-[#3482FF] font-semibold">
                        {" "}
                        of a successful digital presence.
                      </span>
                    </h2>
                  </div>
                  <div className="w-16">
                    <hr
                      style={{
                        height: "2px",
                        backgroundColor: "#000000",
                        border: "none",
                        opacity: 1,
                      }}
                    />
                  </div>
                  <div className="text-gray-600 font-light">
                    <p>
                      <b className="font-bold">
                        Fullstack design and development
                      </b>{" "}
                      is crucial for businesses seeking a comprehensive digital
                      presence. By combining design and development expertise,
                      fullstack teams can create cohesive, visually appealing,
                      and functional websites or applications. This integrated
                      approach ensures a unified vision, streamlines the
                      development process, and minimizes communication gaps.
                      Moreover, fullstack teams can adapt to evolving
                      technologies and business needs, providing flexibility and
                      scalability.
                    </p>
                    <p>
                      At <b className="font-bold">Genxsmedia Services,</b> we
                      excel in fullstack design and development, leveraging our
                      15+ years of experience and expertise in creative design,
                      front-end development, branding, and AI solutions. Our
                      team's deep understanding of the industry, combined with
                      our commitment to delivering exceptional results, sets us
                      apart. We specialize in crafting tailored digital products
                      that align with your brand identity and business
                      objectives, ensuring a seamless user experience. With our
                      innovative approach and focus on measurable outcomes,
                      Genxsmedia is your ideal partner for fullstack design and
                      development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* project-area 
        <LatestProjects title="Latest Projects" description="Explore More Trending Design and Development Work" projects = {info.projects}/>
        
       project-area-end */}

        <section className="">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="flex flex-col gap-y-4 justify-center items-center text-center mb-50">
                  <span className="text-[#3482FF] text-lg uppercase">
                    Your website is the foundation of your digital brand.
                  </span>
                  <h2 className="text-[1.5rem] md:text-[2.5rem] font-light">
                    {" "}
                    <b className="font-semibold">
                      Full-stack design and development
                    </b>{" "}
                    ensures it's built to last.
                  </h2>
                  <div className="w-16">
                    <hr
                      style={{
                        height: "2px",
                        backgroundColor: "#000000",
                        border: "none",
                        opacity: 1,
                      }}
                    />
                  </div>
                  <div className="px-3 md:px-24">
                    At Genxsmedia Services, we offer a comprehensive fullstack
                    design and development service that combines our expertise
                    in creative design, front-end development, branding, and AI
                    solutions. Our team of skilled professionals is dedicated to
                    crafting exceptional digital products that not only look
                    stunning but also deliver exceptional user experiences.
                  </div>
                </div>
              </div>
            </div>
            <div className="tools-item-wrap px-3 md:px-24">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="">
                  <div className="">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      <img src={DeepIndustry} alt="Photoshop" />
                      <div className=" col-span-2">
                        <h3 className="text-[#3482FF] text-xl">
                          Deep Industry Knowledge
                        </h3>
                        <p>
                          Our 15+ years of experience in the digital industry
                          allow us to understand the latest trends and
                          technologies.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      <img src={Customized} alt="Illustrator" />
                      <div className="col-span-2">
                        <h3 className="text-[#3482FF] text-xl">
                          Customized Solutions
                        </h3>
                        <p>
                          We tailor our approach to meet your specific business
                          objectives and create digital products that align with
                          your brand identity.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      <img src={Results} alt="sketch" />
                      <div className="col-span-2">
                        <h3 className="text-[#3482FF] text-xl">
                          Results-Driven Focus
                        </h3>
                        <p>
                          We're passionate about helping you achieve your
                          digital goals, whether that's attracting more
                          visitors, increasing engagement, or driving
                          conversions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-8 justify-center items-center text-center mb-50">
              <div className="col-lg-6">
                With Genxsmedia as your partner, you can be confident that your
                digital product will be designed and developed to the highest
                standards, meeting your business goals and exceeding your
                expectations.
              </div>
              <div className="flex justify-center gap-x-8">
                <Link to="/contact" className="btnblack">
                  Collaborate With Us
                  <span />
                </Link>
              </div>
              <div></div>
            </div>
          </div>
        </section>

        <section className="about-area py-16">
          <div className="container servieces-container">
            <div className="bg-amber-400 py-8 md:py-20 px-8 md:px-20 rounded-[20px] md:rounded-[50px]">
              <div className="grid grid-cols-1 gap-4">
                <div className="">
                  <div className="about-content">
                    <div className="section-title mb-25">
                      <span className="sub-title-white">
                        Steps Involved in Fullstack Design and Development
                      </span>
                      <h2 className="text-[1.2rem] md:text-3xl">
                        Discover the convenience of full-stack expertise at
                        Genxsmedia. Our team delivers well-defined strategies
                        for each stack, driving success for your business.
                      </h2>
                    </div>
                    <div className="w-16">
                      <hr
                        style={{
                          height: "2px",
                          backgroundColor: "#000000",
                          border: "none",
                          opacity: 1,
                        }}
                      />
                    </div>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        <img src={icon1} alt="sketch" />
                        <div className="col-span-2">
                          <h3 className="text-[#fff] text-xl">
                            Discovery and Planning
                          </h3>
                          <p>
                            We begin by conducting a thorough analysis of your
                            business goals, target audience, and existing
                            digital presence. This helps us understand your
                            specific needs and develop a comprehensive project
                            plan.
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        <img src={icon2} alt="sketch" />
                        <div className="col-span-2">
                          <h3 className="text-[#fff] text-xl">
                            Design and Wireframing
                          </h3>
                          <p>
                            Our designers create visually appealing and
                            user-friendly designs that reflect your brand
                            identity. We also create wireframes to outline the
                            structure and layout of your website or application.
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        <img src={icon3} alt="sketch" />
                        <div className="col-span-2">
                          <h3 className="text-[#fff] text-xl">
                            Front/Backend Development
                          </h3>
                          <p>
                            In this SDLC phase, our software development experts
                            harness the power of chosen languages, frameworks,
                            and platforms to craft customized digital solutions,
                            adhering to industry standards and agile
                            methodologies.
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        <img src={icon4} alt="sketch" />
                        <div className="col-span-2">
                          <h3 className="text-[#fff] text-xl">
                            Testing and Quality Assurance
                          </h3>
                          <p>
                            We conduct rigorous testing to ensure that your
                            digital product functions flawlessly and meets all
                            quality standards. This includes compatibility
                            testing, performance testing, and security testing.
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        <img src={icon5} alt="sketch" />
                        <div className="col-span-2">
                          <h3 className="text-[#fff] text-xl">
                            Deployment and Launch
                          </h3>
                          <p>
                            Once your website or application is ready, we deploy
                            it to a hosting environment and launch it to the
                            world.
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        <img src={icon6} alt="sketch" />
                        <div className="col-span-2">
                          <h3 className="text-[#fff] text-xl">
                            Ongoing Maintenance and Support
                          </h3>
                          <p>
                            We provide ongoing maintenance and support to keep
                            your digital product up-to-date and running
                            smoothly. This includes updates, security patches,
                            and troubleshooting.
                          </p>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-[1.2rem] md:text-2xl">
                      Choose Genxsmedia as your trusted partner for fullstack
                      design and development. Let's create a digital solution
                      that drives your business forward.
                    </h3>
                    <div className="about-content-bottom">
                      <div className="read-more-btn">
                        <Link to="/about-us" className="btn">
                          Get a Free Quote
                          <span />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10">
          <Faqs />
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

        <Newsletter1 />
      </section>
    </Layout>
  );
}

export default FullStackDesignDevelopment;

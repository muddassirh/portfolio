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
import newsletterBgShape from '../components/assets/img/images/newsletter_bg_shape.png'; // Adjust the path according to your file structure
import newsletterShape01 from '../components/assets/img/images/newsletter_shape01.png';
import newsletterShape02 from '../components/assets/img/images/newsletter_shape02.png';
import newsletterShape03 from '../components/assets/img/images/newsletter_shape03.png';
import newsletterShape04 from '../components/assets/img/images/newsletter_shape04.png';
import newsletterShape05 from '../components/assets/img/images/newsletter_shape05.png';
import newsletterShape06 from '../components/assets/img/images/newsletter_shape06.png';
import Newsletter1 from '../components/Newsletter1';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';


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
               
                 <section className="webdesign-area-two px-24 pb-120">
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
                              
                                <section className="py-16">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-title title-style-two white-title text-center flex flex-col items-center justify-center mb-8">
                            <span className="sub-title">WHAT MAKES A SUCCESSFUL WEBSITE?</span>
                            <h2 className="text-[2rem] font-light">There are websites that look good and there are websites that get results. <b className='font-semibold'>Ours do both!</b></h2>
                            <div className="w-16">
                                        <hr style={{ height: '2px', backgroundColor: '#000000', border: 'none', opacity: 1 }} />
                                        </div>
                        </div>
                    </div>
                </div>
                <div className=" px-24">
                    <div className="grid grid-cols-3 gap-6">
                        <div className="">
                            <div className="flex flex-col text-center items-center justify-center">
                                <div className="tools-icon">
                                    <img src={PhotoshopIcon} alt="Photoshop" />
                                </div>
                                <div className="flex flex-col gap-y-4">
                                    <h3 className="text-3xl font-light">Your website will be <b className='font-semibold'> professionally written </b></h3>
                                    <p className='font-semibold'>Most web designers completely underestimate the power of words and consider your copywriting as a low-impact aspect of your website. 
                                    But not us.</p>
                                    <p>One of the most common reasons a visitor abandons a website is because they’re confused by the messaging on the site. Crazy, right?</p>
                                    <p>That’s why we dedicate a large portion of your website investment towards highly experienced and professional content development.</p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex flex-col text-center items-center justify-center">
                                <div className="tools-icon">
                                    <img src={IllustratorIcon} alt="Illustrator" />
                                </div>
                                <div className="flex flex-col gap-y-4">
                                    <h3 className="text-3xl font-light">Your website will be  <b className='font-semibold'> user-friendly </b></h3>
                                    <p className='font-semibold'>If visitors struggle to use your website they’ll get frustrated and that experience will forever be associated with your brand. It’s that simple.</p>
                                    <p>Our team are passionate about building amazing brand experiences for your audience. 
                                    If your website is simple to use, fast to load and does exactly what your visitors expect, you will succeed online.</p>
                                    <p>Great usability underpins all successful websites and ultimately helps you land more customers.</p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex flex-col text-center items-center justify-center">
                                <div className="tools-icon">
                                    <img src={FigmaIcon} alt="Figma" />
                                </div>
                                <div className="flex flex-col gap-y-4">
                                    <h3 className="text-3xl font-light">Your website will be <b className='font-semibold'>strategically planned</b> </h3>
                                    <p className='font-semibold'>
                                    <i>“If you fail to plan, you are planning to fail.”</i> Many web design agencies will jump straight into the design of your website as soon as you give the green light.
                                    </p>
                                    <p>
                                    For us, we don’t design a single element of your website until we’ve mapped out the key actions we want the user to take, 
                                    the navigation structure, and performed strategic wireframing of the key landing pages to ensure we have considered everything before we begin the creative process.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex flex-col text-center items-center justify-center">
                                <div className="tools-icon">
                                    <img src={SketchIcon} alt="SketchIcon" />
                                </div>
                                <div className="flex flex-col gap-y-4">
                                    <h3 className="text-3xl font-light">Your website will be <b className='font-semibold'>made for your market</b> </h3>
                                    <p className='font-semibold'>
                                    The goal of most web design companies is to make you happy at all costs. They’ll create whatever you ask for in order to finish the website and get paid.
                                    </p>
                                    <p>
                                    For better or worse, we’re not like that. We’ll always be upfront and honest if we don’t think an idea is going to work for your audience, 
                                    even if it means the project takes longer to finish.
                                    </p>
                                    <p>We always design for your target market, not you. </p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex flex-col text-center items-center justify-center">
                                <div className="tools-icon">
                                    <img src={PremiereProIcon} alt="PremiereProIcon" />
                                </div>
                                <div className="flex flex-col gap-y-4">
                                    <h3 className="text-3xl font-light">Your website will be <b className='font-semibold'>designed to sell</b> </h3>
                                    <p className='font-semibold'>
                                    It’s easy to design a pretty website, any web designer or web design company you hire can do that.
                                    </p>
                                    <p>
                                    What makes a good-looking website become a 24/7 selling machine is whether the web designers actually understand the real needs and desires of your potential customers. That’s where we come in.
                                    </p>
                                    <p>We carefully create websites that connect with your visitors emotionally and guide them to take action.</p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex flex-col text-center items-center justify-center">
                                <div className="tools-icon">
                                    <img src={AfterEffectsIcon} alt="AfterEffectsIcon" />
                                </div>
                                <div className="flex flex-col gap-y-4">
                                    <h3 className="text-3xl font-light">Your website will be <b className='font-semibold'>built to last</b> </h3>
                                    <div>
                                    <p className='font-semibold'>
                                    A car can look gorgeous on the outside, but if the engine hasn’t been built to a high standard, 
                                    it’s not going to be long before you have to take it back to the mechanic or even buy a new car altogether.
                                    </p>
                                    <p>
                                    It’s no different with your website. You, unfortunately, wouldn’t know if a development company has cut corners without being able to look “under the hood”.
                                    </p>
                                    <p>With Red Kite, you can be assured that your beautiful website will also be backed by a well-tuned engine.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </section>
            
                <section className="newsletter-area px-10 pt-110 pb-120 ">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title text-center mb-16">
                                <span className="sub-title text-white uppercase">Choosing the right web design company</span>
                                <h2 className="text-3xl font-semibold">Need something quick and cheap?</h2>
                            </div>
                            <div className='text-center flex flex-col gap-y-4'>
                                <p className='text-white text-xl'>
                                We want to be upfront and honest: we won't be the cheapest or fastest option for building your website because we don't like to cut corners. 
                                We believe that a successful website requires high-quality strategy, copywriting, design, development, and marketing expertise.
                                </p>
                                <p className='text-white text-xl'>
                                So, if you're looking for a team to build a website that'll actually grow your brand, we'd love to work with you! However, 
                                if you're not ready for this level of commitment, we completely understand but we may not be the best fit for you at this time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='newsletter-area-bg'></div>
                <div className="newsletter-shape-wrap">
                    <img src={newsletterBgShape} alt="" className="bg-shape" />
                    <img src={newsletterShape01} alt="" className="shape-one" />
                    <img src={newsletterShape02} alt="" className="shape-two" />
                    <img src={newsletterShape03} alt="" className="shape-three" />
                    <img src={newsletterShape04} alt="" className="shape-four" />
                    <img src={newsletterShape05} alt="" className="shape-five" />
                    <img src={newsletterShape06} alt="" className="shape-six" />
                </div>
            </section>



<section className="py-12 bg-gray-100">
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
</section>

            <Newsletter1/>
                </section>
                
    </Layout>
  )
}

export default WebDesign
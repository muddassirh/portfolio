import React, {useState, useEffect} from 'react';

import faqImg1 from '../components/assets/img/images/faq_img.png';
import faqImg2 from '../components/assets/img/images/faq_img02.png';
import faqShape from '../components/assets/img/images/faq_shape.png';
export default function Faqs() {
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
 <section className="faq-area px-10 md:px-24 py-10 md:py-20">
            <div className="xl:max-w-screen-xl mx-auto">
                <div className="flex flex-col md:flex-row justify-center items-center pb-2 md:pb-0">  
                    <div className='basis-full md:basis-1/2'>
                        <div className="faq-img">
                            <img src={faqImg1} alt="FAQ Image 1" />
                            <img src={faqImg2} alt="FAQ Image 2" />
                        </div>
                    </div>
                    <div className='basis-full md:basis-1/2'>
                        <div className="faq-content">
                            <div className="section-title title-style-two ,d:mb-20">
                                <h2 className="title">All Your Questions <br /> Are Here</h2>
                            </div>                           
                        </div>   
                    </div>                   
                                         
                </div>
                <div className='md:px-4'>
                <div className="accordion faq-wrap" id="accordionExample">
                            <div className="accordion-item" onClick={() => handleToggle(1)}>
                                <h2 className="accordion-header" id="headingOne">
                                    <button className={isActive.key === 1 ? "accordion-button" : "accordion-button collapsed"}>
                                    What is full-stack design and development?
                                    </button>
                                </h2>
                                <div id="collapseOne" className={isActive.key === 1 ? "accordion-collapse show" : "accordion-collapse collapse"}>
                                    <div className="accordion-body">
                                        <p>Full-stack design and development is a comprehensive approach that combines both design and development expertise to create complete digital solutions. It involves designing the user interface (UI) and user experience (UX), as well as developing the backend infrastructure and programming logic. This integrated approach ensures a seamless and cohesive digital product.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item" onClick={() => handleToggle(2)}>
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className={isActive.key === 2 ? "accordion-button" : "accordion-button collapsed"}>
                                    Why should I choose full-stack design and development for my project?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className={isActive.key === 2 ? "accordion-collapse show" : "accordion-collapse collapse"}>
                                    <div className="accordion-body">
                                        <p>Full-stack design and development offers several advantages, including:</p>
                                        <ul>
                                            <li><b>Unified vision:</b> A single team responsible for both design and development ensures a cohesive and aligned product.</li>
                                            <li><b>Efficiency:</b> Combining design and development expertise can streamline the development process and reduce time-to-market.</li>
                                            <li><b>Cost-effectiveness:</b> Having a full-stack team can often be more cost-effective compared to hiring separate design and development teams.</li>
                                            <li><b>Flexibility:</b> Full-stack developers can adapt to changing requirements and scale the project as needed.</li>
                                            
                                        </ul>
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
            <div className="faq-shape-wrap">
                <img src={faqShape} alt="FAQ Shape" />
            </div>
                 </section>
        </>
    );
}

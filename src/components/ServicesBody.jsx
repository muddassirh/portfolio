import React from 'react';
import design from '../images/design-01.svg';
import mobile from '../images/mobile-01.svg';
import front from '../images/front-back-01.svg';
import web from '../images/web-01.svg';

const ServicesBody = () => {
    return (
        <div className='max-w-[1080px] px-0 py-6 mx-auto flex justify-between items-center'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <div className='services-area px-5 pb-4 basis-full md:basis-1/2'>
                    <img className='w-[120px] mb-3' src={design} alt='Design'/>
                    <h3 className='font-light text-[20px] md:text-[25px] text-[#1073ff]'>Design</h3>
                    <ul className='text-zinc-500'>
                        <li>Identity Design / Logo Design</li>
                        <li>UX/UI Design</li>
                        <li>Social Media Kit Design</li>
                        <li>UX Audit &amp; Consultancy</li>
                        <li>Print Media Design</li>
                        <li>Frontend Development</li>
                    </ul>
                </div>
                <div className='services-area px-5 pb-4 basis-full md:basis-1/2'>
                    <img className='w-[120px] mb-3' src={web} alt='Design'/>
                    <h3 className='font-light text-[20px] md:text-[25px] text-[#1073ff]'>WebDesign</h3>
                    <ul className='text-zinc-500'>
                        <li>UI/UX Design</li>
                        <li>WordPress</li>
                        <li>Responsive, Retina Ready Websites</li>
                        <li>Landing Pages</li>
                        <li>ECommerce Websites</li>
                    </ul>
                </div>
                <div className='services-area px-5 pb-4 basis-full md:basis-1/2'>
                    <img className='w-[120px] mb-3' src={front} alt='Design'/>
                    <h3 className='font-light text-[20px] md:text-[25px] text-[#1073ff]'>Frontend/Backend Design & Development</h3>
                    <ul className='text-zinc-500'>
                        <li>React</li>
                        <li>Angular</li>
                        <li>Vue.JS</li>
                        <li>Node.JS</li>
                    </ul>
                </div>
                <div className='services-area px-5 pb-4 basis-full md:basis-1/2'>
                    <img className='w-[120px] mb-3' src={mobile} alt='Design'/>
                    <h3 className='font-light text-[20px] md:text-[25px] text-[#1073ff]'>Mobile Application Design & Development</h3>
                    <ul className='text-zinc-500'>
                        <li>UI/UX App Design</li>
                        <li>iOS Application Design</li>
                        <li>Android Application Design</li>
                        <li>Hybrid Mobile Application Design</li>
                    </ul>
                </div>
            </div>
        </div>
        
    );
}

export default ServicesBody;

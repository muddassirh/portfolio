import React from 'react';
import logofooter from '../images/genxsmedia-01-01.svg'
import GetTouch from './GetTouch';
const Footer = () => {
    return (
       
        <div>
            <GetTouch/>
        <div className='max-w-[1180px] px-5 md:px-8 py-5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 bg-white z-10 mt-[-20px] items-center'>
             

            <div className='footer-info flex flex-col'>
                <div><img className='w-[150px] md:w-[200px]' src={logofooter} alt="Genxsmedia"/></div>  
                <p className='text-[14px]'>The company is owned by Mudd a renowned and top-rated UX/UI designer. Providing complete solutions to all your problem. If you have projects get a free quote today.</p>
            </div>
            <div className='text-center md:text-right text-[14px]'>
                <p>Copyright Genxsmedia 2023. All Rights Reserved.</p>
            </div>
        </div>
        </div>
    );
} 

export default Footer;

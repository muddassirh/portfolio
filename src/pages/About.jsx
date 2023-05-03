import React from 'react';
import {info} from "../data/info";
const About = () => {
    
    return (
        <div className='max-w-[1040px] mx-auto text-bold py-[50px] px-5'>
          <h2 className='font-normal uppercase text-center leading-[28px] md:leading-[55px] text-[30px] md:text-[60px]'>{info.position}</h2>  
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10'>
            <div className='my-img'>
                <img src={info.selfPortrait} alt="Muddassir Hassan"/>
            </div>
            <div><p className='font-light leading-[35px] text-[25px]'>{info.bio}</p></div>
          </div>
          
        </div>
    );
}

export default About;

import React from 'react';
import {info} from "../data/info";
const About = () => {
    
    return (
      <>
      <div className='banner-back w-full text-white py-28'>
      <h1 className="text-[50px] md:text-[100px] text-center mb-5 font-extrabold">ABOUT ME</h1>
      <p className="text-[30px] md:text-[60px] text-center px-2">
        {info.position}
      </p>
      </div>
              <div className='max-w-[1040px] mx-auto text-bold py-[50px] px-5'>
        
        {/* <h2 className='font-normal uppercase text-center leading-[28px] md:leading-[55px] text-[30px] md:text-[60px]'>{info.position}</h2>   */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10'>
          <div className='my-img'>
              <img src={info.selfPortrait} alt="Muddassir Hassan"/>
          </div>
          <div className='py-28'><p className='font-light leading-[35px] text-[25px]'>{info.bio}</p></div>
        </div>
        
      </div>
      </>
    );
}

export default About;

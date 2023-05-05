import React from 'react';
import {info} from "../data/info";

const Portfolio = () => {
    return (
        <div className='max-w-[1540px] mx-auto text-bold py-[50px] px-5'>
          <h2 className='font-normal uppercase text-center leading-[28px] md:leading-[55px] text-[30px] md:text-[60px]'>{info.portfoliohead}</h2>  
          <ul className='mt-10 inline-block'>
          {info.portfolio.map((project, index) => (
            <li className='inline-block mx-2 mb-2' key={index}>
               <div><img src={project.image} alt={project.title}/></div> 
               <div className='mt-[-20px] relative z-10 px-[30px] py-[15px] text-center bg-white w-[85%] md:w-[80%] mx-auto flex flex-col place-content-center justify-center'>
                    <span className='text-[30px] leading-[28px] uppercase'>{project.title}</span>
                    <a href={project.live} target="_blank" className='mt-5 w-max mx-auto px-4 py-2 bg-blue-600 hover:bg-black text-white'>Visit Website</a>
               </div>
            </li>
            ))}
          </ul>
          
        </div>
    );
}

export default Portfolio;

import React from 'react';
import { Gallery } from "react-grid-gallery";
const HomePortfolio = () => {
    const images = [
        {
           src:"https://genxsmedia.com/wp-content/uploads/2022/06/chrono-main-480x356.jpg",
           width: 280,
           height: 174,           
           caption: "Crown Chrono",
        },
        {
           src: "https://genxsmedia.com/wp-content/uploads/2022/06/eyes-beechwood-main-480x356.jpg",
           width: 320,
           height: 212,           
           alt: "Boats (Jeshu John - designerspics.com)",
        },
      
        {
           src: "https://genxsmedia.com/wp-content/uploads/2022/06/dash-first-480x356.jpg",
           width: 320,
           height: 212,
        },
        {
            src: "https://genxsmedia.com/wp-content/uploads/2022/06/visual-tab-apps1.jpg",
            width: 400,
            height: 212,
         },
     ];
    return (
        <div className='w-full bg-gray-100 py-10'>
            <div className="max-w-[1080px] px-5 md:px-0 py-6 mx-auto">
                <h3 className='font-light text-[20px] md:text-[25px] tracking-wide text-slate-600'>More than 850+ Projects Completed and Still Counting</h3>
                <h4 className='font-light text-[20px] md:text-[25px] tracking-wide text-[#1073ff]'>Projects Gallery</h4>
                <button className='mt-4 bg-[#1073ff] uppercase text-white  hover:bg-black hover:text-white shadow-lg py-4 px-10'>View All Projects</button>
            </div>
            <div className="portfolio">
            <Gallery images={images} rowHeight={380} />
            </div>
        </div>
    );
}

export default HomePortfolio;

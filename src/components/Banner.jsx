import React from 'react';

const Banner = () => {
    return (
        <div className='w-100 py-[20px] banner-back'>
            <div className='max-w-[1040px] mx-auto text-center text-bold py-[100px] text-white'>
                <h2 className='text-[20px] md:text-[40px] md:leading-[50px] px-2.5 md:px-5'>LET'S DESIGN A DIGITAL EXPERIENCE TOGETHER</h2>
                <h3 className='text-[14px] md:text-[18px] px-2.5 md:px-5'>Committed to delivering high-end design services to any industry from small to large scale.</h3>
                <button className='rounded-md bg-white text-gray-900 mt-4 px-6 py-4  hover:bg-black hover:text-white shadow-lg'>Get a Quick Quote</button>
            </div>
        </div>
    );
}

export default Banner;

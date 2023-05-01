import React from 'react';

const Testimonials = () => {
    return (
        <div className='max-w-[1080px] px-5 md:px-0 py-16 mx-auto text-center'>
            <h2 className='leading-[30px] md:leading-8 text-[25px] md:text-[40px]'>Some <span className='text-[#1073ff]'>Love</span> Words From My Clients</h2>
            <div className='max-w-[1080px] px-5 md:px-5 py-5 mx-auto'>
                <p className='font-light tracking-wide text-[16px] md:text-[23px] text-[#606060] italic'>Excellent vendor who works hard to complete the project on time and on budget. No complaints at all and would use again in the future.</p>
                <span className='pt-3 text-[18px] text-[#b8b8b8]'>DG45 - From Guru.com</span>
            </div>
        </div>
    );
}

export default Testimonials;

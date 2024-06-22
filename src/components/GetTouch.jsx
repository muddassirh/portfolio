import React from 'react';

const GetTouch = () => {
    return (
        <div className='w-full bg-[#0d74e2] py-14'>
            <div className='max-w-[1040px] text-center md:text-start py-[70px] text-white px-5 md:px-10'>
                <h2 className='text-[20px] md:text-[100px] font-black md:leading-[100px]'>Get In Touch With Us</h2>
                <h3 className='text-[14px] whitespace-nowrap md:text-[28px] font-thin'>Let’s Start Your Next Project</h3>
                <form className="">
                    <div className="flex my-5 gap-x-4">
                    <div class="relative z-0 w-1/2 group">
                        <input 
                            type="text" 
                            name="floating_first_name" 
                            id="floating_first_name" 
                            className="block p-6 w-full text-2xl text-gray-900 bg-[#FAFAFA] border-2 border-gray-300 rounded-lg dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                       <label htmlForfor="floating_first_name" 
                            className="peer-focus:font-medium absolute text-2xl text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-6 left-6 z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First Name *</label>
                </div>
                <div class="relative z-0 w-1/2 group">
                        <input 
                            type="text" 
                            name="floating_first_name" 
                            id="floating_first_name" 
                            className="block p-6 w-full text-2xl text-gray-900 bg-[#FAFAFA] border-2 border-gray-300 rounded-lg dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlForfor="floating_first_name" 
                            className="peer-focus:font-medium absolute text-2xl text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-6 left-6 z-10 origin-[0]  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email *</label>
                </div>
                    </div>
                </form>
                <button className='rounded-md bg-white text-black text-2xl font-black px-16 py-5  hover:bg-blue-500 hover:text-white shadow-lg'>NEXT</button>
            </div>
        </div>
    );
}

export default GetTouch;

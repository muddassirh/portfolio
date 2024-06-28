import React, { useState, useEffect } from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';

const Banner = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
        phone: '',
        company: '',
        website: '',
        description: '',
        hearAboutUs: ''
    });
    const [errors, setErrors] = useState({});
    const [inputStyle, setInputStyle] = useState({
        width: '100%',
        padding: '2.5rem',
        fontSize: '1.5rem',
        borderRadius: '0.5rem',
        borderColor: '#d1d5db',
        backgroundColor: '#FAFAFA',
        color: '#000'
    });

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setInputStyle((prevStyle) => ({
                    ...prevStyle,
                    padding: '2.5rem',
                    fontSize: '1.5rem'
                }));
            } else {
                setInputStyle((prevStyle) => ({
                    ...prevStyle,
                    padding: '2rem 2.5rem',
                    fontSize: '1.2rem'
                }));
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Set initial style

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setErrors({
            ...errors,
            [name]: ''
        });
    };

    const handlePhoneChange = (value) => {
        setFormData({
            ...formData,
            phone: value
        });
        setErrors({
            ...errors,
            phone: ''
        });
    };

    const validateStep1 = () => {
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = 'First Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        return newErrors;
    };

    const nextStep = (e) => {
        e.preventDefault();
        let validationErrors = {};
        if (step === 1) {
            validationErrors = validateStep1();
        }
        if (Object.keys(validationErrors).length === 0) {
            setStep(step + 1);
        } else {
            setErrors(validationErrors);
        }
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    return (
        <div className='w-100 banner-back'>
            <div className='max-w-[1040px] text-center md:text-start py-[80px] text-white px-5 md:px-10'>
                <h2 className='text-[35px] md:text-[100px] font-black md:leading-[100px]'>LET'S DESIGN A DIGITAL EXPERIENCE TOGETHER!</h2>
                <h3 className='text-[14px] md:whitespace-nowrap md:text-[28px] font-thin'>Committed to delivering high-end design services to any industry from small to large scale.</h3>
                <form onSubmit={nextStep} className="">
                    {step === 1 && (
                        <div className="flex flex-col md:flex-row gap-y-4 my-5 gap-x-4">
                            <div className="relative z-0 w-full group">
                                <input 
                                    type="text" 
                                    name="firstName" 
                                    id="firstName" 
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="block p-4 md:p-6 w-full text-xl md:text-2xl text-gray-900 bg-[#FAFAFA] border-2 border-gray-300 rounded-lg dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="firstName" 
                                    className="peer-focus:font-medium absolute text-xl md:text-2xl text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-4 md:-translate-y-6 scale-75 top-4 md:top-6 left-4 md:left-6 z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 md:peer-focus:-translate-y-6">First Name *</label>
                                {errors.firstName && <span className="text-red-500">{errors.firstName}</span>}
                            </div>
                            <div className="relative z-0 w-full group">
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="block p-4 md:p-6 w-full text-xl md:text-2xl text-gray-900 bg-[#FAFAFA] border-2 border-gray-300 rounded-lg dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="email" 
                                     className="peer-focus:font-medium absolute text-xl md:text-2xl text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-4 md:-translate-y-6 scale-75 top-4 md:top-6 left-4 md:left-6 z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 md:peer-focus:-translate-y-6">Email *</label>
                                {errors.email && <span className="text-red-500">{errors.email}</span>}
                            </div>
                        </div>
                    )}
                    {step === 2 && (
                        <div className="flex flex-col md:flex-row gap-y-4 my-5 gap-x-4">
                        <div className="relative z-0 w-full group">
                                <PhoneInput
                                    country={'us'}
                                    value={formData.phone}
                                    onChange={handlePhoneChange}
                                    id="number"
                                    inputStyle={inputStyle}
                                    containerStyle={{
                                        width: '100%',
                                        color: '#000'
                                    }}
                                    inputProps={{
                                        name: 'phone',
                                        required: true,
                                    }}
                                />
                                <label htmlFor="number" 
                                     className="peer-focus:font-medium absolute text-xl md:text-2xl text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-4 md:-translate-y-6 scale-75 top-4 md:top-6 left-12 md:left-12 z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 md:peer-focus:-translate-y-6">Phone Number *</label>
                                {errors.phone && <span className="text-red-500">{errors.phone}</span>}
                            </div>
                            <div className="relative z-0 w-full group">
                                <input 
                                    type="text" 
                                    name="company" 
                                    id="company" 
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="block p-4 md:p-6 w-full text-xl md:text-2xl text-gray-900 bg-[#FAFAFA] border-2 border-gray-300 rounded-lg dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="company" 
                                      className="peer-focus:font-medium absolute text-xl md:text-2xl text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-4 md:-translate-y-6 scale-75 top-4 md:top-6 left-4 md:left-6 z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 md:peer-focus:-translate-y-6">Company Name *</label>
                            </div>
                        </div>
                    )}
                    {step === 3 && (
                        <div className="relative z-0 w-full group">
                            <input 
                                type="text" 
                                name="website" 
                                id="website" 
                                value={formData.website}
                                onChange={handleChange}
                                className="block p-4 md:p-6 w-full text-xl md:text-2xl text-gray-900 bg-[#FAFAFA] border-2 border-gray-300 rounded-lg dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="website" 
                                 className="peer-focus:font-medium absolute text-xl md:text-2xl text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-4 md:-translate-y-6 scale-75 top-4 md:top-6 left-4 md:left-6 z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 md:peer-focus:-translate-y-6">Website *</label>
                        </div>
                    )}
                    {step === 4 && (
                        <div className="relative z-0 w-full group">
                            <textarea 
                                name="description" 
                                id="description" 
                                value={formData.description}
                                onChange={handleChange}
                                className="block p-4 md:p-6 w-full text-xl md:text-2xl text-gray-900 bg-[#FAFAFA] border-2 border-gray-300 rounded-lg dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="description" 
                                className="peer-focus:font-medium absolute text-xl md:text-2xl text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-4 md:-translate-y-6 scale-75 top-4 md:top-6 left-4 md:left-6 z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 md:peer-focus:-translate-y-6">Tell us how can we help you *</label>
                        </div>
                    )}
                    {step === 5 && (
                        <div className="relative z-0 w-full group">
                            <select
                                name="hearAboutUs"
                                id="hearAboutUs"
                                value={formData.hearAboutUs}
                                onChange={handleChange}
                                 className="block p-4 md:p-6 w-full text-xl md:text-2xl text-gray-900 bg-[#FAFAFA] border-2 border-gray-300 rounded-lg dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  required >
                                <option value="" disabled>Select an option</option>
                                <option value="Google">Google</option>
                                <option value="Social Media">Social Media</option>
                                <option value="Friend">Friend</option>
                                <option value="Other">Other</option>
                            </select>
                            <label htmlFor="hearAboutUs" 
                                 className="peer-focus:font-medium absolute text-xl md:text-2xl text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-4 md:-translate-y-6 scale-75 top-4 md:top-6 left-4 md:left-6 z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 md:peer-focus:-translate-y-6">How did you hear about us? *</label>
                        </div>
                    )}
                    <div className={`flex  ${ step > 1 && 'justify-center'} md:justify-start gap-x-4 mt-5`}>
                        {step > 1 && (
                            <button type="button" onClick={prevStep} className='rounded-md bg-white text-black text-xl md:text-2xl font-black px-10 md:px-16 py-3 md:py-5 hover:bg-blue-500 hover:text-white shadow-lg'>BACK</button>
                        )}
                        <button type="submit" className='rounded-md bg-white text-black text-xl md:text-2xl font-black px-10 py-3 md:px-16 md:py-5 hover:bg-blue-500 hover:text-white shadow-lg'>{step === 5 ? 'SUBMIT' : 'NEXT'}</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Banner;

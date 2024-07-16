import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Link } from "react-router-dom";
import bgimg from "./assets/img/banner/banner_img.png";
import bannerbg from "./assets/img/banner/banner_bg.jpg";
import img1 from "./assets/img/banner/banner_shape01.png";
import img2 from "./assets/img/banner/banner_shape02.png";
import img3 from "./assets/img/banner/banner_shape03.png";
import img4 from "./assets/img/banner/banner_shape04.png";
import img5 from "./assets/img/banner/banner_shape05.png";
import img6 from "./assets/img/banner/banner_shape06.png";
import img7 from "./assets/img/banner/banner_shape07.png";

const Banner1 = () => {
    const [step, setStep] = useState(1);
    const [submitted, setSubmitted] =  useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
        phone: '',
        company: '',
        website: '',
        description: '',
        hearAboutUs: ''
    });
    const formRef = useRef();

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
        handleResize(); 

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

    const sendEmail = (e) => {
        e.preventDefault();

        

        emailjs.sendForm(
            "service_xs9j53r",
            "template_tu150qc",
            formRef.current,
            "SsMpfjuxC-v27-HjT"
        ).then(
            (result) => {
                console.log(result.text);
                console.log("message sent");
                setSubmitted(true)
                toast.success("Email Sent")
            },
            (error) => {
                console.log(error.text);
            }
        );
    };

    return (
        <section className="banner-area banner-bg" style={{ backgroundImage: `url(${bannerbg})` }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="banner-img wow fadeInLeft" data-wow-delay=".4s">
                            <img src={bgimg} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="banner-content">
                            <span className="sub-title wow fadeInUp" data-wow-delay=".2s">Amazing <strong>Starts</strong> Here</span>
                            <h2 className="title wow fadeInUp" data-wow-delay=".4s">Designing the Future, One Pixel at a Time</h2>
                            {!submitted ? 
                                <form ref={formRef} onSubmit={step === 5 ? sendEmail : nextStep} className="">
                            {step === 1 && (
                        <div className="flex flex-col md:flex-row gap-y-4 mb-4 gap-x-4">
                            <div className="relative z-0 w-full group">
                                <input 
                                    type="text" 
                                    name="firstName" 
                                    id="firstName" 
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="block p-4 md:p-6 w-full text-md md:text-lg text-gray-900 bg-[#FAFAFA] border-2 border-gray-300 rounded-lg dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
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
                                    className="block p-4 md:p-6 w-full text-md md:text-lg text-gray-900 bg-[#FAFAFA] border-2 border-gray-300 rounded-lg dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="email" 
                                     className="peer-focus:font-medium absolute text-xl md:text-2xl text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-4 md:-translate-y-6 scale-75 top-4 md:top-6 left-4 md:left-6 z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 md:peer-focus:-translate-y-6">Email *</label>
                                {errors.email && <span className="text-red-500">{errors.email}</span>}
                            </div>
                        </div>
                    )}
                    {step === 2 && (
                        <div className="flex flex-col md:flex-row gap-y-4 mb-4 gap-x-4">
                        <div className="relative z-10 w-full group">
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
                                     className="peer-focus:font-medium absolute text-md md:text-lg text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-4 md:-translate-y-6 scale-75 top-4 md:top-6 left-12 md:left-12 z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 md:peer-focus:-translate-y-6">Phone Number *</label>
                                {errors.phone && <span className="text-red-500">{errors.phone}</span>}
                            </div>
                            <div className="relative z-0 w-full group">
                                <input 
                                    type="text" 
                                    name="company" 
                                    id="company" 
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="block p-4 md:p-6 w-full text-md md:text-lg text-gray-900 bg-[#FAFAFA] border-2 border-gray-300 rounded-lg dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="company" 
                                    className="peer-focus:font-medium absolute text-xl md:text-2xl text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-4 md:-translate-y-6 scale-75 top-4 md:top-6 left-4 md:left-6 z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 md:peer-focus:-translate-y-6">Company *</label>
                                {errors.company && <span className="text-red-500">{errors.company}</span>}
                            </div>
                        </div>
                    )}
                    {step === 3 && (
                        <div className="flex flex-col md:flex-row gap-y-4 mb-4 gap-x-4">
                            <div className="relative z-0 w-full group">
                                <input 
                                    type="url" 
                                    name="website" 
                                    id="website" 
                                    value={formData.website}
                                    onChange={handleChange}
                                    className="block p-4 md:p-6 w-full text-md md:text-lg text-gray-900 bg-[#FAFAFA] border-2 border-gray-300 rounded-lg dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="website" 
                                    className="peer-focus:font-medium absolute text-xl md:text-2xl text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-4 md:-translate-y-6 scale-75 top-4 md:top-6 left-4 md:left-6 z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 md:peer-focus:-translate-y-6">Website *</label>
                                {errors.website && <span className="text-red-500">{errors.website}</span>}
                            </div>
                        </div>
                    )}
                    {step === 4 && (
                        <div className="relative z-0 w-full group">
                            <textarea 
                                name="description" 
                                id="description" 
                                value={formData.description}
                                onChange={handleChange}
                                className="block p-4 md:p-6 w-full text-md md:text-lg text-gray-900 bg-[#FAFAFA] border-2 border-gray-300 rounded-lg dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="description" 
                                className="peer-focus:font-medium absolute text-xl md:text-2xl text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-4 md:-translate-y-6 scale-75 top-4 md:top-6 left-4 md:left-6 z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 md:peer-focus:-translate-y-6">Description *</label>
                            {errors.description && <span className="text-red-500">{errors.description}</span>}
                        </div>
                    )}
                    {step === 5 && (
                        <div className="relative z-0 w-full group">
                            <select 
                                name="hearAboutUs" 
                                id="hearAboutUs" 
                                value={formData.hearAboutUs}
                                onChange={handleChange}
                                className="block p-4 md:p-6 w-full text-md md:text-lg text-gray-900 bg-[#FAFAFA] border-2 border-gray-300 rounded-lg dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required>
                                <option value="" disabled>Select an option</option>
                                <option value="Google">Google</option>
                                <option value="Social Media">Social Media</option>
                                <option value="Friend">Friend</option>
                                <option value="Other">Other</option>
                            </select>
                            <label htmlFor="hearAboutUs" 
                                className="peer-focus:font-medium absolute text-xl md:text-2xl text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-4 md:-translate-y-6 scale-75 top-4 md:top-6 left-4 md:left-6 z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 md:peer-focus:-translate-y-6">How did you hear about us? *</label>
                            {errors.hearAboutUs && <span className="text-red-500">{errors.hearAboutUs}</span>}
                        </div>
                    )}
                    <div className="mt-4">
                        {step > 1 && (
                            <button
                                type="button"
                                onClick={prevStep}
                                className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                            >
                                Previous
                            </button>
                        )}
                        <button
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                            {step === 5 ? "Submit" : "Next"}
                        </button>
                    </div>
                </form>
                            : <div className="thank-you-message">
                                <h3 className="text-3xl text-center font-bold mb-4">THANK YOU!</h3>
                                <p className="text-2xl  mb-4">Your form has been successfully submitted. We will get back to you soon.</p>
                                <Link to="/" className="text-blue-600 underline">Go back to home</Link>
                            </div>
                        }
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner-shape-wrap">
                <img src={img1} alt="" className="img-1" />
                <img src={img2} alt="" className="img-2" />
                <img src={img3} alt="" className="img-3" />
                <img src={img4} alt="" className="img-4" />
                <img src={img5} alt="" className="img-5" />
                <img src={img6} alt="" className="img-6" />
                <img src={img7} alt="" className="img-7" />
            </div>
            <ToastContainer />
        </section>
    );
};

export default Banner1;

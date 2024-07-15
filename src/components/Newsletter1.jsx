import React, { useState, useEffect, useRef } from 'react';
import emailjs from "@emailjs/browser";
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import newsletterBgShape from './assets/img/images/newsletter_bg_shape.png'; // Adjust the path according to your file structure
import newsletterShape01 from './assets/img/images/newsletter_shape01.png';
import newsletterShape02 from './assets/img/images/newsletter_shape02.png';
import newsletterShape03 from './assets/img/images/newsletter_shape03.png';
import newsletterShape04 from './assets/img/images/newsletter_shape04.png';
import newsletterShape05 from './assets/img/images/newsletter_shape05.png';
import newsletterShape06 from './assets/img/images/newsletter_shape06.png';

export default function Newsletter1() {

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
                toast.success("Email Sent")
            },
            (error) => {
                console.log(error.text);
            }
        );
    };

    return (
        <>
            <section className="newsletter-area px-24 pt-110 pb-120 ">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title text-center mb-20">
                                <span className="sub-title text-white">Get In Touch</span>
                                <h2 className="title">Let’s Start  <br /> Your Next Project</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="newsletter-form">
                                {/* <form action="#">
                                    <input type="email" placeholder="Enter your email address" />
                                    <button type="submit" className="btn">Subscribe <span /></button>
                                </form> */}
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
                                      className="peer-focus:font-medium absolute text-xl md:text-2xl text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-4 md:-translate-y-6 scale-75 top-4 md:top-6 left-4 md:left-6 z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 md:peer-focus:-translate-y-6">Company Name *</label>
                            </div>
                        </div>
                    )}
                    {step === 3 && (
                        <div className="relative z-0 w-full group mb-4">
                            <input 
                                type="text" 
                                name="website" 
                                id="website" 
                                value={formData.website}
                                onChange={handleChange}
                                className="block p-4 md:p-6 w-full text-md md:text-lg text-gray-900 bg-[#FAFAFA] border-2 border-gray-300 rounded-lg dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="website" 
                                 className="peer-focus:font-medium absolute text-xl md:text-2xl text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-4 md:-translate-y-6 scale-75 top-4 md:top-6 left-4 md:left-6 z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 md:peer-focus:-translate-y-6">Website *</label>
                        </div>
                    )}

                    {step === 4 && (
                        <div className="relative z-0 w-full group mb-4">
                            <textarea 
                                name="description" 
                                id="description" 
                                value={formData.description}
                                onChange={handleChange}
                                className="block p-4 md:p-6 w-full text-md md:text-lg text-gray-900 bg-[#FAFAFA] border-2 border-gray-300 rounded-lg dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="description" 
                                className="peer-focus:font-medium absolute text-xl md:text-2xl text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-4 md:-translate-y-6 scale-75 top-4 md:top-6 left-4 md:left-6 z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 md:peer-focus:-translate-y-6">Tell us how can we help you *</label>
                        </div>
                    )}
                    {step === 5 && (
                        <div className="relative z-0 w-full group mb-4">
                            <select
                                name="hearAboutUs"
                                id="hearAboutUs"
                                value={formData.hearAboutUs}
                                onChange={handleChange}
                                 className="block p-4 md:p-6 w-full text-md md:text-lg text-gray-900 bg-[#FAFAFA] border-2 border-gray-300 rounded-lg dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  required >
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

                    <input type="hidden" name="firstName" value={formData.firstName} />
                                <input type="hidden" name="email" value={formData.email} />
                                <input type="hidden" name="phone" value={formData.phone} />
                                <input type="hidden" name="company" value={formData.company} />
                                <input type="hidden" name="website" value={formData.website} />
                                <input type="hidden" name="description" value={formData.description} />

                    <div className={`flex  ${ step > 1 && 'justify-center'} md:justify-start gap-x-4 mt-0`}>
                        {step > 1 && (
                            <button type="button" onClick={prevStep} className="btn wow fadeInUp" data-wow-delay=".6s">BACK <span/></button>
                        )}
                        <button type="submit" data-wow-delay=".6s" className="btn wow fadeInUp">{step === 5 ? 'SUBMIT' : 'NEXT'} <span/></button>
                    </div>


                            </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='newsletter-area-bg'></div>
                <div className="newsletter-shape-wrap">
                    <img src={newsletterBgShape} alt="" className="bg-shape" />
                    <img src={newsletterShape01} alt="" className="shape-one" />
                    <img src={newsletterShape02} alt="" className="shape-two" />
                    <img src={newsletterShape03} alt="" className="shape-three" />
                    <img src={newsletterShape04} alt="" className="shape-four" />
                    <img src={newsletterShape05} alt="" className="shape-five" />
                    <img src={newsletterShape06} alt="" className="shape-six" />
                </div>
                <ToastContainer/>
            </section>
        </>
    )
}

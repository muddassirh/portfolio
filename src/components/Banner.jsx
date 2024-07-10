import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';

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
            "service_qctvotj",
            "template_sl5mh24",
            formRef.current,
            "A1inSTy-7oDfSD0F4"
        ).then(
            (result) => {
                console.log(result.text);
                console.log("message sent");
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
                            <h2 className="title wow fadeInUp" data-wow-delay=".4s">Grow Your Business Using Our Services</h2>
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
                                                className="block p-4 md:p-6 w-full text-md md:text-lg text-gray-900 bg-[#FAFAFA] border-2 border-gray-300 rounded-lg"
                                                placeholder=" "
                                                required
                                            />
                                            <label htmlFor="firstName"
                                                className="absolute text-xl md:text-2xl text-gray-900 duration-300 transform -translate-y-4 md:-translate-y-6 scale-75 top-4 md:top-6 left-4 md:left-6 z-10 origin-[0] peer-focus:text-blue-600">First Name *</label>
                                            {errors.firstName && <span className="text-red-500">{errors.firstName}</span>}
                                        </div>
                                        <div className="relative z-0 w-full group">
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="block p-4 md:p-6 w-full text-md md:text-lg text-gray-900 bg-[#FAFAFA] border-2 border-gray-300 rounded-lg"
                                                placeholder=" "
                                                required
                                            />
                                            <label htmlFor="email"
                                                className="absolute text-xl md:text-2xl text-gray-900 duration-300 transform -translate-y-4 md:-translate-y-6 scale-75 top-4 md:top-6 left-4 md:left-6 z-10 origin-[0] peer-focus:text-blue-600">Email *</label>
                                            {errors.email && <span className="text-red-500">{errors.email}</span>}
                                        </div>
                                    </div>
                                )}
                                {step === 2 && (
                                    <div className="flex flex-col md:flex-row gap-y-4 mb-4 gap-x-4">
                                        <div className="relative z-0 w-full group">
                                            <PhoneInput
                                                inputStyle={inputStyle}
                                                country={'us'}
                                                value={formData.phone}
                                                onChange={handlePhoneChange}
                                                placeholder="Enter phone number"
                                                inputProps={{
                                                    name: 'phone',
                                                    required: true,
                                                    className: "block p-4 md:p-6 w-full text-md md:text-lg text-gray-900 bg-[#FAFAFA] border-2 border-gray-300 rounded-lg",
                                                }}
                                            />
                                            {errors.phone && <span className="text-red-500">{errors.phone}</span>}
                                        </div>
                                        <div className="relative z-0 w-full group">
                                            <input
                                                type="text"
                                                name="company"
                                                id="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="block p-4 md:p-6 w-full text-md md:text-lg text-gray-900 bg-[#FAFAFA] border-2 border-gray-300 rounded-lg"
                                                placeholder=" "
                                                required
                                            />
                                            <label htmlFor="company"
                                                className="absolute text-md md:text-lg text-gray-900 duration-300 transform -translate-y-4 md:-translate-y-6 scale-75 top-4 md:top-6 left-4 md:left-6 z-10 origin-[0] peer-focus:text-blue-600">Company Name *</label>
                                            {errors.company && <span className="text-red-500">{errors.company}</span>}
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
                                            className="block p-4 md:p-6 w-full text-md md:text-lg text-gray-900 bg-[#FAFAFA] border-2 border-gray-300 rounded-lg"
                                            placeholder=" "
                                            required
                                        />
                                        <label htmlFor="website"
                                            className="absolute text-md md:text-lg text-gray-900 duration-300 transform -translate-y-4 md:-translate-y-6 scale-75 top-4 md:top-6 left-4 md:left-6 z-10 origin-[0] peer-focus:text-blue-600">Website *</label>
                                    </div>
                                )}
                                {step === 4 && (
                                    <div className="relative z-0 w-full group mb-4">
                                        <textarea
                                            name="description"
                                            id="description"
                                            value={formData.description}
                                            onChange={handleChange}
                                            className="block p-4 md:p-6 w-full text-md md:text-lg text-gray-900 bg-[#FAFAFA] border-2 border-gray-300 rounded-lg"
                                            placeholder=" "
                                            required
                                        />
                                        <label htmlFor="description"
                                            className="absolute text-md md:text-lg text-gray-900 duration-300 transform -translate-y-4 md:-translate-y-6 scale-75 top-4 md:top-6 left-4 md:left-6 z-10 origin-[0] peer-focus:text-blue-600">Description *</label>
                                    </div>
                                )}
                                {step === 5 && (
                                    <div className="relative z-0 w-full group mb-4">
                                        <select
                                            name="hearAboutUs"
                                            id="hearAboutUs"
                                            value={formData.hearAboutUs}
                                            onChange={handleChange}
                                            className="block p-4 md:p-6 w-full text-md md:text-lg text-gray-900 bg-[#FAFAFA] border-2 border-gray-300 rounded-lg"
                                            required
                                        >
                                            <option value="">How did you hear about us?</option>
                                            <option value="google">Google</option>
                                            <option value="facebook">Facebook</option>
                                            <option value="instagram">Instagram</option>
                                            <option value="twitter">Twitter</option>
                                        </select>
                                    </div>
                                )}
                                {/* Hidden fields to include previous steps data */}
                                <input type="hidden" name="firstName" value={formData.firstName} />
                                <input type="hidden" name="email" value={formData.email} />
                                <input type="hidden" name="phone" value={formData.phone} />
                                <input type="hidden" name="company" value={formData.company} />
                                <input type="hidden" name="website" value={formData.website} />
                                <input type="hidden" name="description" value={formData.description} />
                                
                                <div className="flex justify-between">
                                    {step > 1 && (
                                        <button type="button" onClick={prevStep} className="bg-blue-500 text-white p-2 rounded-lg">
                                            Previous
                                        </button>
                                    )}
                                    {step < 5 ? (
                                        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">
                                            Next
                                        </button>
                                    ) : (
                                        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">
                                            Submit
                                        </button>
                                    )}
                                </div>
                            </form>
                            <div className="banner-shape-wrap">
                                <img src={img1} alt="" className="shape-one" />
                                <img src={img2} alt="" className="shape-two" />
                                <img src={img3} alt="" className="shape-three" />
                                <img src={img4} alt="" className="shape-four" />
                                <img src={img5} alt="" className="shape-five" />
                                <img src={img6} alt="" className="shape-six" />
                                <img src={img7} alt="" className="shape-seven" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner1;

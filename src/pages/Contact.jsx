import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from '../components/Layout/Layout';
import { Link } from 'react-router-dom'; 
import contactimg from '../components/assets/img/images/contact-img.png';
import mailIcon from '../components/assets/img/icon/mail_icon03.png'; 
import phoneIcon from '../components/assets/img/icon/phone_icon03.png'; 

export default function Contact() {

    const [submitted, setSubmitted] = useState(false)
  const [inputStyle, setInputStyle] = useState({
    width: '100%',
    padding: '2.5rem',
    fontSize: '1.5rem',
    borderRadius: '0.5rem',
    borderColor: '#d1d5db',
    backgroundColor: '#FAFAFA',
    color: '#000'
});
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


const refreshPage = () => {
    window.location.reload();
};
    return (
        <>
            <Layout breadcrumbTitle="Contact Us" footerStyle={1} bShape breadcrumbCls="breadcrumb-area-four pt-175 pb-160">
                <section className="inner-contact-area px-24">
                    <div className="container">
                        <div className="inner-contact-wrap">
                            <div className="row">
                                <div className="col-xl-9 col-lg-10">
                                    <div className="section-title title-style-two mb-50">
                                        <h2 className="title">Have a <span>Cool Project?</span> Get in touch with us!</h2>
                                        <div className="inner-contact-info pt-4">
                                        <ul className="list-wrap">
                                            {/*<li>
                                                <div className="contact-info-item">
                                                    <div className="icon">
                                                        <img src={locationIcon} alt="Location Icon" />
                                                    </div>
                                                    <div className="content">
                                                        <h6 className="title">Address</h6>
                                                        <p>UN82 Dhanmondi Dhaka - 1207</p>
                                                    </div>
                                                </div>
                                            </li>*/}
                                            <li>
                                                <div className="contact-info-item">
                                                    <div className="icon">
                                                        <img src={mailIcon} alt="Mail Icon" />
                                                    </div>
                                                    <div className="content">
                                                        <h6 className="title">Email</h6>
                                                        <Link to="mailto:your@email.com">marketing@genxsmedia.com</Link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="contact-info-item">
                                                    <div className="icon">
                                                        <img src={phoneIcon} alt="Phone Icon" />
                                                    </div>
                                                    <div className="content">
                                                        <h6 className="title">Phone</h6>
                                                        <Link to="tel:0123456789">+92 322 5149 149</Link>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    </div>
                                    <div className="inner-contact-form-wrap">
                                        {/* <form action="#">
                                            <div className="form-grp">
                                                <label htmlFor="name"><i className="fas fa-user" /></label>
                                                <input type="text" id="name" placeholder="Name" />
                                            </div>
                                            <div className="form-grp">
                                                <label htmlFor="phone"><i className="fas fa-phone" /></label>
                                                <input type="text" id="phone" placeholder="Phone" />
                                            </div>
                                            <div className="form-grp">
                                                <label htmlFor="email"><i className="fas fa-envelope" /></label>
                                                <input type="email" id="email" placeholder="Email Address" />
                                            </div>
                                            <div className="form-grp">
                                                <label htmlFor="subject"><i className="fas fa-book-alt" /></label>
                                                <input type="text" id="subject" placeholder="Subject" />
                                            </div>
                                            <div className="form-grp">
                                                <label htmlFor="comment"><i className="fas fa-user-edit" /></label>
                                                <textarea name="comment" id="comment" placeholder="How can we help you? Feel free to get in touch!" />
                                            </div>
                                            <button type="submit" className="btn">Send Message <span /></button>
                                        </form> */}
                                        {!submitted ? 
                                            <form ref={formRef} onSubmit={sendEmail} className="">
                
                <div className="flex flex-col md:flex-row gap-y-4 md:my-4 gap-x-4">
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
          
          
                <div className="flex flex-col md:flex-row gap-y-4 md:my-4 gap-x-4">
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

                <div className="flex flex-col gap-y-4">
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
                </div>
                <div className={`flex md:justify-start gap-x-4`}>
                <button type="submit" className='btn'>SUBMIT<span/></button>
            </div>
        </form> : 
        <div className="thank-you-message">
                                <h3 className="text-3xl text-center font-bold mb-4">THANK YOU!</h3>
                                <p className="text-2xl  mb-4">Your form has been successfully submitted. We will get back to you soon.</p>
                                <button onClick={refreshPage} className="text-blue-600   underline">Go back</button>
                            </div>
        }
                                    </div>
                                    <div id="contact-map">
                                    <img src={contactimg} alt="" />
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <ToastContainer/>
                </section>
            </Layout>
        </>
    );
}

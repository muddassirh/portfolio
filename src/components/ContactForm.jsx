import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PublicIcon from '@mui/icons-material/Public';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useForm } from "react-hook-form";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';

const ContactForm = () => {

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

  // const [isSending, setIsSending] = useState(false);
  // const [validation, setValidation] = useState("");
  // const [checkboxError, setCheckboxError] = useState("");
  // const formRef = useRef(null); // Add useRef for the form

  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   watch,
  //   formState: { errors },
  // } = useForm({
  //   reValidateMode: "onChange",
  //   mode: "onBlur",
  // });

  // const watchCustomWebsite = watch("customWebsite");
  // const watchECommerce = watch("eCommerce");
  // const watchBranding = watch("branding");
  // const watchLeadGeneration = watch("leadGeneration");
  // const watchDigitalMarketing = watch("digitalMarketing");
  // const watchAIServices = watch("aiservices");

  // const submitForm = async (data) => {
  //   const formDataToSend = data;

  //   // Check if at least one service is selected
  //   if (
  //     !watchCustomWebsite &&
  //     !watchECommerce &&
  //     !watchBranding &&
  //     !watchLeadGeneration &&
  //     !watchDigitalMarketing &&
  //     !watchAIServices
  //   ) {
  //     setCheckboxError("Please select at least one service.");
  //     formRef.current.scrollIntoView({ behavior: "smooth" }); // Scroll to the top of the form
  //     return;
  //   } else {
  //     setCheckboxError("");
  //   }

  //   if (validateCaptcha(formDataToSend.captchaValue)) {
  //     setValidation("Captcha Matched");
  //     setIsSending(true);
  //     try {
  //       await axios.post("/api/quickcontact/", formDataToSend);
  //       reset();
  //       setValidation("");
  //     } catch (error) {
  //       console.error("Error occurred while submitting form:", error);
  //     } finally {
  //       setIsSending(false);
  //     }
  //   } else {
  //     setValidation("Captcha not matched, try again!");
  //   }
  // };

  // useEffect(() => {
  //   loadCaptchaEnginge(6, "blue", "white");
  // }, []);

  return (
    <div >
      <h1 className="text-5xl text-center mb-5 sm:text-5xl font-extrabold">Get in Touch</h1>
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="w-full md:w-1/3 flex flex-col gap-y-6 py-10">
          <div className="flex items-center gap-x-4">
            <div className="text-blue-500"><CallIcon fontSize="large"/></div>
            <div>
              <h1 className="text-blue-500 text-4xl font-black">CALL US</h1>
              <p className="text-3xl font-light tracking-tight">12345678901</p>
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <div className="text-blue-500"><EmailIcon fontSize="large" /></div>
            <div>
              <h1 className="text-blue-500 text-4xl font-black">EMAIL US!</h1>
              <p className="text-3xl font-light tracking-tight">abc@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <div className="text-blue-500"><LocationOnIcon fontSize="large" /></div>
            <div>
              <h1 className="text-blue-500 text-4xl font-black">DRIVE TO US!</h1>
              <p className="text-3xl font-light tracking-tight">Addres</p>
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <div className="text-blue-500"><PublicIcon fontSize="large" /></div>
            <div>
              <h1 className="text-blue-500 text-4xl font-black">FOLLOW US!</h1>
              <div className="text-blue-500"><InstagramIcon fontSize="large"/><FacebookIcon fontSize="large"/><LinkedInIcon fontSize="large"/><YouTubeIcon fontSize="large"/></div>
            </div>
          </div>
        </div>
        {/* <form className="w-2/3 py-20" onSubmit={handleSubmit(submitForm)}>
        <div className="w-full lg:flex lg:justify-center mb-10">
          <p className="font-bold lg:w-1/2 text-3xl mb-5 lg:mb-0">
            What Services are you looking for?{" "}
            <span className="text-red-600">*</span>
          </p>
          <div className="flex flex-col text-xl lg:text-2xl font-semibold lg:w-1/2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="services"
                value="Custom Website"
                {...register("customWebsite")}
              />
              <span>Custom Website</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="services"
                value="E-Commerce"
                {...register("eCommerce")}
              />
              <span>E-Commerce</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="services"
                value="Branding"
                {...register("branding")}
              />
              <span>Branding</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="services"
                value="Lead Generation"
                {...register("leadGeneration")}
              />
              <span>Lead Generation</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="services"
                value="Digital Marketing"
                {...register("digitalMarketing")}
              />
              <span>Digital Marketing</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="services"
                value="AI Services"
                {...register("aiservices")}
              />
              <span>AI Services</span>
            </label>
            {checkboxError && (
              <p className="text-red-600 text-xl">{checkboxError}</p>
            )}
          </div>
        </div>
        <div className="lg:flex space-y-3 lg:items-center lg:justify-center mb-10">
          <label className="font-bold w-full lg:w-1/2 text-3xl">
            What is your Full name? <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            required
            className="py-2 border-b-2 lg:w-1/2 focus:outline-none border-gray-500 placeholder:text-xl placeholder:font-normal font-semibold text-2xl w-full"
            placeholder="E.g John Doe"
            {...register("fullName")}
          />
        </div>
        <div className="lg:flex space-y-3 lg:items-center lg:justify-center mb-10">
          <label className="font-bold w-full lg:w-1/2 text-3xl">
            What is your Email? <span className="text-red-600">*</span>
          </label>
          <input
            required
            type="text"
            className="py-2 border-b-2 lg:w-1/2 focus:outline-none border-gray-500 placeholder:text-xl placeholder:font-normal font-semibold text-2xl w-full"
            placeholder="E.g johndoe@gmail.com"
            {...register("email")}
          />
        </div>
        <div className="lg:flex space-y-3 lg:items-center lg:justify-center mb-10">
          <label className="font-bold w-full lg:w-1/2 text-3xl">
            What is your Company name? <span className="text-red-600">*</span>
          </label>
          <input
            required
            type="text"
            className="py-2 border-b-2 lg:w-1/2 focus:outline-none border-gray-500 placeholder:text-xl placeholder:font-normal font-semibold text-2xl w-full"
            placeholder="E.g JD Ltd"
            {...register("companyName")}
          />
        </div>
        <div className="lg:flex space-y-3 lg:items-center lg:justify-center mb-10">
          <label className="font-bold w-full lg:w-1/2 text-3xl">
            What is your Website? <span className="text-red-600">*</span>
          </label>
          <input
            required
            type="text"
            className="py-2 border-b-2 lg:w-1/2 focus:outline-none border-gray-500 placeholder:text-xl placeholder:font-normal font-semibold text-2xl w-full"
            placeholder="E.g www.jd.com"
            {...register("website")}
          />
        </div>
        <div className="lg:flex space-y-3 lg:items-center lg:justify-center mb-10">
          <label className="font-bold w-full lg:w-1/2 text-3xl">
            What is your Timeline? <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            required
            className="py-2 border-b-2 lg:w-1/2 focus:outline-none border-gray-500 placeholder:text-xl placeholder:font-normal font-semibold text-2xl w-full"
            placeholder="E.g End of the year"
            {...register("timeline")}
          />
        </div>
        <div className="lg:flex space-y-3 lg:items-center lg:justify-center mb-10">
          <label className="font-bold w-full lg:w-1/2 text-3xl">
            What is your Budget? <span className="text-red-600">*</span>
          </label>
          <div className="flex w-full lg:w-1/2 space-x-5">
            <select
              {...register("minBudget", { required: true })}
              defaultValue="$200"
              className="py-2 border-b-2 lg:w-1/2 focus:outline-none border-gray-500 placeholder:text-xl placeholder:font-normal font-semibold text-2xl w-full"
            >
              <option value="$200">$200</option>
              <option value="$300">$300</option>
              <option value="$400">$400</option>
              <option value="$500">$500</option>
              <option value="$600">$600</option>
              <option value="$700">$700</option>
              <option value="$800">$800</option>
              <option value="$900">$900</option>
            </select>
            <select
              {...register("maxBudget", { required: true })}
              defaultValue="$1000"
              className="py-2 border-b-2 lg:w-1/2 focus:outline-none border-gray-500 placeholder:text-xl placeholder:font-normal font-semibold text-2xl w-full"
            >
              <option value="$500">$500</option>
              <option value="$600">$600</option>
              <option value="$700">$700</option>
              <option value="$800">$800</option>
              <option value="$900">$900</option>
              <option value="$1000">$1000+</option>
            </select>
          </div>
        </div>
        <div className="lg:flex space-y-3 lg:justify-center mb-10">
          <label className="font-bold w-full lg:w-1/2 text-3xl">
            Describe your project <span className="text-red-600">*</span>
          </label>
          <textarea
            rows={5}
            className="py-2 border-b-2 lg:w-1/2 focus:outline-none border-gray-500 placeholder:text-xl placeholder:font-normal font-semibold text-2xl w-full"
            {...register("projectDetail")}
            placeholder="E.g I'd like to redesign my e-commerce site..."
          ></textarea>
        </div>
        <div className="lg:flex space-y-3 lg:items-center lg:justify-center mb-10">
          <div className="font-bold w-full lg:w-1/2 text-3xl"></div>
          <div className="w-full lg:w-1/2">
            <p className="">
              By sending your request you accept to share your information with
              us according to our{" "}
              <a className="text-primary" href="/privacy-policy">
                Privacy Policy
              </a>
            </p>
            <div className="mt-5">
              {" "}
              <LoadCanvasTemplate />
              <input
                className="py-2 border-b-2 focus:outline-none border-gray-500 placeholder:text-xl placeholder:font-normal font-semibold text-2xl w-full"
                placeholder="Enter Captcha Value"
                type="text"
                {...register("captchaValue", {
                  required: "Must fill captcha to send message",
                })}
              />
              <p
                className={`${
                  validation === "Captcha Matched"
                    ? "text-success"
                    : "text-danger"
                }`}
              >
                {validation}
              </p>
              {watch("captchaValue") === "" ? (
                <p className="text-danger">{errors?.captchaValue?.message}</p>
              ) : (
                ""
              )}
            </div>
            <button
              type="submit"
              disabled={isSending}
              className={`w-full flex items-center justify-center space-x-3 ${
                isSending
                  ? "bg-zinc-700 hover:bg-none"
                  : "bg-black hover:bg-primary hover:text-white"
              } md:w-2/5  text-white font-SquadOne text-base md:text-xl px-15 py-4 mt-5 rounded-sm  duration-400 transition-colors`}
            >
              {isSending ? <span>Sending...</span> : <span>Send</span>}
            </button>
          </div>
        </div>
      </form> */}
      <form className="">
                
                        <div className="flex flex-col md:flex-row gap-y-4 my-5 gap-x-4">
                            <div className="relative z-0 w-full group">
                                <input 
                                    type="text" 
                                    name="firstName" 
                                    id="firstName" 
                                    // value={formData.firstName}
                                    // onChange={handleChange}
                                    className="block p-4 md:p-6 w-full text-xl md:text-2xl text-gray-900 bg-[#FAFAFA] border-2 border-gray-300 rounded-lg dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="firstName" 
                                    className="peer-focus:font-medium absolute text-xl md:text-2xl text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-4 md:-translate-y-6 scale-75 top-4 md:top-6 left-4 md:left-6 z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 md:peer-focus:-translate-y-6">First Name *</label>
                                {/* {errors.firstName && <span className="text-red-500">{errors.firstName}</span>} */}
                            </div>
                            <div className="relative z-0 w-full group">
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    // value={formData.email}
                                    // onChange={handleChange}
                                    className="block p-4 md:p-6 w-full text-xl md:text-2xl text-gray-900 bg-[#FAFAFA] border-2 border-gray-300 rounded-lg dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="email" 
                                     className="peer-focus:font-medium absolute text-xl md:text-2xl text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-4 md:-translate-y-6 scale-75 top-4 md:top-6 left-4 md:left-6 z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 md:peer-focus:-translate-y-6">Email *</label>
                                {/* {errors.email && <span className="text-red-500">{errors.email}</span>} */}
                            </div>
                        </div>
                  
                  
                        <div className="flex flex-col md:flex-row gap-y-4 my-5 gap-x-4">
                        <div className="relative z-0 w-full group">
                                <PhoneInput
                                    country={'us'}
                                    // value={formData.phone}
                                    // onChange={handlePhoneChange}
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
                                {/* {errors.phone && <span className="text-red-500">{errors.phone}</span>} */}
                            </div>
                            <div className="relative z-0 w-full group">
                                <input 
                                    type="text" 
                                    name="company" 
                                    id="company" 
                                    // value={formData.company}
                                    // onChange={handleChange}
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
                                // value={formData.website}
                                // onChange={handleChange}
                                className="block p-4 md:p-6 w-full text-xl md:text-2xl text-gray-900 bg-[#FAFAFA] border-2 border-gray-300 rounded-lg dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="website" 
                                 className="peer-focus:font-medium absolute text-xl md:text-2xl text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-4 md:-translate-y-6 scale-75 top-4 md:top-6 left-4 md:left-6 z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 md:peer-focus:-translate-y-6">Website *</label>
                        </div>
                  
                   
                        <div className="relative z-0 w-full group">
                            <textarea 
                                name="description" 
                                id="description" 
                                // value={formData.description}
                                // onChange={handleChange}
                                className="block p-4 md:p-6 w-full text-xl md:text-2xl text-gray-900 bg-[#FAFAFA] border-2 border-gray-300 rounded-lg dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="description" 
                                className="peer-focus:font-medium absolute text-xl md:text-2xl text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-4 md:-translate-y-6 scale-75 top-4 md:top-6 left-4 md:left-6 z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 md:peer-focus:-translate-y-6">Tell us how can we help you *</label>
                        </div>
                  
               
                        <div className="relative z-0 w-full group">
                            <select
                                name="hearAboutUs"
                                id="hearAboutUs"
                                // value={}
                                // onChange={}
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
                        <div className={`flex md:justify-start gap-x-4 mt-5`}>
                        <button type="submit" className='rounded-md bg-blue-500 text-white text-xl md:text-2xl font-black px-10 py-3 md:px-16 md:py-5 hover:bg-white hover:border hover:border-blue-500 hover:text-blue-500 shadow-lg'>SUBMIT</button>
                    </div>
                </form>
      </div>
    </div>
  );
};

export default ContactForm;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";

const ContactForm = () => {
  const [isSending, setIsSending] = useState(false);
  const [validation, setValidation] = useState("");
  const [checkboxError, setCheckboxError] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    reValidateMode: "onChange",
    mode: "onBlur",
  });

  const watchCustomWebsite = watch("customWebsite");
  const watchECommerce = watch("eCommerce");
  const watchBranding = watch("branding");
  const watchLeadGeneration = watch("leadGeneration");
  const watchDigitalMarketing = watch("digitalMarketing");
  const watchAIServices = watch("aiservices");

  const submitForm = async (data) => {
    const formDataToSend = data;

    // Check if at least one service is selected
    if (
      !watchCustomWebsite &&
      !watchECommerce &&
      !watchBranding &&
      !watchLeadGeneration &&
      !watchDigitalMarketing &&
      !watchAIServices
    ) {
      setCheckboxError("Please select at least one service.");
      return;
    } else {
      setCheckboxError("");
    }

    if (validateCaptcha(formDataToSend.captchaValue)) {
      setValidation("Captcha Matched");
      setIsSending(true);
      try {
        await axios.post("/api/quickcontact/", formDataToSend);
        reset();
        setValidation("");
      } catch (error) {
        console.error("Error occurred while submitting form:", error);
      } finally {
        setIsSending(false);
      }
    } else {
      setValidation("Captcha not matched, try again!");
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6, "blue", "white");
  }, []);

  return (
    <div>
      <h1 className="text-3xl mb-5 sm:text-5xl font-extrabold">Get in Touch</h1>
      <p className="text-xl">
        If you think we’d make a good team, contact us via your preferred method
        and introduce your project.
      </p>
      <form className="py-20" onSubmit={handleSubmit(submitForm)}>
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
      </form>
    </div>
  );
};

export default ContactForm;

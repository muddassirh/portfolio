import React, { useRef, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

// Data for the accordion
const data = [
  {
    question: "SEO",
    answer:
      "Search Engine Optimisation is one of the best Digital Marketing strategies - it aims to improve the ranking &amp; visibility of a website in Google’s search engine results. SEO involves optimising different website elements like content, keywords, metadata, schema, backlinks, and other similar factors."
  },
  {
    question: "PAY-PER0-CLICK",
    answer:
    "PPC is a rapid digital marketing strategy that works best for businesses looking for immediate traffic or sales. As the name says - pay-per-click means you pay search engines or social media platforms to appear on different digital surfaces, and once someone clicks on an ad, you pay. "
  },
  {
    question: "SOCIAL MEDIA MARKETING",
    answer:
      "Social Media Marketing (SMM) is a crucial Digital Marketing strategy - leveraging different social media platforms to put your products or services in front of people's eyes. It's all about creating engaging &amp; attractive content to build brand awareness."
  },
  {
    question: "WEB DEVELOPMENT",
    answer:
      "Web Development is crucial and an essential part of Digital Marketing strategy because the look &amp; design of the website define your brand identity and stand out amongst the competitors."
  }
];

// AccordionItem component
const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  const contentHeight = useRef();

  return (
    <div className={`p-3 text-2xl ${isOpen ? 'rounded-[48px] bg-white text-black' : 'rounded-full border border-2 '}  overflow-hidden`}>
      <button
        className={`flex items-center justify-between w-full font-medium  bg-transparent border-none cursor-pointer ${isOpen ? "text-black bg-gray-100" : ""}`}
        onClick={onClick}
      >
        <p>{question}</p>
        <RiArrowDropDownLine className={`text-3xl transition-transform ${isOpen ? "rotate-180 text-green-500" : ""}`} />
      </button>

      <div
        ref={contentHeight}
        className="transition-height duration-700 ease-in-out"
        style={
          isOpen
            ? { height: contentHeight.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <p className="px-4 py-3  text-2xl font-thin">{answer}</p>
      </div>
    </div>
  );
};

// Accordion component
const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex flex-col gap-y-2 w-full mx-auto my-10 bg-transparent">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

function Services() {
  return (
    <div>            <section className="bg-[#0d74e2] py-[70px] text-white">
    <div className="">
      <div className=" flex">
        <div className="px-20 w-1/2">
          <div  className="">
            <h2 className="text-[20px] md:text-[75px] flex flex-col tracking-tighter font-black md:leading-[60px]">
              WE DON'T DO
              <span>
                <span className="">
                  <span className="">“COOKIE</span> CUTTER”
                </span>
              </span>
              STRATEGIES
            </h2>
          </div>
          <p  className="text-2xl font-light py-12">
            Xugar offers industry-leading digital marketing, web design and development services.&nbsp;<br /><br />There is no “one size fits all” solution. We work with you to create a solution that hits the sweet spot to deliver incredible results. Hiring a full-service digital marketing agency has many perks like shorter turnaround times, effective cross-communication across advertising channels and, of course, it's a lot cheaper than hiring multiple companies.
          </p>
          <a className='rounded-md bg-white text-black text-2xl font-black px-16 py-5  hover:bg-blue-500 cursor-pointer hover:text-white shadow-lg'>GET IN TOUCH WITH US TODAY!</a>
        </div>
        <div className="p-16 w-1/2">
          <h3  className="text-5xl font-extrabold">How can we help you with Digital Marketing?</h3>
          {/* <div  className="flex flex-col">
            <div id="code_block-222-26" className="ct-code-block">
              
            </div>
            <div id="div_block-223-26" className="ct-div-block oxel_accordion__row">
              <div id="div_block-224-26" className="ct-div-block oxel_accordion__row_left">
                <h4 id="text_block-226-26" className="ct-text-block oxel_accordion__row__label">SEO</h4>
              </div>
              <div id="fancy_icon-227-26" className="ct-fancy-icon oxel_accordion__icon">
                <svg id="svg-fancy_icon-227-26"><use xlinkHref="#FontAwesomeicon-chevron-down" /></svg>
              </div>
            </div>
            <div id="div_block-228-26" className="ct-div-block oxel_accordion__content oxel_accordion__content__hidden">
              <div id="div_block-229-26" className="ct-div-block">
                <p id="text_block-230-26" className="ct-text-block">
                  Search Engine Optimisation is one of the best Digital Marketing strategies - it aims to improve the ranking & visibility of a website in Google’s search engine results. SEO involves optimising different website elements like content, keywords, metadata, schema, backlinks, and other similar factors.<br />
                </p>
              </div>
            </div>
     
          </div> */}

          <Accordion/>
        
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default Services
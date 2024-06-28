import React from "react";
import ContactForm from "../components/ContactForm";
import Wrapper from "../components/Wrapper";

const Contact = () => {
  return (<>
  <div className="banner-back w-full text-white py-28">
  <h1 className="text-[100px] text-center mb-5 font-extrabold">CONTACT US</h1>
      <p className="text-2xl text-center">
        If you think we’d make a good team, contact us via your preferred method
        and introduce your project.
      </p>
  </div>
    <Wrapper>
      <ContactForm />
    </Wrapper>
  </>);
};

export default Contact;

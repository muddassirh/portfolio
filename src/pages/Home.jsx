import React from 'react';
import Banner from '../components/Banner';
import HomePortfolio from '../components/HomePortfolio';
import ServicesBody from '../components/ServicesBody';
import Testimonials from '../components/Testimonials';
import Services from '../components/Services';
import Layout from '../components/Layout/Layout';
import Services1 from '../components/Services1';
import About1 from '../components/About1';
import Team1 from '../components/Team1';
import Project1 from '../components/Project1';
import Testimonial1 from '../components/Testimonial1';
import Consultation1 from '../components/Consultation1';
import Blog1 from '../components/Blog1';
import Newsletter1 from '../components/Newsletter1';
import { info } from '../data/info';
import DynamicTestimonial from '../components/DynamicTestimonial';
const Home = () => {
    return (
        <div>
        <Layout>
            <Banner/>
            <Services1/>
            <About1/>
            <Team1/>
            <Project1/>
            <DynamicTestimonial testimonials={info.testimonials}/>
           {/*  <Consultation1/>
            <Blog1/> */}
            <Newsletter1/>
            {/* <ServicesBody/> */}
            {/* <HomePortfolio/>
            <Services/>
            <Testimonials/> */}
            </Layout>            
        </div>
    );
}

export default Home;

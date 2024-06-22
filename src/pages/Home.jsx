import React from 'react';
import Banner from '../components/Banner';
import HomePortfolio from '../components/HomePortfolio';
import ServicesBody from '../components/ServicesBody';
import Testimonials from '../components/Testimonials';
import Services from '../components/Services';
const Home = () => {
    return (
        <div>
            <Banner/>
            <ServicesBody/>
            <HomePortfolio/>
            <Services/>
            <Testimonials/>            
        </div>
    );
}

export default Home;

import React from 'react';
import Banner from '../components/Banner';
import GetTouch from '../components/GetTouch';
import HomePortfolio from '../components/HomePortfolio';
import ServicesBody from '../components/ServicesBody';
import Testimonials from '../components/Testimonials';
const Home = () => {
    return (
        <div>
            <Banner/>
            <ServicesBody/>
            <HomePortfolio/>
            <Testimonials/>            
        </div>
    );
}

export default Home;

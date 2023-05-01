import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import GetTouch from './components/GetTouch';
import Header from './components/Header';
import HomePortfolio from './components/HomePortfolio';
import ServicesBody from './components/ServicesBody';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <>
      <Header/>
      <Banner/>
      <ServicesBody/>
      <HomePortfolio/>
      <Testimonials/>
      <GetTouch/>
      <Footer/>
    </>
  );
}

export default App;

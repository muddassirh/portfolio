import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import AboutMe from "./pages/Aboutme";
import Team from "./pages/Team";
import TeamDetails from "./pages/TeamDetails";
import ProjectDetails from "./pages/ProjectDetails";
import ServiceDetails from "./pages/ServicesDetails";
import WebDesign from "./pages/WebDesign";
import FullStackDesignDevelopment from "./pages/FullStackDesignDevelopment";
import UXUIDesignServices from "./pages/UXUIDesignServices";
import PrintMediaDesign from "./pages/PrintMediaDesign";
import DigitalMarketing from "./pages/DigitalMarketing";
import Work from "./pages/Work";
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about-us" element={<About />}></Route>
          <Route path="/about-me" element={<AboutMe />}></Route>
          <Route path="/team-details"  element={<TeamDetails/>}></Route>
          <Route path="/team"  element={<Team/>}></Route>
          <Route path="/project-details"  element={<ProjectDetails/>}></Route>
          <Route path="/services-details"  element={<ServiceDetails/>}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/webdesign" element={<WebDesign/>}></Route>
          <Route path="/print-media-design-services" element={<PrintMediaDesign/>}></Route>
          <Route path="/full-stack-design-development" element={<FullStackDesignDevelopment/>}></Route>
          <Route path="/ux-ui-design-and-consulting-services" element={<UXUIDesignServices/>}></Route>
          <Route path="/digital-marketing-services" element={<DigitalMarketing/>}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/work" element={<Work />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  );
}

export default App;

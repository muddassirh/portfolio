import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team/:id" element={<TeamDetails />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/service/:id" element={<ServiceDetails />} />
        <Route path="/web-design" element={<WebDesign />} />
        <Route path="/full-stack-design-development" element={<FullStackDesignDevelopment />} />
        <Route path="/ux-ui-design-and-consulting-services" element={<UXUIDesignServices />} />
        <Route path="/print-media-design-services" element={<PrintMediaDesign />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

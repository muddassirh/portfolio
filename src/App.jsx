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
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  );
}

export default App;

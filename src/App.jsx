import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
function App() {
  return (
    <>     
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about-me" element={<About/>}></Route>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;

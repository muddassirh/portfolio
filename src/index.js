import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import 'swiper/css'
import "swiper/css/navigation"
import "swiper/css/pagination"
import "./components/assets/css/animate.min.css"
import "./components/assets/css/bootstrap.min.css"
import "./components/assets/css/default.css"
import "./components/assets/css/fontawesome-all.min.css"
import "./components/assets/css/odometer.css"
import "./components/assets/css/style.css"
import "./components/assets/css/responsive.css"
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ConsultIcon1 from "./assets/img/icon/consultation_icon01.png"
import ConsultIcon2 from "./assets/img/icon/consultation_icon02.png"
import ConsultIcon3 from "./assets/img/icon/consultation_icon03.png"
import ConsultShape1 from "./assets/img/images/consultation_shape01.png"
import ConsultShape2 from "./assets/img/images/consultation_shape02.png"

export default function Consultation1() {
    return (
        <>
            <section className="consultation-area px-24 pt-120 pb-120">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="consultation-content">
                                <div className="section-title mb-25">
                                    <img src={ConsultIcon1} alt="" />
                                    <span className="sub-title">Committed to Delivering Results</span>
                                    <h2 className="title">Elevate Your Online Presence</h2>
                                </div>
                                <p>Our Think. Ideate. Elevate. approach ensures that our clients receive tailored solutions that drive real growth, increase brand visibility, and foster meaningful connections with their audiences. Let us help you achieve your goals and elevate your success!</p>
                                <div className="consultation-list">
                                    <ul className="list-wrap">
                                        <li>
                                            <div className="icon">
                                                <img src={ConsultIcon2} alt="" />
                                                <span>12x</span>
                                            </div>
                                            <div className="content">
                                                <h6 className="title">Faster Reply</h6>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <img src={ConsultIcon3} alt="" />
                                                <span>100%</span>
                                            </div>
                                            <div className="content">
                                                <h6 className="title">Provide Free Quote</h6>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="consultation-form-wrap">
                                <h4 className="title">Free Consultation</h4>
                                <form action="#">
                                    <div className="form-grp">
                                        <input type="text" placeholder="Name" />
                                    </div>
                                    <div className="form-grp">
                                        <input type="email" placeholder="Email Address" />
                                    </div>
                                    <div className="form-grp">
                                        <input type="text" placeholder="Phone Number" />
                                    </div>
                                    <div className="form-grp">
                                        <select id="shortBy" name="select" className="form-select" aria-label="Default select example">
                                            <option value="">Subject</option>
                                            <option>Subject One</option>
                                            <option>Subject Two</option>
                                            <option>Subject Three</option>
                                            <option>Subject Four</option>
                                        </select>
                                    </div>
                                    <button className="btn" type="submit">Consultation</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="consultation-shape-wrap">
                    <img src={ConsultShape1} alt="" className="shape-one ribbonRotate" />
                    <img src={ConsultShape2} alt="" className="shape-two float-bob-x" />
                </div>
            </section>
        </>
    );
}

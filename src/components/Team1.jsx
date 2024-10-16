import { Link } from "react-router-dom";
import TeamImgShape from "./assets/img/team/team_img_shape.png"
import TeamImg1 from "./assets/img/team/team_img01.png"
import TeamImg2 from "./assets/img/team/team_img02.png"
import TeamImg3 from "./assets/img/team/team_img03.png"
import TeamImg4 from "./assets/img/team/team_img04.png"
import TeamImg5 from "./assets/img/team/team_img05.png"
import TeamShape1 from "./assets/img/images/team_shape01.png"
import TeamShape2 from "./assets/img/images/team_shape02.png"

export default function Team1() {
    return (
        <>
            <section className="team-area px-24 pt-130 pb-130">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="team-img-wrap">
                                <img src={TeamImgShape} alt="" className="img-shape" />
                                <img src={TeamImg1} alt="" className="img-one" />
                                <img src={TeamImg2} alt="" className="img-two" />
                                <img src={TeamImg3} alt="" className="img-three" />
                                <img src={TeamImg4} alt="" className="img-four" />
                                <img src={TeamImg5} alt="" className="img-five" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="team-content">
                                <div className="section-title mb-25">
                                    <span className="sub-title">Our Team</span>
                                    <h2 className="title">Empowering Your Success with Creative Excellence</h2>
                                </div>
                                <p>At Genxsmedia, we pride ourselves on having a team that embodies the spirit of creative excellence. Our talented professionals are the backbone of our success, and we're proud to showcase their strengths.</p>
                                <Link to="/contact" className="btn">Get a Free Quote<span /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-shape-wrap">
                    <img src={TeamShape1} alt="" className="ribbonRotate" />
                    <img src={TeamShape2} alt="" className="float-bob-x" />
                </div>
            </section>
        </>
    );
}

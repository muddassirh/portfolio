import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";

const swiperOptions = {
  modules: [Autoplay],
  slidesPerView: 5,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1350: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
};
const LatestProjects = ({ title, description, projects }) => {
  console.log(projects);
  return (
    <section className="px-5 md:px-24 pt-5 md:pt-140 pb-5 md:pb-125">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5">
            <div className="section-title title-style-two mb-70">
              <span className="sub-title">{title}</span>
              <h2 className="text-[1.5rem] md:text-4xl">{description}</h2>
            </div>
          </div>
          <div className="col-md-4">
            <div className="inner-project-nav" />
          </div>
        </div>
      </div>
      <div className="container-fulid p-0">
        <div className="inner-projcet-wrap-two">
          <Swiper {...swiperOptions} className="inner-project-active">
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                {project.map((project, index) => {
                  return (
                    <>
                      <div
                        className={`inner-project-item ${
                          index == 1 ? "vertical-item" : "horizoital-item"
                        }`}
                      >
                        <div className="inner-project-thumb">
                          <Link to={`/project-details/${project.link}`}>
                            <img src={project.image} alt={project.title} />
                          </Link>
                        </div>
                        <div className="inner-project-content">
                          <h3 className="title">
                            <Link to={`/project-details/${project.link}`}>
                              {project.title}
                            </Link>
                          </h3>
                          <p>{project.description}</p>
                        </div>
                      </div>
                    </>
                  );
                })}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default LatestProjects;

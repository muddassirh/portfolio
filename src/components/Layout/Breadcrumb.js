import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import breadcrumbShape01 from '../assets/img/images/breadcrumb_shape01.png';
import breadcrumbShape02 from '../assets/img/images/breadcrumb_shape02.png';
import breadcrumbShape04 from '../assets/img/images/breadcrumb_shape04.png';
import breadcrumbShape05 from '../assets/img/images/breadcrumb_shape05.png';
import breadcrumbShape06 from '../assets/img/images/breadcrumb_shape06.png';

export default function Breadcrumb({ breadcrumbTitle, bShape, breadcrumbCls, blogSearch }) {
    return (
        <>
            <section className={`breadcrumb-area ${breadcrumbCls ? breadcrumbCls : ""}`}>
                <div className="container ">
                    <div className="columns-1">
                        <div className="">
                            <div className="breadcrumb-content">
                                <h2 className="text-[1.90rem] pb-5 md:text-6xl">{breadcrumbTitle}</h2>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">{breadcrumbTitle}</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>

                    {blogSearch &&
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="breadcrumb-search">
                                    <form action="#">
                                        <label htmlFor="serch"><i className="far fa-search" /></label>
                                        <input type="text" id="serch" placeholder="Search for..." />
                                        <button type="submit" className="btn">Search <span /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    }

                </div>

                {bShape ?
                    <>
                        <div className="breadcrumb-shape-wrap-three">
                            <img src={breadcrumbShape04} alt="" className="wow zoomIn" data-wow-delay=".2s" />
                            <img src={breadcrumbShape05} alt="" className="wow zoomIn" data-wow-delay=".2s" />
                            <img src={breadcrumbShape06} alt="" className="wow zoomIn" data-wow-delay=".2s" />
                        </div>

                    </> :
                    <>
                        <div className="breadcrumb-shape-wrap">
                            <img src={breadcrumbShape01} alt="" />
                            <img src={breadcrumbShape02} alt="" />
                        </div>
                    </>
                }

            </section>

        </>
    );
}

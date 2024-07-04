import React from 'react';
import { Link } from 'react-router-dom'; // Use this if you are using React Router
import blogImg01 from './assets/img/blog/blog_img01.jpg'; // Adjust the path according to your file structure
import blogImg02 from './assets/img/blog/blog_img02.jpg';
import blogImg03 from './assets/img/blog/blog_img03.jpg';
import blogAvatar01 from './assets/img/blog/blog_avatar01.png';
import blogAvatar02 from './assets/img/blog/blog_avatar02.png';
import blogAvatar03 from './assets/img/blog/blog_avatar03.png';

export default function Blog1() {
    return (
        <>
            <section className="blog-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title text-center mb-50">
                                <span className="sub-title">My Blog</span>
                                <h2 className="title">News  Updates</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-post-item">
                                <div className="blog-post-thumb">
                                    <Link to="/blog-details"><img src={blogImg01} alt="" /></Link>
                                </div>
                                <div className="blog-post-content">
                                    <Link to="/blog" className="tag">Branding</Link>
                                    <h2 className="title"><Link to="/blog-details">How To Create JavaScript Vanilla Gantt Chart: Adding</Link></h2>
                                    <div className="blog-meta">
                                        <ul className="list-wrap">
                                            <li className="avatar-img">
                                                <Link to="/blog"><img src={blogAvatar01} alt="" /></Link>
                                            </li>
                                            <li>By <Link to="/blog">Ataur</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-post-item">
                                <div className="blog-post-thumb">
                                    <Link to="/blog-details"><img src={blogImg02} alt="" /></Link>
                                </div>
                                <div className="blog-post-content">
                                    <Link to="/blog" className="tag">Branding</Link>
                                    <h2 className="title"><Link to="/blog-details">How To Create JavaScript Vanilla Gantt Chart: Adding</Link></h2>
                                    <div className="blog-meta">
                                        <ul className="list-wrap">
                                            <li className="avatar-img">
                                                <Link to="/blog"><img src={blogAvatar02} alt="" /></Link>
                                            </li>
                                            <li>By <Link to="/blog">Ataur</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-post-item">
                                <div className="blog-post-thumb">
                                    <Link to="/blog-details"><img src={blogImg03} alt="" /></Link>
                                </div>
                                <div className="blog-post-content">
                                    <Link to="/blog" className="tag">Branding</Link>
                                    <h2 className="title"><Link to="/blog-details">How To Create JavaScript Vanilla Gantt Chart: Adding</Link></h2>
                                    <div className="blog-meta">
                                        <ul className="list-wrap">
                                            <li className="avatar-img">
                                                <Link to="/blog"><img src={blogAvatar03} alt="" /></Link>
                                            </li>
                                            <li>By <Link to="/blog">Ataur</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

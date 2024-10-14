import Layout from '../components/Layout/Layout';
import React, { useEffect, useState } from 'react';
import { info } from '../data/info';

const Work = () => {
    const [projects, setProjects] = useState([]);
    const [activeTab, setActiveTab] = useState('all');
    const [categories, setCategories] = useState(['all']);

    useEffect(() => {
        const projectData = info.works;
        setProjects(projectData);

        // Extract unique categories from the works and set them in the tabs
        const uniqueCategories = ['all', ...new Set(projectData.map((project) => project.category))];
        setCategories(uniqueCategories);
    }, []);

    const filteredProjects = projects.filter((project) => {
        return (
            (activeTab === 'all' || project.category === activeTab)
        );
    });

    return (
        <>
            <Layout breadcrumbTitle="Work" breadcrumbCls="pt-175 pb-70">
                <section>
                    <h1 className='text-2xl md:text-3xl font-medium text-center'>Check out what we can do for your business</h1>
                    <span className='max-w-[6em] py-[.7px] block bg-[#2779fc] mt-5 mb-4 mx-auto'></span>
                </section>
                <div className="container mx-auto p-6">
                    {/* Tabs for Categories */}
                    <div className="flex justify-center flex-wrap items-center gap-2 mb-8">
                        {categories.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`py-1 px-4 rounded-lg text-white ${activeTab === tab ? 'bg-[#3482FF]' : 'bg-gray-500 hover:bg-[#3482FF]'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Conditionally render Swiper or No Work Found */}
                    {filteredProjects.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {filteredProjects.map((project, index) => (
                                <div
                                    className="relative border h-[24em] flex items-center rounded-lg drop-shadow-xl justify-center"
                                    key={index}
                                >
                                    <div
                                        className="group absolute left-1/2 top-1/2 flex h-[6em] w-[6em] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-[3.5em] border-[1px] border-[#ffffffaa] bg-black/50 backdrop-blur-[6px] duration-[500ms] hover:h-[10em] hover:w-[16em] hover:rounded-[1.5em]"
                                    >
                                        <svg
                                            className="h-[2.5em] w-[2.5em] duration-300 group-hover:opacity-0"
                                            viewBox="0 0 48 48"
                                            fill="none"
                                            height="48"
                                            width="48"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#a)">
                                                <path
                                                    clipRule="evenodd"
                                                    d="M21.6 36h4.8V21.6h-4.8V36ZM24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0Zm0 43.2C13.44 43.2 4.8 34.56 4.8 24 4.8 13.44 13.44 4.8 24 4.8c10.56 0 19.2 8.64 19.2 19.2 0 10.56-8.64 19.2-19.2 19.2Zm-2.4-26.4h4.8V12h-4.8v4.8Z"
                                                    fillRule="evenodd"
                                                    fill="#fff"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clipPath id="a">
                                                    <path d="M0 0h48v48H0z" fill="#fff"></path>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <div
                                            className="items-left duration-600 absolute left-0 top-0 flex h-[10em] w-[16em] translate-y-[100%] flex-col justify-between p-[1.5em] font-nunito text-[hsl(0,0%,85%)] group-hover:translate-y-0"
                                        >
                                            <div className="items-left flex flex-col justify-center">
                                                <h1 className="text-[1.5em] text-white font-bold leading-[0.8em]">{project.name}</h1>
                                                <p className="text-[0.9em] text-white font-light">
                                                    {project.description}
                                                </p>
                                            </div>

                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[#3482FF] hover:underline"
                                            >
                                                View Project
                                            </a>
                                        </div>
                                    </div>
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="object-cover h-full w-full !rounded-lg"
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center text-gray-500 text-xl mt-8">
                            No Work Found
                        </div>
                    )}
                </div>
            </Layout>
        </>
    );
};

export default Work;

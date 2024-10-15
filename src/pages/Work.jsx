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
                                            className="w-full absolute bottom-0 left-0" 
                                        >
                                            <div className="items-left  flex flex-col p-5 justify-center">
                                                <span className='text-xl font-bold text-white mb-3'>{project.category}</span>
                                                <h1 className="text-[1.5em] text-white  font-bold leading-[0.8em]">{project.name}</h1>
                                                <p className="text-[0.9em] text-white font-light">
                                                    {project.description}
                                                </p>
                                                <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white flex hover:!text-[#1073ff] duration-500 transition-color  items-center hover:underline"
                                            >
                                                <span className='w-16 bg-white block h-[2px] me-4'></span> View Project
                                            </a>
                                            </div>

                                            
                                        </div>
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="object-cover -z-[2] h-full w-full !rounded-lg"
                                    />
                                    <div className='absolute inset-0 bg-black/70 -z-[1] rounded-lg'></div>
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

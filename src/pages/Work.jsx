import Layout from '../components/Layout/Layout';
import React, { useEffect, useState } from 'react';
import Newsletter from '../components/Newsletter1';
import { info } from '../data/info';

const Work = () => {
    const [projects, setProjects] = useState([]);
    const [activeTab, setActiveTab] = useState('all');
    const [categories, setCategories] = useState(['all']);

    // State to handle the full-screen preview
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        const projectData = info.works;
        setProjects(projectData);

        // Extract unique categories from the works and set them in the tabs
        const uniqueCategories = ['all', ...new Set(projectData.map((project) => project.category))];
        setCategories(uniqueCategories);
    }, []);

    // Prevent background scrolling when modal is open
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedProject]);

    const getDriveThumbnail = (url) => {
        if (!url) return null;
        let match = url.match(/\/d\/(.+?)\//);
        if (!match) {
            match = url.match(/[?&]id=([^&#]+)/);
        }
        if (match && match[1]) {
            return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w800`;
        }
        return null;
    };

    const filteredProjects = projects.filter((project) => {
        return (activeTab === 'all' || project.category === activeTab);
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
                                className={`py-1 px-4 rounded-lg text-white transition-colors duration-300 ${activeTab === tab ? 'bg-[#3482FF]' : 'bg-gray-500 hover:bg-[#3482FF]'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Project Grid */}
                    {filteredProjects.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {filteredProjects.map((project, index) => {
                                const bgImageUrl = project.image;

                                return (
                                    <div
                                        className="transition-all duration-700 ease-out w-full relative overflow-hidden group border h-[24em] flex items-center rounded-xl drop-shadow-xl justify-center bg-top bg-cover bg-gray-800 hover:scale-[1.02] hover:shadow-2xl"
                                        key={index}
                                        style={{ backgroundImage: `url(${bgImageUrl})` }}
                                    >
                                        <div className="w-full absolute bottom-0 left-0 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <div className="items-left flex flex-col p-6 justify-center">
                                                <span className='text-[0.75em] uppercase tracking-widest font-bold text-blue-400 mb-2'>{project.category}</span>
                                                <h1 className="text-[1.6em] text-white font-bold leading-tight mb-3 group-hover:text-blue-200 transition-colors">{project.name}</h1>
                                                <p className="text-[0.95em] text-white/90 font-light line-clamp-2 mb-3">
                                                    {project.description}
                                                </p>
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {project.technology.split(',').map((tech, i) => (
                                                        <span key={i} className="text-[0.65em] px-2 py-1 bg-white/10 rounded text-white/70 uppercase tracking-tighter">
                                                            {tech.trim()}
                                                        </span>
                                                    ))}
                                                </div>

                                                {/* Action Button */}
                                                {project.iframeLink ? (
                                                    <button
                                                        onClick={() => setSelectedProject(project)}
                                                        className="text-white flex hover:text-[#1073ff] duration-500 transition-colors mt-3 items-center hover:underline cursor-pointer"
                                                    >
                                                        <span className='w-16 bg-white block h-[2px] me-4'></span> View Design Preview
                                                    </button>
                                                ) : (
                                                    <a
                                                        href={project.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-white flex hover:text-[#1073ff] duration-500 transition-colors mt-3 items-center hover:underline"
                                                    >
                                                        <span className='w-16 bg-white block h-[2px] me-4'></span> View Project
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                        {/* Overlay for readability */}
                                        <div className='absolute inset-0 bg-black/70 rounded-lg z-10'></div>
                                    </div>
                                )
                            })}
                        </div>
                    ) : (
                        <div className="text-center text-gray-500 text-xl mt-8">
                            No Work Found
                        </div>
                    )}
                </div>

                <section className='pt-5'>
                    <Newsletter />
                </section>
            </Layout>

            {/* FULL SCREEN MODAL PREVIEW */}
            {/* THE ENHANCED MODAL */}
            {selectedProject && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/95 animate-in fade-in duration-300"
                    onClick={() => setSelectedProject(null)}
                >
                    {/* Modal Content Container - Standardize max width for consistent look */}
                    <div
                        className="relative w-full h-full max-w-7xl bg-white rounded-lg shadow-2xl overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button - Moved slightly corner for a cleaner look */}
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-4 right-4 bg-black/50 hover:bg-black text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl z-[10001] transition-colors"
                        >
                            &times;
                        </button>

                        {/* Content Switcher */}
                        {selectedProject.iframeLink && selectedProject.iframeLink.toLowerCase().endsWith('.pdf') ? (
                            /* PDF PREVIEW: Clean view without toolbar */
                            <div className="w-full h-full overflow-hidden">
                                <iframe
                                    src={`${selectedProject.iframeLink}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                                    className="w-full h-full border-none block"
                                    title="Design Preview"
                                    allow="autoplay"
                                ></iframe>
                            </div>
                        ) : (
                            /* IMAGE VIEW: Full width with natural height and scrolling */
                            <div className="w-full h-full overflow-y-auto">
                                <img
                                    src={selectedProject.iframeLink}
                                    alt={selectedProject.name}
                                    className="w-full h-auto block"
                                    style={{ minHeight: '100%' }}
                                />
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Work;
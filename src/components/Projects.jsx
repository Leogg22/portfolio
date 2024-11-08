import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl font-bold">Featured Projects</motion.h2>

            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }}
                className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {PROJECTS.map((project, index) => (
                    <div
                        key={index}
                        className="flex flex-col rounded-lg bg-neutral-800 p-6 shadow-lg transition-transform transform hover:scale-105">
                        
                        {/* Image Container */}
                        <div className="mb-4 w-full h-60 overflow-hidden rounded-lg"> {/* Fixed height */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover" // Ensures consistent image size
                            />
                        </div>

                        <h6 className="mb-2 text-lg font-semibold text-white">{project.title}</h6>
                        <p className="mb-4 text-sm text-neutral-400">{project.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="inline-block rounded bg-neutral-900 px-2 py-1 text-xs font-medium text-orange-100">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        
                        {/* {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-auto inline-flex items-center justify-center rounded bg-orange-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-orange-700">
                                {project.linkText || 'Source'}
                            </a>
                        )} */}
                    </div>
                ))}
            </motion.div>

            {/* <div className="text-center mt-10">
                <a href="/projects" className="text-orange-100 hover:text-orange-500 transition-colors">
                    View more →
                </a>
            </div> */}
        </div>
    );
};

export default Projects;

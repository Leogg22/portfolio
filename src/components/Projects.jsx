import React from 'react'
import { PROJECTS } from '../constants';
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl">Projects</motion.h2>

            <div className="lg:flex lg:flex-col lg:items-center">
                {PROJECTS.map((project, index) => (
                    <div 
                        key={index} 
                        className="mb-8 flex flex-wrap lg:flex lg:flex-row lg:justify-center lg:items-start lg:gap-12"> {/* Increased gap */}
                        
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4 mb-4 lg:mb-0 lg:pr-8"> {/* Added padding-right */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="rounded"
                            />
                        </motion.div>
                        
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">{project.title}</h6>
                            <p className="mb-4 text-neutral-400">{project.description}</p>
                            <div>
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="mr-2 mt-4 inline-block rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-orange-300">{tech}</span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
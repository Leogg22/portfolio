import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <div className="projects-section border-b border-neutral-900 pb-12 mt-10">
            <h2 className="projects-title text-center text-4xl  text-white mb-12">
                Featured Projects
            </h2>

            <div className="projects-grid grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                {PROJECTS.map((project, index) => (
                    <div
                        key={index}
                        className="project-card flex flex-col rounded-lg bg-neutral-900 p-6 shadow-md transition-transform hover:scale-105 hover:shadow-lg">
                        <div className="image-container mb-4 h-60 overflow-hidden rounded-lg">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="project-image w-full h-full object-cover"
                            />
                        </div>

                        <h6 className="project-title mb-2 text-lg font-semibold text-white">
                            {project.title}
                        </h6>
                        <p className="project-description mb-4 text-sm text-neutral-400">
                            {project.description}
                        </p>

                        <div className="tech-tags flex flex-wrap gap-2 mb-4">
                            {project.technologies.map((tech, techIndex) => (
                                <span
                                    key={techIndex}
                                    className="tech-tag rounded bg-neutral-700 px-2 py-1 text-xs font-medium text-gray-200">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link mt-auto inline-flex items-center justify-center rounded bg-neutral-800 px-4 py-2 text-sm font-semibold text-gray-100 transition-colors hover:bg-neutral-600">
                                {project.linkText || 'Source'}
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;

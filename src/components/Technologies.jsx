import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
});

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-16">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-12 text-center text-3xl mx-auto">
                Technologies I Have Worked With
            </motion.h2>

            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-auto max-w-screen-lg"> {/* Updated to smaller grid layout */}

                {/* HTML5 */}
                <div className="bg-neutral-800 rounded-lg p-3 flex items-center">
                    <FaHtml5 className="text-3xl text-white mr-3" />
                    <div>
                        <h3 className="text-md font-semibold text-white">HTML5</h3>
                        <p className="text-xs text-neutral-400">Markup Language</p>
                    </div>
                </div>

                {/* CSS3 */}
                <div className="bg-neutral-800 rounded-lg p-3 flex items-center">
                    <FaCss3 className="text-3xl text-white mr-3" />
                    <div>
                        <h3 className="text-md font-semibold text-white">CSS3</h3>
                        <p className="text-xs text-neutral-400">Styling Language</p>
                    </div>
                </div>

                {/* JavaScript */}
                <div className="bg-neutral-800 rounded-lg p-3 flex items-center">
                    <FaJs className="text-3xl text-white mr-3" />
                    <div>
                        <h3 className="text-md font-semibold text-white">JavaScript</h3>
                        <p className="text-xs text-neutral-400">Programming Language</p>
                    </div>
                </div>

                {/* React */}
                <div className="bg-neutral-800 rounded-lg p-3 flex items-center">
                    <FaReact className="text-3xl text-white mr-3" />
                    <div>
                        <h3 className="text-md font-semibold text-white">React</h3>
                        <p className="text-xs text-neutral-400">JavaScript Library</p>
                    </div>
                </div>

                {/* Git */}
                <div className="bg-neutral-800 rounded-lg p-3 flex items-center">
                    <FaGitAlt className="text-3xl text-white mr-3" />
                    <div>
                        <h3 className="text-md font-semibold text-white">Git</h3>
                        <p className="text-xs text-neutral-400">Version Control</p>
                    </div>
                </div>

                {/* NextJS */}
                <div className="bg-neutral-800 rounded-lg p-3 flex items-center">
                    <SiNextdotjs className="text-3xl text-white mr-3" />
                    <div>
                        <h3 className="text-md font-semibold text-white">NextJS</h3>
                        <p className="text-xs text-neutral-400">React Framework</p>
                    </div>
                </div>
                
            </motion.div>
        </div>
    );
}

export default Technologies;

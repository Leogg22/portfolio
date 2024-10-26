import React from 'react'
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
})

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h2 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl mx-auto"> {/* Added mx-auto */}
                Technologies I Have Worked With
            </motion.h2>
            
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="flex flex-wrap items-center justify-center gap-4 mx-auto max-w-4xl"> {/* Added mx-auto and max-w-4xl */}
                
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaHtml5 className="text-7xl text" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaCss3 className="text-7xl text" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaJs className="text-7xl text" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaReact className="text-7xl text" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaGitAlt className="text-7xl text" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiNextdotjs className="text-7xl text" />
                </div>
            </motion.div>
        </div>
    )
}

export default Technologies

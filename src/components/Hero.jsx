import React from 'react'
import { HERO_CONTENT } from "../constants/index";
import profilePic from "../assets/TempProfile.png";
import { delay, motion } from "framer-motion"

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
    })

    const Hero = () => {
        return (
            <div className="border-b border-neutral-900 pb-4 lg:mb-35">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2">
                        <div className="flex flex-col item-center lg:items-start">
                            <motion.h1
                                variants={container(0)}
                                initial="hidden"
                                animate="visible"
                                className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text8xl">Leonardo Gonzalez</motion.h1>
                            <motion.span
                                variants={container(.5)}
                                initial="hidden"
                                animate="visible"
                                className="bg-gradient-to-r from-orange-300 via-orange-100 to-orange-500 bg-clip-text text-3xl tracking-tight text-transparent">Frontend Developer & Software Engineer</motion.span>
                            <motion.p
                                variants={container(1)}
                                initial="hidden"
                                animate="visible"
                                className="my-2 max-2-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</motion.p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 lg:p-8">
                        <div className="flex justify-center">
                            <motion.img 
                            initial={{x: 100, opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            transition={{duration: 1, delay: 1.2}}
                            src={profilePic} alt="profile" className="rounded-full w-40 h-40 lg:w-60 lg:h-60" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default Hero
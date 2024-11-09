import React from 'react'
import { HERO_CONTENT } from "../constants/index";
import profilePic from "../assets/ProfilePic.png";
import { delay, motion } from "framer-motion"
import CV from "./DownloadCVbn";
import { GrResume } from 'react-icons/gr';
import resume from '../assets/pdf/Resume-Leonardo-Gonzalez.pdf';


const container = (delay) => ({
    hidden: { x: 100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
})

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35" >
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col item-center lg:items-start">
                        <h1
                            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text8xl">Leonardo Gonzalez</h1>
                        <span
                            className="bg-gradient-to-r from-orange-200 via-orange-100 to-orange-100 bg-clip-text text-3xl tracking-tight text-transparent">Frontend Developer & Software Engineer</span>
                        <p
                            className="my-2 max-2-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</p>

                        <a href={resume} download="Resume-Leonardo Gonzalez" target="_blank" rel="noreferrer">
                            <CV className="mt-10 text-center mr-8" />
                        </a>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center lg:pl-8">
                        <img
                            src={profilePic} alt="profile"
                            className="rounded-full w-80 h-80 lg:w-80 lg:h-80 mt-1" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
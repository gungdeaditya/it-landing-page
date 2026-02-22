import React from "react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";

const technologies = [
    { name: "HTML", left: "0%", top: "20%" },
    { name: "CSS", left: "20%", top: "15%" },
    { name: "Javascript", left: "45%", top: "20%" },
    { name: "Typescript", left: "75%", top: "15%" },
    { name: "React Native", left: "85%", top: "30%" },
    { name: "React js", left: "10%", top: "35%" },
    { name: "Express js", left: "35%", top: "35%" },
    { name: "Next js", left: "65%", top: "35%" },
    { name: "Astro", left: "90%", top: "45%" },
    { name: "Tailwind CSS", left: "25%", top: "50%" },
    { name: "Material UI", left: "55%", top: "50%" },
    { name: "Radix UI", left: "80%", top: "60%" },
    { name: "Redux", left: "40%", top: "65%" },
    { name: "PostgreSQL", left: "65%", top: "75%" },
    { name: "Git", left: "90%", top: "70%" },
    { name: "CI/CD", left: "30%", top: "80%" },
];

export default function Hero() {
    return (
        <section className="min-h-screen max-w-screen-xl flex flex-col justify-center m-auto px-4 2xl:px-0 relative pt-20 lg:pt-0">
            {/* Background applies globally from Layout */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-0 w-full mt-10 xl:-mt-10">
                {/* Left Column Text Content */}
                <div className="flex flex-col flex-1 w-full max-w-xl mx-auto lg:mx-0">
                    <p className="text-gray-500 dark:text-gray-400 font-semibold tracking-widest text-sm mb-4 uppercase">
                        GUNGDE ADITYA
                    </p>
                    <h1 className="text-5xl sm:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6">
                        Shipping <span className="text-primary-500">Quality Products</span> <br className="hidden sm:block" />
                        As Fast As Possible
                    </h1>
                    <p className="text-[#757575] dark:text-gray-400 text-lg mb-8 leading-relaxed">
                        <span>{`Hi, I'm Gungde Aditya. Nice to meet you.`}</span>
                        <br />
                        <span className="mt-2 block">
                            A passionate front-end developer and professional coding since
                            2018, based in Jakarta, Indonesia 📍
                        </span>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center bg-primary-500 text-white hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 transition-colors px-8 py-3.5 rounded-full font-medium text-lg leading-tight group"
                        >
                            Contact me <FiArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                        <div className="flex space-x-3">
                            <a
                                href="https://www.youtube.com"
                                target="_blank"
                                rel="noreferrer"
                                className="w-[50px] h-[50px] rounded-full border border-gray-300 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-500 transition-colors"
                            >
                                <FaYoutube className="w-[22px] h-[22px]" />
                            </a>
                            <a
                                href="https://www.github.com/gungdeaditya"
                                target="_blank"
                                rel="noreferrer"
                                className="w-[50px] h-[50px] rounded-full border border-gray-300 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-500 transition-colors"
                            >
                                <FaGithub className="w-[20px] h-[20px]" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/gungdeaditya"
                                target="_blank"
                                rel="noreferrer"
                                className="w-[50px] h-[50px] rounded-full border border-gray-300 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-500 transition-colors"
                            >
                                <FaLinkedin className="w-[20px] h-[20px]" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Column Layout & Badges */}
                <div className="relative h-[450px] lg:h-[600px] w-full hidden lg:flex items-center justify-center mt-12 lg:mt-0 max-w-lg lg:max-w-none mx-auto">
                    <p className="absolute top-10 lg:top-24 right-0 lg:right-10 text-sm text-gray-500 dark:text-gray-400 text-right z-0 hidden lg:block mb-4">
                        some technologies and practices I'm familiar with..
                    </p>

                    {/* Background Decorative SVG Lines matching Primary Color */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 opacity-20 pointer-events-none">
                        <svg viewBox="0 0 500 500" className="w-full h-full text-primary-500" preserveAspectRatio="none">
                            <path d="M 0 500 C 150 400, 300 250, 500 100" fill="none" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M 50 500 C 200 450, 350 300, 500 150" fill="none" stroke="currentColor" strokeWidth="1" />
                            <path d="M 100 500 C 250 500, 400 350, 500 200" fill="none" stroke="currentColor" strokeWidth="0.8" />
                            <path d="M 150 500 C 300 550, 450 400, 500 250" fill="none" stroke="currentColor" strokeWidth="0.5" />
                            <path d="M -50 400 C 100 300, 250 150, 450 0" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        </svg>
                    </div>

                    {/* Floating Badges */}
                    <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[500px]">
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={index}
                                className="absolute px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-primary-500/40 text-xs sm:text-sm font-medium backdrop-blur-md text-gray-700 dark:text-gray-200 bg-white/60 dark:bg-[#111827]/60 shadow-[0_0_10px_rgba(3,169,244,0.15)] dark:shadow-[0_0_15px_rgba(3,169,244,0.25)] hover:shadow-primary-500/50 hover:border-primary-500 transition-all cursor-default"
                                style={{
                                    left: tech.left,
                                    top: tech.top,
                                }}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{
                                    opacity: 1,
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    opacity: { duration: 0.8, delay: index * 0.05 },
                                    y: {
                                        duration: 3 + Math.random() * 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: Math.random() * 2
                                    }
                                }}
                            >
                                {tech.name}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
}

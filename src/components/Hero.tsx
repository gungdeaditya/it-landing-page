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
    { name: "Shadcn UI", left: "80%", top: "60%" },
    { name: "Redux", left: "40%", top: "65%" },
    { name: "PostgreSQL", left: "65%", top: "75%" },
    { name: "Git", left: "90%", top: "70%" },
    { name: "CI/CD", left: "30%", top: "80%" },
];

export default function Hero() {
    return (
        <section id="home" className="min-h-screen max-w-7xl flex flex-col justify-center m-auto px-4 2xl:px-0 relative pt-20 lg:pt-0">
            {/* Background applies globally from Layout */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-0 w-full mt-10 xl:-mt-10">
                {/* Left Column Text Content */}
                <div className="flex flex-col flex-1 w-full max-w-xl mx-auto lg:mx-0">
                    <p className="text-gray-500 dark:text-gray-400 font-semibold tracking-widest text-sm mb-4 uppercase">
                        GUNGDE ADITYA
                    </p>
                    <h1 className="text-5xl sm:text-5xl font-extrabold leading-[1.1] tracking-tight mb-6">
                        Engineered for <span className="bg-linear-to-r from-primary-400 to-primary-700 bg-clip-text text-transparent">Quality.</span> <br />
                        Built for <span className="bg-linear-to-r from-primary-400 to-primary-700 bg-clip-text text-transparent">Speed.</span>
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
                            href="#contact"
                            className="inline-flex items-center justify-center bg-primary-500 text-white hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 transition-colors px-8 py-3.5 rounded-full font-medium text-lg leading-tight group"
                        >
                            Contact me <FiArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                        <div className="flex space-x-3">
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
                    <p className="absolute top-10 lg:top-36 right-0 lg:right-10 text-sm text-gray-500 dark:text-gray-400 text-right z-0 hidden lg:block mb-4">
                        some technologies and practices I'm familiar with..
                    </p>

                    {/* Floating Badges */}
                    <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[500px] flex flex-col justify-center items-end gap-4 sm:gap-6 p-4 z-10">
                        {/* Blurry Gradient Glow behind bubbles */}
                        <div className="absolute top-1/2 left-7/12 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[350px] lg:w-[800px] h-[250px] sm:h-[350px] lg:h-[450px] bg-primary-500/30 dark:bg-primary-500/20 rounded-full blur-[80px] sm:blur-[120px] -z-10 pointer-events-none mix-blend-screen dark:mix-blend-lighten animate-pulse duration-4000"></div>

                        {Array.from({ length: 4 }).map((_, rowIndex) => (
                            <div key={rowIndex} className="flex flex-wrap justify-end gap-4 sm:gap-6 w-full">
                                {technologies.slice(rowIndex * 4, rowIndex * 4 + 4).map((tech, index) => {
                                    const globalIndex = rowIndex * 4 + index;
                                    return (
                                        <motion.div
                                            key={globalIndex}
                                            className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-primary-500/40 text-xs sm:text-sm font-medium backdrop-blur-md text-gray-700 dark:text-gray-200 bg-white/60 dark:bg-[#111827]/60 shadow-[0_0_10px_rgba(3,169,244,0.15)] dark:shadow-[0_0_15px_rgba(3,169,244,0.25)] hover:shadow-primary-500/50 hover:border-primary-500 transition-all cursor-default"
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{
                                                opacity: 1,
                                                y: [0, -10, 0],
                                            }}
                                            transition={{
                                                opacity: { duration: 0.8, delay: globalIndex * 0.05 },
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
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
}

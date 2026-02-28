import React from "react";
import {
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { IoMdMail } from "react-icons/io";

const socials = [
    {
        url: "https://www.linkedin.com/in/gungdeaditya",
        icon: <FaLinkedin className="w-5 h-5" />,
        label: "LinkedIn",
    },
    {
        url: "https://github.com/gungdeaditya",
        icon: <FaGithub className="w-5 h-5" />,
        label: "GitHub",
    },
    {
        url: "mailto:gunkdep@gmail.com",
        icon: <IoMdMail className="w-5 h-5" />,
        label: "Email",
    },
];

const Footer = ({ pathname = "" }: { pathname?: string }) => {
    return (
        <footer id="contact" className="relative mt-auto w-full px-10 lg:px-2 flex flex-col justify-center items-center py-24 z-10 overflow-hidden font-inter scroll-mt-24">
            {/* Background glowing lines effect using SVG */}
            <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-30 z-0 flex justify-center items-end overflow-hidden">
                <svg className="w-full h-full min-w-[1200px] object-cover" viewBox="0 0 1200 600" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="gradient-line" x1="50%" y1="0%" x2="50%" y2="100%">
                            <stop offset="0%" stopColor="var(--color-primary-500)" stopOpacity="0" />
                            <stop offset="50%" stopColor="var(--color-primary-500)" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="var(--color-primary-500)" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <g transform="translate(600, 700)">
                        {[...Array(20)].map((_, i) => (
                            <path
                                key={i}
                                d={`M ${-1000 + i * 50}, -600 Q 0,${-100 - i * 30} ${1000 - i * 50},-600`}
                                fill="none"
                                stroke="url(#gradient-line)"
                                strokeWidth="1"
                                opacity={1 - (i * 0.05)}
                            />
                        ))}
                    </g>
                </svg>
            </div>

            <div className="z-10 flex flex-col items-center w-full relative">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-center mb-16 font-montserrat">
                    Interested in working together?
                </h2>

                <div className="relative flex items-center justify-center mb-16 group">
                    {/* Rotating text wrapper */}
                    <div className="absolute w-[160px] h-[160px] animate-[spin_10s_linear_infinite] group-hover:[animation-play-state:paused] pointer-events-none">
                        <svg viewBox="0 0 100 100" className="w-full h-full text-foreground/80 overflow-visible" fill="currentColor">
                            <defs>
                                <path
                                    id="circlePath"
                                    d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                                />
                            </defs>
                            <text className="text-[12px] font-bold uppercase font-montserrat tracking-[0.25em]">
                                <textPath href="#circlePath" startOffset="0%">
                                    SEND ME AN EMAIL / SEND ME AN EMAIL /
                                </textPath>
                            </text>
                        </svg>
                    </div>

                    {/* Center Button */}
                    <a
                        href="mailto:gunkdep@gmail.com"
                        aria-label="Send me an email"
                        className="w-[60px] h-[60px] rounded-full bg-primary-500 text-white flex items-center justify-center relative z-10 transition-all duration-300 group-hover:scale-110 shadow-[0_0_30px_rgba(3,169,244,0.3)] hover:shadow-[0_0_40px_rgba(3,169,244,0.5)]"
                    >
                        <IoMdMail className="w-8 h-8" />
                    </a>
                </div>

                {/* Social links */}
                <div className="flex space-x-6 items-center">
                    {socials.map((item, idx) => (
                        <a
                            key={`social-${idx}`}
                            href={item.url}
                            rel="noopener noreferrer"
                            target="_blank"
                            aria-label={item.label}
                            className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center text-foreground/80 hover:text-primary-500 hover:border-primary-500 transition-all duration-300 hover:-translate-y-1 bg-transparent"
                        >
                            {item.icon}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;

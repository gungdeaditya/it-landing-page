import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { AnimatePresence, motion } from "framer-motion";
import NavLink from "./NavLink";
import LampButton from "../buttons/LampButton";

export default function Navbar() {
    const [openMenus, setOpenMenus] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-40% 0px -40% 0px" }
        );

        const sectionIds = ["home", "projects", "experiences", "tech-stack", "contact"];
        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, []);

    const closeMenus = () => setOpenMenus(false);

    return (
        <header
            aria-label="Site Header"
            className="bg-white/70 dark:bg-[#111827]/70 backdrop-blur-md border-b-[1px] border-primary-500/10 dark:border-primary-500/20 fixed w-screen z-10 py-6 px-4 xl:px-0 shadow-sm lg:shadow-none transition-all duration-200"
        >
            <div className="mx-auto max-w-screen-xl flex items-center justify-between">
                <div className="flex space-x-2">
                    <a href="/" className="cursor-pointer" onClick={closeMenus}>
                        <h1 className="font-bold text-3xl text-black tracking-tight">
                            <span className="dark:text-white">GUNG </span>
                            <span className="bg-gradient-to-r bg-clip-text from-darkAccent to-primary-700 text-transparent">
                                .dev
                            </span>
                        </h1>
                    </a>
                    <LampButton />
                </div>
                <div className="lg:flex items-center">
                    <nav aria-label="Site Nav" className="hidden lg:block">
                        <ul className="flex items-center gap-6 text-sm font-semibold">
                            <li>
                                <NavLink href="#home" isActive={activeSection === "home" || activeSection === ""}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink href="#projects" isActive={activeSection === "projects"}>Projects</NavLink>
                            </li>
                            <li>
                                <NavLink href="#experiences" isActive={activeSection === "experiences"}>Experiences</NavLink>
                            </li>
                            <li>
                                <NavLink href="#tech-stack" isActive={activeSection === "tech-stack"}>Tech Stack</NavLink>
                            </li>
                            <li>
                                <NavLink href="#contact" isActive={activeSection === "contact"}>Contact Me</NavLink>
                            </li>
                        </ul>
                    </nav>

                    <div className="flex items-center gap-4">
                        <div className="block lg:hidden">
                            <button
                                onClick={() => setOpenMenus((prev) => !prev)}
                                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                            >
                                {openMenus ? (
                                    <GrClose className="text-black" />
                                ) : (
                                    <GiHamburgerMenu className="text-black" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {openMenus && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="block lg:hidden overflow-hidden"
                    >
                        <ul className="flex flex-col gap-6 text-sm font-semibold w-full pt-6 px-2">
                            <li>
                                <NavLink href="#home" onClick={closeMenus} isActive={activeSection === "home" || activeSection === ""}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="#projects" onClick={closeMenus} isActive={activeSection === "projects"}>
                                    Projects
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="#experiences" onClick={closeMenus} isActive={activeSection === "experiences"}>
                                    Experiences
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="#tech-stack" onClick={closeMenus} isActive={activeSection === "tech-stack"}>
                                    Tech Stack
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="#contact" onClick={closeMenus} isActive={activeSection === "contact"}>
                                    Contact Me
                                </NavLink>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

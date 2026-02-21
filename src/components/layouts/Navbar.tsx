import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { AnimatePresence, motion } from "framer-motion";
import NavLink from "./NavLink";
import LampButton from "../buttons/LampButton";

export default function Navbar() {
    const [openMenus, setOpenMenus] = useState(false);

    const closeMenus = () => setOpenMenus(false);

    return (
        <header
            aria-label="Site Header"
            className="bg-white/80 dark:bg-dark/80 backdrop-blur-md fixed w-screen z-50 py-4 px-4 xl:px-0 shadow-sm border-b border-border/40"
        >
            <div className="mx-auto max-w-screen-xl flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <a href="/" className="cursor-pointer" onClick={closeMenus}>
                        <h1 className="font-bold text-2xl lg:text-3xl tracking-tight transition-transform hover:scale-105">
                            <span className="text-foreground">GUNG </span>
                            <span className="bg-gradient-to-r bg-clip-text from-blue-500 to-indigo-600 dark:from-sky-400 dark:to-indigo-500 text-transparent">
                                .dev
                            </span>
                        </h1>
                    </a>
                </div>
                <div className="lg:flex items-center">
                    <nav aria-label="Site Nav" className="hidden lg:block mr-8">
                        <ul className="flex items-center gap-8 text-sm font-semibold">
                            <li>
                                <NavLink href="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink href="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink href="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </nav>

                    <div className="flex items-center gap-4">
                        <LampButton />
                        <div className="block lg:hidden">
                            <button
                                onClick={() => setOpenMenus((prev) => !prev)}
                                className="rounded p-2 text-foreground transition bg-secondary/50 hover:bg-secondary"
                                aria-label="Toggle Menu"
                            >
                                {openMenus ? (
                                    <GrClose className="text-foreground w-5 h-5" />
                                ) : (
                                    <GiHamburgerMenu className="text-foreground w-5 h-5" />
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
                        <ul className="flex flex-col gap-6 text-sm font-semibold w-full pt-6 pb-4 px-2">
                            <li>
                                <NavLink href="/" onClick={closeMenus}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="/about" onClick={closeMenus}>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href="/contact" onClick={closeMenus}>
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

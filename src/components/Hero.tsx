import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="min-h-screen max-w-[840px] flex flex-col justify-center m-auto px-6 2xl:px-0 pt-20">
            <div className="flex space-x-8 justify-between items-center">
                <motion.div
                    className="mt-10"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">Front-End Developer 👋</h1>
                    <p className="text-secondary-foreground dark:text-muted-foreground mt-6 text-lg max-w-lg leading-relaxed">
                        <span className="font-medium text-foreground">{`Hi, I'm Gungde Aditya. Nice to meet you.`}</span>
                        <br />
                        <br />
                        <span>
                            A passionate front-end developer coding professionally since
                            2018, based in Jakarta, Indonesia 📍
                        </span>
                    </p>
                    <div className="flex space-x-4 mt-8">
                        <a
                            href="https://www.linkedin.com/in/gungdeaditya"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-secondary/50 hover:bg-secondary rounded-full transition-colors text-foreground hover:text-primary"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin className="w-6 h-6" />
                        </a>
                        <a
                            href="https://www.github.com/gungdeaditya"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-secondary/50 hover:bg-secondary rounded-full transition-colors text-foreground hover:text-primary"
                            aria-label="GitHub"
                        >
                            <FaGithub className="w-6 h-6" />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <img
                        className="rounded-full border-[6px] border-primary/10 shadow-xl hidden lg:block hover:scale-105 transition-transform duration-500"
                        src="/images/profile.jpg"
                        alt="Avatar"
                        width={240}
                        height={240}
                    />
                </motion.div>
            </div>

            <motion.div
                className="mt-24 space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <p className="text-lg font-semibold text-center uppercase tracking-widest text-muted-foreground">Playground:</p>
                <p className="text-center text-secondary-foreground dark:text-muted-foreground bg-secondary/30 py-3 px-6 rounded-2xl mx-auto w-fit border border-border/50">
                    🧑🏻‍💻 React, React Native, Ionic, Cordova, Next JS, Vue.js, Vitesse
                </p>
            </motion.div>
        </section>
    );
}

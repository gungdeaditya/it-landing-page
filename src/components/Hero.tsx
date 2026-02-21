import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="min-h-screen max-w-[840px] flex flex-col justify-center m-auto px-4 2xl:px-0">
            <div className="flex space-x-8 justify-between">
                <div className="mt-10">
                    <h1 className="text-4xl font-bold">Front-End Developer 👋</h1>
                    <p className="text-[#757575] dark:text-gray-400 mt-4">
                        <span>{`Hi, I'm Gungde Aditya. Nice to meet you.`}</span>
                        <br />
                        <span>
                            A passionat front-end developer and professional coding since
                            2018, based in Jakarta, Indonesia 📍
                        </span>
                    </p>
                    <div className="flex space-x-2 mt-4">
                        <a
                            href="https://www.linkedin.com/in/gungdeaditya"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:opacity-100 opacity-70"
                        >
                            <FaLinkedin className="w-6 h-6" />
                        </a>
                        <a
                            href="https://www.github.com/gungdeaditya"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:opacity-100 opacity-70"
                        >
                            <FaGithub className="w-6 h-6" />
                        </a>
                    </div>
                </div>
                <img
                    className="avatar-fancy-shape rounded-full border-[4px] border-black dark:border-gray-200 hidden lg:block"
                    src="/images/profile.jpg"
                    alt="Avatar"
                    width={240}
                    height={240}
                />
            </div>
            <p className="text-lg font-semibold text-center mt-20">Playground:</p>
            <p className="text-center text-[#757575] dark:text-gray-400">
                🧑🏻‍💻 React, React Native, Expo, Next JS, Astro, ExpresssJS, Supabase, PostgreSQL
            </p>
        </section>
    );
}

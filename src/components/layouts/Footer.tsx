import React from "react";
import CircleIconButton from "@/components/buttons/CircleIconButton";
import {
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaTelegramPlane,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdCopyright } from "react-icons/md";

const socials = [
    {
        url: "https://www.linkedin.com/in/gungdeaditya",
        icon: <FaLinkedin className="w-5 h-5" />,
        label: "LinkedIn"
    },
    {
        url: "https://github.com/gungdeaditya",
        icon: <FaGithub className="w-5 h-5" />,
        label: "GitHub"
    },
    {
        url: "https://www.instagram.com/gungdeaditya/",
        icon: <FaInstagram className="w-5 h-5" />,
        label: "Instagram"
    },
    {
        url: "https://t.me/gungdeaditya",
        icon: <FaTelegramPlane className="w-5 h-5" />,
        label: "Telegram"
    },
    {
        url: "mailto:gunkdep@gmail.com",
        icon: <IoMdMail className="w-5 h-5" />,
        label: "Email"
    },
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-auto w-full bg-secondary/30 border-t border-border/40 px-10 lg:px-2 flex flex-col items-center py-16 space-y-8">
            <h3 className="text-lg lg:text-2xl text-muted-foreground text-center font-medium max-w-xl">
                Living, learning & leveling up is part of the process.
            </h3>

            <div className="flex space-x-4">
                {socials.map((item, idx) => (
                    <a
                        key={`social-${idx}`}
                        href={item.url}
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label={item.label}
                    >
                        <CircleIconButton className="w-12 h-12 hover:-translate-y-1 transition-transform bg-background">
                            {item.icon}
                        </CircleIconButton>
                    </a>
                ))}
            </div>

            <div className="pt-8 text-center space-y-4">
                <div className="flex text-sm lg:text-base text-muted-foreground text-center items-center justify-center space-x-2">
                    <MdCopyright className="w-5 h-5" />
                    <span>{currentYear}</span>
                    <span>|</span>
                    <span>Handcrafted by me</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

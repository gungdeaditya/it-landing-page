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
        icon: <FaLinkedin className="w-6 h-6" />,
        label: "LinkedIn",
    },
    {
        url: "https://github.com/gungdeaditya",
        icon: <FaGithub className="w-6 h-6" />,
        label: "GitHub",
    },
    {
        url: "https://www.instagram.com/gungdeaditya/",
        icon: <FaInstagram className="w-6 h-6" />,
        label: "Instagram",
    },
    {
        url: "https://t.me/gungdeaditya",
        icon: <FaTelegramPlane className="w-6 h-6" />,
        label: "Telegram",
    },
    {
        url: "mailto:gunkdep@gmail.com",
        icon: <IoMdMail className="w-6 h-6" />,
        label: "Email",
    },
];

const Footer = () => {
    return (
        <footer className="mt-auto w-full bg-primary-50 dark:bg-dark px-10 lg:px-2 flex flex-col items-center py-[10vh] space-y-4">
            <h3 className="text-lg lg:text-2xl text-[#757575]">
                Living learning & Leveling up is part of the process
            </h3>
            <div className="flex space-x-2">
                {socials.map((item, idx) => (
                    <a
                        key={`social-${idx}`}
                        href={item.url}
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label={item.label}
                    >
                        <CircleIconButton className="w-12 h-12">
                            {item.icon}
                        </CircleIconButton>
                    </a>
                ))}
            </div>
            <div className="pt-10 text-center space-y-4">
                <div className="flex text-sm lg:text-base text-[#757575] text-center items-center space-x-2">
                    <MdCopyright className="w-5 h-5" />
                    <span className="">{"2024"}</span>
                    <span>|</span>
                    <span>{"Handcrafted by me"}</span>
                    <br />
                </div>
            </div>
        </footer>
    );
};

export default Footer;

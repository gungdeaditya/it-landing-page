import React from "react";
import { SlShareAlt } from "react-icons/sl";
import { FaMobileAlt, FaBug, FaDatabase, FaRocket } from "react-icons/fa";
import { MdOutlineLaptopMac } from "react-icons/md";
import { IoIosApps } from "react-icons/io";
import HoverEffectImage from "../components/images/HoverEffectImage";
import { twMerge } from "tailwind-merge";

export function ContactMeSection() {
    return (
        <div className="flex flex-col items-center justify-center py-[20vh] px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center tracking-tight">
                Interested in collaborating with me?
            </h2>
            <p className="mt-6 text-center text-muted-foreground text-lg max-w-2xl">
                I'm always open to discussing project or partnership opportunities. Let's build something amazing together.
            </p>
            <a
                href="/contact"
                className="mt-10 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 py-2"
            >
                Send Me a Message
            </a>
        </div>
    );
}

export function RecentWorkSection() {
    const datas = [
        {
            desc: "Loan Eform System, making an Eksternal of Brispot Platform, allowing users to propose loan, and tracking its system",
            actions: [{ title: "loan.bri.co.id", href: "https://loan.bri.co.id" }],
            logo: (
                <img
                    width={80}
                    height={40}
                    src="/images/logo-bri.png"
                    alt="Logo BRI"
                />
            ),
        },
        {
            desc: "E-commerce for UKM traders. A mobile app designed for users to transact goods managed by UKM players.",
            actions: [
                { title: "yukjualbeli.com", href: "https://yukjualbeli.com" },
                { title: "PlayStore", href: "https://play.google.com/store" },
            ],
            logo: (
                <img
                    width={200}
                    height={50}
                    src="/images/logo-yukjualbeli.png"
                    alt="Logo YukJualBeli"
                />
            ),
        },
        {
            desc: "An application aimed at members of HIPMI (Indonesian Young Entrepreneurs Association)",
            actions: [{ title: "AppStore", href: "https://apps.apple.com" }],
            logo: (
                <div className="flex space-x-4 items-center">
                    <img width={40} height={40} src="/images/logo-hipmi.png" alt="Logo Hipminet" />
                    <span className="text-2xl text-[#1566e5] font-bold">HIPMINET</span>
                </div>
            ),
        },
        {
            desc: "Application that supports the needs of Marugame customers in ordering menus, equipped with a payment gateway.",
            actions: [
                { title: "PlayStore", href: "https://play.google.com" },
                { title: "AppStore", href: "https://apps.apple.com" },
            ],
            logo: (
                <img width={250} height={70} src="/images/logo-marugameudon.jpeg" alt="Logo Marugame Udon" />
            ),
        },
        {
            desc: "Professional psychology consultant application intended for users who have serious problems related to mental illness.",
            actions: [{ title: "PlayStore", href: "https://play.google.com" }],
            logo: (
                <div className="flex space-x-4 items-center">
                    <img width={36} height={36} src="/images/logo-fia.webp" alt="Logo FIA" />
                    <span className="text-2xl text-[#d82685] font-bold">Female In Action</span>
                </div>
            ),
        },
        {
            desc: "Medical Report application, used to monitor diabetes symptoms, medication reminders, to health records.",
            actions: [
                { title: "PlayStore", href: "https://play.google.com" },
                { title: "AppStore", href: "https://apps.apple.com" },
            ],
            logo: (
                <img width={200} height={50} src="/images/logo-klikdiabetes.png" alt="Logo Klik Diabetes" />
            ),
        },
        {
            desc: "CRM application that is used by Prudential agents in managing customer development, conducting prospects.",
            actions: [
                { title: "PlayStore", href: "https://play.google.com" },
                { title: "AppStore", href: "https://apps.apple.com" },
            ],
            logo: (
                <div className="flex space-x-4 items-center">
                    <img width={70} height={70} src="/images/logo-pru.png" alt="Logo Pruforce" />
                    <span className="text-2xl text-[#eb1d32] font-bold">Pruforce</span>
                </div>
            ),
        },
        {
            desc: "An app for managing the rest of the Kuman product system. Give the opportunity of micro-segment of UKM.",
            actions: [{ title: "PlayStore", href: "https://play.google.com" }],
            logo: (
                <div className="flex space-x-2 items-center">
                    <img width={50} height={50} src="/images/logo-kuman.png" alt="Logo Kuman" />
                    <span className="text-2xl text-[#67bb6a] font-bold">Kuman</span>
                </div>
            ),
        },
        {
            desc: "E-procurement app tool that is used to facilitate access, such as: Purchasing Requisition, Tender Management.",
            actions: [{ title: "PlayStore", href: "https://play.google.com" }],
            logo: (
                <img width={140} height={40} src="/images/logo-procurago.png" alt="Logo Procura GO" />
            ),
        },
    ];

    return (
        <section className="flex flex-col items-center">
            <div className="bg-secondary/30 dark:bg-card/50 w-full pt-36 pb-72 px-4 border-y border-border/50">
                <div className="max-w-screen-xl m-auto flex flex-col items-center">
                    <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">Recent Works</h2>
                    <p className="max-w-screen-lg text-center mt-6 text-lg text-muted-foreground">
                        All around software engineering, web development, and career development
                    </p>
                </div>
            </div>
            <div className="max-w-screen-xl -mt-40 px-4 xl:px-0 z-10 w-full">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {datas.map((item, idx) => (
                        <div
                            key={`recent-work-${idx}`}
                            className="bg-card text-card-foreground border border-border shadow-sm rounded-xl p-8 flex flex-col items-center space-y-6 hover:shadow-md transition-shadow"
                        >
                            <div className="h-20 flex items-center justify-center">
                                {item.logo}
                            </div>
                            <p className="text-sm text-center text-muted-foreground flex-grow">{item?.desc || ""}</p>
                            <div className="flex flex-wrap justify-center gap-2 w-full pt-4 border-t border-border/50">
                                {item.actions.map((action, actionIdx) => (
                                    <a
                                        key={`recent-work-badge-${idx}${actionIdx}`}
                                        href={action.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-xs font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md py-2 px-3 transition-colors"
                                    >
                                        <SlShareAlt className="mr-2" />
                                        {action.title}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function TechStackSection() {
    const datas = [
        {
            title: "Web Developer",
            icon: <MdOutlineLaptopMac className="text-4xl text-primary-foreground" />,
            desc: "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
            section_1_title: "Languages I speak:",
            section_1_desc: "HTML, CSS, Tailwind CSS, SCSS, JavaScript, TypeScript, npm/yarn/pnpm",
            section_2_title: "Dev Tools and Framework",
            section_2_items: [
                "React/Next JS/Vite",
                "Vue JS, Vitesse, Pinia, Vite",
                "Progressive Web Apps (PWA)",
                "React Router",
                "Radix UI, Headless UI, Shadcn UI",
                "Redux/Saga/Toolkit",
                "SWR/React Query",
                "Vitest, React Testing Library",
            ],
        },
        {
            title: "Mobile / Apps Developer",
            icon: <IoIosApps className="text-4xl text-primary-foreground" />,
            desc: "I can create both sides apps, Android & iOS, using the hybrid framework that works really fast and maintainable",
            section_1_title: "Languages I speak:",
            section_1_desc: "JavaScript, TypeScript, npm/yarn/pnpm",
            section_2_title: "Dev Tools and Framework",
            section_2_items: [
                "React Native/Expo",
                "Native Wind, React Native Paper",
                "React Navigation",
                "Redux/Saga/Toolkit",
                "Redux Toolkit Query",
                "Flipper",
                "Jest, React Testing Library",
            ],
        },
        {
            title: "Services and Other",
            icon: <FaRocket className="text-4xl text-primary-foreground" />,
            desc: "For the services and deployment way, I choose the perfect combination of CI/CD method",
            section_1_title: "Languages I speak:",
            section_1_desc: "JavaScript, TypeScript, Node JS, Python",
            section_2_title: "Dev Tools and Framework",
            section_2_items: [
                "Express",
                "MySQL, PostgreSQL",
                "Vercel, Netlify",
                "Firebase, Various Analytics",
                "Slack, VS Code, Markdown, Git, GitHub/GitLab",
                "GitHub Actions, Docker",
            ],
        },
    ];

    const yearExperiences = new Date().getFullYear() - 2018;

    return (
        <section className="flex flex-col items-center pt-20">
            <div className="bg-secondary/30 dark:bg-card/50 w-full pt-36 pb-72 px-4 border-y border-border/50">
                <div className="max-w-screen-xl m-auto flex flex-col items-center">
                    <p className="text-lg text-primary font-medium tracking-wide uppercase mb-2">Let's talk...</p>
                    <h2 className="text-4xl lg:text-5xl font-bold text-center tracking-tight">
                        About My{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-sky-400 dark:to-indigo-500">
                            Tech Stack
                        </span>
                    </h2>
                    <p className="max-w-screen-lg text-center mt-8 text-lg text-muted-foreground leading-relaxed">
                        {`I have been involved in professional coding development for over ${yearExperiences} years, 
              doing remote work for agencies, mentoring, and collaborating with talented people to create 
              digital products for both business and consumer needs. I'm quietly confident, naturally curious, 
              and perpetually focused on completing projects to accepted industry standards.`}
                    </p>
                </div>
            </div>

            <div className="max-w-screen-xl -mt-40 px-4 xl:px-0 z-10 w-full">
                <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-border bg-card shadow-lg rounded-2xl border border-border">
                    {datas.map((item, index) => (
                        <div
                            key={`tech-stack-${index}`}
                            className="flex flex-col items-center px-8 py-12 lg:py-16 space-y-8"
                        >
                            <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center shadow-md rotate-3 transition-transform hover:rotate-6">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-center">
                                {item.title}
                            </h3>
                            <p className="text-center text-muted-foreground">
                                {item.desc}
                            </p>

                            <div className="w-full space-y-6 pt-6 border-t border-border/50">
                                <div className="space-y-2 text-center">
                                    <h4 className="text-primary font-semibold text-lg">{item.section_1_title}</h4>
                                    <p className="text-foreground font-medium">
                                        {item.section_1_desc}
                                    </p>
                                </div>

                                <div className="space-y-4 text-center">
                                    <h4 className="text-primary font-semibold text-lg">{item.section_2_title}</h4>
                                    <ul className="space-y-2">
                                        {item.section_2_items.map((stackItem, stackIndex) => (
                                            <li
                                                key={`-${index}-${stackIndex}`}
                                                className="text-muted-foreground"
                                            >
                                                {stackItem}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function WorkExperienceSection() {
    return (
        <section className="max-w-screen-xl m-auto flex flex-col justify-center items-center py-32 space-y-16 px-6 lg:px-0">
            <h2 className="text-3xl font-bold text-center text-muted-foreground">
                {`I'm proud to have experience working with some awesome companies:`}
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 w-full gap-12 lg:gap-20 items-center justify-items-center opacity-70 hover:opacity-100 transition-opacity duration-500">
                <img
                    className="grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105"
                    width={180}
                    height={90}
                    src="/images/logo-bri.png"
                    alt="Logo BRI"
                />
                <img
                    className="grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105"
                    width={180}
                    height={90}
                    src="/images/logo-barito.png"
                    alt="Logo Barito"
                />
                <img
                    className="grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105"
                    width={180}
                    height={90}
                    src="/images/logo-kampus-merdeka.png"
                    alt="Logo Kampus Merdeka"
                />
                <img
                    className="grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105"
                    width={180}
                    height={90}
                    src="/images/logo-procura.png"
                    alt="Logo Procura"
                />
            </div>
        </section>
    );
}

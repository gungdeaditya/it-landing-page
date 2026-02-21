import React from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

export default function AboutMe() {
    const datas = [
        {
            title: "Freelancer",
            desc: "Actively freelancer, bridging businesses, concepts in designing application systems, web and infrastructure. I'm passionate about transforming ideas into stunning websites, and always using the latest technologies. Let's collaborate and create a digital masterpiece that reflects your brand, engages your audience, and drives results.",
            timeline: "Present",
            stacks: [],
        },
        {
            title: "Pro-hired Frontend Engineer @ PT Bank Rakyat Indonesia",
            desc: "Developing front-end web app solutions in Banks Product with React/Next.js framework.",
            timeline: "2022 - Present",
            stacks: ["React JS", "Next JS", "Typescript", "Progressive Web Apps (PWA)", "Unit Test", "Redux", "Docker", "Tailwind CSS"],
        },
        {
            title: "Education Mentor @ Kampus Merdeka",
            desc: "Working as a mentor in teaching 5-10 students, the syllabus introduced conceptions of basic Javascript into the implementation of React Native in developing applications on mobile platforms.",
            timeline: "Aug - Dec 2022",
            stacks: ["React JS", "React Native", "Typescript", "Redux", "Expo", "Android", "iOS", "Unit Test"],
        },
        {
            title: "Associate Frontend Engineer @ PT Barito Integra Teknologi",
            desc: "BIT is an IT Consultant who handles various types of national and even international clients. Handling 5 product variations in the last 2 years with the Operations and Developer Team, such as Tech Insurance App, Health Care, Construction, and other internal applications.",
            timeline: "2020 - 2022",
            stacks: ["React JS", "Typescript", "React Native", "Redux", "Android", "iOS", "Cordova", "Ionic", "Unit Test"],
        },
        {
            title: "Frontend Engineer @ ProcurA",
            desc: "Worked with Product Team on business specifications around e-procurement tools management, such as Vendor Management, Purchasing Requisition, Tender Management, Dashboard, until Purchasing Order.\n\nDevelop a secondary project engaged in Cloud Service, that contains cloud hosting report and performance using Vue JS, Vuex as State Management, and Typescript.",
            timeline: "2019 - 2020",
            stacks: ["React JS", "React Native", "Vue JS", "Typescript", "Redux", "Android", "iOS"],
        },
        {
            title: "Frontend Engineer @ PT Ebaba Indonesia",
            desc: "Developing and Maintaining e-commerce system using React Native with special features, OOTD, and merchant.",
            timeline: "Oct 2018 - Mar 2019",
            stacks: ["React Native", "Redux", "Android", "iOS"],
        },
        {
            title: "Mobile Developer and Developer Trainer @ Code Margonda",
            desc: "Community builder, collaborate, mentoring, coding Bootcamp, workshop, and building product in startup program.",
            timeline: "2016 - 2018",
            stacks: ["React Native", "Redux", "Android", "Java", "Kotlin", "iOS"],
        },
        {
            title: "Software Engineer @ Muztreat",
            desc: "Muztreat is a startup business that engaged in User Care and Treatment. Currently, as Android Developer, and focus on growth and sustainability.",
            timeline: "2016 - 2018",
            stacks: ["Android", "Java", "Kotlin"],
        },
        {
            title: "Software Engineer @ Jakarta Smart City",
            desc: "Very good culture, directly involved in the project of Smart City. The project is created by supporting the regulated standardization.",
            timeline: "Jan - Apr 2017",
            stacks: ["Android", "Java", "Kotlin"],
        },
        {
            title: "Facilitator IAK @ Kibar",
            desc: "Indonesia Android Kejar is a part of the program that initiated by the government to mentoring, shares the knowledge for everyone to be a developer especially in Android Developer. A Thousand participants are separated into a study group and lead by the Facilitator.\n\nGreat opportunity and a good way how to share to the participant with a different culture basically. Leading the study group for less than 3 months and bring the group into Hackathon.",
            timeline: "Mar - May 2016",
            stacks: ["Android", "Java", "Kotlin"],
        },
    ];

    return (
        <main className="min-h-screen max-w-4xl flex flex-col justify-center m-auto pt-40 pb-20 px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl lg:text-5xl font-bold text-center lg:text-left tracking-tight mb-16">
                    About Me.
                </h1>
            </motion.div>

            <div className="relative border-l border-border ml-4 md:ml-6">
                {datas.map((item, idx) => (
                    <motion.div
                        key={`about-${idx}`}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="mb-12 ml-8 relative"
                    >
                        <span
                            className={twMerge(
                                "absolute flex items-center justify-center w-8 h-8 rounded-full -left-12 ring-4 ring-background",
                                idx === 0
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-muted text-muted-foreground border border-border"
                            )}
                        >
                            {idx === 0 && (
                                <svg
                                    aria-hidden="true"
                                    className="w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            )}
                        </span>

                        <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                                <h3 className="text-xl font-semibold text-foreground leading-tight">
                                    {item.title}
                                </h3>
                                <span className="text-sm font-medium text-muted-foreground md:text-right whitespace-nowrap bg-secondary/50 px-3 py-1 rounded-full w-fit">
                                    {item.timeline}
                                </span>
                            </div>

                            <p className="text-muted-foreground leading-relaxed whitespace-pre-line mb-6">
                                {item.desc}
                            </p>

                            {item.stacks && item.stacks.length > 0 && (
                                <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                                    {item.stacks.map((val, stackIdx) => (
                                        <span
                                            key={`about-badge-${idx}-${stackIdx}`}
                                            className="px-3 py-1 rounded-md text-xs font-medium bg-secondary text-secondary-foreground"
                                        >
                                            {val}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </main>
    );
}

import React from "react";
import { twMerge } from "tailwind-merge";

export default function AboutMe() {
    const datas = [
        {
            title: "Freelancer",
            desc: "Actively freelancer, bridging businesses, consepts in designing application \
      systems, web and infrastructure. I'm passionate about transforming ideas into stunning \
      websites, and always using the latest technologies. Let's collaborate and create a digital \
      masterpiece that reflects your brand, engages your audience, and drives results.",
            timeline: "Present",
            stacks: [],
        },
        {
            title: "Pro-hired Frontend Engineer @ PT Bank Rakyat Indonesia",
            desc: "Developing front-end web app solutions in Banks Product with React/Next.js framework",
            timeline: "2022 - Present",
            stacks: [
                "React JS",
                "Next JS",
                "Typescript",
                "Progressive Web Apps (PWA)",
                "Unit Test",
                "Redux",
                "Docker",
                "Tailwind CSS",
            ],
        },
        {
            title: "Education Mentor @ Kampus Merdeka",
            desc: "Working as a mentor in teaching 5 - 10 students, the syllabus \
      introduced conceptions of basic Javascript into the implementation of \
      React Native in developing applications on mobile platformsWorking as \
      a mentor in teaching 5 - 10 students, the syllabus introduced conceptions \
      of basic Javascript into the implementation of React Native in developing \
      applications on mobile platforms.",
            timeline: "Aug - Dec 2022",
            stacks: [
                "React JS",
                "React Native",
                "Typescript",
                "Redux",
                "Expo",
                "Android",
                "iOS",
                "Unit Test",
            ],
        },
        {
            title: "Associate Frontend Engineer @ PT Barito Integra Teknologi",
            desc: "BIT is an IT Consultant who handles various types of national and even \
      international clients. Handling 5 product variations in the last 2 years with \
      the Operations and Developer Team, such as Tech Insurance App, Health Care, \
      Construction, and other internal applications.BIT is an IT Consultant who handles \
      various types of national and even international clients. Handling 5 product \
      variations in the last 2 years with the Operations and Developer Team, such as Tech Insurance App, \
      Health Care, Construction, and other internal applications.",
            timeline: "2020 - 2022",
            stacks: [
                "React JS",
                "Typescript",
                "React Native",
                "Redux",
                "Android",
                "iOS",
                "Cordova",
                "Ionic",
                "Unit Test",
            ],
        },
        {
            title: "Frontend Engineer @ ProcurA",
            desc: "Worked with Product Team on business specifications around e-procurement tools management, \
      such as Vendor Management, Purchasing Requisition, Tender Management, Dashboard, \
      until Purchasing Order. \n\n \
      Develop a secondary project engaged in Cloud Service, that contains cloud hosting \
      report and performance using Vue JS, Vuex as State Management, and Typescript- Worked \
      with Product Team on business specifications around e-procurement tools management, \
      such as Vendor Management, Purchasing Requisition, Tender Management, Dashboard, \
      until Purchasing Order. - Develop a secondary project engaged in Cloud Service, \
      that contains cloud hosting report and performance using Vue JS, Vuex as State Management, \
      and Typescript",
            timeline: "2019 - 2020",
            stacks: [
                "React JS",
                "React Native",
                "Vue JS",
                "Typescript",
                "Redux",
                "Android",
                "iOS",
            ],
        },
        {
            title: "Frontend Engineer @ PT Ebaba Indonesia",
            desc: "Developing and Maintaining e-commerce system using React Native with special features, \
      OOTD, and merchant- Developing and Maintaining e-commerce system using React Native with special \
      features, OOTD, and merchant",
            timeline: "Oct 2018 - Mar 2019",
            stacks: ["React Native", "Redux", "Android", "iOS"],
        },
        {
            title: "Mobile Developer and Developer Trainer @ Code Margonda",
            desc: "Community builder, collaborate, mentoring, coding Bootcamp, workshop, and building product in startup program",
            timeline: "2016 - 2018",
            stacks: ["React Native", "Redux", "Android", "Java", "Kotlin", "iOS"],
        },
        {
            title: "Software Engineer @ Muztreat",
            desc: "Muztreat is a startup business that engaged in User Care and Treatment. Currently, \
      as Android Developer, and focus on growth and sustainability",
            timeline: "2016 - 2018",
            stacks: ["Android", "Java", "Kotlin"],
        },
        {
            title: "Software Engineer @ Jakarta Smart City",
            desc: "Very good culture, directly involved in the project of Smart City. \
      The project is created by supporting the regulated standardization",
            timeline: "Jan - Apr 2017",
            stacks: ["Android", "Java", "Kotlin"],
        },
        {
            title: "Facilitator IAK @ Kibar",
            desc: "Indonesia Android Kejar is a part of the program that initiated \
      by the government to mentoring, shares the knowledge for everyone to be a \
      developer especially in Android Developer. A Thousand participants are \
      separated into a study group and lead by the Facilitator. \n\n\
      Great opportunity and a good way how to share to the participant with a \
      different culture basically. Leading the study group for less than 3 months \
      and bring the group into Hackathon.",
            timeline: "Mar - May 2016",
            stacks: ["Android", "Java", "Kotlin"],
        },
    ];
    return (
        <main className="min-h-screen max-w-[840px] flex flex-col justify-center m-auto space-y-10 py-[calc(80px+10vh)] px-4 lg:px-0 mt-16">
            <h1 className="text-2xl lg:text-4xl font-bold text-center lg:text-start">About Me.</h1>
            <ol className="relative text-[#757575] border-l border-gray-200 dark:border-[#374251] dark:text-gray-400 mx-10">
                {datas.map((item, idx) => (
                    <li key={`about-${idx}`} className="mb-4 ml-6">
                        <span
                            className={twMerge(
                                "absolute flex items-center justify-center w-8 h-8 bg-primary-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-primary-900",
                                idx !== 0 && "bg-gray-100 dark:bg-[#374251]"
                            )}
                        >
                            {idx === 0 && (
                                <svg
                                    aria-hidden="true"
                                    className="w-5 h-5 text-white dark:text-primary-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            )}
                        </span>
                        <div className="space-y-4 pt-2">
                            <div className="flex justify-between">
                                <h2 className="text-gray-700 dark:text-gray-100 leading-tight font-semibold">
                                    {item.title}
                                </h2>
                                <span className="text-[#757575] text-xs font-semibold dark:text-gray-600 text-right">
                                    {item.timeline}
                                </span>
                            </div>
                            <p className="text-sm text-justify whitespace-pre-line text-[#757575] dark:text-gray-400">
                                {item.desc}
                            </p>
                            {item.stacks && item.stacks.length > 0 && (
                                <div className="flex gap-2 flex-wrap">
                                    {item.stacks.map((val, idx) => (
                                        <span
                                            key={`about-badge-${idx}`}
                                            className={twMerge(
                                                "font-mono px-4 py-1 rounded-full text-[#757575] dark:text-darkAccent text-xs bg-primary-50 dark:bg-[#123142]"
                                            )}
                                        >
                                            {val}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </li>
                ))}
            </ol>
        </main>
    );
}

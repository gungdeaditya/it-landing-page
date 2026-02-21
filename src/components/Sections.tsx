import React from "react";
import { SlShareAlt } from "react-icons/sl";
import { FaMobileAlt, FaBug, FaDatabase, FaRocket } from "react-icons/fa";
import { MdOutlineLaptopMac } from "react-icons/md";
import { IoIosApps } from "react-icons/io";
import HoverEffectImage from "../components/images/HoverEffectImage";
import { twMerge } from "tailwind-merge";

export function ContactMeSection() {
    return (
        <div className="flex flex-col items-center justify-center py-[20vh]">
            <h2 className="text-2xl font-bold">
                Interested in collaborating with me?
            </h2>
            <p className="mt-4 text-center text-[#757575] dark:text-gray-400">
                I’m always open to discussing project or partnership opportunities.
            </p>
            <a
                href="/contact"
                type="button"
                className="transition-all mt-10 text-primary-500 hover:text-white border border-primary-500 hover:bg-primary-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-lg px-7 py-3 text-center dark:border-primary-500 dark:text-primary-500 dark:hover:text-white dark:hover:bg-primary-500 dark:focus:ring-blue-800"
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
                // style={{ width: 200, height: 100 }}
                />
            ),
        },
        {
            desc: "E-commerce for UKM traders. A mobile app designed for users to transact goods managed by UKM players, can be found in the YukJualBeli application.",
            actions: [
                { title: "yukjualbeli.com", href: "https://yukjualbeli.com" },
                {
                    title: "PlayStore",
                    href: "https://play.google.com/store/apps/details?id=com.yukjualbeli.app",
                },
            ],
            logo: (
                <img
                    width={200}
                    height={50}
                    src="/images/logo-yukjualbeli.png"
                    alt="Logo YukJualBeli"
                    className="object-cover"
                />
            ),
        },
        {
            desc: "An application aimed at members of HIPMI (Indonesian Young Entrepreneurs Association)",
            actions: [
                {
                    title: "AppStore",
                    href: "https://apps.apple.com/id/app/hipminet/id1549669510",
                },
            ],
            logo: (
                <div className="flex space-x-4 items-center">
                    <img
                        width={40}
                        height={40}
                        src="/images/logo-hipmi.png"
                        alt="Logo Hipminet"
                        className="object-cover"
                    />
                    <span className="text-2xl text-[#1566e5] font-bold">HIPMINET</span>
                </div>
            ),
        },
        {
            desc: "Application that supports the needs of Marugame customers in ordering menus, and related matters about merchants. Developing an online order feature equipped with a payment gateway.",
            actions: [
                {
                    title: "PlayStore",
                    href: "https://play.google.com/store/apps/details?id=com.marugameudon.mobile",
                },
                {
                    title: "AppStore",
                    href: "https://apps.apple.com/id/app/marugame-udon/id1481435175",
                },
            ],
            logo: (
                <img
                    width={250}
                    height={70}
                    src="/images/logo-marugameudon.jpeg"
                    alt="Logo Marugame Udon"
                    className="object-cover"
                />
            ),
        },
        {
            desc: "Professional psychology consultant application intended for users who have serious problems related to mental illness. FIA support other features, such as: related events, psychological tracker, and news.",
            actions: [
                {
                    title: "PlayStore",
                    href: "https://play.google.com/store/apps/details?id=com.femaleinaction.app&hl=en&gl=US",
                },
            ],
            logo: (
                <div className="flex space-x-4 items-center">
                    <img
                        width={36}
                        height={36}
                        src="/images/logo-fia.webp"
                        alt="Logo FIA"
                        className="object-cover"
                    />
                    <span className="text-2xl text-[#d82685] font-bold">
                        Female In Action
                    </span>
                </div>
            ),
        },
        {
            desc: "Medical Report application, used to monitor diabetes symptoms, medication reminders, to health records. This application allows us to check diabetes information and its medical reports",
            actions: [
                {
                    title: "PlayStore",
                    href: "https://play.google.com/store/apps/details?id=com.kalbe.klikdiabetes",
                },
                {
                    title: "AppStore",
                    href: "https://apps.apple.com/id/app/klik-diabetes/id1541593080?l=id",
                },
            ],
            logo: (
                <img
                    width={200}
                    height={50}
                    src="/images/logo-klikdiabetes.png"
                    alt="Logo Klik Diabetes"
                    className="object-cover"
                />
            ),
        },
        {
            desc: "CRM application that is used by Prudential agents in managing customer development, conducting prospects and other matters related to Prudential products. ",
            actions: [
                {
                    title: "PlayStore",
                    href: "https://play.google.com/store/apps/details?id=vn.com.prudential.pruforce.dev&hl=en&gl=US",
                },
                {
                    title: "AppStore",
                    href: "https://apps.apple.com/id/app/pruforce-mobile/id1082618139",
                },
            ],
            logo: (
                <div className="flex space-x-4 items-center">
                    <img
                        width={70}
                        height={70}
                        src="/images/logo-pru.png"
                        alt="Logo Pruforce"
                        className="object-cover"
                    />
                    <span className="text-2xl text-[#eb1d32] font-bold">Pruforce</span>
                </div>
            ),
        },
        {
            desc: "An app for managing the rest of the Kuman product system. Give the opportunity of micro-segment of UKM to develop their business.",
            actions: [
                {
                    title: "PlayStore",
                    href: "https://play.google.com/store/apps/details?id=com.kumanapp&hl=en&gl=US",
                },
            ],
            logo: (
                <div className="flex space-x-1 items-center">
                    <img
                        width={50}
                        height={50}
                        src="/images/logo-kuman.png"
                        alt="Logo Kuman"
                        className="object-cover"
                    />
                    <span className="text-2xl text-[#67bb6a] font-bold">Kuman</span>
                </div>
            ),
        },
        {
            desc: "E-procurement app tool that is used to facilitate access, such as: Purchasing Requisition, Tender Management, until Purchasing Order",
            actions: [
                {
                    title: "PlayStore",
                    href: "https://play.google.com/store/apps/details?id=com.procura.timah",
                },
            ],
            logo: (
                <img
                    width={140}
                    height={40}
                    src="/images/logo-procurago.png"
                    alt="Logo Procura GO"
                    className="object-cover"
                />
            ),
        },
    ];
    return (
        <section className="flex flex-col items-center">
            <div className="bg-primary-50 dark:bg-darkSecondary w-full pt-36 pb-72">
                <div className="max-w-screen-xl m-auto flex flex-col items-center">
                    <h2 className="text-4xl font-bold">Recent Works</h2>
                    <p className="max-w-screen-lg text-center mt-10 text-[#757575] dark:text-gray-400">
                        All around software engineering, web development, and career
                        development
                    </p>
                </div>
            </div>
            <div className="max-w-screen-xl -mt-28 w-full px-4 lg:px-0">
                <div className="grid lg:grid-cols-3 gap-10">
                    {datas.map((item, idx) => (
                        <div
                            key={`recent-work-${idx}`}
                            className="bg-white dark:bg-dark border-[1px] border-gray-100 dark:border-darkBorder shadow-sm rounded-xl px-9 py-14 flex flex-col items-center space-y-4"
                        >
                            {item.logo}
                            <p className="text-sm text-center flex-grow">{item?.desc || ""}</p>
                            <div className="flex gap-2">
                                {item.actions.map((action, actionIdx) => (
                                    <a
                                        key={`recent-work-badge-${idx}${actionIdx}`}
                                        href={action.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={twMerge(
                                            "font-mono flex bg-primary-50 dark:bg-[#123142] text-primary-700 dark:text-darkAccent rounded-md py-2 px-3 text-sm hover:underline"
                                        )}
                                    >
                                        <SlShareAlt className="text-lg mr-2" />
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

export function RecentWorkSectionHover() {
    const datas = [
        {
            caption: "BRI Eksternal Loan Eform",
            img: "/images/portfolio-brispot.png",
        },
        {
            caption: "YukJualBeli",
            img: "/images/portfolio-yukjualbeli.png",
        },
        {
            caption: "Hipminet",
            icon: <FaMobileAlt className="w-7 h-7 text-primary-500" />,
        },
        {
            caption: "Female In Action",
            icon: <FaBug className="w-7 h-7 text-primary-500" />,
        },
        {
            caption: "Pruforce",
            icon: <FaDatabase className="w-7 h-7 text-primary-500" />,
        },
        {
            caption: "Marugame Udon",
            icon: <FaRocket className="w-7 h-7 text-primary-500" />,
        },
    ];
    return (
        <section className="min-h-screen flex items-center pt-10">
            <div className="max-w-screen-xl m-auto flex flex-col items-center px-4 lg:px-0">
                <h2 className="text-4xl font-bold">My Recent Work</h2>
                <p className="w-screen-lg text-center mt-10 text-[#757575] dark:text-gray-400">
                    {`Here are a few past design projects I've worked on. Want to see more?
            Email me.`}
                </p>
                <div className="grid lg:grid-cols-3 w-full gap-4 mt-10">
                    {datas.map((item, idx) => (
                        <HoverEffectImage
                            key={`recent-work-${idx}`}
                            sizesClassname="w-[400px] h-[300px]"
                            className="col-span-1"
                            src={
                                item?.img ||
                                "https://s3-us-west-2.amazonaws.com/s.cdpn.io/103389/m.jpg"
                            }
                            caption={item.caption}
                            alt=""
                        />
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
            icon: <MdOutlineLaptopMac className="text-[36px]" color="black" />,
            desc: "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
            section_1_title: "Languages I speak:",
            section_1_desc:
                "HTML, CSS, Tailwind CSS, SCSS, JavaScript, TypeScript, npm/yarn/pnpm",
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
            icon: <IoIosApps className="text-[36px]" color="black" />,
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
            icon: <FaRocket className="text-[36px]" color="black" />,
            desc: "For the services and deployment way, I choose the perfect combination of CI/CD method",
            section_1_title: "Languages I speak:",
            section_1_desc: "JavaScript, TypeScript, Node JS, npm/yarn/pnpm",
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
        <section className="flex flex-col items-center pt-10">
            <div className="bg-primary-50 dark:bg-darkSecondary w-full pt-36 pb-72">
                <div className="max-w-screen-xl m-auto flex flex-col items-center">
                    <p className="text-lg">Lets talk...</p>
                    <h2 className="text-4xl font-bold text-center">
                        About My{" "}
                        <span className="bg-gradient-to-r bg-clip-text from-darkAccent to-primary-700 text-transparent">
                            Tech Stack
                        </span>
                    </h2>
                    <p className="max-w-screen-lg text-center mt-10 text-[#757575] dark:text-gray-400 leading-relaxed">
                        {`I have been involved in professional coding development over ${yearExperiences} years ago,
              and I've done remote work for agencies, mentor, and
              collaborated with talented people to create digital products for both
              business and consumer goods. I'm quietly confident, naturally curious,
              and perpetually has an insight into the work of completing projects in accepted standards.`}
                    </p>
                </div>
            </div>
            <div className="max-w-screen-xl -mt-28 px-4 lg:px-0 w-full">
                <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-gray-100 dark:divide-darkBorder w-full bg-white dark:bg-dark shadow-md rounded-2xl border-[1px] border-gray-100 dark:border-darkBorder">
                    {datas.map((item, index) => (
                        <div
                            key={`tech-stack-${index}`}
                            className="col-span-1 flex flex-col items-center px-10 py-10 lg:py-20 space-y-6"
                        >
                            <div className="w-[72px] h-[72px] rounded-full bg-customAccent dark:bg-darkAccent flex items-center justify-center">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-center">
                                {item.title}
                            </h3>
                            <p className="text-center text-[#757575] dark:text-gray-400">
                                {item.desc}
                            </p>
                            <div className="space-y-1 text-center">
                                <h4 className="text-primary-500">{item.section_1_title}</h4>
                                <p className="text-[#757575] dark:text-gray-400">
                                    {item.section_1_desc}
                                </p>
                            </div>
                            <div className="space-y-1 text-center">
                                <h4 className="text-primary-500">{item.section_2_title}</h4>
                                <ul className="space-y-1">
                                    {item.section_2_items.map((stackItem, stackIndex) => (
                                        <li
                                            key={`-${index}-${stackIndex}`}
                                            className="text-[#757575] dark:text-gray-400"
                                        >
                                            {stackItem}
                                        </li>
                                    ))}
                                </ul>
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
        <section className="max-w-screen-xl m-auto flex flex-col justify-center items-center py-[20vh] space-y-20 px-4 lg:px-0">
            <h2 className="text-2xl font-bold text-center">
                {`I'm proud to have experience working with some awesome companies:`}
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 w-full gap-20 items-center">
                <div className="flex justify-center">
                    <img
                        width={200}
                        height={100}
                        src="/images/logo-bri.png"
                        alt="Logo BRI"
                    />
                </div>
                <div className="flex justify-center">
                    <img
                        width={200}
                        height={100}
                        src="/images/logo-barito.png"
                        alt="Logo Barito"
                        className="object-cover"
                    />
                </div>
                <div className="flex justify-center">
                    <img
                        width={200}
                        height={100}
                        src="/images/logo-kampus-merdeka.png"
                        alt="Logo Kampus Merdeka"
                        className="object-cover"
                    />
                </div>
                <div className="flex justify-center">
                    <img
                        width={200}
                        height={100}
                        src="/images/logo-procura.png"
                        alt="Logo Procura"
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
}

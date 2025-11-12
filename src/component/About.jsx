import { useState } from "react";
import img from "../assets/image.jpg";

const tabs = ["Skills", "Experience", "Education"];

const skills = [
  {
    title: "Frontend Development",
    description:
      "Building responsive and dynamic web applications using React.js, Next.js, Tailwind CSS, HTML, CSS, and JavaScript (ES6+).",
  },
  {
    title: "UI/UX Design",
    description:
      "Designing user-focused interfaces and prototypes using Figma and modern design principles to create intuitive, polished experiences.",
  },
  {
    title: "Version Control & Collaboration",
    description:
      "Managing source code and team collaboration using Git, GitHub, and CI/CD workflows for streamlined delivery.",
  },
  {
    title: "API Integration",
    description:
      "Integrating RESTful APIs for real-time data handling and implementing error management in web apps.",
  },
  {
    title: "Database & Backend Basics",
    description:
      "Working knowledge of Firebase, MongoDB, SQL, and Express.js for data management and authentication.",
  },
  {
    title: "Responsive Design & Optimization",
    description:
      "Creating cross-device compatible layouts with reusable React components and performance optimization.",
  },
];

const experiences = [
  {
    title: "Front-End Developer Intern · Logixfirm",
    period: "Oct 2025 - Present",
    summary:
      "Led the frontend for an appointment booking SaaS. Implemented modular React architecture, Tailwind design system, and integrated secure payment & email workflows.",
  },
  {
    title: "Front-End Developer · Admire Softech Pvt. Ltd.",
    period: "Jul 2025 - Sep 2025",
    summary:
      "Developed marketing and travel platforms with React and Next.js. Optimized conversion funnels, dynamic routing, and API-driven experiences for clients.",
  },
  {
    title: "Team Member · Training & Placement Cell, NSUT",
    period: "2022 - 2025",
    summary:
      "Organized recruitment drives, managed digital communication, and collaborated with recruiters to host university-wide events for 1K+ students.",
  },
];

const education = [
  {
    title: "B.Tech · Electronics & Communication Engineering",
    institution: "Netaji Subhas University of Technology",
    period: "2021 - 2025",
    details: [
      "Specialized in VLSI, Embedded Systems, and Web Technologies.",
      "Final year project: Designed a low-power VCO circuit with precision tuning.",
    ],
  },
  {
    title: "Key Projects",
    institution: "",
    period: "",
    details: [
      "Weather Dashboard · React + OpenWeather API for live forecasts.",
      "TravelnWorld booking experience · Next.js, Tailwind, API integration.",
      "Portfolio revamp · Next.js, CSS Modules, automated GitHub Pages deploy.",
    ],
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState("Skills");

  const renderContent = () => {
    if (activeTab === "Skills") {
      return (
        <ul className="space-y-6 text-sm sm:text-base">
          {skills.map(({ title, description }) => (
            <li key={title} className="space-y-1">
              <span className="block text-base font-semibold text-[#b54769] sm:text-lg">{title}</span>
              <p className="text-[15px] leading-relaxed text-slate-100/90">{description}</p>
            </li>
          ))}
        </ul>
      );
    }

    if (activeTab === "Experience") {
      return (
        <ul className="space-y-6 text-sm sm:text-base">
          {experiences.map(({ title, period, summary }) => (
            <li key={title} className="space-y-1">
              <span className="block text-base font-semibold text-[#b54769] sm:text-lg">{title}</span>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-200/70">{period}</p>
              <p className="text-[15px] leading-relaxed text-slate-100/90">{summary}</p>
            </li>
          ))}
        </ul>
      );
    }

    return (
      <ul className="space-y-6 text-sm sm:text-base">
        {education.map(({ title, institution, period, details }) => (
          <li key={title} className="space-y-2">
            <div>
              <span className="block text-base font-semibold text-[#b54769] sm:text-lg">{title}</span>
              {institution && (
                <p className="text-[15px] text-slate-100/90">{institution}</p>
              )}
              {period && (
                <p className="text-xs uppercase tracking-[0.25em] text-slate-200/70">{period}</p>
              )}
            </div>
            <ul className="space-y-2 pl-5 text-[15px] leading-relaxed text-slate-100/90">
              {details.map((detail) => (
                <li key={detail} className="list-disc">{detail}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <section id="about" className="py-24 sm:py-28">
      <div className="mx-auto w-full max-w-[1250px] px-6 sm:px-8">
        <div className="rounded-[32px] bg-[#102f4f]/90 px-6 py-12 shadow-[0_20px_40px_rgba(0,0,0,0.25)] sm:px-10 md:px-12 md:py-16">
          <div className="flex flex-col gap-12 md:flex-row md:gap-16">
            <div className="md:w-[32%]">
              <div className="overflow-hidden rounded-[28px]">
                <img
                  src={img}
                  alt="Neha portrait"
                  className="w-full object-cover "
                />
              </div>
            </div>

            <div className="flex-1 space-y-8 text-slate-100/95">
              <div className="space-y-4">
                <h2 className="text-4xl font-semibold text-white sm:text-5xl">About Me</h2>
                <p className="text-[15px] leading-relaxed sm:text-base">
                  I'm a B.Tech graduate from Netaji Subhas University of Technology, specializing in Electronics and
                  Communication Engineering. I'm passionate about frontend development and UI/UX design, with hands-on
                  experience building responsive, dynamic, and user-friendly web applications. Skilled in HTML, CSS,
                  JavaScript, React.js, Next.js, Tailwind CSS, and Bootstrap, I enjoy crafting interfaces that balance
                  creativity with technical precision.
                </p>
                <p className="text-[15px] leading-relaxed sm:text-base">
                  My internships at Logixfirm and Admire Softech Pvt. Ltd. helped me ship production-ready interfaces,
                  integrate APIs, and collaborate in Agile teams. I use Git, GitHub, Figma, and Postman to manage
                  development workflows, design prototypes, and test APIs. With a curiosity for both software and circuit
                  design, I love learning by doing and exploring new tools and technologies.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex flex-wrap gap-16 border-b border-white/10 pb-2 text-lg font-medium text-white/80">
                  {tabs.map((tab) => {
                    const isActive = tab === activeTab;
                    return (
                      <button
                        key={tab}
                        type="button"
                        onClick={() => setActiveTab(tab)}
                        className={`relative pb-2 transition ${
                          isActive ? "text-white" : "text-white/70 hover:text-white"
                        }`}
                      >
                        {tab}
                        <span
                          className={`absolute -bottom-[2px] left-0 h-[3px] w-full rounded-full bg-[#ff004f] transition-all ${
                            isActive ? "opacity-100" : "scale-x-0 opacity-0"
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>

                <div className="space-y-6">{renderContent()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
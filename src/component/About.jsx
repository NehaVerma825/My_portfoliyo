import { useState } from "react";
import img from "../assets/image.jpg";

const tabs = ["Skills", "Experience", "Education"];

export default function About() {
  const [activeTab, setActiveTab] = useState("Skills");

  const isActive = (tab) => activeTab === tab;

  return (
    <>
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="about-col-1">
              <img src={img} alt="Neha portrait" />
            </div>
            <div className="about-col-2">
              <h1 className="sub-title">About Me</h1>
              <p>
                I'm a B.Tech graduate from Netaji Subhas University of Technology,
                specializing in Electronics and Communication Engineering. I’m passionate
                about frontend development and UI/UX design, with hands-on experience
                building responsive, dynamic, and user-friendly web applications.
                Skilled in HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS, and
                Bootstrap, I’ve worked on projects like weather apps, portfolio websites,
                and VLSI circuit simulations, combining creativity with technical precision.
                My internship experience at Logixfirm and Admire Softech Pvt. Ltd. allowed
                me to develop production-level interfaces, integrate APIs, and collaborate
                in Agile teams. I also use Git, GitHub, Figma, and Postman to manage version
                control, design prototypes, and test APIs. With a curiosity for both software
                and circuit design, I enjoy learning by doing and continuously exploring new
                tools and technologies.
              </p>

              <div className="tab-titles">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    className={`tab-links ${isActive(tab) ? "active-link" : ""}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className={`tab-content ${isActive("Skills") ? "active-tab" : ""}`} id="Skills">
                <ul>
                  <li>
                    <span>Frontend Development</span> <br />
                    Building responsive and dynamic web applications using React.js, Next.js, Tailwind CSS, HTML, CSS, and JavaScript (ES6+)
                  </li>
                  <li>
                    <span>UI/UX Design</span> <br />
                    Designing user-focused interfaces and prototypes using Figma and modern design principles
                  </li>
                  <li>
                    <span>Version Control & Collaboration</span> <br />
                    Managing source code and team collaboration using Git, GitHub, and CI/CD workflows
                  </li>
                  <li>
                    <span>API Integration</span> <br />
                    Integrating RESTful APIs for real-time data handling and implementing error management in web apps
                  </li>
                  <li>
                    <span>Database & Backend Basics</span> <br />
                    Working knowledge of Firebase, MongoDB, SQL, and Express.js for data management and authentication
                  </li>
                  <li>
                    <span>Responsive Design & Optimization</span> <br />
                    Creating cross-device compatible layouts with reusable React components and performance optimization
                  </li>
                  <li>
                    <span>Soft Skills</span> <br />
                    Strong communication, teamwork, problem-solving, adaptability, and time management abilities
                  </li>
                </ul>
              </div>

              <div className={`tab-content ${isActive("Experience") ? "active-tab" : ""}`} id="Experience">
                <ul>
                  <li>
                    <span>Front-End Developer Intern - Logixfirm</span> <br />
                    Developed a complete online appointment booking platform using React.js, Next.js, and Tailwind CSS.
                    Integrated secure payment logic, automated email/SMS confirmations, and collaborated in an Agile team for end-to-end feature delivery.
                  </li>
                  <li>
                    <span>Front-End Developer — Admire Softech Pvt. Ltd. (July 2025 – September 2025)</span> <br />
                    Developed high-performance UIs for TripToHoneymoon and TravelnWorld using React.js, Next.js, and Tailwind CSS.
                    Integrated RESTful APIs, optimized forms and routing, and enhanced responsiveness through component-driven development.
                    Collaborated with backend and design teams in an Agile environment, focusing on performance optimization, clean Git-based workflows,
                  </li>
                  <li>
                    <span>Team Member - Training & Placement Cell, NSUT</span> <br />
                    Coordinated communication between students and recruiters, managed placement activities, and contributed to organizing technical events.
                  </li>
                </ul>
              </div>

              <div className={`tab-content ${isActive("Education") ? "active-tab" : ""}`} id="Education">
                <ul>
                  <li>
                    <span>B.Tech in Electronics and Communication</span> <br />
                    Netaji Subhas University of Technology (2021 -2025)
                  </li>
                  <li>
                    <span>Technical Electives</span> <br />
                    Special focus on VLSI, Embedded Systems, and Web Technologies
                  </li>
                  <li>
                    <span>Projects</span> <br />
                    Developed multiple web applications including <b>a Weather Dashboard </b> (React.js &amp; API integration),
                    <b>a Portfolio Website </b> (Next.js &amp; CSS Modules), and production-level platforms like <b>TripToHoneymoon</b> and <b>TravelnWorld</b> using React.js, Next.js, and Tailwind CSS.
                    Also designed a low-power VCO circuit as part of the final-year project.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
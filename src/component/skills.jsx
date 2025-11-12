import React from "react";
// import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaFire,
} from "react-icons/fa";
import { SiNextdotjs, SiRedux, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "React.js", icon: <FaReact className="text-sky-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
  { name: "Firebase", icon: <FaFire className="text-yellow-500" /> },
  { name: "Redux", icon: <SiRedux className="text-indigo-400" /> },
];

const Skills = () => {
  return (
    <div
      id="skills"
      className="min-h-screen bg-cover bg-center bg-fixed text-white flex flex-col items-center justify-center px-6 py-16"
      style={{
        backgroundImage: "url('/assets/bg3.png')", // match with your existing portfolio background
      }}
    >
      {/* Heading Section */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-bold mb-10 text-center"
      >
        My <span className="text-red-500">Skills</span>
      </motion.h2>

      {/* Skill Grid */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center justify-center p-5 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
          >
            <div className="text-5xl mb-3">{skill.icon}</div>
            <p className="text-lg font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Description Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="mt-12 max-w-3xl text-center text-lg leading-relaxed bg-black/40 backdrop-blur-md p-6 rounded-xl border border-white/20"
      >
        <p>
          I have hands-on experience with modern web technologies such as{" "}
          <span className="text-red-400 font-semibold">React.js</span> and{" "}
          <span className="text-red-400 font-semibold">Next.js</span>, and I am
          well-versed in frontend development using{" "}
          <span className="text-red-400 font-semibold">
            HTML, CSS, JavaScript, Tailwind CSS, and Bootstrap
          </span>
          . My practical exposure includes working with{" "}
          <span className="text-red-400 font-semibold">Firebase</span> for
          backend integration and{" "}
          <span className="text-red-400 font-semibold">Redux</span> for state
          management. I’ve contributed to real-time projects involving{" "}
          <span className="text-red-400 font-semibold">
            RESTful API integration, dynamic data handling
          </span>{" "}
          and building{" "}
          <span className="text-red-400 font-semibold">
            mobile-friendly, responsive interfaces
          </span>
          .
        </p>
      </motion.div>
    </div>
  );
};

export default Skills;

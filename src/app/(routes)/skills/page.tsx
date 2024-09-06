"use client";

import React from "react";
import Navbar from "../../_components/Navbar";
import SmNavbar from "../../_components/SmNavbar";
import SkillCard from "../../_components/SkillCard";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaNode,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiFastapi,
  SiFlask,
  SiJavascript,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiTypescript,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoSpringBoot } from "react-icons/bi";
import { TbBrandCpp } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import useDelay from "@/app/_hooks/useDelay";
import BuyMeACoffee from "@/app/_components/BuyMeACoffee";

function Skills() {
  const delay1 = useDelay("slide-in-from-top", 0);
  const delay2 = useDelay("slide-in-from-bottom", 500);
  const delay3 = useDelay("slide-in-from-bottom", 1000);

  const frontendSkills = [
    { icon: <FaHtml5 className="text-orange-800" />, name: "HTML5" },
    { icon: <FaCss3Alt className="text-blue-600" />, name: "CSS3" },
    { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
    { icon: <SiTypescript className="text-blue-700" />, name: "TypeScript" },
    { icon: <FaReact className="text-blue-400" />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <RiTailwindCssFill className="text-blue-300" />, name: "Tailwind" },
    { icon: <FaBootstrap className="text-purple-700" />, name: "Bootstrap" },
  ];

  const backendSkills = [
    { icon: <FaNode className="text-green-600" />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express" },
    { icon: <BiLogoSpringBoot className="text-green-700" />, name: "Spring Boot" },
    { icon: <SiFlask />, name: "Flask" },
    { icon: <SiFastapi className="text-[#227B77]" />, name: "FastAPI" },
    { icon: <FaPython className="text-blue-400" />, name: "Python" },
    { icon: <FaJava className="text-red-500" />, name: "Java" },
    { icon: <TbBrandCpp className="text-blue-500" />, name: "C++" },
    { icon: <SiPostgresql className="text-blue-900" />, name: "Postgres" },
  ];

  const toolsAndOtherSkills = [
    { icon: <FaGitAlt className="text-orange-600" />, name: "Git" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <VscVscode className="text-blue-500" />, name: "VS Code" },
    { icon: <SiPostman className="text-orange-500" />, name: "Postman" },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col dark:bg-dark bg-light transition-all duration-300 justify-start items-center pb-16 overflow-y-hidden">
      <Navbar navText={"Skills"} />
      <div className={`skills_text w-full dark:text-light text-dark transition-all duration-1000 md:w-[70%] px-5 mb-2 my-4 md:my-10 md:text-xl md:leading-loose leading-snug text-center ${delay1 ? delay1 : "hidden"}`}>
        Passionate tech enthusiast, mastering programming and development
        frameworks. From crafting responsive web apps to exploring AI/ML
        algorithms, I thrive on expanding my skills. My hands-on experience
        ensures efficient and innovative solutions, driving success in every
        project :D
      </div>
      <div className={`skills dark:text-light text-dark transition-all duration-1000 flex flex-col gap-10 w-full my-4 px-5 ${delay2 ? delay2 : "hidden"}`}>
        <SkillCard skills={frontendSkills} title="Frontend" />
        <SkillCard skills={backendSkills} title="Backend" />
        <SkillCard skills={toolsAndOtherSkills} title="Tools & Others" />
      </div>
      <div className={`skills_text w-full flex justify-center items-center text-secondary mt-4 ${delay3 ? delay3 : "hidden"}`}>
        This portfolio was built using &nbsp;<SiNextdotjs />
      </div>
      <BuyMeACoffee />
      <div className="w-full my-4 lg:hidden">
        <SmNavbar />
      </div>
    </div>
  );
}

export default Skills;

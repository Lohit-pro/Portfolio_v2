"use client";

import React from "react";
import Navbar from "../../_components/Navbar";
import SmNavbar from "../../_components/SmNavbar";
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

function Skills() {
  return (
    <div className="w-full min-h-screen flex flex-col dark:bg-dark bg-light transition-all duration-300 justify-start items-center pb-16">
      <Navbar navText={"Skills"} />
      <div className="skills_text w-full dark:text-light text-dark transition-all duration-1000 md:w-[70%] px-5 mb-2 my-4 md:my-10 md:text-xl md:leading-loose leading-snug text-center slide-in-from-top">
        Passionate tech enthusiast, mastering programming and development
        frameworks. From crafting responsive web apps to exploring AI/ML
        algorithms, I thrive on expanding my skills. My hands-on experience
        ensures efficient and innovative solutions, driving success in every
        project :D
      </div>
      <div className="skills dark:text-light text-dark transition-all duration-1000 flex flex-col gap-10 w-full my-4 px-5 slide-in-from-bottom">
        <div className="skills_frontend text-xl md:text-2xl flex flex-col gap-4 items-center">
          <div className="frontend text-secondary">Frontend</div>
          <div className="frontend_icons flex gap-3 md:gap-5">
            <FaHtml5 className="text-orange-800 md:hover:text-secondary" />
            <FaCss3Alt className="text-blue-600 md:hover:text-secondary" />
            <SiJavascript className="text-yellow-400 md:hover:text-secondary" />
            <SiTypescript className="text-blue-700 md:hover:text-secondary" />
            <FaReact className="text-blue-400 md:hover:text-secondary" />
            <SiNextdotjs className="md:hover:text-secondary" />
            <RiTailwindCssFill className="text-blue-300 md:hover:text-secondary" />
            <FaBootstrap className="text-purple-700 md:hover:text-secondary" />
          </div>
        </div>
        <div className="skills_backend text-xl md:text-2xl flex flex-col gap-4 items-center">
          <div className="backend text-secondary">Backend</div>
          <div className="backend_icons flex gap-3 md:gap-5">
            <FaNode className="text-green-600 md:hover:text-secondary" />
            <BiLogoSpringBoot className="text-green-700 md:hover:text-secondary" />
            <SiFlask className="md:hover:text-secondary" />
            <SiFastapi className="text-green-600 md:hover:text-secondary" />
            <FaPython className="text-blue-400 md:hover:text-secondary" />
            <FaJava className="text-red-500 md:hover:text-secondary" />
            <TbBrandCpp className="text-blue-500 md:hover:text-secondary" />
            <SiPostgresql className="text-blue-900 md:hover:text-secondary" />
          </div>
        </div>
        <div className="skills_others text-xl md:text-2xl flex flex-col gap-4 items-center">
          <div className="others text-secondary">Tools & Others</div>
          <div className="others_icons flex gap-3 md:gap-5">
            <FaGitAlt className="text-orange-600 md:hover:text-secondary" />
            <FaGithub className="md:hover:text-secondary" />
            <VscVscode className="text-blue-500 md:hover:text-secondary" />
            <SiPostman className="text-orange-500 md:hover:text-secondary" />
          </div>
        </div>
      </div>
      <div className="w-full my-4 lg:hidden">
        <SmNavbar />
      </div>
      {/* <div className="flex-grow"></div>
      <div className="w-full text-xs flex justify-center items-center text-dark dark:text-light py-4">Copyright &copy; 2024 Lohit M Kudlannavar</div> */}
    </div>
  );
}

export default Skills;

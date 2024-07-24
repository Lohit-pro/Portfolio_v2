"use client";

import React from "react";
import Navbar from "../../_components/Navbar";
import SmNavbar from "../../_components/SmNavbar";
import { FaAngular, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiFastapi, SiFlask, SiJavascript } from "react-icons/si";
import { MdOutlineSecurity } from "react-icons/md";
import Image from "next/image";
import { experiences, Skill } from "../../_data/data";

const skillIcons: Record<Skill, JSX.Element> = {
  FaAngular: <FaAngular />,
  BiLogoSpringBoot: <BiLogoSpringBoot />,
  SiFastapi: <SiFastapi />,
  SiFlask: <SiFlask />,
  SiJavascript: <SiJavascript />,
  FaHtml5: <FaHtml5 />,
  FaCss3Alt: <FaCss3Alt />,
  MdOutlineSecurity: <MdOutlineSecurity />,
};

function Experience() {
  return (
    <div className="w-full min-h-screen flex dark:bg-dark bg-light transition-all duration-300 flex-col items-center justify-center pb-16">
      <Navbar navText={"Experience"} />
      <div className="skills_text w-full dark:text-light text-dark transition-all duration-1000 md:w-[70%] px-5 mb-2 my-4 md:my-10 md:text-xl md:leading-loose leading-snug text-center">
        I have gained hands-on experience in the technical field through my
        current internship and various freelance projects completed during
        college. Beyond my technical skills, I have also been involved in
        Discord server moderation, showcasing my versatility. My diverse
        experiences reflect my ability to adapt and excel in various roles😃
      </div>
      <div className="experiences italic flex my-2 md:mb-10 flex-col items-center w-full dark:text-light text-dark transition-all duration-1000 leading-snug">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="experience w-[85%] md:w-[40%] my-4 flex flex-col"
          >
            <span className="flex justify-between items-center">
              <div className="role text-secondary text-xl md:text-3xl leading-tight">
                {experience.role}
              </div>
              <div className="mode text-secondary text-xs md:text-xs">
                {experience.mode}
              </div>
            </span>
            <div className="company flex md:text-xl justify-start items-center">
              <Image
                className="w-[1.25rem] h-[1.25rem]"
                src={experience.logo}
                alt="logo"
                width={100}
                height={100}
              />
              &nbsp;{experience.company}
            </div>
            <div className="description text-xs">{experience.description}</div>
            <div className="skills w-full gap-2 mt-1 text-xl flex">
              {experience.skills.map((skill, index) => (
                <React.Fragment key={index}>{skillIcons[skill]}</React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="skills_text w-full flex justify-center items-center text-secondary mb-2 my-2">
        Hmm, Could your company name shine here? 🤔
      </div>
      <div className="w-full my-4 lg:hidden">
        <SmNavbar />
      </div>
    </div>
  );
}

export default Experience;

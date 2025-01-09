"use client";

import React from "react";
import useDelay from "@/app/_hooks/useDelay";
import Image from "next/image";
import { experiences, Skill } from "../_data/data";
import { FaAngular, FaReact, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiFastapi, SiFlask, SiJavascript, SiSwagger } from "react-icons/si";
import { MdOutlineSecurity } from "react-icons/md";

const skillIcons: Record<Skill, JSX.Element> = {
  FaAngular: <FaAngular />,
  FaReact: <FaReact />,
  BiLogoSpringBoot: <BiLogoSpringBoot />,
  SiFastapi: <SiFastapi />,
  SiFlask: <SiFlask />,
  SiJavascript: <SiJavascript />,
  FaHtml5: <FaHtml5 />,
  FaCss3Alt: <FaCss3Alt />,
  MdOutlineSecurity: <MdOutlineSecurity />,
  SiSwagger: <SiSwagger />,
};

function ExperienceCard() {
  const delay = experiences.map((_, index) =>
    index % 2 === 0
      ? // eslint-disable-next-line react-hooks/rules-of-hooks
        useDelay("slide-in-from-left visible", index * 200)
      : // eslint-disable-next-line react-hooks/rules-of-hooks
        useDelay("slide-in-from-right visible", index * 200)
  );

  return (
    <div className="experiences flex my-2 md:mb-10 flex-col items-center w-full leading-snug invisible">
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`experience group relative dark:bg-[#252525] bg-[#fef1e4] border-[3px] hover:shadow-2xl shadow-secondary border-secondary p-3 rounded-3xl w-[85%] md:w-[40%] my-4 flex flex-col md:hover:dark:border-light md:hover:border-dark transition-colors duration-300 ${delay[index]}`}
        >
          <div className="md:group-hover:blur-[3px] transition-all duration-300">
            <span className="flex justify-between items-center">
              <div className="role text-secondary md:text-2xl leading-tight">
                {experience.role}
              </div>
              <div className="mode text-secondary text-xs md:text-xs">
                {experience.mode}
              </div>
            </span>
            <div className="md:hidden mb-2 text-secondary text-xs md:text-xs transition-all duration-1000">
              {experience.duration}
            </div>
            <div className="company flex gap-1 md:text-xl justify-start items-start md:items-center dark:text-light text-dark transition-all duration-1000">
              <Image
                className="w-[1.25rem] h-[1.25rem]"
                src={experience.logo}
                alt="logo"
                width={100}
                height={100}
              />
              <div>{experience.company}</div>
            </div>
            <div className="description text-xs dark:text-light text-dark transition-all duration-1000">
              {experience.description}
            </div>
            <div className="skills w-full gap-2 mt-1 text-xl flex dark:text-light text-dark transition-all duration-1000">
              {experience.skills.map((skill, index) => (
                <React.Fragment key={index}>{skillIcons[skill]}</React.Fragment>
              ))}
            </div>
          </div>

          <div className="absolute invisible md:visible top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 dark:text-light text-dark text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {experience.duration}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExperienceCard;

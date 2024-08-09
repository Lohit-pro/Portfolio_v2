"use client";

import React from 'react'
import useDelay from "@/app/_hooks/useDelay";
import Image from "next/image";
import { experiences, Skill } from '../_data/data';
import { FaAngular, FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import { BiLogoSpringBoot } from 'react-icons/bi';
import { SiFastapi, SiFlask, SiJavascript } from 'react-icons/si';
import { MdOutlineSecurity } from 'react-icons/md';

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

function ExperienceCard() {
    const delay = experiences.map((_, index) =>
        index % 2 === 0
          // eslint-disable-next-line react-hooks/rules-of-hooks
          ? useDelay("slide-in-from-left visible", index * 200)
          // eslint-disable-next-line react-hooks/rules-of-hooks
          : useDelay("slide-in-from-right visible", index * 200)
      );

  return (
    <div className="experiences flex my-2 md:mb-10 flex-col items-center w-full leading-snug invisible">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className={`experience border-[3px] hover:shadow-2xl shadow-secondary border-secondary p-2 rounded-lg w-[85%] md:w-[40%] my-4 flex flex-col md:hover:dark:border-light md:hover:border-dark transition-colors duration-300 ${delay[index]}`}
          >
            <span className="flex justify-between items-center">
              <div className="role text-secondary md:text-3xl leading-tight">
                {experience.role}
              </div>
              <div className="mode text-secondary text-xs md:text-xs">
                {experience.mode}
              </div>
            </span>
            <div className="company flex md:text-xl justify-start items-center dark:text-light text-dark transition-all duration-1000">
              <Image
                className="w-[1.25rem] h-[1.25rem]"
                src={experience.logo}
                alt="logo"
                width={100}
                height={100}
              />
              &nbsp;{experience.company}
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
        ))}
    </div>
  )
}

export default ExperienceCard
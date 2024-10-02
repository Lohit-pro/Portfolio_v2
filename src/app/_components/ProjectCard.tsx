"use client";

import Link from "next/link";
import React from "react";
import { CiMicrochip } from "react-icons/ci";
import {
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { LuBinary } from "react-icons/lu";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiJavascript,
  SiMui,
  SiNextdotjs,
  SiOpencv,
  SiProteus,
  SiPytorch,
  SiRedux,
  SiSolidity,
  SiTensorflow,
  SiExpress,
  SiSwagger,
  SiPostgresql,
  SiJsonwebtokens,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const skillIcons: Record<string, JSX.Element> = {
  FaHtml5: <FaHtml5 />,
  FaCss3Alt: <FaCss3Alt />,
  SiJavascript: <SiJavascript />,
  FaReact: <FaReact />,
  SiRedux: <SiRedux />,
  IoLogoFirebase: <IoLogoFirebase />,
  SiMui: <SiMui />,
  SiSolidity: <SiSolidity />,
  FaPython: <FaPython />,
  SiPytorch: <SiPytorch />,
  SiTensorflow: <SiTensorflow />,
  SiOpencv: <SiOpencv />,
  CiMicrochip: <CiMicrochip />,
  RiTailwindCssFill: <RiTailwindCssFill />,
  LuBinary: <LuBinary />,
  SiProteus: <SiProteus />,
  SiNextdotjs: <SiNextdotjs />,
  SiExpress: <SiExpress />,
  SiSwagger: <SiSwagger />,
  SiPostgresql: <SiPostgresql />,
  SiJsonwebtokens: <SiJsonwebtokens />,
  TbApi: <TbApi />,
};

type ProjectCardProps = {
  name: string;
  description: string;
  videoUrl?: string;
  imageUrl?: string;
  skills: string[];
  skillsName: string[];
  githubUrl: string;
  url?: string;
};

function ProjectCard({
  name,
  description,
  videoUrl,
  imageUrl,
  skills,
  skillsName,
  githubUrl,
  url,
}: ProjectCardProps) {
  return (
    <Link
      href={url || "#"}
      className="w-full relative md:w-[30%] flex flex-col justify-between items-center my-4 py-4 transition-all duration-300 border-[3px] hover:shadow-2xl shadow-secondary border-secondary rounded-lg hover:border-dark hover:dark:border-light hover:cursor-pointer"
    >
      {videoUrl ? (
        <video className="projects_video w-[90%] rounded-lg" controls>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : imageUrl ? (
        <img
          src={imageUrl}
          alt={`Screenshot of ${name}`}
          className="w-[90%] rounded-lg"
        />
      ) : null}
      <div className="project w-[90%] h-full flex flex-col justify-center items-start text-dark dark:text-light">
        <div className="project_name text-xl justify-start text-secondary transition-all duration-1000">
          {name}
        </div>
        <div className="project_desc text-xs transition-all duration-1000">
          {description}
        </div>
        <div className="project_skills w-full my-5 gap-2 mt-1 text-xl flex flex-wrap justify-start transition-all duration-1000">
          {skills.map((skill, index) => (
            <div key={index} className="relative group flex items-center">
              {skillIcons[skill]}
              <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 text-xs text-dark dark:text-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {skillsName[index]}
              </span>
            </div>
          ))}
        </div>
        <div className="flex-grow"></div>
        <Link
          target="_blank"
          href={githubUrl}
          className="project_github-btn w-full border-[3px] gap-2 dark:bg-light hover:dark:bg-transparent dark:text-secondary bg-dark hover:bg-transparent text-secondary hover:bg-dark hover:text-secondary border-secondary hover:border-dark hover:dark:border-light py-2 flex items-center justify-center text-center transition-all duration-300 rounded-lg z-10"
          style={{ position: "relative", zIndex: 10 }}
          onClick={(e) => e.stopPropagation()}
        >
          <span>Code</span>
          <FaGithub />
        </Link>
      </div>
    </Link>
  );
}

export default ProjectCard;
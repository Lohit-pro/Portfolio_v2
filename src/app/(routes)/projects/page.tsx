"use client";

import React from "react";
import SmNavbar from "../../_components/SmNavbar";
import Navbar from "../../_components/Navbar";
import ProjectCard from "../../_components/ProjectCard";
import { projects } from "../../_data/data";
import BuyMeACoffee from "@/app/_components/BuyMeACoffee";

function Projects() {
  return (
    <div className="w-full min-h-screen flex dark:bg-dark bg-light transition-all duration-300 flex-col items-center justify-start pb-16">
      <Navbar navText={"Projects"} />

      <div className="w-full flex-grow pt-[100px] flex flex-col items-center justify-center">
        <div className="skills_text w-full flex justify-center items-center dark:text-light text-dark transition-all duration-1000 md:w-[70%] px-5 mb-2 my-4 md:my-10 text-sm md:text-xl md:leading-loose leading-snug text-center slide-in-from-top">
          Here you&apos;ll find a collection of work from my freelance career,
          college projects, and some personal fun endeavors. These projects
          showcase my ability to apply my skills in real-world scenarios and my
          passion for coding. I love exploring new technologies and creating
          innovative solutions for various challenges. Coding for fun keeps my
          skills sharp and my creativity flowing!
        </div>
        <div className="skills_text w-full flex justify-center items-center text-secondary mb-2 my-2 md:text-xl">
          Here you go! Take a look 👀
        </div>

        <div className="flex flex-col w-full justify-center items-center">
          <div className="w-[80%] my-5 md:my-10 md:gap-10 flex flex-col md:flex-row justify-evenly flex-wrap slide-in-from-bottom">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                name={project.name}
                description={project.description}
                videoUrl={project.videoUrl}
                imageUrl={project.imageUrl}
                skills={project.skills}
                skillsName={project.skillsName}
                githubUrl={project.githubUrl}
                url={project.url}
              />
            ))}
          </div>
        </div>

        <div className="skills_text w-full flex justify-center items-center text-secondary mb-2 my-2 md:text-xl">
          Hold on✋, I&apos;ll add few more soon
        </div>
        <BuyMeACoffee />

        <div
          className="w-full my-4 lg:hidden"
          style={{ position: "relative", zIndex: 10 }}
        >
          <SmNavbar />
        </div>
      </div>
    </div>
  );
}

export default Projects;
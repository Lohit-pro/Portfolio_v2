"use client";

import React from "react";

type Skill = {
  icon: JSX.Element;
  name: string;
};

type SkillCardProps = {
  skills: Skill[];
  title: string;
};

const SkillCard: React.FC<SkillCardProps> = ({ skills, title }) => {
  return (
    <div className="skills_section text-xl md:text-2xl flex flex-col gap-4 items-center">
      <div className="section_title text-secondary">{title}</div>
      <div className="skills_icons flex flex-wrap justify-center gap-3 md:gap-7">
        {skills.map((skill, index) => (
          <div key={index} className="relative flex flex-col items-center group">
            <div className="skill_icon text-md md:text-2xl md:group-hover:scale-75 transition-transform duration-300">
              {skill.icon}
            </div>
            <div className="absolute top-full mt-2 hidden md:block md:text-xs scale-0 group-hover:scale-100 text-dark dark:text-light transform transition-all duration-300 text-center">
              {skill.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;

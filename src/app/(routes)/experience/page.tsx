"use client";

import React from "react";
import Navbar from "../../_components/Navbar";
import SmNavbar from "../../_components/SmNavbar";
import Link from "next/link";
import ExperienceCard from "@/app/_components/ExperienceCard";
import BuyMeACoffee from "@/app/_components/BuyMeACoffee";

function Experience() {
  return (
    <div className="w-full min-h-screen flex dark:bg-dark bg-light transition-all duration-300 flex-col items-center justify-center pb-16 overflow-hidden">
      <Navbar navText={"Experience"} />

      <div className="w-full flex-grow pt-[80px] flex flex-col items-center justify-center px-3 sm:px-5">
        <div
          className="skills_text w-full dark:text-light text-dark transition-all duration-1000 md:w-[70%] px-4 mb-2 my-4 md:my-10 text-sm sm:text-base md:text-xl md:leading-loose leading-snug text-center slide-in-from-top"
        >
          I have gained hands-on experience in the technical field through my
          current internship and various freelance projects completed during
          college. Beyond my technical skills, I have also been involved in
          Discord server moderation, showcasing my versatility. My diverse
          experiences reflect my ability to adapt and excel in various roles 😃
        </div>

        <div className="w-full flex flex-col items-center">
          <ExperienceCard />
        </div>

        <div className="skills_text w-full flex flex-col md:flex-row justify-center items-center text-secondary mb-2 my-2 text-sm sm:text-base md:text-xl">
          Hmm, Could your company name shine here? 🤔&nbsp;
          <Link href="/contact" className="underline hover:text-blue-500">
            Refer me!
          </Link>
        </div>

        <BuyMeACoffee />
      </div>

      <div className="w-full my-4 lg:hidden">
        <SmNavbar />
      </div>
    </div>
  );
}

export default Experience;

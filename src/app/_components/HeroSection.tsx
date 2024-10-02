"use client";

import { FileText, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

function HeroSection() {
  return (
    <div className="w-full my-2 flex flex-col md:flex-row justify-center items-center overflow-hidden">
      <img
        src="https://lohit-pro.vercel.app/pfp2.jpg"
        className="rounded-[50%] w-[30%] md:w-[20%] md:mx-[10%] border-2 border-secondary slide-in-from-left"
        alt="pfp"
        width={100}
        height={100}
      />
      <div className="flex flex-col w-[90%] my-4 md:w-[60%] md:mt-10 md:text-xl md:pr-[15%] md:leading-loose leading-relaxed text-center md:text-start text-dark dark:text-light transition-all duration-1000 slide-in-from-right md:slide-in-from-bottom">
        <span className="text-secondary text-[3rem] md:text-[4rem] font-semibold">
          Hey, I&apos;m Lohit
        </span>
        <div>
          A passionate programmer with a strong interest in Web Development,
          AI/ML, and more. Currently working as a full stack intern at Société
          Générale and actively contributing to open-source projects on GitHub. I
          thrive on the challenge of crafting innovative solutions and aspire to
          contribute my technical expertise and problem-solving skills to drive
          success in an organization.
        </div>
        <div className="w-full md:gap-8 mt-8 md:my-8 flex justify-center text-start text-xl">
          <Link
            target="_blank"
            href="https://lohit-pro.vercel.app/Resume.pdf"
            className="flex md:border-[3px] hover:shadow-2xl shadow-secondary md:border-secondary md:hover:dark:border-light md:hover:border-dark py-2 px-4 text-secondary rounded-sm md:hover:text-dark md:dark:hover:text-light md:hover:cursor-pointer"
          >
            <FileText />
            <div className="ml-1">Resume</div>
          </Link>
          <Link
            target="_blank"
            href="https://github.com/Lohit-pro"
            className="flex md:border-[3px] hover:shadow-2xl shadow-secondary md:border-secondary md:hover:dark:border-light md:hover:border-dark py-2 px-4 text-secondary rounded-sm md:hover:text-dark md:dark:hover:text-light md:hover:cursor-pointer"
          >
            <Github />
            <div className="ml-1">Github</div>
          </Link>
        </div>
      </div>
      <div className="w-full md:w-fit md:mr-16 md:py-5 md:px-4 md:gap-8 md:rounded-3xl mt-4 flex md:flex-col md:justify-end md:items-end justify-center text-secondary transition-all duration-1000 gap-6 slide-in-from-left md:slide-in-from-right">
        <Link
          className="md:hover:text-dark md:hover:dark:text-light"
          target="_blank"
          href="https://www.linkedin.com/in/lohit-kudlannavar-76b046250/"
        >
          <Linkedin />
        </Link>
        <Link
          className="md:hover:text-dark md:hover:dark:text-light"
          target="_blank"
          href="https://github.com/Lohit-pro"
        >
          <Github />
        </Link>
        <Link
          className="md:hover:text-dark md:hover:dark:text-light"
          target="_blank"
          href="https://www.instagram.com/__lohit_mk___/"
        >
          <Instagram />
        </Link>
        <Link
          className="md:hover:text-dark md:hover:dark:text-light"
          target="_blank"
          href="https://twitter.com/LohitKudlannav1"
        >
          <Twitter />
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;

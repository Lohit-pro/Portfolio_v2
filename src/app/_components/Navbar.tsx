"use client";

import Image from "next/image";
import React from "react";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <div className="w-full my-4 flex justify-around items-center">
      <div className="left">
        <Image
          src="https://lohit-pro.vercel.app/logo.png"
          alt="logo"
          className=""
          width={120}
          height={52}
          priority
        />
      </div>
      <div className="right w-[50%] flex justify-end items-center">
        <div className="nav_items hidden md:text-xl md:flex md:gap-16 md:mr-20 dark:text-[#fffdd0]">
          <button>Skills</button>
          <button>Projects</button>
          <button>Experience</button>
          <button>Contact</button>
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
}

export default Navbar;

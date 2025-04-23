"use client";

import React, { useEffect, useState } from "react";
import {
  Briefcase,
  CircleUserRound,
  FolderGit,
  House,
  UserCog,
} from "lucide-react";
import Link from "next/link";

function SmNavbar() {
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    const path = window.location.pathname;
    setActiveTab(path);
  }, []);

  return (
    <nav className="w-full fixed border-2 border-t-[1px] border-b-0 border-r-0 border-l-0 border-dark dark:border-light bottom-0 left-0 bg-light dark:bg-dark flex justify-evenly py-2 dark:text-light text-dark transition-all duration-300">
      <Link
        className={`${
          activeTab === "/" ? "text-secondary dark:text-primary" : ""
        } text-xs flex flex-col justify-center items-center`}
        href="/"
      >
        <House
          className={`${
            activeTab === "/" ? "text-secondary dark:text-primary" : ""
          } dark:text-light text-dark transition-all duration-300`}
          size={20}
        />
        Home
      </Link>
      <Link
        className={`${
          activeTab === "/skills" ? "text-secondary dark:text-primary" : ""
        } text-xs flex flex-col justify-center items-center`}
        href="/skills"
      >
        <UserCog
          className={`${
            activeTab === "/skills" ? "text-secondary dark:text-primary" : ""
          } dark:text-light text-dark transition-all duration-300`}
          size={20}
        />
        Skills
      </Link>
      <Link
        className={`${
          activeTab === "/projects" ? "text-secondary dark:text-primary" : ""
        } text-xs flex flex-col justify-center items-center`}
        href="/projects"
      >
        <FolderGit
          className={`${
            activeTab === "/projects"
              ? "text-secondary dark:text-primary"
              : ""
          } dark:text-light text-dark transition-all duration-300`}
          size={20}
        />
        Projects
      </Link>
      <Link
        className={`${
          activeTab === "/experience" ? "text-secondary dark:text-primary" : ""
        } text-xs flex flex-col justify-center items-center`}
        href="/experience"
      >
        <Briefcase
          className={`${
            activeTab === "/experience"
              ? "text-secondary dark:text-primary"
              : ""
          } dark:text-light text-dark transition-all duration-300`}
          size={20}
        />
        Experience
      </Link>
      <Link
        className={`${
          activeTab === "/contact" ? "text-secondary dark:text-primary" : ""
        } text-xs flex flex-col justify-center items-center`}
        href="/contact"
      >
        <CircleUserRound
          className={`${
            activeTab === "/contact" ? "text-secondary dark:text-primary" : ""
          } dark:text-light text-dark transition-all duration-300`}
          size={20}
        />
        Contact
      </Link>
    </nav>
  );
}

export default SmNavbar;

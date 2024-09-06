"use client";

import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

interface NavbarProps {
  navText?: string;
}

const Navbar: React.FC<NavbarProps> = ({ navText }) => {
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    const path = window.location.pathname;
    setActiveTab(path);
  }, []);

  return (
    <div className="w-full my-5 md:mt-8 flex justify-between md:justify-around items-center px-4">
      <Link href="/" className="left text-xl md:text-[1.75rem] text-dark dark:text-light transition-all duration-1000 flex items-center">
        <span className="block md:hidden fixed-text">{navText ? navText : "Lohit M Kudlannavar"}</span>
        <span className="hidden md:block">Lohit M Kudlannavar</span>
      </Link>
      <div className="right flex justify-end items-center gap-12">
        <div className="nav_items text-xl hidden lg:flex lg:gap-12 dark:text-light text-dark transition-all duration-300">
          <Link href="/" className={`nav-link ${activeTab === "/" ? "active" : ""}`} onClick={() => setActiveTab("/")}>Home</Link>
          <Link href="/skills" className={`nav-link ${activeTab === "/skills" ? "active" : ""}`} onClick={() => setActiveTab("/skills")}>Skills</Link>
          <Link href="/projects" className={`nav-link ${activeTab === "/projects" ? "active" : ""}`} onClick={() => setActiveTab("/projects")}>Projects</Link>
          <Link href="/experience" className={`nav-link ${activeTab === "/experience" ? "active" : ""}`} onClick={() => setActiveTab("/experience")}>Experience</Link>
          <Link href="/contact" className={`nav-link ${activeTab === "/contact" ? "active" : ""}`} onClick={() => setActiveTab("/contact")}>Contact</Link>
        </div>
        <div className="flex items-center justify-center">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

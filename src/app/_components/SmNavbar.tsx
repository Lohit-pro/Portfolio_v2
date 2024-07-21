"use client";

import React from "react";
import { Briefcase, CircleUserRound, FolderGit, UserCog } from "lucide-react";

function SmNavbar() {
  return (
      <nav className="w-full flex justify-around my-4 dark:text-[#fffdd0]">
        <UserCog size={30} />
        <FolderGit size={30} />
        <Briefcase size={30} />
        <CircleUserRound size={30} />
      </nav>
  );
}

export default SmNavbar;

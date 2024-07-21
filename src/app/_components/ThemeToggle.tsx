"use client";

import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react'

function ThemeToggle() {
    const [darkMode, setDarkmode] = useState(true)

    useEffect(() => {
        const theme = localStorage.getItem("theme")

        if(theme === "dark") setDarkmode(true)
    }, [])

    useEffect(() => {
        if(darkMode) {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }, [darkMode])
  return (
    <div className='w-10 dark:text-[#fffdd0] text-[#293245] hover:cursor-pointer' onClick={() => setDarkmode(!darkMode)}>
        {
            darkMode === true ? <Sun size={26} /> : <Moon size={26} />
        }
    </div>
  )
}

export default ThemeToggle
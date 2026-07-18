import React, { useState } from 'react'
import useTheme from '../contexts/ThemeContext';


function Navbar() {

    const {themeMode, lightTheme, darkTheme}=useTheme();
    const [icon, setIcon]=useState('☀️');

    let themeFlag=false;

    function handleClick() {
        if (themeMode === "light") {
            darkTheme();
        } else {
            lightTheme();
        }
    }
    

    return (
        <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md transition-all duration-300 dark:border-slate-700 dark:bg-slate-900/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            Theme<span className="text-indigo-600 dark:text-indigo-400">Lab</span>
            </h1>

            <div className="flex items-center gap-6">
            <a
                href="#"
                className="text-slate-700 transition hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
            >
                Home
            </a>

            <a
                href="#"
                className="text-slate-700 transition hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
            >
                About
            </a>

            <a
                href="#"
                className="text-slate-700 transition hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
            >
                Contact
            </a>

            {/* You'll add Context API functionality here */}
            <button className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-xl shadow transition hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700" onClick={handleClick}>
                {themeMode === "light" ? "☀️" : "🌙"}
            </button>
            </div>
        </div>
        </nav>
    );
}

export default Navbar;
"use client";

import { useState, useEffect } from "react";
import { BsGlobeCentralSouthAsiaFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  const navLinks = ["Home", "About", "Pricing", "Contact"];

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menu]);

  return (
    <div className="relative w-full">
      <nav className="flex justify-between md:justify-around bg-black/80 backdrop-blur-md items-center fixed top-0 left-0 z-[100] lg:px-10 md:px-10 px-6 py-4 w-full text-white border-b border-white/5">
        {/* Logo */}
        <div className="logo z-[110]">
          <h1 className="font-[font1] lg:text-[3vw] md:text-[5vw] text-[8vw] tracking-tighter cursor-pointer flex items-center gap-2">
            <BsGlobeCentralSouthAsiaFill className="text-[#4F4FF1]" />
            <span className="hidden md:inline text-xl font-[font5] tracking-widest uppercase ml-2">Elevate</span>
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="links">
          <ul className="hidden md:flex items-center justify-center lg:gap-10 md:gap-5 font-[font6]">
            {navLinks.map((link) => (
              <li
                key={link}
                className="group relative cursor-pointer hover:text-[#4F4FF1] transition-colors"
              >
                <a href={`#${link.toLowerCase()}`}>{link}</a>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4F4FF1] transition-all group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button - Hamburger Animation */}
        <button
          onClick={() => setMenu(!menu)}
          className="md:hidden flex flex-col gap-1.5 items-center justify-center cursor-pointer z-[130] p-2 w-10 h-10"
          aria-label="Toggle Menu"
        >
          <div className={`h-0.5 w-7 bg-white rounded-full transition-all duration-300 ${menu ? "rotate-45 translate-y-2" : ""}`}></div>
          <div className={`h-0.5 w-7 bg-white rounded-full transition-all duration-300 ${menu ? "opacity-0" : ""}`}></div>
          <div className={`h-0.5 w-7 bg-white rounded-full transition-all duration-300 ${menu ? "-rotate-45 -translate-y-2" : ""}`}></div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black z-[120] flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
          menu ? "translate-y-0 opacity-100 visible" : "-translate-y-full opacity-0 invisible"
        } md:hidden`}
      >
        <ul className="flex flex-col items-center gap-10 text-4xl font-[font5] text-white">
          {navLinks.map((link, index) => (
            <li 
              key={link}
              className={`transition-all duration-500 delay-[${index * 100}ms] ${menu ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <a 
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenu(false)}
                className="hover:text-[#4F4FF1] transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

  
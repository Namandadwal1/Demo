"use client";

import { useState, useEffect } from "react";
import { BsGlobeCentralSouthAsiaFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  if(setMenu === true){
    console.log("emenu")
  }
 
  const navLinks = ["Home", "About", "Templates", "Contact"];

  // Prevent background scroll when menu is open


  return (
    <div className="relative w-full overflow-x-hidden">
      <nav className="flex justify-between md:justify-around bg-black items-center fixed top-0 left-0 z-[100] lg:px-10 md:px-10 px-6 py-4 w-full text-white">
        {/* Logo */}
        <div className="logo z-[110]">
          <h1 className="font-[font1] lg:text-[3vw] md:text-[5vw] text-[8vw] tracking-tighter cursor-pointer">
            <BsGlobeCentralSouthAsiaFill />
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="links">
          <ul className="hidden md:flex items-center justify-center lg:gap-10 md:gap-5 font-[font6]">
            {navLinks.map((link) => (
              <li
                key={link}
                className="cursor-pointer hover:text-[#4F4FF1] transition-colors"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div
          onClick={()=>{setMenu(true)}}
          className="menubar md:hidden flex flex-col gap-1.5 items-center justify-center cursor-pointer z-50 p-2"
        >
          <div className="h-1 w-8 bg-white rounded-full"></div>
          <div className="h-1 w-8 bg-white rounded-full"></div>
        </div>
      </nav>

     <div className="h-screen bg-black w-full absolute top-0 z-50 "></div>
    </div>
  );
}

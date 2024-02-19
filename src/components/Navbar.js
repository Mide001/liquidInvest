"use client";

import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import LiquidInvestLogo from "../assets/Liquid-Invest.png";



const Navbar = () => {

  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  }

    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
  
    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };
  
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
    };
  
    /* 
    COLOUR CODES:
  
    Purple: #658ad7
    Green: #78dd8d
    */
  
    return (
      <nav className="bg-black py-2 md:py-2">
        <div className="container mx-auto flex items-center justify-between py-2 pl-2 text-sm">
          <div>
            <a href="/">
              <img
                src={LiquidInvestLogo}
                alt="Encrypten Logo"
                width={25}
                height={25}
              />
            </a>
          </div>
          <div className="hidden md:flex space-x-6">
            <ul className="flex space-x-6 mt-1">
              <li className="group relative">
                <a
                  href="#home"
                  onClick={() => scrollToSection("home")}
                  className={`${
                    pathname === "/" ? "text-[#78dd8d]" : "text-gray-300"
                  }`}
                >
                  Home
                </a>
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-[#78dd8d] transform scale-x-100 origin-bottom transition-transform"></div>
              </li>
              <li className="group relative">
                <a
                  href="#overview"
                  onClick={() => scrollToSection("overview")}
                  className={`${
                    pathname === "/roadmap" ? "text-[#78dd8d]" : "text-gray-300"
                  }`}
                >
                  Overview
                </a>
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-[#78dd8d] transform scale-x-0 origin-bottom transition-transform"></div>
              </li>
              <li className="group relative">
                <a
                  href="#widget"
                  onClick={() => scrollToSection("tokenomics")}
                  className={`${
                    pathname === "/documentation"
                      ? "text-[#191970]"
                      : "text-gray-300"
                  }`}
                >
                  Tokenomics
                </a>
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-[#78dd8d] transform scale-x-0 origin-bottom transition-transform"></div>
              </li>
              <li className="group relative">
                <a
                  href="#contact"
                  onClick={() => scrollToSection("contact")}
                  className={`${
                    pathname === "/documentation"
                      ? "text-[#191970]"
                      : "text-gray-300"
                  }`}
                >
                  Contact
                </a>
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-[#78dd8d] transform scale-x-0 origin-bottom transition-transform"></div>
              </li>
            </ul>
          </div>
          <div className="md:hidden pr-3">
            <button onClick={toggleNavbar} className="text-[#203475]">
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden py-4 border-b border-gray-300 pl-4">
            <ul className="flex flex-col space-y-3">
              <li>
                <a href="#" onClick={() => scrollToSection("home")} className="text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" onClick={() => scrollToSection("overview")} className="text-white">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" onClick={() => scrollToSection("tokenomics")} className="text-white">
                Tokenomics
                </a>
              </li>
              <li>
                <a href="#" onClick={() => scrollToSection("contact")} className="text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    );
  };
  
  export default Navbar;
  
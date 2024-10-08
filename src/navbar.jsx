import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-scroll";
import React, { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";


export default function Navbar(){

    const [isMenuOpen, setMenuOpen] = useState(false);
    const [button, setButton] = useState(false);
    const toggleMenu = () => {
        const link = document.getElementById("button");
        setMenuOpen(!isMenuOpen);
        setButton(!button);
        if (!button) {
          link.classList.add("z-[-1]");
        } else {
          link.classList.remove("z-[-1]");
        }
      };
  return (
    <div>
            <nav className="p-5 shadow md:flex md:justify-between">
        <div className="flex justify-between ">
          <div>
            <h1 className="text-white text-3xl  duration-500 font-poppins font-bold cursor-pointer">
              EA
            </h1>
          </div>
          <div className="flex md:hidden justify-end ">

            <span
              className=" cursor-pointer md:hidden block"
              onClick={toggleMenu}
              id="menu"
            >

              <svg
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                className="text-white w-10 h-full"
              >
                                          <a 
            target="_blank"
            href="https://www.linkedin.com/in/anas-el-maky-360257262/">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M4.75 5.75H19.25"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M4.75 18.25H19.25"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M4.75 12H19.25"
                ></path>
              </a>

              </svg>
            </span>
            
          </div>
        </div>

        <ul
          className={` md:flex flex-wrap md:justify-center text-center items-center bg-primary  bg-opacity-100 md:bg-transparent z-10 md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 ${
            isMenuOpen ? "opacity-100 top-[80px]" : "opacity-0 top-[-300px]"
          } transition-all ease-in-out duration-500 `}
        >
          <li className="md:mx-20 my-6 md:my-0 ml-[-8%] lg:ml-[0]">
          <Link
                  to="main"
                  spy={true}
                  smooth={true}
                  duration={800}
                  className="text-white text-3xl hover:text-cyan duration-500 font-poppins font-bold cursor-pointer"
                  onClick={() => {
                    setMenuOpen(!isMenuOpen);
                  toggleMenu()}}
                >
                  HOME
                </Link>

          </li>
          <li className="md:mx-20 my-6 md:my-0 ml-[-8%] lg:ml-[0]">
            <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  duration={1700}
                  className="text-white text-3xl hover:text-cyan duration-500 font-poppins font-bold cursor-pointer"
                  onClick={() => {
                    setMenuOpen(!isMenuOpen);
                  toggleMenu()}}
                >
                  SKILLS
            </Link>
          </li>
          <li className="md:mx-20 my-6 md:my-0 ml-[-8%] lg:ml-[0]">
            <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={2000}
                  className="text-white text-3xl hover:text-cyan duration-500 font-poppins font-bold cursor-pointer"
                  onClick={() => {
                    setMenuOpen(!isMenuOpen);
                  toggleMenu()}}
                  >
              PROJECTS
            </Link>
          </li>
          <li className="md:mx-20 my-6 md:my-0 ml-[-8%] lg:ml-[0]">
          <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={2500}
                  className="text-white text-3xl hover:text-cyan duration-500 font-poppins font-bold cursor-pointer"
                  onClick={() => {
                    setMenuOpen(!isMenuOpen);
                  toggleMenu()}}
                  >
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}



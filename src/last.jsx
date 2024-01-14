import logo from "./logo.svg";
import "./App.css";

import React, { useState ,useEffect} from "react";

export default function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <nav className="p-5 shadow md:flex md:justify-around">
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
            </svg>
          </span>
        </div>

        <ul
          className={`md:flex md:justify-center text-center items-center bg-red-800 bg-opacity-60 md:bg-transparent z-[-1] md:z-auto md:static absolute bg- w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 ${
            isMenuOpen ? "opacity-100 top-[80px]" : "opacity-0 top-[-300px]"
          } transition-all ease-in-out duration-500 `}
        >
          <li className="md:mx-20 my-6 md:my-0 ">
            <a
              href=""
              className="text-white text-3xl hover:text-red-500 duration-500 font-mono"
            >
              HOME
            </a>
          </li>
          <li className="md:mx-20 my-6 md:my-0 ">
            <a
              href=""
              className="text-white text-3xl hover:text-red-500  duration-500 font-mono"
            >
              SKILLS
            </a>
          </li>
          <li className="md:mx-20 my-6 md:my-0 ">
            <a
              href=""
              className="text-white text-3xl hover:text-red-500  duration-500 font-mono"
            >
              ABOUT
            </a>
          </li>
          <li className="md:mx-20 my-6 md:my-0 ">
            <a
              href=""
              className="text-white text-3xl hover:text-red-500 duration-500 font-mono"
            >
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
          <WelcomeSection/>
    </div>
  );
}
const WelcomeSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          // observer.unobserve(entry.target);
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hid');
    hiddenElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="hid">
      <div className="flex flex-col justify-center items-center mt-[30%] lg:mt-[10%]">
        <h1 className="text-white font-mono text-3xl" id="welcome">
          <span className="typing-content md:text-[50px]"></span>
        </h1>
        <h1 className="text-white font-mono text-3xl md:text-[50px] mt-[2%]">
          Welcome To My Portfolio!
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center mt-[10%]">
        <h1 className="text-white font-mono text-3xl md:text-[50px] mt-[2%]">
          {" "}
          I'm :<b>EL OUARZAZI AYOUB</b>{" "}
        </h1>
        <p className="mt-[13%] lg:mt-[3%] p-[10px] text-neutral-50 font-mono text-2xl text-center rounded-lg border-red-700 border-4 border-double bg-transparent hover:bg-red-700 hover:text-neutral-950 cursor-pointer hover:border-black hover:border-double">
          CYBER SECURITY SPECIALIST
        </p>
      </div>
      <div className="mt-[100%]">

      </div>
      {/* <WelcomeSection/> */}
    </div>
  );
};

export{ WelcomeSection};

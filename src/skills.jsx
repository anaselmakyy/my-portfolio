
import "./App.css";
import "./skills.css";
import React, { useState, useEffect } from "react";


export default function Skills() {

  const scrollers = document.querySelectorAll(".scroller");

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }

  function addAnimation() {
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", true);

      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }
  return (
    <div>
      <div
        id="skills"
        className="mt-[18%] md:mt-[13%] flex flex-col items-center"
      >
        <div className="flex justify-center title">
          <h1 className="text-white font-poppins font-bold text-5xl md:text-7xl">
            My Skills :
          </h1>
        </div>
        <div
          className="mt-[5%] scroller"
          data-speed="fast"
          data-animated="true"
        >
          <ul className="tag-list scroller__inner">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JS</li>
            <li>REACTJS</li>
            <li>tailwindcss</li>
            <li>PHP</li>
            <li>SQL</li>
            <li>GIT</li>
          </ul>
        </div>

        
      </div>
      <div className="flex flex-col md:flex-row items-center md:justify-around">
          <div className="mt-[5%] md:mt-[10%] skill  w-[350px] md:w-[200%] xl:w-[45%] text-white p-[20px] skill1">
            <h1 className="text-center text-white font-poppins font-bold text-3xl md:text-5xl">
              Technical Skills :
            </h1>
            <li>
              <h3 className="">HTML5</h3>

              <span className="bar">
                <span className="html" value="html"></span>
              </span>
            </li>
            <li>
              <h3>CSS3</h3>

              <span className="bar">
                <span className="css" value="css"></span>
              </span>
            </li>
            <li>
              <h3>JAVASCRIPT</h3>

              <span className="bar">
                <span className="js" value="js"></span>
              </span>
            </li>
            <li>
              <h3>REACTJS</h3>

              <span className="bar">
                <span className="react" value="react"></span>
              </span>
            </li>
            <li>
              <h3>PHP</h3>

              <span className="bar">
                <span className="php" value="php"></span>
              </span>
            </li>
            <li>
              <h3>SQL</h3>

              <span className="bar">
                <span className="sql" value="sql"></span>
              </span>
            </li>
            <li>
              <h3>tailwindcss</h3>

              <span className="bar">
                <span className="tailwind" value="tailwind"></span>
              </span>
            </li>
          </div>
          <div className="mt-[5%] md:mt-[10%] skill  w-[350px] md:w-[200%] xl:w-[45%] text-white p-[20px] skill2">
          <h1 className="text-center text-white font-poppins font-bold text-3xl md:text-5xl">
              Professional Skills :
            </h1>
            <li>
              <h3 className="">Leadership</h3>

              <span className="bar">
                <span className="leadership" value="leadership"></span>
              </span>
            </li>
            <li>
              <h3>Team Work</h3>

              <span className="bar">
                <span className="calm" value="calm"></span>
              </span>
            </li>
            <li>
              <h3>Communication</h3>

              <span className="bar">
                <span className="comm" value="comm"></span>
              </span>
            </li>

            <li>
              <h3>Stress Management</h3>

              <span className="bar">
                <span className="stress" value="comm"></span>
              </span>
            </li>
          </div>
        </div>
    </div>
  );
}

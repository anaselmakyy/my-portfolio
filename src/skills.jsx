import logo from "./logo.svg";
import "./App.css";
import './skills.css'
import React, { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function Skills() {

    ScrollReveal({
        reset: true,
        distance: "60px",
        duration: 1000,
        delay: 1000,
      });
      ScrollReveal().reveal(".skills-title,", { delay: 500, origin: "top" });
      ScrollReveal().reveal(".scroller,", {delay: 500, origin: "right",});



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
        className="mt-[18%] md:mt-[13%] flex flex-col justify-center items-center"
      >
        <div className="flex justify-center items-center">
          <h1 className="text-white font-poppins font-bold text-5xl md:text-7xl skills-title">
            My Skills :
          </h1>
        </div>
        <div className="scroller mt-[5%]" data-speed="">
          <ul class="tag-list scroller__inner">
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
        <div>
        <div className="mt-[5%] skill  w-[350px] text-white p-[20px] ">
          <li>
            <h3 className="">
                HTML5
            </h3>

              <span className="bar">
                <span className="html"></span>
              </span>
          </li>
          <li>
            <h3>CSS3
            </h3>

              <span className="bar">
                <span className="css"></span>
              </span>
          </li>
          <li>
            <h3>JAVASCRIPT
            </h3>

              <span className="bar">
                <span className="js"></span>
              </span>
          </li>
          <li>
            <h3>REACTJS
            </h3>

              <span className="bar">
                <span className="react"></span>
              </span>
          </li>
          <li>
            <h3>PHP
            </h3>

              <span className="bar">
                <span className="php"></span>
              </span>
          </li>
          <li>
            <h3>SQL
            </h3>

              <span className="bar">
                <span className="sql"></span>
              </span>
          </li>
          <li>
            <h3>tailwindcss
            </h3>

              <span className="bar">
                <span className="tailwind"></span>
              </span>
          </li>
        </div>
        </div>

      </div>
    </div>
  );
}

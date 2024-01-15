import "./App.css";

import React, { useState, useEffect } from "react";


export default function Mainbody (){


  return (
    <div>
            <div
        id="main"
        className="flex flex-col lg:flex-row md:justify-between mt-[15%] md:mt-[3%] "
        
      >
        <div className="body-text-section ml-[4%] md:z-0" id="button">
          <div className="">
            <h2 className="text-white font-poppins font-bold text-3xl md:text-4xl welcome">
              Hello , It's Me
            </h2>
            <h1 className="text-white font-poppins font-bold text-8xl md:text-[150px] name">
              Anas
            </h1>
            <h1 className="text-cyan font-poppins font-bold text-8xl md:text-[150px] name">
              El Maky
            </h1>
            <p className="text-white font-poppins font-bold text-xl md:text-[40px] md:ml-[1%] md:mt-[3%] resume">
              19 year-old Full Stack Developer
            </p>
          </div>
          <div className="bg rounded-lg mr-[4%] text-gray ">
            <p
              className=" text-xl font-poppins  mt-[10%] md:ml-[2%] md:mr-[50%] md:mt-[5%] description"
              id="par"
            >
              I'm a passionate and driven 19-year-old Full Stack Developer with
              a love for creating innovative and impactful web applications. My
              journey in the world of programming began at a young age, and
              since then, I've been on a continuous learning adventure to refine
              my skills and stay ahead in the everevolving tech landscape.
            </p>
          </div>
          <div className="mt-[6%] md:mt-[3%] md:ml-[2%] cv">
            <a
              href="https://drive.google.com/file/d/1mR05xXbsce6cClbnBMctUmlS7rM4joLX/view?usp=sharing"
              className=" text-primary bg-cyan p-[4%] rounded-3xl text-xl font-poppins font-bold hover:bg-emerald-600 hover:text-primary hover:cursor-pointer md:p-[2%] cvbutton"
              target="_blank"
            >
              DOWNLOAD CV
            </a>
          </div>
        </div>
        <div>
          <div className="absolute bg-white m-[10%] p-[10%] md:blur-[1800px] blur-[150px]"></div>
          <img
            src="./icon2.png"
            alt=""
            className="lg:w-[1600px] w-[1000px] md:mt-[9%] picture"
          />
        </div>
      </div>
      <div
        className=" flex flex-col justify-center items-center md:flex-row md:justify-around buttons"
        id="buttons"
      >
        <div
          className="flex md:justify-around  p-[9px] mt-[8%] md:mt-[2%] rounded-3xl text-3xl md:w-[250px] w-[53%] text-center justify-center items-center"
          id="button"
        >
          <p className="text-cyan font-poppins font-bold">+9</p>
          <p className="text-white font-poppins font-bold hover:text-cyan">
            &nbsp;Technology
          </p>
        </div>
        <div
          className="flex md:justify-around p-[2%] mt-[8%] md:mt-[2%] rounded-3xl text-3xl md:w-[250px]  w-[53%] text-center justify-center items-center"
          id="button"
        >
          <p className="text-cyan font-poppins font-bold">+11</p>
          <p className="text-white font-poppins font-bold hover:text-cyan">
            &nbsp;Project
          </p>
        </div>
        <div
          className="flex md:justify-around p-[2%] mt-[8%] md:mt-[2%] rounded-3xl text-3xl md:w-[250px]  w-[53%] text-center justify-center items-center"
          id="button"
        >
          <p className="text-cyan font-poppins font-bold ">+20</p>
          <p className="text-white font-poppins font-bold hover:text-cyan">
            &nbsp;Skill
          </p>
        </div>
      </div>
    </div>
  )
}



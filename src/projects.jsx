import React, { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";
export default function Projects() {

    const sr = ScrollReveal({
        reset: true,
        distance: "300px",
        duration: 2000,
        delay: 1000,
      });
      
  return (
    <div>
        <div className="">
      <div className="mt-[45%] md:mt-[15%] projecttitle" id="projects">
        <h1 className="text-white font-poppins font-bold text-4xl md:text-6xl text-center ">
        Some Of My Work :
        </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-center md:justify-center items-center md:mt-[10%]">
          <img src="./roboots.png" alt="" className="pictureprojects w-[100%] md:w-[40%] rounded-lg md:border-4 md:border-solid md:border-white blur-4"/>
          <div className="flex flex-col justify-center items-center descriptionprojects1">
            <h1 className="font-poppins font-bold text-3xl text-white underline p-[3%] rounded-3xl hover:bg-white hover:text-primary hover:cursor-pointer md:text-5xl translate-y-[60%] md:hover:bg-transparent">Portfolio Project :</h1>
            <p className="m-[10%] bg-slate-600 p-[4%] rounded-lg teck md:text-2xl md:ml-[-20%] md:p-[8%]">
              <span className="text-cyan">Technologies:</span> <br /> - HTML & CSS: Foundation for a structured and visually
              pleasing layout.  <br />- Tailwind CSS: Stylish design achieved through
              streamlined styling. <br /> - ReactJS: Enables dynamic and interactive user
              interfaces.
            </p>
            <a href="https://www.ayoubelouarzazi.com/"
            target="_blank"
            className=" md:ml-[5%] text-primary bg-cyan p-[4%] rounded-3xl text-xl font-poppins font-bold hover:bg-emerald-600 hover:text-primary hover:cursor-pointer md:p-[2%] w-[25%] text-center">Visit It</a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center md:justify-center items-center md:mt-[10%]">
          <div className="flex flex-col justify-center items-center descriptionprojects1">
            <h1 className="font-poppins font-bold text-3xl text-white underline p-[3%] rounded-3xl hover:bg-white hover:text-primary hover:cursor-pointer md:text-5xl translate-y-[60%]  md:hover:bg-transparent">To-DO List Project :</h1>
            <p className="m-[10%] bg-slate-600 p-[4%] rounded-lg teck md:text-2xl  md:p-[4%] md:mr-[10%]">
              <span className="text-cyan">Description :</span> <br />  to-do list website, empowering users to effortlessly add, modify, and delete tasks. Demonstrated proficiency in frontend and backend technologies, ensuring a seamless and responsive user experience. Committed to creating functional and visually appealing solutions that enhance productivity and organization
            </p>
            <a href="https://to-do-list-6u85.vercel.app/"
            target="_blank"
            className=" md:ml-[5%] text-primary bg-cyan p-[4%] rounded-3xl text-xl font-poppins font-bold hover:bg-emerald-600 hover:text-primary hover:cursor-pointer md:p-[1%] w-[25%] md:w-[15%] text-center">Visit It</a>
          </div>
          <img src="./first.png" alt="" className="pictureprojects w-[80%] md:w-[30%] rounded-lg md:ml-[-17%]"/>

        </div>


        <div className="flex flex-col md:flex-row justify-center md:justify-center items-center md:mt-[10%]">
          <img src="./morocco.png" alt="" className="pictureprojects w-[70%] md:w-[30%] rounded-lg md:ml-[8%]"/>
          <div className="flex flex-col justify-center items-center descriptionprojects1">
            <h1 className="font-poppins font-bold text-2xl text-white underline p-[3%] rounded-3xl hover:bg-white hover:text-primary hover:cursor-pointer md:text-5xl translate-y-[60%]  md:hover:bg-transparent">Country-Game-Learning Project :</h1>
            <p className="m-[10%] bg-slate-600 p-[4%]  rounded-lg teck md:text-2xl md:p-[8%] md:ml-[-5%]">
              <span className="text-cyan">Description:</span> <br /> Created a dynamic and engaging country-learning application featuring comprehensive information lookup, flag recognition games, and capital quizzes. Utilized a user-friendly interface to enhance the learning experience and foster geographical knowledge. Demonstrated skills in full-stack development, design, and educational content creation.
            </p>
            <a href="https://flag-game-omega.vercel.app/"
          target="_blank"
            className=" md:ml-[5%] text-primary bg-cyan p-[4%] rounded-3xl text-xl font-poppins font-bold hover:bg-emerald-600 hover:text-primary hover:cursor-pointer md:p-[1%] w-[25%] md:w-[15%] text-center">Visit It</a>
          </div>
        </div>

      </div>
    </div>
  );
}

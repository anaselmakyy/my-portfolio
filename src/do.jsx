import "./App.css";

import React, { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function Do(){
    ScrollReveal({
        reset: true,
        distance: "60px",
        duration: 1000,
        delay: 1000,
      });
    ScrollReveal().reveal(".picfront,.backdescription", {
        delay: 500,
        origin: "left",
      });
      ScrollReveal().reveal(".picback,.frontdescription", {
        delay: 500,
        origin: "right",
      });
      ScrollReveal().reveal(".about-title", { delay: 500, origin: "left" });
  return (
    <div>
            <div className="mt-[10%] flex flex-col justify-center items-center">
        <div>
          <h1 className="text-white font-poppins font-bold text-5xl md:text-7xl about-title" >
            WHAT I DO ?
          </h1>
        </div>
        <div className=" flex flex-col justify-center items-center mt-[15%] md:mt-[8%] md:ml-[-25%] ">
          <div className="absolute bg-white md:ml-[-50%] m-[10%] p-[10%] md:blur-[1800px] blur-[150px]" ></div>

          <img
            src="/front.jpg"
            alt=""
            className="w-[80%] rounded-xl border-white border-[5px] about-picture1 md:w-[30%] picfront"
          />
          <p className="frontdescription text-white font-poppins text-[20px] p-[10%] ml-14 mr-14  mt-[10%] md:mt-[0%]  md:absolute pic1 rounded-xl hover:p-[14.5%] transition-all ease-in-out duration-500 md:hover:p-[2%] md:ml-[55%] md:p-[2%] md:mr-[0%] md:bg-cyan-700">
            <span className="text-center items-center text-cyan font-poppins font-bold text-3xl">
              Front end :
            </span>{" "}
            <br />
            Crafting responsive and user-friendly interfaces using HTML, CSS,
            and JavaScript frameworks like React.
          </p>
        </div>

        <div className=" flex flex-col justify-center items-center mt-[25%] ">
          <div className="absolute bg-white m-[10%] p-[10%] md:blur-[1800px] blur-[150px] md:ml-[50%]"></div>
          <img
            src="/db.jpg"
            alt=""
            className="w-[90%] rounded-xl border-white border-[5px] about-picture1 md:w-[30%]  md:ml-[20%] picback"
          />
          <p className="backdescription text-white font-poppins text-[20px] p-[10%] ml-14 mr-14 mt-[10%] md:mt-[0%]  md:absolute md:ml-[30%] md:mr-[50%] pic1 rounded-xl hover:p-[14.5%] transition-all ease-in-out duration-500 md:hover:p-[2%] md:p-[2%] md:bg-cyan-700">
            <span className="text-center items-center text-cyan font-poppins font-bold text-3xl ">
              Back end :
            </span>{" "}
            <br />
            Building robust server-side applications with PHP and his frameworks
            Laravel and databases like MongoDB and MySQL
          </p>
        </div>
      </div>
    </div>
  )
}



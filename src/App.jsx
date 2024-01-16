import logo from "./logo.svg";
import "./App.css";
import './skills.css'
import { Link} from "react-scroll";
import Contact from "./contact";
import React, { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Navbar from "./navbar";
import Mainbody from "./mainbody";
import Do from "./do";
import Skills from "./skills";
import Projects from "./projects";

const Loader = () => <div className="loader"></div>;

export default function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [button, setButton] = useState(false);



  



useEffect(() => {
  const sr = ScrollReveal({
    reset: true,
    distance: "300px",
    duration: 2000,
    delay: 1000,
  });

  sr.reveal(".name,.picture", { delay: 500, origin: "top" });
  sr.reveal(".welcome,.resume,.description", {delay: 500,origin: "right"});
  sr.reveal(".buttons", { delay: 500, origin: "bottom" });
  sr.reveal(".cvbutton", { delay: 500, origin: "right" });
  sr.reveal(".picfront,.backdescription", {
    delay: 500,
    origin: "left",
  });
  sr.reveal(".picback,.frontdescription,.descriptionprojects1", {
    delay: 500,
    origin: "right",
  });


  sr.reveal(".about-title", { delay: 500, origin: "left" });
  sr.reveal(".skill1", { delay: 500, origin: "left" });
  sr.reveal(".skill2", { delay: 500, origin: "right" });
  sr.reveal(".title,", { delay: 500, origin: "left" });
  sr.reveal(".scroller,", {delay: 500, origin: "right",});
  sr.reveal(".projecttitle,.pictureprojects", { delay: 500, origin: "left" });
  sr.reveal(".quote", { delay: 500, origin: "bottom" });
  sr.reveal(".connect", { delay: 500, origin: "left" });

}, []);


const handleIntersection = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const clas = entry.target.id;
      document.getElementById(clas).classList.add(clas);
    }
  });
};


useEffect(() => {
  const options = {
    threshold: 0.5, 
  };

  const observer = new IntersectionObserver(handleIntersection, options);

  observer.observe(document.getElementById('html'));
  observer.observe(document.getElementById('css'));
  observer.observe(document.getElementById('js'));
  observer.observe(document.getElementById('react'));
  observer.observe(document.getElementById('sql'));
  observer.observe(document.getElementById('php'));
  observer.observe(document.getElementById('tailwind'));
  observer.observe(document.getElementById('leadership'));
  observer.observe(document.getElementById('comm'));
  observer.observe(document.getElementById('calm'));
  observer.observe(document.getElementById('stress'));


  return () => {

    observer.disconnect();
  };
}, []);




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
    <>

        <div className="App overflow-hidden">
        <Navbar/> 
        <Mainbody/>
        <Do/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>


    </>
  );
}

import logo from "./logo.svg";
import "./App.css";

import React, { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Navbar from "./navbar";
import Mainbody from "./mainbody";
import Do from "./do";
import Skills from "./skills";
export default function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [button, setButton] = useState(false);
  ScrollReveal({
    reset: true,
    distance: "300px",
    duration: 2000,
    delay: 1000,
  });
  ScrollReveal().reveal(".name,.picture", { delay: 500, origin: "top" });
  ScrollReveal().reveal(".welcome,.resume,.description", {
    delay: 500,
    origin: "right",
  });
  ScrollReveal().reveal(".buttons", { delay: 500, origin: "bottom" });
  ScrollReveal().reveal(".cvbutton", { delay: 500, origin: "right" });
  ScrollReveal().reveal(".picfront,.backdescription", {
    delay: 500,
    origin: "left",
  });
  ScrollReveal().reveal(".picback,.frontdescription", {
    delay: 500,
    origin: "right",
  });
  ScrollReveal().reveal(".about-title", { delay: 500, origin: "left" });

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
    <div className="App">
      <Navbar/> 
      <Mainbody/>
      <Do/>
      <Skills/>
    </div>
  );
}

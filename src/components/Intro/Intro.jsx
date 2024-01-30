import React from "react";
import "./intro.css";
import {gsap} from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function Intro() {
  React.useEffect(()=>{
    const split = new SplitType(".heading", {type:"chars"});
    gsap.from(split.chars, {
      xPercent: -130,
      ease: "back.out",
      duration: 1, // Fix the typo and set a duration value
      scrollTrigger: {
        trigger: ".heading",
        start: "top 90%",
      },
    });
  },[])
  return (
    <div id ="about" className="intro">
      <span className="heading ">Intro</span>
      <div className="intro-body">
        <div className="left-body grid-span-2 small-text">
          <p>
            Having started as a graphic designer and transitioning into a
            creative developer gives me a unique perspective and understanding
            in merging both visual aesthetics and modern technology.
          </p>
        </div>
        <div className="right-body grid-span-4">
          <span>
            Creative developer with a design background, crafting immersive
            digital experiences that combine creativity and functionality.
          </span>
        </div>
        <div className="tools small-text grid-span-2">
          <p>Core Tools</p>
        </div>
        <div className="tool">
          <h1>Javascript</h1>
          <p className="small-text">
            JavaScript serves as the backbone for adding interactivity and
            implementing intricate functionalities within web applications. It
            enables the creation of dynamic features such as virtual scrolling,
            smooth page transitions, advanced text manipulation, and captivating
            animations.
          </p>
        </div>
        <div className="tool">
          <h1>Node.js</h1>
          <p className="small-text">
            A javascript runtime environment that allows to build dynamic and
            responsive web applications, by creating interactive elements and
            handling server-side tasks.
          </p>
        </div>
        <div className="tool">
          <h1>React.js</h1>
          <p className="small-text">
            A free and open-source front-end JavaScript library for building
            user interfaces based on components. React can be used to develop
            single-page, mobile, or server-rendered applications.
          </p>
        </div>
        <div className="tool">
          <h1>Python</h1>
          <p className="small-text">
            Python is a high-level, general-purpose programming language.It is
            dynamically typed and garbage-collected. It supports multiple
            programming paradigms, including structured , object-oriented and
            functional programming.
          </p>
        </div>
      </div>
    </div>
  );
}

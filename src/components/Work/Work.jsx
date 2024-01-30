import React from "react";
import "./work.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap-trial/SplitText";
import SplitType from "split-type";
import Project from "../project/Project";
import Project2 from "../project/Project2";
import Project3 from "../project/Project3";
gsap.registerPlugin(ScrollTrigger);
export default function Work() {
  React.useEffect(()=>{
    const split = new SplitType(".work-heading",{type: "chars"});
    gsap.from(split.chars, {
      xPercent:130,
      ease:"back.out",
      duration:1,
      scrollTrigger:{
        trigger:".work-heading",
        start:"top 90%",
      },
    })
  },[]);
  return (
    <div id ="work" className="work">
      <span className="work-heading">
        <div>Selected</div>
        <div>Works</div>
      </span>
      <div className="hr-line"></div>
      <Project />
      <Project2/>
      <Project3/>
    </div>
  );
}

import React from "react";
import "./project3.css";
import gsap from "gsap";
import ProjectManager from "../../images/projectmanager.png";
import SplitType from "split-type";

export default function Project3() {
  const [aniToggle, setAniToggle] = React.useState(false);
  function handleAni() {
    setAniToggle((prevState) => !prevState);
  }
  const tl = React.useRef();
  React.useEffect(() => {
    let mySplitText = new SplitType(".pro-name-head-3", { type: "chars" });
    let chars = mySplitText.chars;
    tl.current = gsap.timeline({
      paused: true,
    });
    if (window.innerWidth < 440) {
      tl.current
        .from(".pro-info-3", {
          opacity: 0,
        })
        .to(".pro-info-3", {
          opacity: 1,
          duration: 2,
          yPercent: 100,
        })
        .to(
          ".add-height-3",
          {
            height: "45rem",
            duration: 1.5,
            delay: 0.8,
          },
          0
        )
        .to(
          ".bottom-line-3",
          {
            yPercent: 800,
            ease: "power2.out",
            duration: 1.5,
            delay: 0.8,
          },
          0
        );
    }
    else{
    tl.current
      .to(".pro-name-3", {
        scale: 0.99,
        opacity: 0,
        duration: 0.5,
      })
      .to(
        ".pro-num-3",
        {
          scale: 0.99,
          opacity: 0,
          duration: 0.5,
        },
        0
      )
      .to(
        ".pro-intro-3",
        {
          scale: 0.99,
          opacity: 0,
          duration: 0.5,
        },
        0
      )
      .to(
        ".pro-visit-3",
        {
          scale: 0.99,
          opacity: 0,
          duration: 0.5,
        },
        0
      );
    tl.current
      .to(".project-img-3", {
        xPercent: -94.5,
        yPercent: 50,
        scale: 1.15,
        ease: "power2.out",
        duration: 1.5,
        delay: 0.3,
      })
      .to(
        ".add-height-3",
        {
          height: "70rem",
          duration: 1.5,
          delay: 0.8,
        },
        0
      )
      .to(
        ".bottom-line-3",
        {
          yPercent: 1400,
          ease: "power2.out",
          duration: 1.5,
          delay: 0.8,
        },
        0
      );

    tl.current.to(chars, {
      yPercent: -95,
      stagger: 0.05,
      ease: "back.out",
      duration: 1,
    });
    tl.current
      .from(".pro-info-3", {
        opacity: 0,
      })
      .to(".pro-info-3", {
        opacity: 1,
        duration: 0.4,
      });
    }
  }, []);

  React.useEffect(() => {
    aniToggle ? tl.current.play() : tl.current.reverse();
  }, [aniToggle]);
  return (
    <div className="project-main-3 add-height-3">
      <div className="pro-name-head-3">
        <span>Necelo Manager</span>
      </div>
      <div className="project-3">
        <div className="pro-num-3">
          <h1>03/03</h1>
          <div className="pro-year-3 small-txt-3">
            <span style={{ marginBottom: "1rem" }}>2023</span>
            <span>Creative Development</span>
            <span>Interaction Design</span>
          </div>
        </div>
        <div className="pro-img-3 grid-row-span-4-3" onClick={handleAni}>
          <img className="project-img-3" src={ProjectManager} alt="" />
        </div>
        <div className="pro-intro-3 small-txt-2">
          A responsive React project manager app leveraging JSON Server for backend.
        </div>

        <div className="pro-visit-3 small-txt-3" onClick={handleAni}>
          Visit Case Study
        </div>
        <div className="pro-name-3">Necelo Manager</div>
      </div>
      <div
        className="pro-info-3"
        onClick={window.innerWidth < 440 ? handleAni : null}
      >
        <div className="info-box-3">
          <span className="pro-sub-head-3">Role</span>
          <span className="small-txt-3">Creative Developer</span>
          <span className="small-txt-3">Interaction Designer</span>
        </div>
        <div className="info-box-3">
          <span className="pro-sub-head-3">Year</span>
          <span className="small-txt-3">2023</span>
        </div>
        <div className="info-box-3">
          <span className="pro-sub-head-3">Technologies</span>
          <span className="small-txt-3">
            <div>React.js</div>
            <div>Javascript</div>
            <div>Bootstrap</div>
            <div>Cascading Style Sheets</div>
          </span>
        </div>
        <div className="info-box-3 summary-3">
          <span className="pro-sub-head-3">Summary</span>
          <span className="small-txt-3" style={{ width: "70%" }}>
            CRUD based Project Manager Necelo is a responsive React web app leveraging JSON
            Server for backend. Efficiently manage projects with Create, Read,
            Update, and Delete operations.
          </span>
        </div>
        { aniToggle && <div className="info-box-3">
          <span className="small-txt-3">
            <a href="https://github.com/oamshankar/dashboard-project">
              Visit Github Repo
            </a>
            <a href="https://dashboard-project-coral.vercel.app/">
              Visit Live Project
            </a>
          </span>
        </div>}
      </div>
      <div className="bottom-line-3">
        <span>.</span>
      </div>
    </div>
  );
}

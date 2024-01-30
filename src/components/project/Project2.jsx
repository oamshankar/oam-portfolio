import React from "react";
import "./project2.css";
import gsap from "gsap";
import ZoroImg from "../../images/zoro.png";
import SplitType from "split-type";

export default function Project2() {
  const [aniToggle, setAniToggle] = React.useState(false);
  function handleAni() {
    setAniToggle((prevState) => !prevState);
  }
  const tl = React.useRef();
  React.useEffect(() => {
    let mySplitText = new SplitType(".pro-name-head-2", { type: "chars" });
    let chars = mySplitText.chars;
    tl.current = gsap.timeline({
      paused: true,
    });
    if (window.innerWidth < 440) {
      tl.current
        .from(".pro-info-2", {
          opacity: 0,
        })
        .to(".pro-info-2", {
          opacity: 1,
          duration: 2,
          yPercent: 100,
        })
        .to(
          ".add-height-2",
          {
            height: "40rem",
            duration: 1.5,
            delay: 0.8,
          },
          0
        )
        .to(
          ".bottom-line-2",
          {
            yPercent: 835,
            ease: "power2.out",
            duration: 1.5,
            delay: 0.8,
          },
          0
        );
    }
    else{
    tl.current
      .to(".pro-name-2", {
        scale: 0.99,
        opacity: 0,
        duration: 0.5,
      })
      .to(
        ".pro-num-2",
        {
          scale: 0.99,
          opacity: 0,
          duration: 0.5,
        },
        0
      )
      .to(
        ".pro-intro-2",
        {
          scale: 0.99,
          opacity: 0,
          duration: 0.5,
        },
        0
      )
      .to(
        ".pro-visit-2",
        {
          scale: 0.99,
          opacity: 0,
          duration: 0.5,
        },
        0
      );
    tl.current
      .to(".project-img-2", {
        xPercent: -94.5,
        yPercent: 50,
        scale: 1.15,
        ease: "power2.out",
        duration: 1.5,
        delay: 0.3,
      })
      .to(
        ".add-height-2",
        {
          height: "70rem",
          duration: 1.5,
          delay: 0.8,
        },
        0
      )
      .to(
        ".bottom-line-2",
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
      .from(".pro-info-2", {
        opacity: 0,
      })
      .to(".pro-info-2", {
        opacity: 1,
        duration: 0.4,
      });
    }
  }, []);

  React.useEffect(() => {
    aniToggle ? tl.current.play() : tl.current.reverse();
  }, [aniToggle]);
  return (
    <div className="project-main-2 add-height-2">
      <div className="pro-name-head-2">
        <span>Zoro Clothing</span>
      </div>
      <div className="project-2">
        <div className="pro-num-2">
          <h1>02/03</h1>
          <div className="pro-year-2 small-txt-2">
            <span style={{ marginBottom: "1rem" }}>2023</span>
            <span>Creative Development</span>
          </div>
        </div>
        <div className="pro-img-2 grid-row-span-4-2" onClick={handleAni}>
          <img className="project-img-2" src={ZoroImg} alt="" />
        </div>
        <div className="pro-intro-2 small-txt-2">
          A responsive multi-page clothing e-commerce website that optimizes the
          user experience.
        </div>

        <div className="pro-visit-2 small-txt-2" onClick={handleAni}>
          Visit Case Study
        </div>
        <div className="pro-name-2">Zoro Clothing</div>
      </div>
      <div
        className="pro-info-2"
        onClick={window.innerWidth < 440 ? handleAni : null}
      >
        <div className="info-box-2">
          <span className="pro-sub-head-2">Role</span>
          <span className="small-txt-2">Creative Developer</span>
        </div>
        <div className="info-box-2">
          <span className="pro-sub-head-2">Year</span>
          <span className="small-txt-2">2023</span>
        </div>
        <div className="info-box-2">
          <span className="pro-sub-head-2">Technologies</span>
          <span className="small-txt-2">
            <div>Javascript</div>
            <div>Cascading Style Sheets</div>
            <div>HTML</div>
          </span>
        </div>
        <div className="info-box-2 summary-2">
          <span className="pro-sub-head-2">Summary</span>
          <span className="small-txt-2" style={{ width: "70%" }}>
            Zoro is a responsive, multi-page clothing e-commerce website that
            optimizes the user experience across devices. It utilizes the
            current design ideas to strengthen brand identification and increase
            conversions.
          </span>
        </div>
        { aniToggle && <div className="info-box-2">
          <span className="small-txt-2">
            <a href="https://github.com/oamshankar/Zoro-clothing-ecommerce">
              Visit Github Repo
            </a>
            <a href="https://oamshankar.github.io/Zoro-clothing-ecommerce/">
              Visit Live Project
            </a>
          </span>
        </div>}
      </div>
      <div className="bottom-line-2">
        <span>.</span>
      </div>
    </div>
  );
}

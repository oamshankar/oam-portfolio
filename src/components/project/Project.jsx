import React from "react";
import "./project.css";
import gsap from "gsap";
import PythonImg from "../../images/python.jpg.jpg";
import SplitType from "split-type";

export default function Project() {
  const [aniToggle, setAniToggle] = React.useState(false);
  function handleAni() {
    setAniToggle((prevState) => !prevState);
  }
  const tl = React.useRef();
  React.useEffect(() => {
    let mySplitText = new SplitType(".pro-name-head", { type: "chars" });
    let chars = mySplitText.chars;
    tl.current = gsap.timeline({
      paused: true,
    });
    if (window.innerWidth < 440) {
      tl.current
        .from(".pro-info", {
          opacity: 0,
        })
        .to(".pro-info", {
          opacity: 1,
          duration: 2,
          yPercent: 100,
        })
        .to(
          ".add-height",
          {
            height: "40rem",
            duration: 1.5,
            delay: 0.8,
          },
          0
        )
        .to(
          ".bottom-line",
          {
            yPercent: 750,
            ease: "power2.out",
            duration: 1.5,
            delay: 0.8,
          },
          0
        );
    }
    else {
    tl.current
      .to(".pro-name", {
        scale: 0.99,
        opacity: 0,
        duration: 0.5,
      })
      .to(
        ".pro-num",
        {
          scale: 0.99,
          opacity: 0,
          duration: 0.5,
        },
        0
      )
      .to(
        ".pro-intro",
        {
          scale: 0.99,
          opacity: 0,
          duration: 0.5,
        },
        0
      )
      .to(
        ".pro-visit",
        {
          scale: 0.99,
          opacity: 0,
          duration: 0.5,
        },
        0
      );
    tl.current.to(".project-img", {
      xPercent: -94.5,
      yPercent: 50,
      scale: 1.15,
      ease: "power2.out",
      duration: 1.5,
      delay:0.3,
    })
    .to(".add-height",{
      height:"67rem",
      duration:1.5,
      delay:0.8,
    },
    0
    )
    .to(".bottom-line", {
      yPercent: 1400,
      ease: "power2.out",
      duration: 1.5,
      delay:0.8,
    },
    0
    );

    tl.current.to(chars, {
      yPercent: -95,
      stagger: 0.05,
      ease: "back.out",
      duration: 1,
    })
    tl.current.from(".pro-info",{
        opacity:0,
    }).to(".pro-info", {
      opacity:1,
      duration: 0.4,
    });
  }
  }, []);

  React.useEffect(() => {
    aniToggle ? tl.current.play() : tl.current.reverse();
  }, [aniToggle]);
  return (
    <div className="project-main add-height">
      <div className="pro-name-head">
        <span>Huffman Zipper</span>
      </div>
      <div className="project">
        <div className="pro-num">
          <h1>01/03</h1>
          <div className="pro-year small-txt">
            <span style={{ marginBottom: "1rem" }}>2023</span>
            <span>Compression Algorithm</span>
            <span>Developement</span>
          </div>
        </div>
        <div className="pro-img grid-row-span-4" onClick={handleAni}>
          <img className="project-img" src={PythonImg} alt="" />
        </div>
        <div className="pro-intro small-txt">
          A Python compression tool that uses the Huffman coding algorithm for
          efficient file compression and decompression.
        </div>

        <div className="pro-visit small-txt" onClick={handleAni}>
          Visit Case Study
        </div>
        <div className="pro-name">Huffman Zipper</div>
      </div>
      <div
        className="pro-info"
        onClick={window.innerWidth < 440 ? handleAni : null} >
        <div className="info-box">
          <span className="pro-sub-head">Role</span>
          <span className="small-txt">Algorithm Developer</span>
        </div>
        <div className="info-box">
          <span className="pro-sub-head">Year</span>
          <span className="small-txt">2023</span>
        </div>
        <div className="info-box">
          <span className="pro-sub-head">Technologies</span>
          <span className="small-txt">
            <div>Python</div>
          </span>
        </div>
        <div className="info-box summary">
          <span className="pro-sub-head">Summary</span>
          <span className="small-txt" style={{ width: "70%" }}>
            The Huffman Zipper is a Python compression tool that uses the
            Huffman coding algorithm for efficient file compression and
            decompression by assigning shorter codes to common characters while
            maintaining data integrity.
          </span>
        </div>
        {aniToggle && <div className="info-box">
          <span className="small-txt">
            <a href="https://github.com/oamshankar/Huffman-zipper">
              Visit Github Repo
            </a>
          </span>
        </div>}
      </div>
      <div className="bottom-line">
        <span>.</span>
      </div>
    </div>
  );
}

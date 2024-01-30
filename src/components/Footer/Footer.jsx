import React from "react";
import "./footer.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
gsap.registerPlugin(ScrollTrigger);

export default function Footer(){
    const [time,setTime]= React.useState(new Date());
    var options = { hour: "2-digit", minute: "2-digit", hour12: true };
    React.useEffect(()=>{
        setInterval(()=> setTime(new Date()),1000)
    },[]);

    React.useEffect(() => {
      const split = new SplitType(".foot-heading", { type: "chars" });
      gsap.from(split.chars, {
        xPercent: 130,
        ease: "back.out",
        duration: 1, // Fix the typo and set a duration value
        scrollTrigger: {
          trigger: ".foot-heading",
          start: "top 90%",
        },
      });
    }, []);
    return (
      <div id ="contact" className="footer">
        <span className="foot-heading">
          <div>Reach</div>
          <div>Out</div>
        </span>
        <div className="reach">
          <div className="reach-address">
            <div className="small-txt time">
              {time.toLocaleTimeString(undefined, options)}
            </div>
            <div className="small-txt">Bhopal, India</div>
          </div>
          <div className="mail">
            For any inquiries feel free to reach out to me.
            <div style={{ marginTop: "2rem" }}>oamshankar2606@gmail.com</div>
            <div style={{ marginTop: "0.2rem" }}>+91 78030-71665</div>
          </div>
        </div>
        <div className="socials">
          <div className="small-txt creator">Designed and developed by Oam Shankar</div>
          <div className="small-txt">
            <a href="https://www.linkedin.com/in/oamshankar/">Linkedin</a>
          </div>
          <div className="small-txt">
            <a href="https://github.com/oamshankar">GitHub</a>
          </div>
          <div className="small-txt">
            <a href="https://www.instagram.com/oamshankar?igsh=MWVpZzVhNmtsZXBxaQ==">
              Instagram
            </a>
          </div>
        </div>
      </div>
    );
}
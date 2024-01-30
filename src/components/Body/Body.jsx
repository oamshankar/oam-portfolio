import React from "react";
import "./body.css";
import Oam from "../../images/oam_portfolio.png";
export default function Body() {
  return (
    <div id="body" className="body-main">
      <div className="main-body">
        <div className="body-text">
          <div className="oam-name">
            <span>Hi! I'm Oam Shankar A</span>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <span>
              Developer and designer drawing inspiration from the diverse
              culture of Queens, working as a creative independent while
              crafting memorable experiences.
            </span>
            <span>
              <a
                style={{ color: "black" }}
                href="https://docs.google.com/document/d/1ApNmEfzjqVwzNnaTdkz81MDD7NVdGoLD/edit"
              >
                View Resume
              </a>
            </span>
          </div>
        </div>
        <img src={Oam} alt="" />
      </div>

      <div class="marquee">
        <div className="marquee__content">
          Frontend Developer - Creative Designer - UI/UX Enthusiast -
        </div>
        <div className="marquee__content" aria-hidden="true">
          Frontend Developer - Creative Designer - UI/UX Enthusiast -
        </div>
      </div>
    </div>
  );
}

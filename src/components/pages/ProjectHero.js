import React from "react";
import "../../App.css";
import "../ProjectHero.css";
import { Link } from "react-router-dom";

function ProjectHero(props) {
  return (
    <>
      {props.children}
      <div
        className="project-hero-container "
        style={{
          backgroundImage: `url(${props.background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="content-above-hero">
          {/* <p className="branding-top">BRANDING / DESIGN</p> */}
          <p className="branding-title">{props.title}</p>
          <Link
            className="button-hero"
            to={{
              pathname: props.path,
              brandProps: {
                shortcode: props.shortcode,
              },
            }}
          >
            <p
              style={{
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 15,
                padding:40,
                letterSpacing:5
              }}
            >
              VIEW PROJECT
            </p>
            <img style={{height:40}} src="/images/logo-single.png" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProjectHero;

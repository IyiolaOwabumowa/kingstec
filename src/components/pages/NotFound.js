import React, { useRef, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "../../App.css";
import "../ProjectHero.css";
import HeroSection from "../HeroSection";
import About from "./About";
import Values from "./Values";
import Process from "./Process";
import Footer from "./Footer";
import ProjectHero from "./ProjectHero";

function NotFound(props) {
  var Scroll = require("react-scroll");
  var Element = Scroll.Element;
  var scroller = Scroll.scroller;

  useEffect(() => {
    if (props.location.brandProps) {
      scroller.scrollTo(`${props.location.brandProps.path}`, {
        duration: 1500,
        delay: 100,
        smooth: true,
      });
    }
  });

  return (
    <>
      <HeroSection />

      <div id="projects">
        <ProjectHero
          background={"/images/pluraledge/1.jpg"}
          title={"Pluraledge"}
          shortcode={"pl"}
          path="/pluraledge"
        >
          <div className="overlay"></div>
        </ProjectHero>
      </div>

      <ProjectHero
        background={"/images/laglamorer/front.png"}
        title={"La Glamorer"}
        shortcode={"la"}
        path="/laglamorer"
      >
        <div className="overlay"></div>
      </ProjectHero>
      <ProjectHero
        background={"/images/franchise/front.png"}
        title={"F B Solutions"}
        shortcode={"fr"}
        path="/franchise"
      >
        <div className="overlay"></div>
      </ProjectHero>
      <ProjectHero
        background={"/images/ellie/front.png"}
        title={"Ellie Nova"}
        shortcode={"el"}
        path="/ellie"
      >
        <div className="overlay"></div>
      </ProjectHero>
      <ProjectHero
        background={"/images/airbuild/front.jpg"}
        title={"AirBuild"}
        shortcode={"ai"}
        path="/airbuild"
      >
        <div className="overlay"></div>
      </ProjectHero>
      <div id="process">
        <Process />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Values />
      </div>
      <Footer />
    </>
  );
}

export default NotFound;

import React from "react";
import "../App.css";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
   
        <img
          className="center-logo shadowfilter"
          src={"/images/logo-single.png"}
        />
     

      <p  style={{fontFamily:"AxiformaThin", textAlign: "center", marginTop:40 }}>
        We build applications to manage <br />
        businesses and provide solutions
      </p>
      
      <i className="fas fa-chevron-down" />
    </div>
  );
}

export default HeroSection;

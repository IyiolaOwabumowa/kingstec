import React from "react";
import "../About.css";

function About() {
  return (
    <>
      <div className="about-container">
        <div className="footer-links">
          <div className="footer-link-wrapper">
            <div className="footer-link-item">
              <p className="digital-thinking about-header">
                We
                <strong className="about-header" style={{ color: "purple" , fontFamily:"AxiformaBold" }}>
                  {" "}
                  Think{" "}
                </strong>{" "}
                <strong style={{fontFamily:"AxiformaBold"}} className="about-header">Digital</strong>
              </p>
             
              <p className="about-subHeader">
                APP DEVELOPMENT | IT CONSULTATIONS
              </p>
              <p className="about-subHeader">
                TECH REVIEWS | WEBSITE DEVELOPMENT
              </p>
              <p className="about-subHeader">
                BRANDING | BUSINESS CONCEPT DEV.
              </p>
            </div>
            <div className="footer-link-item">
              <p className="about-header"  >
                Vision{" "}
                <strong className="about-header" style={{ color: "#3386fc" }}>
                  +
                </strong>{" "}
                Mission
              </p>
              <div className="vision-mission">
                <p className="about-subHeader" style={{ marginBottom:40, lineHeight:3}}>
                  To be the preferred technology solutions company in Africa. To
                  create platforms that make work smarter and life better
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default About;

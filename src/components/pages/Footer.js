import React from "react";
import "../About.css";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-links">
          <div className="footer-link-wrapper">
            <div className="footer-link-item">
              <img className="footer-logo"  src="/images/footer-logo.png" /> 
              <p style={{fontFamily:"AxiformaThin"}} className="footer-text">
                MADE WITH {" "}<i style={{color:"red"}} class="fa fa-heart pulse" />{" "}FROM THE TEAM AT KINGSTEC
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

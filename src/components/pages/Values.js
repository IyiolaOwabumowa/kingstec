import React from "react";
import "../Values.css";
import { Link } from "react-router-dom";


function Values() {
  return (
    <>
      <div className="values-container">
        <p className="values-header">
          Want to say
          <strong className="values-header"> "Hi" ?</strong>{" "}
        </p>
        <div className="values-footer-links">
          <div className="values-footer-link-wrapper">
            <div className="values-footer-link-item">
              <a style={{textDecoration:"none", cursor:"pointer"}} href="mailto:info@kingstec.com.ng?subject=I%20Want%20To%20Say%20Hi">
                <p
                  style={{ borderBottomStyle: "dotted" }}
                  className="values-header link-contact"
                >
                  <i
                    className="fas fa-envelope-open"
                    style={{ marginRight: 30 }}
                  ></i>
                  Click to send us a mail :)
                </p>
              </a>
              <p className="values-footer-link-text"></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Values;

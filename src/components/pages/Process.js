import React from "react";
import "../Process.css";

function Process() {
  return (
    <>
      <div className="process-container">
        <p style= {{fontFamily:"AxiformaBold"}}className="process-header">
          Our
          <strong className="process-header"> Process </strong>{" "}
        </p>
        <div className="process-footer-links">
          <div className="process-footer-link-wrapper">
            <div className="process-footer-link-item">
              <p className="process-footer-link-header">
                Client Meeting{" "}
                <i
                  style={{ color: "#69cde1" }}
                  className="fas fa-long-arrow-alt-right arrow-decoration"
                ></i>
              </p>
              <i
                style={{ color: "#69cde1", fontSize: 30 }}
                class="fas fa-long-arrow-alt-down arrow-downwards"
              ></i>

              <p className="process-footer-link-text"></p>
            </div>
            <div className="process-footer-link-item">
              <p className="process-footer-link-header">
                Research Conduct{" "}
                <i
                  style={{ color: "#69cde1" }}
                  className="fas fa-long-arrow-alt-right arrow-decoration"
                ></i>
              </p>
              <i
                style={{ color: "#69cde1", fontSize: 30 }}
                class="fas fa-long-arrow-alt-down arrow-downwards"
              ></i>

              <p className="process-footer-link-text"></p>
            </div>
            <div className="process-footer-link-item">
              <p className="process-footer-link-header">
                Idea Sketch{" "}
                <i
                  style={{ color: "#69cde1" }}
                  className="fas fa-long-arrow-alt-right arrow-decoration"
                ></i>
              </p>
              <i
                style={{ color: "#69cde1", fontSize: 30 }}
                class="fas fa-long-arrow-alt-down arrow-downwards"
              ></i>

              <p className="process-footer-link-text"></p>
            </div>
          </div>
        </div>
        <div className="process-footer-links">
          <div className="process-footer-link-wrapper">
            <div className="process-footer-link-item">
              <p className="process-footer-link-header">
                Creation of Concept Variations
                <i
                  style={{ color: "#69cde1" }}
                  className="fas fa-long-arrow-alt-right arrow-decoration"
                ></i>
              </p>
              <p className="process-footer-link-text"></p>
              <i
                style={{ color: "#69cde1", fontSize: 30 }}
                class="fas fa-long-arrow-alt-down arrow-downwards"
              ></i>
            </div>
            <div className="process-footer-link-item">
              <p className="process-footer-link-header">
                Concept Feedback Presentation
                <i
                  style={{ color: "#69cde1" }}
                  className="fas fa-long-arrow-alt-right arrow-decoration"
                ></i>
              </p>
              <p className="process-footer-link-text"></p>
              <i
                style={{ color: "#69cde1", fontSize: 30 }}
                class="fas fa-long-arrow-alt-down arrow-downwards"
              ></i>
            </div>

            <div className="process-footer-link-item">
              <p className="process-footer-link-header">Delivery and Launch</p>
              <p className="process-footer-link-text"></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Process;

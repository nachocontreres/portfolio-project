import React from "react";
import { Image, Row, Col } from "react-bootstrap";
import "../css/About.css";
import profile from "../profile.JPG";

export function About() {
  return (
    <div id="about" name="about" className="about">
      <div>
        <h1 style={{ paddingTop: "8vw" }}>About Me</h1>
        <Row
          style={{ paddingTop: "6vw" }}
          className="d-flex justify-content-center"
        >
          <Col lg={5}>
            <div style={{ paddingLeft: "6vw" }}>
              <div className="p-4 bio">
                <p>
                  Hi, I'm Ignacio Contreres, a Frontend Developer Based in
                  Uruguay.
                </p>
                <p>
                  I enjoy designing & engineering applications, and I'm always
                  seeking to improve the user experience by putting myself in
                  theirs perspective.
                </p>
                <p>
                  Here some of the technologies I've been working with recently:
                </p>
                <div className="skills-container">
                <Row className="skills-row">
                <Col sm={5}>
                    <ul className="skills"> 
                      <li><i class="fas fa-angle-right"></i>React</li>
                      <li><i class="fas fa-angle-right"></i>HTML</li>
                      <li><i class="fas fa-angle-right"></i>CSS</li>
                    </ul>
                </Col>
                <Col >
                    <ul className="skills"> 
                    <li><i class="fas fa-angle-right"></i>Angular</li>
                      <li><i class="fas fa-angle-right"></i>Javascript</li>
                      <li><i class="fas fa-angle-right"></i>SCSS</li>
                    </ul>
                </Col>
                </Row>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={4}>
            <div className="picture">
              <Image
                src={profile}
                className="bio-img"
                width={500}
                height={500}
              />
              {/* <img className="profile" src={profile} alt="profile.."/>  */}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default About;

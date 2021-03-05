import React from "react";
import { Image, Col, Row } from "react-bootstrap";
import miguitarra1 from "../miguitarra.png";
import miguitarra2 from "../miguitarra_2.png";
import mapa1 from "../mapadetunoche_1.png"
import 'aos/dist/aos.css'

import "../css/Work.css";

export function Work() {
  return (
    <div id="work" name="work" className="work">
        <h1 style={{ paddingTop: "8vw" }}>My projects</h1>
        <Row
          style={{ marginTop: "6rem" }}
          className="d-flex justify-content-center"
        >
          <Col data-aos="fade-right">
            <div className="bio">
              <h5>miGuitarra</h5>
              <p>
               miGuitarra was designed for the childrends who want to play
                the guitar
              </p>

              <div className="skills-container">
                <Row className="skills-row">
                  <Col className="tech-stack">
                    <ul>
                      <li>Angular</li>
                      <li>Node.js</li>
                      <li>Express</li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col data-aos="fade-left" className="cards">
            <a target="_blank" rel="noreferrer" href="https://www.google.com">
              <Image src={miguitarra1} className="project-img" />
            </a>
          </Col>
        </Row>
        <Row className="github-row">
          <Col>
          <a href="#" className="github-link" title="To Github Repository">
            <i className="icon fab fa-github fa-2x"></i>
          </a>
          </Col>
        </Row>
       
        <Row
          className="d-flex justify-content-center"
        >
          <Col data-aos="fade-right">
            <div className="bio">
              <h5>Weather App</h5>
              <p>
                Weather App is an app made for... lorem ipsum
              </p>

              <div className="skills-container">
                <Row className="skills-row">
                  <Col className="tech-stack">
                    <ul>
                      <li>Angular</li>
                      <li>Node.js</li>
                      <li>Express</li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col data-aos="fade-left" className="cards">
            <a target="_blank" rel="noreferrer" href="https://www.google.com">
              <Image src={miguitarra2} className="project-img" />
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
          <a href="#" className="github-link" title="To Github Repository">
            <i className="icon fab fa-github fa-2x"></i>
          </a>
          </Col>
        </Row>
       

        <Row
          className="d-flex justify-content-center"
        >
          <Col data-aos="fade-right">
            <div className="bio">
              <h5>Note App</h5>
              <p>
                Miguitarra.com was designed for the childrends who want to play
                the guitar
              </p>

              <div className="skills-container">
                <Row className="skills-row">
                  <Col className="tech-stack">
                    <ul>
                      <li>Angular</li>
                      <li>Node.js</li>
                      <li>Express</li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col data-aos="fade-left" className="cards">
            <a target="_blank" rel="noreferrer" href="https://www.google.com">
              <Image src={mapa1} className="project-img" />
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
          <a href="#" className="github-link" title="To Github Repository">
            <i className="icon fab fa-github fa-2x"></i>
          </a>
          </Col>
        </Row>
    </div>
  );
}

export default Work;

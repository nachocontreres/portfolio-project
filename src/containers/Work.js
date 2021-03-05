import React from "react";
import { Card, Image, Col, Row } from "react-bootstrap";
import profile from "../profile.JPG";

import "../css/Work.css";

export function Work() {
  return (
    <div id="work" name="work" className="work">
      <div>
        <h1>My projects</h1>
        <Row
          style={{ marginTop: "6rem" }}
          className="d-flex justify-content-center"
        >
          <Col>
            <div className="bio">
              <h5>Miguitarra.com</h5>
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
          <Col className="cards">
            <a target="_blank" href="https://www.google.com">
              <Image src={profile} className="project-img" />
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
          <Col>
            <div className="bio">
              <h5>Weather App</h5>
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
          <Col className="cards">
            <a target="_blank" href="https://www.google.com">
              <Image src={profile} className="project-img" />
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
          <Col>
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
          <Col className="cards">
            <a target="_blank" href="https://www.google.com">
              <Image src={profile} className="project-img" />
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
    </div>
  );
}

export default Work;

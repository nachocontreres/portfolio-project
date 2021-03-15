import React from "react";
import { Image, Col, Row } from "react-bootstrap";
import miguitarra2 from "../miguitarra_2.png";
import todo from "../todoList_2.png";
import mapa from "../mapadetunoche_1.png";
import crypto from "../crypto-tracker.png"
import "aos/dist/aos.css";

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
              miGuitarra was designed for the childrends who want to play the
              guitar
            </p>

            <div className="skills-container">
              <Row className="skills-row">
                <Col className="tech-stack">
                  <ul>
                    <li>Angular</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>Jest</li>
                  </ul>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
        <Col data-aos="fade-left" className="cards">
            <Image src={miguitarra2} className="project-img" />
        </Col>
      </Row>
      <Row className="github-row">
        <Col>
          <a target="_blank" rel="noreferrer" href="https://github.com/nachocontreres/miGuitarra/tree/master" className="github-link" title="To Github Repository">
            <i className="icon fab fa-github fa-2x"></i>
          </a>
        </Col>
      </Row>

      <Row className="d-flex justify-content-center">
        <Col data-aos="fade-right">
          <div className="bio">
            <h5>Crypto Tracker</h5>
            <p>
              Crypto tracker is a web app for tracking cryptocurrency prices, it has a search functionality for searching by coin name.
              The data is obtained from CoinGecko API using Axios and React Hooks
            </p>

            <div className="skills-container">
              <Row className="skills-row">
                <Col className="tech-stack">
                  <ul>
                    <li>React</li>
                    <li>Axios</li>
                    <li>Css</li>
                    <li>Coin Gecko API</li>
                  </ul>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
        <Col data-aos="fade-left" className="cards">
          <a target="_blank" rel="noreferrer" href="https://nachocontreres.github.io/crypto-tracker">
            <Image src={crypto} className="project-img" />
          </a>
        </Col>
      </Row>
      <Row>
        <Col>
        <a target="_blank" rel="noreferrer" href="https://github.com/nachocontreres/crypto-tracker" className="github-link" title="To Github Repository">
            <i className="icon fab fa-github fa-2x"></i>
          </a>
        </Col>
      </Row>

      <Row className="d-flex justify-content-center">
        <Col data-aos="fade-right">
          <div className="bio">
            <h5>Todo List</h5>
            <p>
              todo list is a simple application that was built with the
              intention of learning the basics of react native
            </p>

            <div className="skills-container">
              <Row className="skills-row">
                <Col className="tech-stack">
                  <ul>
                    <li>React Native</li>
                    <li>Css</li>
                    <li>Expo</li>
                  </ul>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
        <Col data-aos="fade-left" className="cards">
            <Image src={todo} className="project-img" />
        </Col>
      </Row>
      <Row>
        <Col>
        <a target="_blank" rel="noreferrer" href="https://github.com/nachocontreres/todoApp" className="github-link" title="To Github Repository">
            <i className="icon fab fa-github fa-2x"></i>
          </a>
        </Col>
      </Row>

      <Row className="d-flex justify-content-center">
        <Col data-aos="fade-right">
          <div className="bio">
            <h5>MapaDeTuNoche (WIP)</h5>
            <p>
              MapaDeTuNoche is a website that allows users to purchase star maps
              with custom designs
            </p>

            <div className="skills-container">
              <Row className="skills-row">
                <Col className="tech-stack">
                  <ul>
                    <li>React</li>
                    <li>Css</li>
                  </ul>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
        <Col data-aos="fade-left" className="cards nopointer">
          <Image src={mapa} className="project-img" />
        </Col>
      </Row>
      <Row>
        <Col>
          <a
            href="#"
            className="github-link disabled"
            title="To Github Repository"
          >
            <i className="icon fab fa-github fa-2x"></i>
          </a>
        </Col>
      </Row>
    </div>
  );
}

export default Work;

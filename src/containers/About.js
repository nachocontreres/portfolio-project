import React, { useEffect } from "react";
import { Image, Row, Col } from "react-bootstrap";
import "../css/About.css";
import profile from "../profile.JPG";
import Aos from 'aos'
import 'aos/dist/aos.css'

export function About() {

  useEffect(() =>{

    Aos.init({duration:2000})
  }, []);

  return (
    <div data-aos="fade" id="about" name="about" className="about">
        <h1 style={{ paddingTop: "8vw" }}>About Me</h1>
        <Row
          style={{ paddingTop: "6vw" }}
          className="d-flex justify-content-center"
        >
          <Col lg={5}>
              <div className="p-4 bio">
                <p>
                  Hi, I'm Ignacio Contreres, a Frontend Developer Based in
                  Uruguay.
                </p>
                <p>
                  I enjoy designing & engineering applications, and I'm always
                  seeking to improve the user experience by putting myself in
                  their perspective.
                </p>
                <p>
                  Here some of the technologies I've been working with recently:
                </p>
                <div className="skills-container">
                <Row className="skills-row">
                <Col >
                    <ul className="skills"> 
                      <li><i class="fas fa-angle-right"></i>React</li>
                      <li><i class="fas fa-angle-right"></i>HTML</li>
                      <li><i class="fas fa-angle-right"></i>CSS</li>
                    </ul>
                </Col>
                <Col >
                    <ul className="skills"> 
                    <li><i class="fas fa-angle-right"></i>Angular</li>
                      <li><i class="fas fa-angle-right"></i>React Native</li>
                      <li><i class="fas fa-angle-right"></i>Node.js</li>
                    </ul>
                </Col>
                </Row>
                </div>
              </div>
          </Col>
          <Col sm={4}>
            <div className="picture">
              <Image
                src={profile}
                className="bio-img"
                width={200}
                height={200}
              />
             
            </div>
          </Col>
        </Row>
      </div>
  );
}

export default About;

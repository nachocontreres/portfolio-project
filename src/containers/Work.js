import React from "react";
import { Card, Image, Col, Row } from "react-bootstrap";
import profile from "../profile.JPG";

import "../css/Work.css";

export function Work() {
  return (
    <div id="work" name="work" className="work">
      <div>
        <h1 style={{ paddingTop: "5vw" }}>My projects</h1>
        <Row
          style={{ paddingTop: "6vw" }}
          className="d-flex justify-content-center"
        >
          <Col xs={4}>
            <a target="_blank" href="https://www.google.com">
              <Image
                src={profile}
                className="project-img"
                width={700}
                height={500}
              />
            </a>
          </Col>
          <Col xs={4}>
          <a target="_blank" href="https://www.google.com">
              <Image
                src={profile}
                className="project-img"
                width={700}
                height={500}
              />
            </a>
          </Col>
          <Col xs={4}>
            <Image
              src={profile}
              className="project-img"
              width={700}
              height={500}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Work;

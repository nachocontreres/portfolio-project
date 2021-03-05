import React from "react";
import "../css/Contact.css";
import { Form, Row, Col, Button } from "react-bootstrap";
import emailjs from "emailjs-com";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_der28xl", e.target, "user_58CWMzg15yCsp655asXGe")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
  }

  return (
    <div id="contact" name="contact" className="contact">
      <h1 style={{ paddingTop: "8vw" }}>Get In Touch</h1>
      <div className="container-contact container">
        <Form onSubmit={sendEmail} className="form">
          <Form.Group className="align-text-form">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" name="name" />
          </Form.Group>
          <Form.Group className="align-text-form">
            <Form.Label>Email</Form.Label>
            <Form.Control
              className="mail"
              type="email"
              placeholder="Email"
              required
              name="email"
            />
          </Form.Group>
          <Form.Group className="align-text-form">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" placeholder="Subject" required name="subject"/>
          </Form.Group>
          <Form.Group className="align-text-form">
            <Form.Label>Your Message</Form.Label>
            <Form.Control as="textarea" rows={3} name="message"/>
          </Form.Group>

          <Button className="contact-button push" variant="dark" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Contact;

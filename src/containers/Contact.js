import React, { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";
import "../css/Contact.css";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {

  useEffect(() =>{

    Aos.init({duration:1000})
  }, []);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_der28xl",
        e.target,
        "user_58CWMzg15yCsp655asXGe"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();

    notify();
    
  }

  toast.configure();

   function notify () {
    toast.success('Message Sent!', {position: toast.POSITION.BOTTOM_CENTER})
  }

  return (
    <div data-aos="fade-up" id="contact" name="contact" className="contact">
      <h1 style={{ paddingTop: "10vw" }}>Get In Touch</h1>
      <div className="container-contact container">
        <Form onSubmit={sendEmail} className="form">
          <Form.Group className="align-text-form">
            <Form.Label>Name</Form.Label>
            <Form.Control required type="text" placeholder="Name" name="name" />
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
            <Form.Control
              type="text"
              placeholder="Subject"
              required
              name="subject"
            />
          </Form.Group>
          <Form.Group className="align-text-form">
            <Form.Label>Your Message</Form.Label>
            <Form.Control required as="textarea" rows={3} name="message" />
          </Form.Group>

          <Button className="contact-button push" variant="dark" type="submit">
            Send Message
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Contact;

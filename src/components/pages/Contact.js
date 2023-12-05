import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_kizlxj6",
      "template_l6bdbwc",
      e.target,
      "-1XLpeI87V8tATL-G"
    ).then(
      alert("Message sent!")
    );
  };
  return (
    <div className="m-4 info-section">
      <h2>Contact</h2>
      <h5>Email me at <a href="mailto:uwlryoung@gmail.com">uwlryoung@gmail.com</a>, of fill out the form below to directly send me an email and I will get back to you as soon as possible!</h5><br></br>

      <Form onSubmit={sendEmail}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="sender" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" placeholder="Email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            placeholder="Write a message here"
            style={{ height: "100px" }}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Send Message
        </Button>
      </Form>
    </div>
  );
};

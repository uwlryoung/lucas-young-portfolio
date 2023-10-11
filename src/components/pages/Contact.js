import React, {useRef} from "react";
import Button from "react-bootstrap/Button";
// import FloatingLabel from "react-bootstrap/FloatingLabel";
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

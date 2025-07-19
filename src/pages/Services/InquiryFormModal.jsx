import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import emailjs from "emailjs-com";

function InquiryFormModal({ show, handleClose, parkName, type }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      user_email: email,
      message: message,
      package_name: parkName,
      inquiry_type: type,
    };

    emailjs
      .send(
        "service_k2y3jxr", // e.g., service_xxxxx
        "template_6k5rqjv", // e.g., template_xxxxx
        templateParams,
        "ZH_e6o5ySAwVvxgfW" // e.g., Px1sXvxxxx...
      )
      .then(
        (response) => {
          alert("Inquiry sent successfully!");
          setEmail("");
          setMessage("");
          handleClose();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send inquiry. Please try again.");
        }
      );
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {type} - {parkName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="emailInput">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="messageInput">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Tell us more..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-2">
            Send Inquiry
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default InquiryFormModal;

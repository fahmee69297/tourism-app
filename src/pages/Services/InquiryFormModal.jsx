import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function InquiryFormModal({ show, handleClose, parkName, type }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Inquiry sent for: ${type} - ${parkName}\nEmail: ${email}\nMessage: ${message}`
    );
    handleClose();
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

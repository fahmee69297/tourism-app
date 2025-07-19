import React, { useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import InquiryFormModal from "../Services/InquiryFormModal";
import "./Adventure.css";

const adventurePackage = {
  title: "Adventure Tours",
  img: "/assets/adventure-tour.jpg",
  desc: "Thrilling safaris, hikes, and outdoor challenges for the bold.",
};

function AdventureTours() {
  // State to manage modal visibility and data
  const [modalShow, setModalShow] = useState(false);
  const [formType, setFormType] = useState(""); // 'Book Now' or 'Details Here'

  // Function to open modal with selected package and form type
  const handleOpenModal = (pkg, type) => {
    setFormType(type);
    setModalShow(true);
  };

  return (
    <div className="adventure py-5">
      {/* Text section centered */}
      <Container className="text-center mb-5 my-5">
        <h1>Adventure Tours</h1>
        <h2>Experience Thrilling Adventures</h2>
        <p>
          Join us for an unforgettable experience filled with outdoor
          activities, breathtaking landscapes, and unforgettable memories.
        </p>
      </Container>

      {/* Container for the card, centered horizontally */}
      <div className="container-center">
        <Card className="package-card h-100">
          <Card.Img
            variant="top"
            src={adventurePackage.img}
            className="package-img"
          />
          <Card.Body className="d-flex flex-column justify-content-between">
            <Card.Title>{adventurePackage.title}</Card.Title>
            <Card.Text>{adventurePackage.desc}</Card.Text>
            <div className="card-actions mt-3">
              <Button
                variant="primary"
                size="sm"
                onClick={() => handleOpenModal(adventurePackage, "Book Now")}
              >
                Book Now
              </Button>
              <Button
                variant="outline-secondary"
                size="sm"
                onClick={() =>
                  handleOpenModal(adventurePackage, "Details Here")
                }
              >
                Details Here
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>

      {/* InquiryFormModal */}
      <InquiryFormModal
        show={modalShow}
        handleClose={() => setModalShow(false)}
        parkName={adventurePackage.title} // Passing package title to modal
        type={formType}
      />
    </div>
  );
}

export default AdventureTours;

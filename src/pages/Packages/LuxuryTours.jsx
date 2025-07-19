import React, { useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import InquiryFormModal from "../Services/InquiryFormModal";
import "./Luxury.css"; // You can rename the CSS file to match the Halaal Tours if needed

const halaalPackage = {
  title: "Halaal Tours",
  img: "/assets/halaal-tour.jpg", // Update the image path if needed
  desc: "Travel experiences that are respectful of Islamic dietary and cultural needs.",
};

function HalaalTours() {
  // State to manage modal visibility and data
  const [modalShow, setModalShow] = useState(false);
  const [formType, setFormType] = useState(""); // 'Book Now' or 'Details Here'

  // Function to open modal with selected package and form type
  const handleOpenModal = (pkg, type) => {
    setFormType(type);
    setModalShow(true);
  };

  return (
    <div className="luxury py-5">
      {/* Text section centered */}
      <Container className="text-center mb-5 my-5">
        <h1>Halaal Tours</h1>
        <h2>Experience Travel that Respects Your Values</h2>
        <p>
          Discover travel experiences tailored to your needs, ensuring respect
          for Islamic dietary and cultural practices.
        </p>
      </Container>

      {/* Container for the card, centered horizontally */}
      <div className="container-center">
        <Card className="package-card h-100">
          <Card.Img
            variant="top"
            src={halaalPackage.img}
            className="package-img"
          />
          <Card.Body className="d-flex flex-column justify-content-between">
            <Card.Title>{halaalPackage.title}</Card.Title>
            <Card.Text>{halaalPackage.desc}</Card.Text>
            <div className="card-actions mt-3">
              <Button
                variant="primary"
                size="sm"
                onClick={() => handleOpenModal(halaalPackage, "Book Now")}
              >
                Book Now
              </Button>
              <Button
                variant="outline-secondary"
                size="sm"
                onClick={() => handleOpenModal(halaalPackage, "Details Here")}
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
        parkName={halaalPackage.title} // Passing package title to modal
        type={formType}
      />
    </div>
  );
}

export default HalaalTours;

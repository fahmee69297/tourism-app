import React, { useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import InquiryFormModal from "../Services/InquiryFormModal";
import "./Family.css";

const familyPackage = {
  title: "Family Tours",
  img: "/assets/family-tour.jpg",
  desc: "Fun, safe, and memorable travel experiences for the entire family.",
};

function FamilyTours() {
  // State to manage modal visibility and data
  const [modalShow, setModalShow] = useState(false);
  const [formType, setFormType] = useState(""); // 'Book Now' or 'Details Here'

  // Function to open modal with selected package and form type
  const handleOpenModal = (pkg, type) => {
    setFormType(type);
    setModalShow(true);
  };

  return (
    <div className="family py-5">
      {/* Text section centered */}
      <Container className="text-center mb-5 my-5">
        <h1>Family Tours</h1>
        <h2>Enjoy our Family Tour Packages</h2>
        <p>
          Fun, safe, and memorable travel experiences for the entire family.
        </p>
      </Container>

      {/* Container for the card, centered horizontally */}
      <div className="container-center">
        <Card className="package-card h-100">
          <Card.Img
            variant="top"
            src={familyPackage.img}
            className="package-img"
          />
          <Card.Body className="d-flex flex-column justify-content-between">
            <Card.Title>{familyPackage.title}</Card.Title>
            <Card.Text>{familyPackage.desc}</Card.Text>
            <div className="card-actions mt-3">
              <Button
                variant="primary"
                size="sm"
                onClick={() => handleOpenModal(familyPackage, "Book Now")}
              >
                Book Now
              </Button>
              <Button
                variant="outline-secondary"
                size="sm"
                onClick={() => handleOpenModal(familyPackage, "Details Here")}
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
        parkName={familyPackage.title} // Passing package title to modal
        type={formType}
      />
    </div>
  );
}

export default FamilyTours;

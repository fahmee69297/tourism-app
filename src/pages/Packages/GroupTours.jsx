import React, { useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import InquiryFormModal from "../Services/InquiryFormModal";
import "./Group.css";

const groupPackage = {
  title: "Group Tours",
  img: "/assets/group-tour.jpg",
  desc: "Perfect for school trips, company retreats, and friend groups.",
};

function GroupTours() {
  // State to manage modal visibility and data
  const [modalShow, setModalShow] = useState(false);
  const [formType, setFormType] = useState(""); // 'Book Now' or 'Details Here'

  // Function to open modal with selected package and form type
  const handleOpenModal = (pkg, type) => {
    setFormType(type);
    setModalShow(true);
  };

  return (
    <div className="group py-5">
      {/* Text section centered */}
      <Container className="text-center mb-5 my-5">
        <h1>Group Tours</h1>
        <h2>Explore Together with Group Packages</h2>
        <p>Perfect for school trips, company retreats, and friend groups.</p>
      </Container>

      {/* Container for the card, centered horizontally */}
      <div className="container-center">
        <Card className="package-card h-100">
          <Card.Img
            variant="top"
            src={groupPackage.img}
            className="package-img"
          />
          <Card.Body className="d-flex flex-column justify-content-between">
            <Card.Title>{groupPackage.title}</Card.Title>
            <Card.Text>{groupPackage.desc}</Card.Text>
            <div className="card-actions mt-3">
              <Button
                variant="primary"
                size="sm"
                onClick={() => handleOpenModal(groupPackage, "Book Now")}
              >
                Book Now
              </Button>
              <Button
                variant="outline-secondary"
                size="sm"
                onClick={() => handleOpenModal(groupPackage, "Details Here")}
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
        parkName={groupPackage.title} // Passing package title to modal
        type={formType}
      />
    </div>
  );
}

export default GroupTours;

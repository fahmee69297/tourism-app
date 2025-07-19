import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import InquiryFormModal from "./Services/InquiryFormModal"; // Import InquiryFormModal component
import "./Packages.css";

const packages = [
  {
    title: "Family Tours",
    img: "/assets/family-tour.jpg",
    desc: "Fun, safe, and memorable travel experiences for the entire family.",
  },
  {
    title: "Adventure Tours",
    img: "/assets/adventure-tour.jpg",
    desc: "Thrilling safaris, hikes, and outdoor challenges for the bold.",
  },
  {
    title: "Halaal Tours",
    img: "/assets/halaal-tour.jpg",
    desc: "Travel experiences that are respectful of Islamic dietary and cultural needs.",
  },
  {
    title: "Group Tours",
    img: "/assets/group-tour.jpg",
    desc: "Perfect for school trips, company retreats, and friend groups.",
  },
];

function Packages() {
  // State to manage modal visibility and data
  const [modalShow, setModalShow] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [formType, setFormType] = useState(""); // 'Book Now' or 'Details Here'

  // Function to open modal with selected package and form type
  const handleOpenModal = (pkg, type) => {
    setSelectedPackage(pkg);
    setFormType(type);
    setModalShow(true);
  };

  return (
    <div className="packages py-5">
      <Container className="text-center mb-5 my-5">
        <h1>Travel Packages</h1>
        <p>
          Browse our curated tour packages for families, groups, and
          adventurers.
        </p>
      </Container>

      {/* Container for grid layout of cards */}
      <Container>
        <div className="d-flex justify-content-center">
          <Row className="gy-4 gx-4 justify-content-center">
            {" "}
            {/* Adjusting grid spacing */}
            {packages.map((pkg, index) => (
              <Col key={index} xs={12} sm={6} md={4} lg={3} className="d-flex">
                <Card className="package-card flex-fill d-flex flex-column">
                  <Card.Img
                    variant="top"
                    src={pkg.img}
                    className="package-img"
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{pkg.title}</Card.Title>
                    <Card.Text>{pkg.desc}</Card.Text>
                    <div className="card-actions mt-auto d-flex justify-content-between">
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => handleOpenModal(pkg, "Book Now")}
                      >
                        Book Now
                      </Button>
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => handleOpenModal(pkg, "Details Here")}
                      >
                        Details Here
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>

      {/* InquiryFormModal */}
      {selectedPackage && (
        <InquiryFormModal
          show={modalShow}
          handleClose={() => setModalShow(false)}
          parkName={selectedPackage.title} // Passing package title to modal
          type={formType}
        />
      )}
    </div>
  );
}

export default Packages;

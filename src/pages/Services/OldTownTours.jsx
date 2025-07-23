import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import InquiryFormModal from "./InquiryFormModal"; // Import the InquiryFormModal component
import "./OldTown.css"; // Assuming you have custom styles here

const towns = [
  {
    name: "Lamu Old Town",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW4KVL8tvRMzj2RfNroP0-yc0H2mFr2JTtYKyWskWQ1-_R4PvzASDbEdk&s",
    desc: "UNESCO World Heritage site with rich Swahili culture.",
  },
  {
    name: "Mombasa Old Town",
    img: "/assets/oldtown.jpg",
    desc: "Famous for its narrow alleys and historic architecture.",
  },
  {
    name: "Fort Jesus",
    img: "/assets/fortjesus.jpg",
    desc: "A Portuguese fort with a museum and amazing sea views.",
  },
  {
    name: "Gede Ruins",
    img: "/assets/gede-ruins.jpg",
    desc: "Archaeological site of an ancient Swahili town.",
  },
  {
    name: "Malindi Old Town",
    img: "/assets/malindi.jpg",
    desc: "Historic coastal town with cultural landmarks.",
  },
  {
    name: "Takwa Ruins",
    img: "/assets/taqwa-ruins.jpg", // Make sure this path is correct
    desc: "Mysterious ruins of a 15th-century Swahili town on Manda Island.",
  },
];

function OldTownTours() {
  // State to manage modal visibility and data
  const [modalShow, setModalShow] = useState(false);
  const [selectedTown, setSelectedTown] = useState(null);
  const [formType, setFormType] = useState(""); // 'Book Safari' or 'Request Pricing'

  // Function to open modal with selected town and form type
  const handleOpenModal = (town, type) => {
    setSelectedTown(town);
    setFormType(type);
    setModalShow(true);
  };

  return (
    <Container className="old-town py-5 mt-5 ">
      <h1 className="text-center mb-4">Discover Kenya’s Old Towns</h1>
      <Row className="g-4 card-row-offset">
        {towns.map((town, index) => (
          <Col md={6} lg={4} key={index}>
            <Card className="h-100">
              <Card.Img variant="top" src={town.img} />
              <Card.Body>
                <Card.Title>{town.name}</Card.Title>
                <Card.Text>{town.desc}</Card.Text>

                <div className="card-actions mt-3">
                  <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={() => handleOpenModal(town, "Book Safari")}
                  >
                    Book Safari
                  </button>
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => handleOpenModal(town, "Request Pricing")}
                  >
                    Request Pricing
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* InquiryFormModal */}
      {selectedTown && (
        <InquiryFormModal
          show={modalShow}
          handleClose={() => setModalShow(false)}
          parkName={selectedTown.name} // Passing town name to modal
          type={formType}
        />
      )}
    </Container>
  );
}

export default OldTownTours;

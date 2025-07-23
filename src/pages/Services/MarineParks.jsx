import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import InquiryFormModal from "./InquiryFormModal"; // Import modal component
import "./Marine.css";

const parks = [
  {
    name: "Mombasa Marine Park",
    img: "/assets/msa-marine.jpg",
    desc: "Stunning coral reefs, sea turtles, and crystal clear waters.",
  },
  {
    name: "Malindi Marine Park",
    img: "/assets/malindi-marine.jpg",
    desc: "Kenya’s oldest marine park, famous for its coral gardens.",
  },
  {
    name: "Watamu Marine Park",
    img: "/assets/watamu-marine.jpg",
    desc: "Home to green turtles and an intricate reef system.",
  },
  {
    name: "Kisite Marine Park",
    img: "/assets/kisite.jpg",
    desc: "Snorkel with dolphins and possibly spot a humpback whale.",
  },
  {
    name: "Sunset Sailing",
    img: "/assets/sunset-sailing.jpg", // Update the path if needed
    desc: "Relax on a traditional dhow as the sun sets over the Indian Ocean.",
  },
  {
    name: "Kiunga Marine Reserve",
    img: "/assets/kiunga-marine.jpg",
    desc: "A haven for sea turtles and exotic marine life in Lamu.",
  },
];

function MarineParks() {
  // State to control modal visibility and selected park data
  const [modalShow, setModalShow] = useState(false);
  const [selectedPark, setSelectedPark] = useState(null);
  const [formType, setFormType] = useState(""); // To determine which form type ("Book Safari" or "Request Pricing")

  const handleOpenModal = (park, type) => {
    setSelectedPark(park);
    setFormType(type);
    setModalShow(true);
  };

  return (
    <Container className="marine-parks py-5 mt-5 ">
      <div className="marine-parks-header text-center my-5">
        <h1>Explore Kenya's Marine Parks</h1>
      </div>
      <Row className="g-4 card-row-offset">
        {parks.map((park, index) => (
          <Col md={6} lg={4} key={index}>
            <Card className="h-100">
              <Card.Img variant="top" src={park.img} />
              <Card.Body>
                <Card.Title>{park.name}</Card.Title>
                <Card.Text>{park.desc}</Card.Text>

                <div className="card-actions mt-3">
                  <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={() => handleOpenModal(park, "Book Safari")}
                  >
                    Book Safari
                  </button>
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => handleOpenModal(park, "Request Pricing")}
                  >
                    Request Pricing
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal Component */}
      {selectedPark && (
        <InquiryFormModal
          show={modalShow}
          handleClose={() => setModalShow(false)}
          parkName={selectedPark.name}
          type={formType}
        />
      )}
    </Container>
  );
}

export default MarineParks;

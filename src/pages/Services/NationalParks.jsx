import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import InquiryFormModal from "./InquiryFormModal"; // Import the InquiryFormModal component
import "./National.css"; // Assuming you have custom styles here

const parks = [
  {
    name: "Amboseli National Park",
    img: "/assets/Amboseli.jpg",
    desc: "Famous for elephant herds and stunning views of Mt. Kilimanjaro.",
  },
  {
    name: "Masai Mara Reserve",
    img: "/assets/masai-mara.jpg",
    desc: "Home to the Great Migration and diverse wildlife.",
  },
  {
    name: "Lake Nakuru National Park",
    img: "/assets/lake-nakuru.jpg",
    desc: "Known for flamingos and rhino conservation.",
  },
  {
    name: "Samburu National Reserve",
    img: "/assets/samburu.jpg",
    desc: "Features unique species like the Grevy’s zebra.",
  },
  {
    name: "Aberdare National Park",
    img: "/assets/aberdare.jpg",
    desc: "Known for its misty forests, waterfalls, and diverse wildlife.",
  },
  {
    name: "Tsavo National Park",
    img: "/assets/tsavo.jpg",
    desc: "One of Kenya’s largest parks with diverse landscapes.",
  },
];

function NationalParks() {
  // State to handle modal visibility and data
  const [modalShow, setModalShow] = useState(false);
  const [selectedPark, setSelectedPark] = useState(null);
  const [formType, setFormType] = useState(""); // 'Book Safari' or 'Request Pricing'

  // Function to open the modal and set the selected park and form type
  const handleOpenModal = (park, type) => {
    setSelectedPark(park);
    setFormType(type);
    setModalShow(true);
  };

  return (
    <Container className="national-parks py-5 mt-5 shift-right">
      <h1 className="text-center mb-4">Explore Kenya’s National Parks</h1>
      <Row className="g-4 card-row-offset">
        {parks.map((park, index) => (
          <Col md={6} lg={4} key={index} className="h-100">
            <Card className="h-100">
              <Card.Img variant="top" src={park.img} />
              <Card.Body>
                <Card.Title>{park.name}</Card.Title>
                <Card.Text>{park.desc}</Card.Text>

                {/* Booking and Pricing Buttons */}
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

export default NationalParks;

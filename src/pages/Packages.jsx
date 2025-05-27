import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
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
  return (
    <div className="packages py-5">
      <Container className="text-center mb-5 my-5">
        <h1>Travel Packages</h1>
        <p>
          Browse our curated tour packages for families, groups, and
          adventurers.
        </p>
      </Container>

      {/* Single container with grid layout */}
      <Container>
        <Row className=" card-row-offset g-4">
          {packages.map((pkg, index) => (
            <Col key={index} xs={12} md={6} lg={3}>
              <Card className="package-card h-100">
                <Card.Img variant="top" src={pkg.img} className="package-img" />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title>{pkg.title}</Card.Title>
                  <Card.Text>{pkg.desc}</Card.Text>
                  <div className="card-actions mt-3">
                    <Button variant="primary" size="sm">
                      Book Now
                    </Button>
                    <Button variant="outline-secondary" size="sm">
                      Request Pricing
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Packages;

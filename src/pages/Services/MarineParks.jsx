import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
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
  return (
    <Container className="marine-parks py-5 mt-5">
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
                  <button className="btn btn-primary btn-sm me-2">
                    Book Safari
                  </button>
                  <button className="btn btn-outline-secondary btn-sm">
                    Request Pricing
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MarineParks;

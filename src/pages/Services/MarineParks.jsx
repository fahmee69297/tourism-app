import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Marine.css";

const parks = [
  {
    name: "Mombasa Marine Park",
    img: "/marine/mombasa.jpg",
    desc: "Stunning coral reefs, sea turtles, and crystal clear waters.",
  },
  {
    name: "Malindi Marine Park",
    img: "/marine/malindi.jpg",
    desc: "Kenya’s oldest marine park, famous for its coral gardens.",
  },
  {
    name: "Watamu Marine Park",
    img: "/marine/watamu.jpg",
    desc: "Home to green turtles and an intricate reef system.",
  },
  {
    name: "Kisite-Mpunguti Marine Park",
    img: "/marine/kisite.jpg",
    desc: "Snorkel with dolphins and possibly spot a humpback whale.",
  },
  {
    name: "Kiunga Marine Reserve",
    img: "/marine/kiunga.jpg",
    desc: "A haven for sea turtles and exotic marine life in Lamu.",
  },
];

function MarineParks() {
  return (
    <Container className="marine-parks py-5">
      <h1 className="text-center mb-4">Explore Kenya's Marine Parks</h1>
      <Row className="g-4">
        {parks.map((park, index) => (
          <Col md={6} lg={4} key={index}>
            <Card className="h-100">
              <Card.Img variant="top" src={park.img} />
              <Card.Body>
                <Card.Title>{park.name}</Card.Title>
                <Card.Text>{park.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MarineParks;

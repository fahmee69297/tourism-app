import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./OldTown.css"; // Create this CSS file if desired

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
  return (
    <Container className="old-town py-5 mt-5">
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

export default OldTownTours;

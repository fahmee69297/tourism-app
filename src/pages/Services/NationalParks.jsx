import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./National.css"; // Create this CSS file if you want custom styling

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
    desc: "Known for its misty forests, waterfalls, and diverse wildlife, ",
  },
  {
    name: "Tsavo National Park",
    img: "/assets/tsavo.jpg",
    desc: "One of Kenya’s largest parks with diverse landscapes.",
  },
];

function NationalParks() {
  return (
    <Container className="national-parks py-5 mt-5">
      <h1 className="text-center mb-4">Explore Kenya’s National Parks</h1>
      <Row className="g-4 card-row-offset">
        {parks.map((park, index) => (
          <Col md={6} lg={4} key={index} className="h-100">
            <Card className="h-100 ">
              <Card.Img variant="top" src={park.img} />
              <Card.Body>
                <Card.Title>{park.name}</Card.Title>
                <Card.Text>{park.desc}</Card.Text>

                {/* Booking and Pricing Buttons */}
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

export default NationalParks;

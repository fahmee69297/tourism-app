import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Services.css";

function Services() {
  return (
    <div className="services py-5">
      {/* Header Section */}
      <Container className="text-center mb-5 my-5">
        <h1>Our Services</h1>
        <p>Explore our safari packages, marine park tours, and more.</p>
      </Container>

      {/* Services Cards */}
      <Container>
        <Row className="gy-4 gx-4 justify-content-center shift-right">
          {/* Marine Park Tours */}
          <Col xs={12} sm={6} md={4} lg={3} className="d-flex">
            <Card className="service-card flex-fill d-flex flex-column">
              <Link
                to="/services/marine-parks"
                className="text-decoration-none text-dark"
              >
                <Card.Img
                  variant="top"
                  src="/turtle.jpg"
                  className="service-img"
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>Marine Park Tours</Card.Title>
                  <Card.Text>
                    Explore the breathtaking beauty of our marine parks with
                    expert guides.
                  </Card.Text>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          {/* Old Town Tours */}
          <Col xs={12} sm={6} md={4} lg={3} className="d-flex">
            <Card className="service-card flex-fill d-flex flex-column">
              <Link
                to="/services/old-town-tours"
                className="text-decoration-none text-dark"
              >
                <Card.Img
                  variant="top"
                  src="/old-town2.jpg"
                  className="service-img"
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>Old Town Tours</Card.Title>
                  <Card.Text>
                    Join us for a once-in-a-lifetime old town experience and see
                    history up close.
                  </Card.Text>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          {/* National Park Adventures */}
          <Col xs={12} sm={6} md={4} lg={3} className="d-flex">
            <Card className="service-card flex-fill d-flex flex-column">
              <Link
                to="/services/national-parks"
                className="text-decoration-none text-dark"
              >
                <Card.Img
                  variant="top"
                  src="/lions.jpg"
                  className="service-img"
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>National Park Adventures</Card.Title>
                  <Card.Text>
                    Discover the wonders of nature with our guided national park
                    tours.
                  </Card.Text>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Services;

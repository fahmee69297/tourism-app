import React from "react";
import "./Services.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="services">
      <div className="services-header text-center my-5">
        <h1>Our Services</h1>
        <p>Explore our safari packages, marine park tours, and more.</p>
      </div>

      <div className="container">
        <div className="row g-4">
          {/* Marine Park Tours */}
          <div className="col-md-4">
            <Link
              to="/services/marine-parks"
              className="text-decoration-none text-dark"
            >
              <div className="service-card h-100">
                <img
                  src="/turtle.jpg"
                  alt="Marine Park"
                  className="img-fluid"
                />
                <h3>Marine Park Tours</h3>
                <p>
                  Explore the breathtaking beauty of our marine parks with
                  expert guides.
                </p>
              </div>
            </Link>
          </div>

          {/* Old Town Tours */}
          <div className="col-md-4">
            <Link
              to="/services/old-town-tours"
              className="text-decoration-none text-dark"
            >
              <div className="service-card h-100">
                <img
                  src="/old-town2.jpg"
                  alt="Old Town Tour"
                  className="img-fluid"
                />
                <h3>Old Town Tours</h3>
                <p>
                  Join us for a once-in-a-lifetime old town experience and see
                  history up close.
                </p>
              </div>
            </Link>
          </div>

          {/* National Park Adventures */}
          <div className="col-md-4">
            <Link
              to="/services/national-parks"
              className="text-decoration-none text-dark"
            >
              <div className="service-card h-100">
                <img
                  src="/lions.jpg"
                  alt="National Park"
                  className="img-fluid"
                />
                <h3>National Park Adventures</h3>
                <p>
                  Discover the wonders of nature with our guided national park
                  tours.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;

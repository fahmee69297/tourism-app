import React from "react";
import "./Services.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

function Services() {
  return (
    <div className="services">
      <div className="services-header">
        <h1>Our Services</h1>
        <p>Explore our safari packages, marine park tours, and more.</p>
      </div>

      <div className="container">
        {/* Row for the grid */}
        <div className="row">
          {/* Service 1 */}
          <div className="col-md-4">
            <div className="service-card">
              <img src="/turtle.jpg" alt="Marine Park" className="img-fluid" />
              <h3>Marine Park Tours</h3>
              <p>
                Explore the breathtaking beauty of our marine parks with expert
                guides.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="col-md-4">
            <div className="service-card">
              <img
                src="/old-town2.jpg"
                alt="Safari Tour"
                className="img-fluid"
              />
              <h3>Old Town Tours</h3>
              <p>
                Join us for a once-in-a-lifetime old town experience and see
                history up close.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="col-md-4">
            <div className="service-card">
              <img src="/lions.jpg" alt="National Park" className="img-fluid" />
              <h3>National Park Adventures</h3>
              <p>
                Discover the wonders of nature with our guided national park
                tours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;

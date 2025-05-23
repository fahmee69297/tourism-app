import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./About.css";

function About() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <div className="about">
      <h1>About Us</h1>
      <p className="lead">
        Learn more about our mission, values, history, and the team behind Fadak
        Travels.
      </p>

      {/* Company Mission */}
      <section id="mission" className="py-5">
        <div className="container px-4">
          <div className="row">
            <div className="col-lg-10">
              <h2 className="fw-bold mb-3">Our Mission</h2>
              <p>
                At Fadak Travels, our mission is to connect people with nature
                and culture through unforgettable travel experiences. We strive
                to offer enriching, sustainable, and personalized adventures
                that create lasting memories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section id="values" className="py-5 bg-light">
        <div className="container px-4">
          <div className="row">
            <div className="col-lg-10">
              <h2 className="fw-bold mb-3">Our Values</h2>
              <p>
                Integrity, sustainability, customer focus, and cultural respect
                guide everything we do. We believe in responsible tourism that
                respects local communities and ecosystems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section id="history" className="py-5">
        <div className="container px-4">
          <div className="row">
            <div className="col-lg-10">
              <h2 className="fw-bold mb-3">Our History</h2>
              <p>
                Founded in Mombasa, Kenya, Fadak Travels began as a small tour
                company with a big dream: to make East Africa’s natural and
                historical treasures accessible to all. Today, we serve hundreds
                of travelers every year with curated tours and packages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section id="team" className="py-5 bg-light">
        <div className="container px-4">
          <div className="row">
            <div className="col-lg-10">
              <h2 className="fw-bold mb-3">Meet the Team</h2>
              <p>
                Our team is made up of passionate travel experts, local guides,
                and customer service pros who work together to ensure every trip
                is smooth, safe, and unforgettable. Get to know the faces behind
                Fadak.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CompanyMission from "../pages/About/CompanyMission";
import CompanyValues from "../pages/About/CompanyValues";
import CompanyHistory from "../pages/About/CompanyHistory";
import MeetTheTeam from "../pages/About/MeetTheTeam";
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

      <section id="mission">
        <CompanyMission />
      </section>

      <section id="values">
        <CompanyValues />
      </section>

      <section id="history">
        <CompanyHistory />
      </section>

      <section id="team">
        <MeetTheTeam />
      </section>
    </div>
  );
}

export default About;

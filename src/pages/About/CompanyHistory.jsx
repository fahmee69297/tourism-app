import React from "react";
import "./History.css";

function CompanyHistory() {
  const milestones = [
    {
      year: "2023",
      text: "Founded Fadak Travels with a mission to create unforgettable travel experiences.",
    },
    {
      year: "2024",
      text: "launched our first curated local and international tours for travelers.",
    },
    {
      year: "2026",
      text: "Aim to expand our network of local guides and eco-friendly travel partners.",
    },
    {
      year: "Beyond",
      text: "Committed to sustainable tourism and memorable journeys for every traveler.",
    },
  ];

  return (
    <section className="history">
      <h1>Our History</h1>
      <div className="timeline-cards">
        {milestones.map((m, idx) => (
          <div className="timeline-card" key={idx}>
            <div className="icon">{m.icon}</div>
            <div className="year">{m.year}</div>
            <p>{m.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CompanyHistory;

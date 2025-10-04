import React from "react";
import "./Mission.css";
import { Globe, Users, Heart } from "lucide-react"; // icons

function CompanyMission() {
  const missions = [
    {
      icon: <Globe size={32} />,
      title: "Global Reach",
      text: "Connecting travelers with unique experiences worldwide.",
    },
    {
      icon: <Users size={32} />,
      title: "Community",
      text: "Supporting local communities through ethical tourism.",
    },
    {
      icon: <Heart size={32} />,
      title: "Passion",
      text: "Crafting journeys with care, love, and expertise.",
    },
  ];

  return (
    <section className="mission">
      <h1>Our Mission</h1>
      <div className="mission-grid">
        {missions.map((m, idx) => (
          <div className="mission-card" key={idx}>
            {m.icon}
            <h3>{m.title}</h3>
            <p>{m.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CompanyMission;

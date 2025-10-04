import React from "react";
import "./Values.css";
import { Shield, Compass, Star } from "lucide-react";

function CompanyValues() {
  const values = [
    {
      icon: <Shield size={28} />,
      title: "Integrity",
      text: "Honest, transparent, and customer-first approach.",
    },
    {
      icon: <Compass size={28} />,
      title: "Excellence",
      text: "Delivering unmatched quality in every journey.",
    },
    {
      icon: <Star size={28} />,
      title: "Passion",
      text: "Driven by love for exploration and culture.",
    },
  ];

  return (
    <section className="values">
      <h1>Our Values</h1>
      <div className="values-grid">
        {values.map((v, idx) => (
          <div className="value-card" key={idx}>
            {v.icon}
            <h3>{v.title}</h3>
            <p>{v.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CompanyValues;

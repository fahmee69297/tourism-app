import React from "react";
import "./Team.css";

function MeetTheTeam() {
  const team = [
    {
      name: "Fahmy Twalib",
      role: "Founder & CEO",
      img: "/assets/fahmy.png",
    },
    {
      name: "Mohsin Ali",
      role: "Travel Consultant",
      img: "/assets/travel-consultant.png",
    },
    {
      name: "Luqman Yusuf",
      role: "Customer Experience Lead",
      img: "/assets/luqman.jpeg",
    },
  ];

  return (
    <section className="team">
      <h1>Meet the Team</h1>
      <div className="team-grid">
        {team.map((t, idx) => (
          <div className="team-member" key={idx}>
            <img src={t.img} alt={t.name} />
            <h3>{t.name}</h3>
            <p>{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MeetTheTeam;

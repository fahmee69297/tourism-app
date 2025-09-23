import React, { useState } from "react";
import Slider from "react-slick";
import InquiryFormModal from "../pages/Services/InquiryFormModal"; // your modal
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";

function Home() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const featuredPackages = [
    {
      title: "Maasai Mara Safari",
      desc: "Experience the iconic Wildebeest Migration and enjoy luxury lodges in the heart of the savannah.",
      img: "../assets/package1.jpeg",
    },
    {
      title: "Diani Beach Escape",
      desc: "Relax on pristine white sands, snorkel in turquoise waters, and soak in the coastal vibes.",
      img: "../assets/package2.jpeg",
    },
    {
      title: "Mount Kenya Adventure",
      desc: "Trek scenic trails, witness breathtaking peaks, and explore Kenya's second highest mountain.",
      img: "../assets/package3.jpeg",
    },
  ];

  const whyChooseUs = [
    {
      title: "Reliable Travel Agency",
      desc: "Consistent service from the first contact to the end of your journey.",
    },
    {
      title: "Local Expertise",
      desc: "Guides are proud locals offering insider knowledge for authentic experiences.",
    },
    {
      title: "Tailor-Made Tours",
      desc: "We design every itinerary specifically for you, ensuring a perfect fit.",
    },
    {
      title: "Responsible Tourism",
      desc: "Support local communities and preserve wildlife with ethically designed trips.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Fadak Travels gave us the most amazing safari experience in Kenya! Highly professional and friendly service.",
      author: "- Sarah M., UK",
    },
    {
      quote:
        "Our beach vacation to Diani was perfectly organized. The team went above and beyond.",
      author: "- Ahmed A., UAE",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "3rem 1rem",
        }}
      >
        <h1>Explore Kenya Like Never Before</h1>
        <p>
          Your adventure awaits – safaris, beaches, mountains, and cultural
          experiences all in one place.
        </p>
        <button className="cta-button" onClick={openModal}>
          Plan My Trip
        </button>
        <div className="hero-image" style={{ marginTop: "2rem" }}>
          <img
            src="../assets/home-hero.jpeg"
            alt="Kenya Adventure"
            style={{
              width: "100%",
              maxWidth: "900px",
              borderRadius: "10px",
              objectFit: "cover",
            }}
          />
        </div>
      </section>

      {/* Welcome / Highlights Section */}
      <section className="welcome-container" style={{ textAlign: "center" }}>
        <h2 className="welcome-header">Welcome to Fadak Travels</h2>
        <ul
          className="welcome-bullets"
          style={{ listStyle: "none", padding: 0, marginTop: "1rem" }}
        >
          <li>
            🦁 <strong>Wildlife Safaris</strong> – Maasai Mara, Amboseli, Tsavo
          </li>
          <li>
            🏖 <strong>Beach Escapes</strong> – Diani, Watamu, Lamu
          </li>
          <li>
            🏔 <strong>Mountain Adventures</strong> – Mount Kenya & more
          </li>
          <li>
            🌍 <strong>Cultural Experiences</strong> – Local communities &
            traditions
          </li>
        </ul>
      </section>

      {/* Featured Packages */}
      <section
        className="featured-packages"
        style={{ textAlign: "center", padding: "2rem 1rem" }}
      >
        <h2 className="section-title">Featured Packages</h2>
        <div className="image-grid" style={{ justifyContent: "center" }}>
          {featuredPackages.map((pkg, idx) => (
            <div
              className="package-card"
              key={idx}
              style={{ margin: "1rem", maxWidth: "300px", textAlign: "center" }}
            >
              <img
                src={pkg.img}
                alt={pkg.title}
                style={{
                  width: "100%",
                  height: "200px",
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />
              <h3 style={{ color: "#003366", margin: "0.5rem 0" }}>
                {pkg.title}
              </h3>
              <p>{pkg.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us-section">
        <h2 className="section-title">Why Travel With Fadak</h2>
        <Slider {...sliderSettings}>
          {whyChooseUs.map((item, idx) => (
            <div className="why-slide" key={idx}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </Slider>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <h2 className="section-title">What Our Clients Say</h2>
        <Slider {...sliderSettings}>
          {testimonials.map((t, idx) => (
            <div className="testimonial" key={idx}>
              <p>"{t.quote}"</p>
              <h4>{t.author}</h4>
            </div>
          ))}
        </Slider>
      </section>

      {/* Inquiry Modal */}
      <InquiryFormModal
        show={showModal}
        handleClose={closeModal}
        parkName="Home Page Inquiry"
        type="Trip Planning"
      />
    </div>
  );
}

export default Home;

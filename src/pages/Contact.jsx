// src/pages/Contact/Contact.jsx
import React, { useState } from "react";
import "./Contact.css";
import { Phone, Mail, Facebook, Instagram, MapPin, Send } from "lucide-react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const contactOptions = [
    {
      icon: <Phone size={28} />,
      title: "Call Us",
      text: "+254 712 345 678",
      link: "tel:+254712345678",
    },
    {
      icon: <Mail size={28} />,
      title: "Email Us",
      text: "info@coastaltours.com",
      link: "mailto:info@coastaltours.com",
    },
    {
      icon: <Facebook size={28} />,
      title: "Facebook",
      text: "Follow us on Facebook",
      link: "https://facebook.com/coastaltours",
    },
    {
      icon: <Instagram size={28} />,
      title: "Instagram",
      text: "Follow our adventures",
      link: "https://instagram.com/coastaltours",
    },
    {
      icon: <MapPin size={28} />,
      title: "Visit Us",
      text: "Nyali, Mombasa, Kenya",
      link: "https://maps.google.com/?q=Nyali+Mombasa",
    },
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("Please fill in all fields.");
      return;
    }

    try {
      await addDoc(collection(db, "messages"), {
        ...form,
        createdAt: serverTimestamp(),
      });
      setStatus("✅ Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("❌ Failed to send. Please try again.");
    }
  };

  return (
    <section className="contact">
      <h1>Get in Touch</h1>
      <p className="intro">
        We'd love to hear from you! Choose any of the options below or send us a
        direct message.
      </p>

      {/* Contact Options */}
      <div className="contact-grid">
        {contactOptions.map((c, idx) => (
          <a
            href={c.link}
            key={idx}
            className="contact-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon">{c.icon}</div>
            <h3>{c.title}</h3>
            <p>{c.text}</p>
          </a>
        ))}
      </div>

      {/* Contact Form */}
      <div className="contact-form-container">
        <h2>Send Us a Message</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="send-btn">
            <Send size={18} /> Send Message
          </button>

          {status && <p className="status">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;

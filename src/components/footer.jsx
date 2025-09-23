import React from "react";
import "./footer.css"; // assuming you're importing a CSS file
import { Link } from "react-router-dom";

function Foot() {
  return (
    <footer className="container-fluid">
      <div className="row">
        <div className="col">
          <img className="logo" src="../fadak.png" alt="Fadak Logo" />
          <p>
            Explore the world with us. Your adventure starts here! Let us guide
            you to unforgettable experiences.
          </p>
        </div>

        <div className="col">
          <h3>
            Office
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <p>Sir Mbarak Hinawy Road</p>
          <p>Mombasa, Kenya</p>
          <p className="email-id">fadaktravels@gmail.com</p>
          <h4>+254786620784</h4>
        </div>

        <div className="col">
          <h3>
            Links
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <ul className="second-list">
            <li>
              <li>
                <Link to="/" className="link-button">
                  Home
                </Link>
              </li>
            </li>
            <li>
              <Link to="/services" className="link-button">
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="link-button">
                About us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link-button">
                Contact
              </Link>
            </li>
            <li>
              <button className="link-button">Features</button>
            </li>
          </ul>
        </div>

        <div className="col">
          <h3>
            Newsletter
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <form>
            {/* Replace ion-icon with actual icons or spans if needed */}
            <div className="email-box">
              {" "}
              <span className="icon-mail" />
              <input type="email" placeholder="Enter your email id" required />
              <span className="fas fa-arrow-right" /> {/* Forward arrow */}
            </div>
          </form>
          <div className="social-icons">
            <ion-icon name="logo-facebook"></ion-icon>
            <ion-icon name="logo-instagram"></ion-icon>
            <ion-icon name="logo-youtube"></ion-icon>
            <ion-icon name="logo-whatsapp"></ion-icon>
          </div>
        </div>
      </div>

      <hr />
      <p className="copy-right">
        Fadak Travel &copy; {new Date().getFullYear()} - All Rights Reserved
      </p>
    </footer>
  );
}

export default Foot;

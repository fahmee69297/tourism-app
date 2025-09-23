import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { packages } from "./data/packagesData";
import InquiryFormModal from "../pages/Services/InquiryFormModal"; // adjust path if needed
import "./nav.css";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [modalShow, setModalShow] = useState(false); // For Book Now modal
  const navigate = useNavigate();
  const searchRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => {
    setMenuOpen(false);
    setShowDropdown(false);
  };

  // Filter packages based on search query
  const results = packages.filter((pkg) =>
    pkg.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleResultClick = (route) => {
    navigate(route);
    setQuery("");
    setShowDropdown(false);
    closeMenu();
  };

  return (
    <div className="header">
      {/* Website Name */}
      <div className="website-name">FADAK TRAVELS.com</div>

      {/* Hamburger Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>

      {/* Navigation */}
      <nav className={menuOpen ? "nav open" : "nav"}>
        <ul>
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/services" onClick={closeMenu}>
              Locations
            </Link>
            <ul className="dropdown">
              <li>
                <Link to="/services/marine-parks" onClick={closeMenu}>
                  Marine Parks
                </Link>
              </li>
              <li>
                <Link to="/services/national-parks" onClick={closeMenu}>
                  National Parks
                </Link>
              </li>
              <li>
                <Link to="/services/old-town-tours" onClick={closeMenu}>
                  Old Town Tours
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/packages" onClick={closeMenu}>
              Packages
            </Link>
            <ul className="dropdown">
              <li>
                <Link to="/packages/family" onClick={closeMenu}>
                  Family Tours
                </Link>
              </li>
              <li>
                <Link to="/packages/adventure" onClick={closeMenu}>
                  Adventure Tours
                </Link>
              </li>
              <li>
                <Link to="/packages/luxury" onClick={closeMenu}>
                  Halal Tours
                </Link>
              </li>
              <li>
                <Link to="/packages/group" onClick={closeMenu}>
                  Group Tours
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/about" onClick={closeMenu}>
              About Us
            </Link>
            <ul className="dropdown">
              <li>
                <Link to="/about#mission" onClick={closeMenu}>
                  Company Mission
                </Link>
              </li>
              <li>
                <Link to="/about#values" onClick={closeMenu}>
                  Company Values
                </Link>
              </li>
              <li>
                <Link to="/about#history" onClick={closeMenu}>
                  Company History
                </Link>
              </li>
              <li>
                <Link to="/about#team" onClick={closeMenu}>
                  Meet the Team
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/contact" onClick={closeMenu}>
              Contact Us
            </Link>
            <ul className="dropdown">
              <li>
                <Link to="/contact#call" onClick={closeMenu}>
                  Call us
                </Link>
              </li>
              <li>
                <Link to="/contact#email" onClick={closeMenu}>
                  Email us
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      {/* Search bar with live dropdown */}
      <div className="search-bar" style={{ position: "relative" }}>
        <input
          type="text"
          placeholder="Search tours..."
          value={query}
          ref={searchRef}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowDropdown(true);
          }}
          onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
        />
        <button
          type="button"
          onClick={() => {
            if (query.trim() !== "") {
              navigate(`/search?q=${encodeURIComponent(query)}`);
              setQuery("");
              setShowDropdown(false);
            }
          }}
        >
          🔍
        </button>

        {showDropdown && query && results.length > 0 && (
          <ul
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              backgroundColor: "white",
              border: "1px solid #ccc",
              borderRadius: "5px",
              listStyle: "none",
              margin: 0,
              padding: "5px 0",
              zIndex: 1000,
              maxHeight: "250px",
              overflowY: "auto",
            }}
          >
            {results.map((r, i) => (
              <li
                key={i}
                style={{
                  padding: "8px 12px",
                  cursor: "pointer",
                  borderBottom: "1px solid #eee",
                }}
                onMouseDown={() => handleResultClick(r.route)}
              >
                {r.title}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* CTA Button */}
      <div className="cta-button">
        <button
          onClick={() => setModalShow(true)}
          style={{ all: "unset", cursor: "pointer" }}
        >
          Book Now
        </button>
      </div>

      {/* Inquiry Form Modal */}
      <InquiryFormModal
        show={modalShow}
        handleClose={() => setModalShow(false)}
        parkName="General Inquiry"
        type="Book Now"
      />
    </div>
  );
}

export default Nav;

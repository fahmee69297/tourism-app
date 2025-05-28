import { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <div className="website-name">FADAK TRAVELS.com</div>

      {/* Hamburger Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>

      {/* Navigation */}
      <nav className={menuOpen ? "nav open" : "nav"}>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <ul className="dropdown">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/blog/news">Latest News</Link>
              </li>
              <li>
                <Link to="/services/featured">Featured Products</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/services">Locations</Link>
            <ul className="dropdown">
              <li>
                <Link to="/services/marine-parks">Marine Parks</Link>
              </li>
              <li>
                <Link to="/services/national-parks">National Parks</Link>
              </li>
              <li>
                <Link to="/services/old-town-tours">Old Town Tours</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/packages">Packages</Link>
            <ul className="dropdown">
              <li>
                <Link to="/packages/family">Family Tours</Link>
              </li>
              <li>
                <Link to="/packages/adventure">Adventure Tours</Link>
              </li>
              <li>
                <Link to="/packages/luxury">Halal Tours</Link>
              </li>
              <li>
                <Link to="/packages/group">Group Tours</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/about">About Us</Link>
            <ul className="dropdown">
              <li>
                <Link to="/about#mission">Company Mission</Link>
              </li>
              <li>
                <Link to="/about#values">Company Values</Link>
              </li>
              <li>
                <Link to="/about#history">Company History</Link>
              </li>
              <li>
                <Link to="/about#team">Meet the Team</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
            <ul className="dropdown">
              <li>
                <Link to="/contact#call">Call us</Link>
              </li>
              <li>
                <Link to="/contact#email">Email us</Link>
              </li>
              <li>
                <Link to="/contact#facebook">Facebook</Link>
              </li>
              <li>
                <Link to="/contact#instagram">Instagram</Link>
              </li>
              <li>
                <Link to="/contact#tiktok">TikTok</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
    </div>
  );
}

export default Nav;

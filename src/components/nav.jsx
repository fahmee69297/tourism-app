import { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
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
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
            <ul className="dropdown">
              <li>
                <Link to="/about" onClick={closeMenu}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog/news" onClick={closeMenu}>
                  Latest News
                </Link>
              </li>
              <li>
                <Link to="/services/featured" onClick={closeMenu}>
                  Featured Products
                </Link>
              </li>
              <li>
                <Link to="/blog" onClick={closeMenu}>
                  Blog
                </Link>
              </li>
            </ul>
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
              <li>
                <Link to="/contact#facebook" onClick={closeMenu}>
                  Facebook
                </Link>
              </li>
              <li>
                <Link to="/contact#instagram" onClick={closeMenu}>
                  Instagram
                </Link>
              </li>
              <li>
                <Link to="/contact#tiktok" onClick={closeMenu}>
                  TikTok
                </Link>
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

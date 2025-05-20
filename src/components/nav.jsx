import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    <div className="header">
      <div className="website-name">FADAK TRAVELS.com</div>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <ul className="dropdown">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/blog">Latest News</Link>
              </li>
              <li>
                <Link to="/services">Featured Products</Link>
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
                <Link to="/services">Marine Parks</Link>
              </li>
              <li>
                <Link to="/services">National Parks</Link>
              </li>
              <li>
                <Link to="/services">Old Town Tours</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/packages">Packages</Link>
            <ul className="dropdown">
              <li>
                <Link to="/packages">Family Tours</Link>
              </li>
              <li>
                <Link to="/packages">Adventure Tours</Link>
              </li>
              <li>
                <Link to="/packages">Luxury Tours</Link>
              </li>
              <li>
                <Link to="/packages">Group Tours</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/about">About Us</Link>
            <ul className="dropdown">
              <li>
                <Link to="/about">Company Mission</Link>
              </li>
              <li>
                <Link to="/about">Company Values</Link>
              </li>
              <li>
                <Link to="/about">Company History</Link>
              </li>
              <li>
                <Link to="/about">Meet the Team</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
            <ul className="dropdown">
              <li>
                <Link to="/contact">Call us</Link>
              </li>
              <li>
                <Link to="/contact">Email us</Link>
              </li>
              <li>
                <Link to="/contact">Facebook</Link>
              </li>
              <li>
                <Link to="/contact">Instagram</Link>
              </li>
              <li>
                <Link to="/contact">TikTok</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <div className="search-bar">
        <input type="text" />
      </div>
    </div>
  );
}

export default Nav;

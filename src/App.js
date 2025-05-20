// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Nav from "./components/nav";
import Hero from "./components/Hero";
import Home from "./components/Home";
import Foot from "./components/footer";

// Page components (you'll create these)
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Packages from "./pages/Packages";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Nav />
        <main className="content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Home />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Foot />
      </div>
    </Router>
  );
}

export default App;

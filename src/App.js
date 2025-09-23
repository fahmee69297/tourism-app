import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Nav from "./components/nav";
import Hero from "./components/Hero";
import Home from "./components/Home";
import Foot from "./components/footer";
import ScrollToTop from "./components/ScrollToTop";

// Main pages
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Packages from "./pages/Packages";

// Subpages
import MarineParks from "./pages/Services/MarineParks";
import NationalParks from "./pages/Services/NationalParks";
import OldTownTours from "./pages/Services/OldTownTours";
import FamilyTours from "./pages/Packages/FamilyTours";
import AdventureTours from "./pages/Packages/AdventureTours";
import LuxuryTours from "./pages/Packages/LuxuryTours";
import GroupTours from "./pages/Packages/GroupTours";
import CompanyMission from "./pages/About/CompanyMission";
import CompanyValues from "./pages/About/CompanyValues";
import CompanyHistory from "./pages/About/CompanyHistory";
import MeetTheTeam from "./pages/About/MeetTheTeam";
import CallUs from "./pages/Contact/CallUs";
import EmailUs from "./pages/Contact/EmailUs";
import Facebook from "./pages/Contact/Facebook";
import Instagram from "./pages/Contact/Instagram";
import TikTok from "./pages/Contact/TikTok";
import LatestNews from "./pages/Blog/LatestNews";
import FeaturedProducts from "./pages/FeaturedProducts";

import SearchResults from "./components/SearchResults";

function App() {
  return (
    <Router>
      <ScrollToTop />
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

            {/* Subroutes */}
            <Route path="/services/marine-parks" element={<MarineParks />} />
            <Route
              path="/services/national-parks"
              element={<NationalParks />}
            />
            <Route path="/services/old-town-tours" element={<OldTownTours />} />
            <Route path="/services/featured" element={<FeaturedProducts />} />

            <Route path="/packages/family" element={<FamilyTours />} />
            <Route path="/packages/adventure" element={<AdventureTours />} />
            <Route path="/packages/luxury" element={<LuxuryTours />} />
            <Route path="/packages/group" element={<GroupTours />} />

            <Route path="/about/mission" element={<CompanyMission />} />
            <Route path="/about/values" element={<CompanyValues />} />
            <Route path="/about/history" element={<CompanyHistory />} />
            <Route path="/about/team" element={<MeetTheTeam />} />

            <Route path="/contact/call" element={<CallUs />} />
            <Route path="/contact/email" element={<EmailUs />} />
            <Route path="/contact/facebook" element={<Facebook />} />
            <Route path="/contact/instagram" element={<Instagram />} />
            <Route path="/contact/tiktok" element={<TikTok />} />

            <Route path="/blog/news" element={<LatestNews />} />

            <Route path="/search" element={<SearchResults />} />
          </Routes>
        </main>
        <Foot />
      </div>
    </Router>
  );
}

export default App;

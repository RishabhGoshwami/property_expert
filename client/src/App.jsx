import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import FloatingButtons from "./components/FloatingButtons"; 
import PopupForm from "./components/PopupForm";           

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Gallery from "./pages/Gallery";
import Career from "./pages/Career";
import Blog from "./pages/Blog";
import Contact from './pages/Contact';
import ThankYou from "./components/ThankYou";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";
import Training from "./components/Training";
import Footer from "./components/Footer";

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <Router>
      <Navbar />

      <div className="mt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:location" element={<Projects />} />
          <Route path="/projects/all" element={<Projects />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />

          <Route path="/project/:slug" element={<ProjectDetails />} />
          <Route path="/training" element={<Training />} />

          <Route path="/gallery" element={<Gallery />} />
          <Route path="/career" element={<Career />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />

          {/* ✅ Thank You page route */}
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </div>
      
      {/* ✅ Floating Button */}
      <FloatingButtons onEnquiryClick={() => setIsFormOpen(true)} />

      {/* ✅ Popup Form */}
      {isFormOpen && <PopupForm onClose={() => setIsFormOpen(false)} />}

      <Footer/>
    </Router>
  );
}

export default App;

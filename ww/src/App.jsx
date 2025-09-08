// Main App component that renders the navigation, all sections, and the footer
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./sections/Home.jsx";
import Services from "./sections/Services.jsx";
import About from "./sections/About.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  // Render the full page layout with navigation and sections
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

// Export the App component as default
export default App;

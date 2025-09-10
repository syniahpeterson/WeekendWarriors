import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./sections/Home.jsx";
import Services from "./sections/Services.jsx";
import About from "./sections/About.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./components/Footer.jsx";
import SectionDivider from "./components/SectionDivider.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Contact />
      <Footer />
    </>
  );
};

export default App;

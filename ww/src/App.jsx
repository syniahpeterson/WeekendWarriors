import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./sections/Home.jsx";
import Services from "./sections/Services.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Contact from "./sections/Contact.jsx";
import Locations from "./sections/Locations.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Testimonials />
      <Contact />
      <Locations />
      <Footer />
    </>
  );
};

export default App;

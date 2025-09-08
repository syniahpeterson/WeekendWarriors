import "../styles/Home.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import logo from "../assets/logo.png";
import video from "../assets/videos/grass-bg.mp4";
import poster from "../assets/videos/poster.png";
import { useState } from "react";

const Home = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section id="home" className="home" ref={ref}>
      {/* Background Video */}
      <video
        className={`home__video ${videoLoaded ? "home__video--loaded" : ""}`}
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        onLoadedData={() => setVideoLoaded(true)}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <motion.div
        className="home__content"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.img
          src={logo}
          alt="Weekend Warriors Logo"
          className="home__logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
        />
        <h1 className="home__title">Weekend Warriors</h1>
        <p className="home__subtitle">
          Lawn Care & Small Construction Projects Done Right
        </p>
        <a href="#services" className="home__cta">
          Explore Our Services
        </a>
      </motion.div>
    </section>
  );
};

export default Home;

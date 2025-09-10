import "../styles/About.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import aboutImg from "../assets/about.jpg"; // replace with a real image

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.2,
  });

  return (
    <section id="about" className="about" ref={ref}>
      <div className="about__container">
        {/* Text Side */}
        <motion.div
          className="about__text"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="about__title">About Weekend Warriors</h2>
          <p className="about__subtitle">
            Hard work, reliability, and results you can see every weekend.
          </p>
          <p className="about__description">
            Weekend Warriors started with a simple mission: to help homeowners
            take care of the projects that never seem to fit into a busy week.
            From fresh-cut lawns to custom fences, we combine skill, dedication,
            and honest pricing to deliver results that last.
          </p>
          <a href="#services" className="about__cta">
            Explore Our Services
          </a>
        </motion.div>

        {/* Image Side */}
        <motion.div
          className="about__image-wrapper"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={aboutImg}
            alt="About Weekend Warriors"
            className="about__image"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;

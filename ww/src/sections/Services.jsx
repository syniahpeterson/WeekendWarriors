// Services section: displays building and lawn care services with animation
import "../styles/Services.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { LuFence, LuTreeDeciduous } from "react-icons/lu";
import { IoMdConstruct, IoIosLeaf } from "react-icons/io";
import { FaWarehouse } from "react-icons/fa";
import { GiGrass, GiChicken, GiToolbox } from "react-icons/gi";
import { MdAgriculture } from "react-icons/md";

const Services = () => {
  // Track if the section is in view for animation triggers
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  // List of building/construction services with icons
  const buildingServices = [
    { name: "Fences and Gates", icon: <LuFence /> },
    { name: "Decks and Porches", icon: <IoMdConstruct /> },
    { name: "Small Sheds", icon: <FaWarehouse /> },
    { name: "Chicken Coops", icon: <GiChicken /> },
    { name: "Small-scale Builds", icon: <GiToolbox /> },
  ];

  // List of lawn care services with icons
  const lawnServices = [
    { name: "Mowing", icon: <MdAgriculture /> },
    { name: "Weedeating", icon: <GiGrass /> },
    { name: "Hedge Trimming", icon: <LuTreeDeciduous /> },
    { name: "Leaf Removal", icon: <IoIosLeaf /> },
  ];

  // Animation variants for staggered list appearance
  const listVariants = {
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Animation variants for each service item
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05, transition: { type: "spring", stiffness: 300 } },
  };

  return (
    <section id="services" className="services" ref={ref}>
      {/* Section title with entrance animation */}
      <motion.h2
        className="services__title"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Our Services
      </motion.h2>

      {/* Subtitle with entrance animation */}
      <motion.p
        className="services__subtitle"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Expert Lawn Care & Construction Projects You Can Trust
      </motion.p>

      <div className="services__grid">
        {/* Building Services category */}
        <motion.div
          className="services__category"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h3>Building / Small Construction</h3>
          <motion.ul
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={listVariants}
          >
            {buildingServices.map((service) => (
              <motion.li
                key={service.name}
                className="services__item"
                variants={itemVariants}
                whileHover="hover"
              >
                {/* Service icon and name */}
                <span className="services__icon">{service.icon}</span>
                {service.name}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Lawn Care Services category */}
        <motion.div
          className="services__category"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h3>Lawn Care</h3>
          <motion.ul
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={listVariants}
          >
            {lawnServices.map((service) => (
              <motion.li
                key={service.name}
                className="services__item"
                variants={itemVariants}
                whileHover="hover"
              >
                {/* Service icon and name */}
                <span className="services__icon">{service.icon}</span>
                {service.name}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

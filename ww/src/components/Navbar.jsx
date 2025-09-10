import "../styles/Navbar.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineAgriculture } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";
import useActiveSection from "../hooks/useActiveSection";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sectionIds = ["home", "services", "about", "contact"];
  const activeId = useActiveSection(sectionIds);

  return (
    <nav className="navbar" role="navigation" aria-label="Main Navigation">
      <a
        href="#home"
        className="navbar__brand"
        onClick={() => setIsOpen(false)}
      >
        <motion.div
          className="navbar__icon color-cycle"
          initial={{ x: -200, opacity: 0, rotate: -20 }}
          animate={{ x: 0, opacity: 1, rotate: 0 }}
          transition={{
            x: { type: "spring", stiffness: 80, damping: 12 },
            opacity: { duration: 0.6 },
          }}
        >
          <MdOutlineAgriculture />
        </motion.div>
        <h2 className="navbar__title">Weekend Warriors</h2>
      </a>

      <ul className="navbar__links">
        {sectionIds.map((id) => (
          <li key={id}>
            <a href={`#${id}`} className={activeId === id ? "active" : ""}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      <button
        className="navbar__toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="navbar__dropdown color-cycle"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ opacity: { duration: 0.3 }, y: { duration: 0.3 } }}
          >
            {sectionIds.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={activeId === id ? "active" : ""}
                  onClick={() => setIsOpen(false)}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

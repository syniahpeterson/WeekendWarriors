// ...existing code...
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

  const colorCycle = [
    "var(--color-green-accent)",
    "var(--color-accent-gold)",
    "var(--color-text-main)",
    "var(--color-text-muted)",
    "var(--color-green-accent)",
  ];

  return (
    <nav className="navbar" role="navigation" aria-label="Main Navigation">
      {/* Brand */}
      <a
        href="#home"
        className="navbar__brand"
        onClick={() => setIsOpen(false)}
      >
        <motion.div
          className="navbar__icon"
          initial={{ x: -200, opacity: 0, rotate: -20 }}
          animate={{ x: 0, opacity: 1, rotate: 0, color: colorCycle }}
          transition={{
            x: { type: "spring", stiffness: 80, damping: 12 },
            opacity: { duration: 0.6 },
            color: {
              delay: 1.2,
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <MdOutlineAgriculture />
        </motion.div>
        <h2 className="navbar__title">Weekend Warriors</h2>
      </a>

      {/* Desktop Links */}
      <ul className="navbar__links">
        {sectionIds.map((id) => (
          <li key={id}>
            <a href={`#${id}`} className={activeId === id ? "active" : ""}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Toggle */}
      <button
        className="navbar__toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="navbar__dropdown"
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: 1,
              y: 0,
              borderColor: colorCycle,
            }}
            exit={{ opacity: 0, y: -10 }}
            transition={{
              opacity: { duration: 0.3 },
              y: { duration: 0.3 },
              borderColor: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            }}
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

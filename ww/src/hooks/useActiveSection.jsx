// useActiveSection: Returns the ID of the section most visible in the viewport for nav highlighting
import { useEffect, useState } from "react";

export default function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    // On scroll, determine which section is most visible or if at top/bottom
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Highlight first section at top
      if (scrollY < 10) {
        setActiveId(sectionIds[0]);
        return;
      }
      // Highlight last section at bottom
      if (windowHeight + scrollY >= docHeight - 10) {
        setActiveId(sectionIds[sectionIds.length - 1]);
        return;
      }

      // Otherwise, find the most visible section
      let mostVisible = null;
      let maxRatio = 0;
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const visibleHeight = Math.max(
            0,
            Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0)
          );
          const ratio = visibleHeight / rect.height;
          if (ratio > maxRatio && ratio > 0.3) {
            maxRatio = ratio;
            mostVisible = id;
          }
        }
      });
      if (mostVisible) {
        setActiveId(mostVisible);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  return activeId;
}

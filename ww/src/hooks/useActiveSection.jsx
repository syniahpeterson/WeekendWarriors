// Custom React hook to track which section is currently active based on scroll position
import { useEffect, useState } from "react";

export default function useActiveSection(sectionIds) {
  // State to hold the currently active section ID
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    // Set up an IntersectionObserver to watch section visibility
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Update activeId when a section is at least 60% visible
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    // Observe each section by ID
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Clean up observer on unmount
    return () => observer.disconnect();
  }, [sectionIds]);

  // Return the currently active section ID
  return activeId;
}

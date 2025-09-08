// useInView: Custom React hook to detect if an element is in the viewport using Intersection Observer
import { useState, useEffect, useRef } from "react";

export default function useInView(threshold = 0.3) {
  // Create a ref to attach to the target element
  const ref = useRef(null);
  // State to track if the element is in view
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // Set up IntersectionObserver to monitor visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Set state to true when element enters the viewport
          setIsInView(true);
        }
      },
      { threshold }
    );

    // Start observing the element if ref is attached
    if (ref.current) observer.observe(ref.current);

    return () => {
      // Clean up observer on unmount
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  // Return the ref and the in-view state
  return [ref, isInView];
}

import { useEffect, useRef, useState } from "react";

const useClickOutsideToggle = () => {
  const [expanded, setExpanded] = useState(false); // State to track if the element is expanded
  const ref = useRef(null); // Ref to attach to the element being monitored

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setExpanded(false); // Close the element if clicked outside
      }
    };

    document.addEventListener("mouseup", handleClickOutside); // Add event listener

    return () => {
      document.removeEventListener("mouseup", handleClickOutside); // Cleanup on unmount
    };
  }, [ref]);

  return { expanded, setExpanded, ref }; // Return state, setter, and ref
};

export default useClickOutsideToggle;

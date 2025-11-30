import React, { useState, useEffect } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  
  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
      
      // Track when cursor is over clickable elements
      const handleLinkHoverEvents = () => {
        const allLinks = document.querySelectorAll('a, button, [role="button"], input[type="submit"], input[type="button"]');
        
        allLinks.forEach(link => {
          link.addEventListener("mouseenter", () => setLinkHovered(true));
          link.addEventListener("mouseleave", () => setLinkHovered(false));
        });
      };
      
      handleLinkHoverEvents();
      
      // Re-add event listeners when DOM changes
      const observer = new MutationObserver(handleLinkHoverEvents);
      observer.observe(document.body, { childList: true, subtree: true });
      
      return () => observer.disconnect();
    };
    
    addEventListeners();
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, []);
  
  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };
  
  const onMouseEnter = () => {
    setHidden(false);
  };
  
  const onMouseLeave = () => {
    setHidden(true);
  };
  
  const onMouseDown = () => {
    setClicked(true);
  };
  
  const onMouseUp = () => {
    setClicked(false);
  };
  
  // Use transform to improve performance instead of top/left
  const cursorOuterStyle = {
    transform: `translate(${position.x}px, ${position.y}px)`,
    opacity: hidden ? 0 : 1,
    width: clicked ? "36px" : linkHovered ? "40px" : "32px",
    height: clicked ? "36px" : linkHovered ? "40px" : "32px",
    borderColor: "#16a34a", // Bright green color
  };
  
  const cursorInnerStyle = {
    transform: `translate(${position.x}px, ${position.y}px)`,
    opacity: hidden ? 0 : 1,
    width: clicked ? "8px" : linkHovered ? "10px" : "6px",
    height: clicked ? "8px" : linkHovered ? "10px" : "6px",
    backgroundColor: "#16a34a", // Bright green color
  };
  
  return (
    <>
      <div 
        className="cursor-outer fixed pointer-events-none z-50 rounded-full border-2 transition-all duration-150 ease-out -translate-x-1/2 -translate-y-1/2"
        style={cursorOuterStyle}
      ></div>
      <div 
        className="cursor-inner fixed pointer-events-none z-50 rounded-full transition-all duration-100 ease-out -translate-x-1/2 -translate-y-1/2"
        style={cursorInnerStyle}
      ></div>
    </>
  );
};

export default CustomCursor;
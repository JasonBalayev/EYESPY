import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const CustomCursor = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const [isClicking, setIsClicking] = useState(false);
  const [isMobile, setIsMobile] = useState(true); // Default to true to prevent flash on mobile

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
        window.innerWidth < 768
      );
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    // Only add mouse events if not mobile
    if (!isMobile) {
      const updateMousePosition = (e) => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
      };

      const handleMouseDown = () => setIsClicking(true);
      const handleMouseUp = () => setIsClicking(false);

      // Hide the default cursor
      document.body.style.cursor = "none";
      
      // Add event listeners
      window.addEventListener("mousemove", updateMousePosition, { passive: true });
      window.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mouseup", handleMouseUp);

      return () => {
        window.removeEventListener("mousemove", updateMousePosition);
        window.removeEventListener("mousedown", handleMouseDown);
        window.removeEventListener("mouseup", handleMouseUp);
        document.body.style.cursor = "auto";
      };
    } else {
      // Reset cursor style on mobile
      document.body.style.cursor = "auto";
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]); // Add isMobile to dependency array

  // Don't render anything on mobile
  if (isMobile) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      <motion.div
        className="fixed w-6 h-6 rounded-full bg-purple-900/60 backdrop-blur-sm"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 0.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      <motion.div
        className="fixed w-3 h-3 rounded-full bg-purple-800"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 1.2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 28,
          mass: 0.5,
        }}
      />
    </div>
  );
};

export default CustomCursor; 
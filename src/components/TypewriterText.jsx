import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NeonText = ({ text, delay, duration }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <motion.div
      style={{ opacity: isVisible ? 1 : 0 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: duration,
        ease: "easeInOut",
        opacity: { duration: 0.3 },
      }}
    >
      {text}
    </motion.div>
  );
};

export default NeonText;

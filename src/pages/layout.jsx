import * as React from "react";
import NavbarMaker from "../components/NavbarMaker";
import { NextUIProvider } from "@nextui-org/system";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedStars from "../components/AnimatedStars";

const Layout = ({ children }) => {
  return (
    <NextUIProvider>
      <div className="bg-[#0a0a0a] min-h-screen w-full">
        <div className="fixed inset-0">
          <AnimatedStars />
        </div>
        <NavbarMaker />
        <div className="h-auto px-4 sm:px-10 lg:px-24 py-4 text-xl font-mono">
          <AnimatePresence mode="wait">
            <motion.div
              key={typeof window !== 'undefined' ? window.location.pathname : undefined}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 0.3,
                ease: "easeInOut"
              }}
              className="min-h-screen relative"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </NextUIProvider>
  );
};

export default Layout;

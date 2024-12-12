import React from "react";
import NavbarMaker from "../components/NavbarMaker";
import AnimatedStars from "../components/AnimatedStars";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative font-mono">
      <AnimatedStars />
      <NavbarMaker />
      <div className="h-auto px-4 sm:px-10 lg:px-24 py-4 text-xl">
        {children}
      </div>
    </div>
  );
};

export default Layout;

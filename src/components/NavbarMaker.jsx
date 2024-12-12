import * as React from "react";
import { Link } from "gatsby";
import { Squash as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [hoveredTab, setHoveredTab] = React.useState(null);

  const pages = [
    ["/", "Home"],
    ["/about", "About Me"],
    ["/projects", "Projects"],
    ["/contact", "Contact"],
  ];

  return (
    <nav className="bg-transparent flex items-center justify-between px-4 py-3 z-50 relative">
      <div className="sm:hidden">
        <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} color="white" size={24} />
      </div>

      <div className="hidden sm:flex items-center space-x-7">
        {pages.map((page) => (
          <Link
            key={page[0]}
            to={page[0]}
            className="relative group"
            onMouseEnter={() => setHoveredTab(page[0])}
            onMouseLeave={() => setHoveredTab(null)}
          >
            <span className="relative z-10 text-white text-xl px-4 py-2 transition-colors duration-300">
              {page[1]}
            </span>

            {/* Hover Indicator */}
            <AnimatePresence>
              {hoveredTab === page[0] && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-fuchsia-600/20 to-purple-600/20 rounded-lg z-0"
                  layoutId="hoverTab"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ 
                    scale: 1.1, 
                    opacity: 1,
                    transition: { type: "spring", stiffness: 400, damping: 25 }
                  }}
                  exit={{ scale: 0.9, opacity: 0 }}
                >
                  {/* Glowing effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-purple-500/20 blur-md" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bottom Gradient Line */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-gradient-to-r from-transparent via-violet-500/50 to-transparent group-hover:w-full transition-all duration-300" />
          </Link>
        ))}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="sm:hidden absolute top-16 right-0 w-full bg-black/90 backdrop-blur-sm z-40"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {pages.map((page) => (
              <Link
                key={page[0] + " mobile"}
                to={page[0]}
                className="block relative overflow-hidden group"
                onClick={() => setIsMenuOpen(false)} 
              >
                <div className="relative py-3 px-4 text-gray-300 text-lg transition-all duration-300 group-hover:text-white group-hover:pl-6">
                  {page[1]}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-fuchsia-600/20 to-purple-600/20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-violet-500/40 via-fuchsia-500/40 to-purple-500/40"
                    initial={{ scaleY: 0 }}
                    whileHover={{ scaleY: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

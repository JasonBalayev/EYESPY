import * as React from "react";
import { Link } from "gatsby";
import { Squash as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode, FaLaptopCode, FaUserAlt, FaBriefcase, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [hoveredTab, setHoveredTab] = React.useState(null);
  const navRef = React.useRef(null);
  const [scrolled, setScrolled] = React.useState(false);

  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Close menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Close menu when route changes
  React.useEffect(() => {
    return () => {
      setIsMenuOpen(false);
    };
  }, []);

  const pages = [
    { path: "/", label: "Home", icon: <FaCode /> },
    { path: "/experience", label: "Experience", icon: <FaBriefcase /> },
    { path: "/about", label: "About Me", icon: <FaUserAlt /> },
    { path: "/projects", label: "Projects", icon: <FaLaptopCode /> },
    { path: "/contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  return (
    <motion.nav 
      ref={navRef} 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/70 backdrop-blur-lg shadow-lg' : 'bg-black/30 backdrop-blur-md'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <motion.div
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg overflow-hidden"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.2 }
                }}
              >
                <span className="text-white text-xl sm:text-2xl font-bold">C</span>
                <motion.div 
                  className="absolute inset-0 bg-blue-400 mix-blend-overlay opacity-0"
                  whileHover={{ opacity: 0.5, transition: { duration: 0.2 } }}
                />
              </motion.div>
              <motion.div 
                className="absolute -inset-1 bg-blue-500/20 rounded-lg blur-md"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            
            <div className="font-spaceGrotesk font-bold text-xl sm:text-2xl tracking-wider">
              <span className="text-white">Caleb</span>
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">BH</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {pages.map((page) => (
              <Link
                key={page.path}
                to={page.path}
                className="relative px-3 py-2 mx-1 group"
                onMouseEnter={() => setHoveredTab(page.path)}
                onMouseLeave={() => setHoveredTab(null)}
              >
                <div className="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300 font-medium flex items-center space-x-1.5">
                  <span className="text-blue-400 text-sm">{page.icon}</span>
                  <span>{page.label}</span>
                </div>

                <AnimatePresence>
                  {hoveredTab === page.path && (
                    <motion.div
                      className="absolute inset-0 bg-blue-600/10 rounded-md z-0"
                      layoutId="hoverBackground"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400"
                        layoutId="hoverUnderline"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <div className="relative z-50">
              <Hamburger 
                toggled={isMenuOpen} 
                toggle={setIsMenuOpen} 
                size={20} 
                color="#60a5fa" 
                rounded 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 backdrop-blur-xl border-t border-blue-500/20"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {pages.map((page, index) => (
                <motion.div
                  key={page.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={page.path}
                    className="block px-4 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-blue-600/20 transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="text-blue-400">{page.icon}</div>
                      <span>{page.label}</span>
                    </div>
                    <div className="mt-1 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
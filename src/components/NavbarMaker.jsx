import * as React from "react";
import { Link } from "gatsby";
import { Squash as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pages = [
    ["/", "Home"],
    ["/projects", "Projects"],
    ["/contact", "Contact"],
  ];

  return (
    <nav className="bg-transparent flex items-center justify-between px-4 py-3 z-50 relative">
      <div className="sm:hidden">
        <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} />
      </div>

      <div className="hidden sm:flex items-center space-x-7">
        {pages.map((page) => (
          <Link
            key={page[0]}
            to={page[0]}    
            className="text-white text-xl hover:text-gray-300 hover:underline"
            activeClassName="font-bold text-white-500"
          >
            {page[1]}
          </Link>
        ))}
      </div>

      {isMenuOpen && (
        <div className="sm:hidden absolute top-16 right-0 w-full bg-gray-900 z-40">
          {pages.map((page) => (
            <Link
              key={page[0] + " mobile"}
              to={page[0]}
              className="block py-2 px-4 text-grey text-lg hover:bg-gray-700 hover:underline"
              activeClassName="font-bold text-black-500"
            >
              {page[1]}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

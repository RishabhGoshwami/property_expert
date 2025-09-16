import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  const projects = [
    "Noida",
    "Greater Noida",
    "Greater Noida West",
    "Ghaziabad",
    "Delhi",
    "All",
  ];

  // Function to close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
    setIsProjectsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3"
            onClick={handleLinkClick}
          >
            <img
              src={logo}
              alt="Property Expert Realtors Logo"
              className="h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-6 text-gray-800 font-medium">
            <li>
              <Link className="hover:text-yellow-400 transition-colors duration-300" to="/">Home</Link>
            </li>
            <li>
              <Link className="hover:text-yellow-400 transition-colors duration-300" to="/about">About</Link>
            </li>
            <li className="relative group">
              <button className="hover:text-yellow-400 transition-colors duration-300 flex items-center">
                Projects ▾
              </button>
              <ul className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0 z-50">
                {projects.map((city) => (
                  <li key={city}>
                    <Link
                      to={`/projects/${city.toLowerCase().replace(/\s/g, "-")}`}
                      className="block px-4 py-2 text-gray-800 hover:bg-yellow-50 transition-colors duration-200"
                    >
                      {city} Projects
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link className="hover:text-yellow-400 transition-colors duration-300" to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link className="hover:text-yellow-400 transition-colors duration-300" to="/career">Career</Link>
            </li>
            <li>
              <Link className="hover:text-yellow-400 transition-colors duration-300" to="/blog">Blog</Link>
            </li>
            <li>
              <Link
                className="bg-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors duration-300"
                to="/contact"
              >
                Get a Call
              </Link>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none text-3xl"
              aria-label="Toggle Menu"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-900 text-white transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col space-y-3 px-2 pt-4 pb-6">
          <li>
            <Link
              className="block hover:text-yellow-400 transition-colors duration-300 px-3 py-2 rounded-md"
              to="/"
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="block hover:text-yellow-400 transition-colors duration-300 px-3 py-2 rounded-md"
              to="/about"
              onClick={handleLinkClick}
            >
              About
            </Link>
          </li>

          {/* Mobile Projects Submenu */}
          <li>
            <button
              onClick={() => setIsProjectsOpen(!isProjectsOpen)}
              className="w-full text-left hover:text-yellow-400 transition-colors duration-300 flex justify-between items-center px-3 py-2 rounded-md"
            >
              Projects ▾
            </button>
            <ul
              className={`ml-2 mt-2 bg-gray-800 rounded-lg overflow-hidden transform transition-all duration-300 origin-top ${
                isProjectsOpen ? "scale-y-100 max-h-96 py-2" : "scale-y-0 max-h-0 py-0"
              }`}
            >
              {projects.map((city) => (
                <li key={city}>
                  <Link
                    className="block px-4 py-2 hover:bg-yellow-50 hover:text-gray-900 transition-colors duration-200 rounded-md"
                    to={`/projects/${city.toLowerCase().replace(/\s/g, "-")}`}
                    onClick={handleLinkClick}
                  >
                    {city} Projects
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <Link
              className="block hover:text-yellow-400 transition-colors duration-300 px-3 py-2 rounded-md"
              to="/gallery"
              onClick={handleLinkClick}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              className="block hover:text-yellow-400 transition-colors duration-300 px-3 py-2 rounded-md"
              to="/career"
              onClick={handleLinkClick}
            >
              Career
            </Link>
          </li>
          <li>
            <Link
              className="block hover:text-yellow-400 transition-colors duration-300 px-3 py-2 rounded-md"
              to="/blog"
              onClick={handleLinkClick}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className="block bg-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors duration-300"
              to="/contact"
              onClick={handleLinkClick}
            >
              Get a Call
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

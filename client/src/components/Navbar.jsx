import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 relative mt-2">
            <div className="relative">
              <img
                src={logo}
                alt="PropShop Logo"
                className="h-20 w-auto object-contain -mt-2"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              className="text-blue-900 hover:text-yellow-400 transition"
              to="/"
            >
              Home
            </Link>
            <Link
              className="text-blue-900 hover:text-yellow-400 transition"
              to="/about"
            >
              About
            </Link>

            {/* Projects Dropdown */}
            <div className="relative group">
              <button className="text-blue-900 hover:text-yellow-400 transition">
                Projects ▾
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0 z-50">
                {[
                  "Noida",
                  "Greater Noida",
                  "Greater Noida West",
                  "Ghaziabad",
                  "Delhi",
                  "All",
                ].map((city) => (
                  <Link
                    key={city}
                    to={`/projects/${city.toLowerCase().replace(/\s/g, "-")}`}
                    className="block px-4 py-2 text-gray-900 hover:bg-yellow-50 transition"
                  >
                    {city} Projects
                  </Link>
                ))}
              </div>
            </div>

            <Link
              className="text-blue-900 hover:text-yellow-400 transition"
              to="/gallery"
            >
              Gallery
            </Link>
            <Link
              className="text-blue-900 hover:text-yellow-400 transition"
              to="/career"
            >
              Career
            </Link>
            <Link
              className="text-blue-900 hover:text-yellow-400 transition"
              to="/blog"
            >
              Blog
            </Link>
            <Link
              className="bg-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded-lg hover:bg-yellow-500 transition"
              to="/contact"
            >
              Get a Call
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none text-3xl"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-900 px-4 pb-4 space-y-2 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Link
          className="block text-white hover:text-yellow-400 transition"
          to="/"
        >
          Home
        </Link>
        <Link
          className="block text-white hover:text-yellow-400 transition"
          to="/about"
        >
          About
        </Link>

        {/* Mobile Projects Submenu */}
        <div>
          <button
            onClick={() => setIsProjectsOpen(!isProjectsOpen)}
            className="w-full text-left text-white hover:text-yellow-400 transition"
          >
            Projects ▾
          </button>
          <div
            className={`ml-4 mt-2 space-y-1 overflow-hidden transition-all duration-300 ${
              isProjectsOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {[
              "Noida",
              "Greater Noida",
              "Greater Noida West",
              "Ghaziabad",
              "Delhi",
              "All",
            ].map((city) => (
              <Link
                key={city}
                to={`/projects/${city.toLowerCase().replace(/\s/g, "-")}`}
                className="block text-white hover:text-yellow-400 transition"
              >
                {city} Projects
              </Link>
            ))}
          </div>
        </div>

        <Link
          className="block text-white hover:text-yellow-400 transition"
          to="/gallery"
        >
          Gallery
        </Link>
        <Link
          className="block text-white hover:text-yellow-400 transition"
          to="/career"
        >
          Career
        </Link>
        <Link
          className="block text-white hover:text-yellow-400 transition"
          to="/blog"
        >
          Blog
        </Link>
        <Link
          className="block bg-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded-lg hover:bg-yellow-500 transition"
          to="/contact"
        >
          Get a Call
        </Link>
      </div>
    </nav>
  );
}

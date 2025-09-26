// FeaturedProjects.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PopupForm from "./PopupForm"; 
// Note: Assuming PopupForm is defined elsewhere and works correctly

const featuredProjects = [
  {
    name: "Skyline Heights",
    slug: "skyline-heights",
    bhk: ["3bhk", "4bhk"],
    location: "greater-noida-west",
    type: "residential",
    image: "https://justabode.com/public/frontend/uploads/17521586491.webp",
    starting_price: "₹2.9 Cr",
  },
  {
    name: "Urban Oasis",
    slug: "urban-oasis",
    bhk: ["Studio Apartment"],
    location: "greater-noida-west",
    type: "commercial",
    image:
      "https://www.emaarsco.in/emaar-urban-oasis-gurgaon/assets/images/urban-oasis.webp",
    starting_price: "₹1.2 Cr",
  },
  {
    name: "Business Hub Tower",
    slug: "business-hub-tower",
    bhk: ["3bhk", "4bhk"],
    location: "greater-noida-west",
    type: "residential",
    image: "https://ssmb.in/wp-content/uploads/2023/04/cover.jpg",
    starting_price: "₹3.5 Cr",
  },
  {
    name: "Eldeco Yamuna Expressway",
    slug: "eldeco-yamuna-expressway",
    bhk: ["2bhk", "3bhk", "4bhk"],
    location: "noida",
    type: "residential",
    image:
      "https://homezandown.com/wp-content/uploads/2025/06/img1005-e1750327618155.jpg",
    starting_price: "₹1.30 Cr",
  },
];

export default function FeaturedProjects() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-wider text-yellow-500 uppercase">
            Exclusive Preview
          </p>
          <h2 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Our **Featured Projects**
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            Get an early look at our most awaited residential and commercial
            developments.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              // Card height is now determined by content, image is contained
              className="group relative rounded-xl overflow-hidden shadow-2xl bg-gray-800 border border-gray-700 transition duration-500 hover:scale-[1.02] hover:shadow-yellow-500/30"
            >
              {/* Project Image Container */}
              <div className="relative w-full h-48 sm:h-56"> 
                  <img
                      src={project.image}
                      alt={project.name}
                      // Use absolute positioning for the image to cover the container
                      className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:opacity-60"
                  />
              </div>

              {/* Locked Content - Now positioned relative to the card, not absolute over the image */}
              <div className="flex flex-col items-center justify-center p-4 text-center">
                  
                  {/* Lock Icon */}
                  <div className="text-4xl text-yellow-500 my-2 animate-pulse">
                      <span className="opacity-90">🔒</span>
                  </div>

                  {/* Project Details */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 leading-snug">
                      {project.name}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm font-medium uppercase tracking-wider mb-2">
                      {project.location.split("-").join(" ")} • {project.type}
                  </p>

                  {/* BHKs and Price */}
                  <div className="flex flex-wrap justify-center items-center space-x-2 text-xs sm:text-sm mb-3">
                      <span className="px-2 py-1 bg-gray-700 text-gray-200 rounded-full font-medium">
                          {project.bhk.join(" / ").toUpperCase()}
                      </span>
                      <span className="text-yellow-400 font-extrabold">
                          {project.starting_price} Onwards
                      </span>
                  </div>

                  {/* Coming Soon Label and CTA Hint */}
                  <p className="text-white text-sm sm:text-base font-semibold border-b-2 border-yellow-500 pb-1">
                      Coming Soon!
                  </p>
                  <p className="text-gray-400 text-xs mt-2 mb-3 italic">
                      Register for priority access
                  </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-20 text-center">
          <button
            onClick={handleOpenPopup}
            className="inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-10 py-4 rounded-full font-extrabold text-xl shadow-2xl transition duration-300 transform hover:scale-105 hover:shadow-yellow-500/60 focus:outline-none focus:ring-4 focus:ring-yellow-500/50"
          >
            Get Priority Access Details →
          </button>
        </div>
      </div>

      {/* Popup Form (conditionally render) */}
      {isPopupOpen && <PopupForm onClose={handleClosePopup} />}
    </section>
  );
}
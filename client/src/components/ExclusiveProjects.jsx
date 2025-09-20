import React from "react";
import { Link } from "react-router-dom";

const exclusiveProjects = [
  {
    name: "GODREJ MAJESTY",
    slug: "godrej-majesty",
    bhk: ["3bhk", "4bhk"],
    location: "greater-noida-west",
    type: "residential",
    image: "https://godrejmajestynoidaextension.org/images/godrej-majesty-photos3.jpg",
  },
  {
    name: "Nirala Gateway",
    slug: "nirala-gateway",
    bhk: ["Studio Apartment"],
    location: "greater-noida-west",
    type: "commercial",
    image: "https://www.niralaworld.org/assets/gallery_4-DpyNxCHs.jpg",
  },
  {
    name: "Fusion The Rivulet",
    slug: "fusion-the-rivulet",
    bhk: ["3bhk", "4bhk"],
    location: "noida",
    type: "residential",
    image: "https://www.fusiongroup.org.in/assets/inner_01-_xs6y22c.png",
  },
  {
    name: "Eternia Residences",
    slug: "eternia-residences",
    bhk: ["3bhk", "4bhk"],
    location: "greater-noida-west",
    type: "residential",
    image: "https://www.eternia.co.in/images/elevation-img-2.webp",
  },
];

export default function ExclusiveProjects() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Our <span className="text-yellow-600">Exclusive</span> Projects ✨
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our curated selection of top-tier residential and commercial properties, handpicked to offer exceptional value and a premium lifestyle.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
          {exclusiveProjects.map((project, i) => {
            const bhkArray = Array.isArray(project.bhk) ? project.bhk : project.bhk ? [project.bhk] : [];

            return (
              <div
                key={i}
                className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group"
              >
                {/* Project Image */}
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-60 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-110 rounded-3xl"
                  />
                )}

                {/* Project Details Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent transition-opacity duration-500"></div>
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 text-white">
                  <span className="text-sm font-semibold tracking-wider uppercase bg-yellow-600 text-white py-1 px-3 rounded-full inline-block mb-2 shadow-md">
                    {project.type}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold leading-snug mb-1">
                    {project.name}
                  </h3>

                  {bhkArray.length > 0 && (
                    <p className="text-sm sm:text-base font-light mb-2">
                      {bhkArray.map((b) => b.toUpperCase()).join(" / ")}
                    </p>
                  )}

                  <p className="text-gray-300 capitalize text-sm sm:text-base mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {project.location.replace("-", " ")}
                  </p>

                  <Link
                    to={`/project/${project.slug}`}
                    className="mt-4 inline-flex items-center justify-center bg-yellow-600 hover:bg-yellow-700 text-gray-900 px-6 py-3 rounded-full font-bold transition-all duration-300 text-sm shadow-lg transform hover:-translate-y-1 hover:shadow-xl"
                  >
                    View Details
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

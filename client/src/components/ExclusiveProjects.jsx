import React from "react";
import { Link } from "react-router-dom";

const exclusiveProjects = [
  {
    name: "GODREJ MAJESTY",
    slug: "godrej-majesty",
    bhk: ["3bhk", "4bhk"],
    location: "greater-noida-west",
    type: "residential",
    image:
      "https://godrejmajestynoidaextension.org/images/godrej-majesty-photos3.jpg",
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
    location: "noida",
    bhk: ["3bhk", "4bhk"],
    type: "residential",
    image: "https://www.fusiongroup.org.in/assets/inner_01-_xs6y22c.png",
  },
];

export default function ExclusiveProjects() {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Our Exclusive Projects
          </h2>
          <p className="mt-2 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover handpicked residential and commercial properties curated
            just for you.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {exclusiveProjects.map((project, i) => {
            const bhkArray = Array.isArray(project.bhk)
              ? project.bhk
              : project.bhk
              ? [project.bhk]
              : [];

            return (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-5 border border-gray-100"
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-52 sm:h-60 lg:h-64 object-cover rounded-xl mb-4"
                  />
                )}

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.name}
                </h3>

                {bhkArray.length > 0 && (
                  <p className="text-yellow-600 font-semibold mb-1 text-sm tracking-wide">
                    {bhkArray.map((b) => b.toUpperCase()).join(" / ")}
                  </p>
                )}

                <p className="text-gray-500 capitalize mb-4 text-sm">
                  {project.type} • {project.location.replace("-", " ")}
                </p>

                <Link
                  to={`/project/${project.slug}`}
                  className="mt-2 inline-block bg-gray-900 hover:bg-gray-800 text-white px-5 py-2 rounded-full font-medium transition-all duration-300 text-sm shadow-md"
                >
                  View Details
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// src/pages/ProjectDetails.jsx
import { useParams } from "react-router-dom";
import projects from "../data/exclusiveProjectsData"; // ✅ data from separate file

export default function ProjectDetails() {
  const { slug } = useParams();

  // Find project by slug
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="pt-20 text-center text-gray-600">
        <h2 className="text-2xl font-bold">Project not found</h2>
      </div>
    );
  }

  return (
    <div className="pt-20 max-w-5xl mx-auto px-4">
      {/* ✅ Project Title */}
      <h1 className="text-3xl font-bold text-blue-600 mb-4">{project.name}</h1>

      {/* ✅ Project Image */}
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-80 object-cover rounded-lg shadow-lg mb-6"
      />

      {/* ✅ Project Details */}
      <p className="text-gray-700 mb-4">
        <span className="font-semibold">Type:</span> {project.type}
      </p>
      <p className="text-gray-700 mb-4">
        <span className="font-semibold">Location:</span>{" "}
        {project.location.replace("-", " ")}
      </p>
      {project.bhk && (
        <p className="text-gray-700 mb-4">
          <span className="font-semibold">BHK Options:</span>{" "}
          {Array.isArray(project.bhk) ? project.bhk.join(" / ") : project.bhk}
        </p>
      )}

      {/* ✅ About Section */}
      {project.about && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">About the Project</h2>
          {project.about.map((para, i) => (
            <p key={i} className="text-gray-700 mb-2">{para}</p>
          ))}
        </div>
      )}

      {/* ✅ Amenities Section */}
      {project.amenities && (
        <div className="mb-6 bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-3">Luxury Amenities</h2>
          <ul className="list-disc list-inside space-y-1">
            {project.amenities.map((item, i) => (
              <li key={i} className="text-gray-700">{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* ✅ Extra Info Section */}
      <div className="mt-6 bg-gray-100 p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-3">About {project.name}</h2>
        <p>
          This project offers premium facilities and luxurious living standards
          in the heart of {project.location.replace("-", " ")}.
        </p>
      </div>
    </div>
  );
}

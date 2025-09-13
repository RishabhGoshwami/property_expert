// src/pages/Projects.jsx
import { useParams, useLocation, Link } from "react-router-dom";
import ExclusiveProjectsData from "../components/ExclusiveProjectsData"; // ✅ alag data file

export default function Projects() {
  const { location } = useParams();
  const query = new URLSearchParams(useLocation().search);
  const selectedBhk = query.get("bhk");
  const type = query.get("type") || "all";

  // ✅ Filter logic
  let projectList = ExclusiveProjectsData;

  if (location && location !== "all") {
    projectList = projectList.filter(
      (p) => p.location.toLowerCase() === location.toLowerCase()
    );
  }

  if (type !== "all") {
    projectList = projectList.filter(
      (p) => p.type.toLowerCase() === type.toLowerCase()
    );
  }

  if (selectedBhk) {
    projectList = projectList.filter((p) =>
      p.bhk?.some((b) => b.toLowerCase() === selectedBhk.toLowerCase())
    );
  }

  return (
    <div className="pt-20 max-w-6xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-6 capitalize">
        {location ? `${location.replace(/-/g, " ")} Projects` : "Projects"}
      </h1>

      {projectList.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectList.map((project, i) => (
            <div
              key={i}
              className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition flex flex-col justify-between"
            >
              <div>
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
                <h2 className="text-xl font-bold">{project.name}</h2>
                <p className="text-sm text-gray-500 capitalize">
                  {project.type} • {project.location.replace("-", " ")}
                </p>
              </div>

              {/* ✅ View Details Button */}
              <Link
                to={`/project/${project.slug}`}
                className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium text-center"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No projects available for this filter.</p>
      )}
    </div>
  );
}

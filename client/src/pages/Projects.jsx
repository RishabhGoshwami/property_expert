import { useParams, useLocation, Link } from "react-router-dom";
import ExclusiveProjectsData from "../components/ExclusiveProjectsData";
import { FaTimesCircle } from "react-icons/fa";

export default function Projects() {
  const { location } = useParams();
  const query = new URLSearchParams(useLocation().search);
  const selectedBhk = query.get("bhk");
  const type = query.get("type") || "all";

  // Filter logic
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

  const hasActiveFilters = location !== "all" || type !== "all" || selectedBhk;

  return (
    <div className="pt-24 pb-16 bg-gray-50 dark:bg-gray-900 min-h-screen px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
          {location
            ? `${location.replace(/-/g, " ")} Real Estate`
            : "All Projects"}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Explore a curated list of our exclusive real estate projects.
        </p>

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <div className="flex flex-wrap items-center gap-2 mb-6 text-sm text-gray-700 dark:text-gray-300">
            <span className="font-semibold mr-2">Filters Applied:</span>
            {location && location !== "all" && (
              <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full capitalize flex items-center gap-1">
                <span className="font-medium">Location:</span> {location.replace(/-/g, " ")}
              </span>
            )}
            {type !== "all" && (
              <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full capitalize flex items-center gap-1">
                <span className="font-medium">Type:</span> {type}
              </span>
            )}
            {selectedBhk && (
              <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full capitalize flex items-center gap-1">
                <span className="font-medium">BHK:</span> {selectedBhk}
              </span>
            )}
            <Link
              to="/projects/all"
              className="ml-4 flex items-center text-red-500 hover:text-red-700 transition-colors"
            >
              <FaTimesCircle className="mr-1" />
              Reset Filters
            </Link>
          </div>
        )}

        {projectList.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectList.map((project, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{project.name}</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 capitalize mb-4">
                    {project.type} • {project.location.replace("-", " ")}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 line-clamp-2 mb-4">
                    {project.shortDescription}
                  </p>
                  <Link
                    to={`/project/${project.slug}`}
                    className="inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition-colors duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4">
            <p className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Sorry, no projects found. 😟
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Try adjusting your filters or search for another location.
            </p>
            <Link
              to="/projects/all"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors duration-300"
            >
              Reset Filters
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}


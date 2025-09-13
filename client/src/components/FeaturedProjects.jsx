import { Link } from "react-router-dom";

export default function FeaturedProjects() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Featured Projects
          </h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Our premium projects are coming soon. Stay tuned for exclusive
            residential and commercial properties!
          </p>
        </div>

        {/* Coming Soon Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 flex flex-col items-center justify-center p-8 hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <div className="text-center">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-gray-400 font-bold text-xl">🔒</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Coming Soon
                </h3>
                <p className="text-gray-500 text-sm">
                  Exciting projects launching soon. Check back later!
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link
            to="#"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-full font-semibold text-lg transition shadow-md"
          >
            Stay Tuned
          </Link>
        </div>
      </div>
    </section>
  );
}

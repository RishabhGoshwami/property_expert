import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import projects from "../data/exclusiveProjectsData";

// React Icons
import {
  FaCheckCircle,
  FaUsers,
  FaStar,
  FaSwimmingPool,
  FaHome,
  FaBuilding,
  FaBirthdayCake,
  FaBolt,
  FaWifi,
} from "react-icons/fa";
import { MdSchool, MdPhoneAndroid } from "react-icons/md";

// Location marker SVG
const LocationMarkerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-yellow-500"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
      clipRule="evenodd"
    />
  </svg>
);

// Map amenities to icons
const amenityIcons = {
  "Swimming pool": FaSwimmingPool,
  "Grand swimming pool & kids' pool": FaSwimmingPool,
  Gymnasium: FaUsers,
  "Modern gymnasium & yoga lawn": FaUsers,
  Clubhouse: FaBuilding,
  "Luxury clubhouse with indoor games": FaBuilding,
  "Children's play area": FaBirthdayCake,
  "Children’s play zone": FaBirthdayCake,
  "Green landscaped areas": FaStar,
  "Landscaped gardens and open spaces": FaStar,
  "24x7 security": FaCheckCircle,
  "High-speed elevators": FaBolt,
  Parking: FaHome,
  "Ample parking space for residents and visitors": FaHome,
  "Pre-approved by banks": MdSchool,
  "Smart homes with advanced automation tech": MdPhoneAndroid,
  "Wi-Fi & internet connectivity": FaWifi,
};

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug) || projects[0];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
  });
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [submissionMessage, setSubmissionMessage] = useState({
    type: "",
    text: "",
  });

  const images =
    project.images?.length > 0
      ? project.images
      : project.image
      ? [project.image]
      : [];

  // Image slider
  useEffect(() => {
    if (!images.length) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmissionMessage({ type: "", text: "" });

    const payload = {
      access_key: project.form.access_key,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      budget: formData.budget,
      subject: `Request E-Brochure - ${project.name}`,
      message: `I am interested in ${project.name} located at ${project.location}. My budget is ${formData.budget}. Please send me the brochure.`,
    };

    try {
      const res = await fetch(project.form.endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await res.json();

      if (result.success) {
        setFormData({ name: "", email: "", phone: "", budget: "" });
        setShowForm(false);
        setSubmissionMessage({
          type: "success",
          text: "E-Brochure request submitted successfully!",
        });
      } else {
        setSubmissionMessage({
          type: "error",
          text: "Error: " + (result.message || "Something went wrong"),
        });
      }
    } catch (err) {
      setSubmissionMessage({
        type: "error",
        text: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!project)
    return (
      <div className="pt-32 min-h-screen bg-gray-50 flex items-center justify-center">
        <h2 className="text-3xl font-bold text-gray-700">
          Project not found 😔
        </h2>
      </div>
    );

  return (
    <div className="pt-24 sm:pt-32 bg-gray-50 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
        {/* IMAGE SLIDER */}
        <div className="relative overflow-hidden rounded-3xl shadow-2xl h-[250px] sm:h-[400px] lg:h-[500px]">
          {images.length > 0 && (
            <>
              <img
                src={images[currentImageIndex]}
                alt={`${project.name} ${currentImageIndex + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImageIndex(i)}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      i === currentImageIndex ? "bg-white w-6" : "bg-gray-400"
                    }`}
                  ></button>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Project Info */}
        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100 transition-all duration-300 hover:shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-gray-900">
              {project.name}
            </h1>
            {project.logo && (
              <div className="p-3 rounded-full bg-black shadow-inner">
                <img
                  src={project.logo}
                  alt={`${project.name} logo`}
                  className="h-12 w-12 object-contain"
                />
              </div>
            )}
          </div>
          <p className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
            {project.bhk?.join(", ") || "Apartments"} |{" "}
            {project.details?.price_range}
          </p>
          <p className="text-gray-600 mt-2 flex items-center text-lg">
            <LocationMarkerIcon />
            <span className="ml-2">{project.location}</span>
          </p>
          <p className="mt-4 text-gray-700 text-lg">
            🏗 Completion: {project.details?.possession}
          </p>
          <p className="mt-1 text-gray-700 text-lg">
            📜 RERA: {project.details?.rera_id}
          </p>
          <div className="flex gap-4 mt-6">
            <button
              onClick={() => setShowForm(true)}
              className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-300 shadow-lg transform hover:-translate-y-1"
            >
              {project.form.submit_label}
            </button>
          </div>
        </div>

        {/* Amenities (Full Width) */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Amenities</h2>
          <ul className="space-y-4">
            {project.amenities.map((amenity, i) => {
              if (typeof amenity === "string") {
                const IconComponent = amenityIcons[amenity] || FaCheckCircle;
                return (
                  <li key={i} className="flex items-center text-gray-700">
                    <IconComponent className="h-5 w-5 text-yellow-500 mr-2" />
                    <span>{amenity}</span>
                  </li>
                );
              }

              if (typeof amenity === "object") {
                const IconComponent = amenityIcons[amenity.name] || FaCheckCircle;
                return (
                  <li
                    key={i}
                    className="flex flex-col bg-gray-50 p-3 rounded-xl border border-gray-200"
                  >
                    <div className="flex items-center mb-1">
                      <IconComponent className="h-5 w-5 text-yellow-500 mr-2" />
                      <span className="font-semibold text-gray-900">
                        {amenity.name}
                      </span>
                    </div>
                    {amenity.description && (
                      <p className="text-gray-600 text-sm mb-1">
                        {amenity.description}
                      </p>
                    )}
                    {amenity.features && amenity.features.length > 0 && (
                      <ul className="ml-7 list-disc text-gray-600 text-sm space-y-1">
                        {amenity.features.map((f, idx) => (
                          <li key={idx}>{f}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              }
              return null;
            })}
          </ul>
          <div className="mt-4">
            <button
              onClick={() => setShowForm(true)}
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-6 py-3 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-1 animate-bounce"
            >
              Know more about amenities
            </button>
          </div>
        </div>

        {/* Benefits with Floor Plan */}
        {project.benefits && project.benefits.length > 0 && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Why you should buy {project.name}?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Benefits List */}
              <ul className="list-none space-y-3">
                {project.benefits.map((b, i) => (
                  <li key={i} className="flex items-start">
                    <FaCheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span className="ml-2 text-gray-700">{b}</span>
                  </li>
                ))}
              </ul>

              {/* Floor Plan Image */}
              <div className="w-full flex flex-col items-center">
                <img
                  src={project.floor_plan || "/images/floor-plan.jpg"}
                  alt={`${project.name} Floor Plan`}
                  className="rounded-2xl shadow-lg max-h-[400px] object-contain filter blur-[8px]"
                />
                <button
                  onClick={() => setShowForm(true)}
                  className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-6 py-3 rounded-xl shadow-lg transition-transform transform hover:scale-105"
                >
                  Download Floor Plan
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Location Map + Contact Form Section */}
        {project.map_link && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-gray-100 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Location & Enquiry
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left: Location Map */}
              <div>
                <p className="text-gray-700 mb-4">
                  Explore the exact location of{" "}
                  <span className="font-semibold">{project.name}</span> situated
                  at {project.location}.
                </p>
                <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200">
                  <iframe
                    src={project.map_link}
                    width="100%"
                    height="400"
                    allowFullScreen=""
                    loading="lazy"
                    className="w-full h-[400px] rounded-2xl"
                  ></iframe>
                </div>
              </div>

              {/* Right: Contact Form */}
              <div className="bg-gray-50 p-6 rounded-2xl shadow-inner">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {project.form.submit_label || "Get in Touch"}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {project.form.fields.map((field, i) => (
                    <input
                      key={i}
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required={field.required}
                      className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                    />
                  ))}
                  <input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    placeholder="Your Budget (₹)"
                    required
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full p-3 bg-yellow-500 text-gray-900 font-bold rounded-xl hover:bg-yellow-600 transition-all duration-300 shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {loading ? "Submitting..." : project.form.submit_label}
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Modal Form */}
        {showForm && project.form && (
          <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-2xl max-w-lg w-full relative transform transition-all duration-300 scale-100 opacity-100">
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-3xl font-light"
              >
                &times;
              </button>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">
                {project.form.submit_label}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                {project.form.fields.map((field, i) => (
                  <input
                    key={i}
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required={field.required}
                    className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                  />
                ))}
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="Your Budget (₹)"
                  required
                  className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full p-3 sm:p-4 bg-yellow-500 text-gray-900 font-bold rounded-xl hover:bg-yellow-600 transition-all duration-300 text-lg shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {loading ? "Submitting..." : project.form.submit_label}
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Submission Message */}
        {submissionMessage.text && (
          <div
            className={`fixed bottom-4 right-4 p-4 rounded-xl shadow-lg transition-transform duration-300 transform ${
              submissionMessage.type === "success"
                ? "bg-green-500"
                : "bg-red-500"
            } text-white`}
          >
            {submissionMessage.text}
          </div>
        )}
      </div>
    </div>
  );
}

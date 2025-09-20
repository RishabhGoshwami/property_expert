import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import projects from "../data/exclusiveProjectsData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Heroicon components for icons
const LocationMarkerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
  </svg>
);

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const navigate = useNavigate();

  // Form state now includes budget
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", budget: "" });
  const [loading, setLoading] = useState(false);

  if (!project) {
    return (
      <div className="pt-32 min-h-screen bg-gray-50 flex items-center justify-center">
        <h2 className="text-3xl font-bold text-gray-700">Project not found 😔</h2>
      </div>
    );
  }

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
  };

  // Form handlers
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      access_key: project.form.access_key,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      budget: formData.budget, // Budget included
      subject: `Request E-Brochure - ${project.name}`,
      message: `I am interested in ${project.name} located at ${project.location}. My budget is ${formData.budget}. Please send me the brochure.`,
    };

    try {
      const response = await fetch(project.form.endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setFormData({ name: "", email: "", phone: "", budget: "" });
        navigate("/thank-you");
      } else {
        alert("Error: " + (result.message || "Something went wrong"));
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Find similar projects of same type
 

  return (
    <div className="pt-24 sm:pt-32 bg-gray-50 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Project Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            {project.name}
          </h1>
          <p className="mt-2 text-lg text-gray-600 font-medium">{project.location}</p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left: Sticky Form */}
          {project.form && (
            <div className="md:col-span-1">
              <div className="sticky top-28 bg-white p-6 sm:p-8 rounded-3xl shadow-lg border-2 border-yellow-500 h-[calc(100vh-7rem)] flex flex-col justify-start">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 text-center">
                  {project.form.submit_label}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4 flex-grow">
                  {project.form.fields.map((field, i) => (
                    <input
                      key={i}
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required={field.required}
                      className="w-full p-3 sm:p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                    />
                  ))}

                  {/* Budget field */}
                  <input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    placeholder="Your Budget (₹)"
                    required
                    className="w-full p-3 sm:p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full p-3 sm:p-4 bg-yellow-600 text-gray-900 font-bold rounded-xl hover:bg-yellow-700 transition-all duration-300 text-lg shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {loading ? "Submitting..." : project.form.submit_label}
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Right: Images + Details */}
          <div className="md:col-span-2 space-y-6">
            {/* Image Slider */}
            {project.images && project.images.length > 0 && (
              <Slider {...settings} className="rounded-3xl overflow-hidden shadow-2xl">
                {project.images.map((img, i) => (
                  <div key={i}>
                    <img
                      src={img}
                      alt={`${project.name} ${i + 1}`}
                      className="w-full h-[500px] object-cover rounded-3xl"
                    />
                  </div>
                ))}
              </Slider>
            )}

            {/* Project Highlights / Details */}
            <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Project Highlights</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between">
                  <span>Near Possession:</span>
                  <span>{project.details?.near_possession || "N/A"}</span>
                </li>
                <li className="flex justify-between">
                  <span>Possession Date:</span>
                  <span>{project.details?.possession}</span>
                </li>
                <li className="flex justify-between">
                  <span>RERA ID:</span>
                  <span>{project.details?.rera_id}</span>
                </li>
                <li className="flex justify-between">
                  <span>Floor Plans:</span>
                  <span>{project.bhk ? project.bhk.join(", ") + " BHK" : "N/A"}</span>
                </li>
              </ul>
            </div>

            {/* About / Amenities */}
            {project.about && (
              <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Project</h2>
                {project.about.map((para, i) => (
                  <p key={i} className="text-gray-700 leading-relaxed mb-3 last:mb-0">{para}</p>
                ))}
              </div>
            )}
            {project.amenities && (
              <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Luxury Amenities</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 list-disc list-inside text-gray-700">
                  {project.amenities.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-yellow-600 mt-1 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Bottom Location with Embedded Map */}
            <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 mt-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                <LocationMarkerIcon />
                <span className="ml-2">Location</span>
              </h3>
              <p className="text-gray-700 mb-3">{project.location}</p>
              <div className="w-full h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-md">
                <iframe
                  title="Project Location"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(project.location)}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

           

          </div>
        </div>
      </div>
    </div>
  );
}

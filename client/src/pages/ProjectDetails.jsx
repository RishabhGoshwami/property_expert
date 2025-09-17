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

const PriceTagIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM5.055 4.908l-.708.708a1 1 0 001.414 1.414l.707-.707a1 1 0 00-1.414-1.414zM16.945 4.908l.708.708a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 011.414-1.414zM3 10a1 1 0 00-1 1v1a1 1 0 002 0v-1a1 1 0 00-1-1zM18 11a1 1 0 011-1h1a1 1 0 010 2h-1a1 1 0 01-1-1zM6.343 14.121l.707.708a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 011.414-1.414zM15.055 14.121l-.708.708a1 1 0 001.414 1.414l.707-.707a1 1 0 00-1.414-1.414zM10 17a1 1 0 00-1 1v1a1 1 0 002 0v-1a1 1 0 00-1-1z" clipRule="evenodd" />
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5H4v9h12V7h-2v1a1 1 0 10-2 0V7H8v1a1 1 0 10-2 0V7z" clipRule="evenodd" />
  </svg>
);

const ReraIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9 2a1 1 0 00-1 1v2.586a1 1 0 00.293.707l3.914 3.914a1 1 0 001.414 0L17 8.414V17a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1h6.586a1 1 0 01.707.293L13 7.586V3a1 1 0 00-1-1H9zM8 12.586L1.707 6.293a1 1 0 010-1.414L3.293 3.414a1 1 0 011.414 0L10 8.586V12h2v-3.586l-2.293-2.293a1 1 0 00-1.414 0L8 8.586V12.586z" />
  </svg>
);

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
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
      subject: `Request E-Brochure - ${project.name}`,
      message: `I am interested in ${project.name} located at ${project.location}. Please send me the brochure.`
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
        setFormData({ name: "", email: "", phone: "" });
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

  return (
    <div className="pt-24 sm:pt-32 bg-gray-50 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Project Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            {project.name}
          </h1>
          <p className="mt-2 text-lg text-gray-600 font-medium">{project.location}</p>
        </div>

        {/* Image Slider */}
        {project.images && project.images.length > 0 && (
          <div className="mb-8">
            <Slider {...settings} className="rounded-3xl overflow-hidden shadow-2xl">
              {project.images.map((img, i) => (
                <div key={i}>
                  <img
                    src={img}
                    alt={`${project.name} ${i + 1}`}
                    className="w-full h-[300px] sm:h-[450px] md:h-[550px] object-cover"
                  />
                </div>
              ))}
            </Slider>
          </div>
        )}

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section (About, Details, Amenities) */}
          <div className="md:col-span-2 space-y-8">
            {/* About Section */}
            {project.about && (
              <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Project</h2>
                {project.about.map((para, i) => (
                  <p key={i} className="text-gray-700 leading-relaxed mb-3 last:mb-0">{para}</p>
                ))}
              </div>
            )}
            
            {/* Project Details */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Details</h2>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <LocationMarkerIcon />
                  <span className="ml-3 font-semibold">Location:</span> {project.location}
                </li>
                {project.bhk && (
                  <li className="flex items-center text-gray-700">
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">
                      {project.type}
                    </span>
                    <span className="font-semibold">BHK Options:</span> {project.bhk.join(" / ")}
                  </li>
                )}
                <li className="flex items-center text-gray-700">
                  <PriceTagIcon />
                  <span className="ml-3 font-semibold">Price Range:</span> {project.details?.price_range}
                </li>
                <li className="flex items-center text-gray-700">
                  <CalendarIcon />
                  <span className="ml-3 font-semibold">Possession:</span> {project.details?.possession}
                </li>
                <li className="flex items-center text-gray-700">
                  <ReraIcon />
                  <span className="ml-3 font-semibold">RERA ID:</span> {project.details?.rera_id}
                </li>
              </ul>
            </div>

            {/* Amenities Section */}
            {project.amenities && (
              <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-gray-100">
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
          </div>

          {/* Right Section (Lead Capture Form) */}
          <div className="md:col-span-1">
            {project.form && (
              <div className="sticky top-28 bg-white p-6 sm:p-8 rounded-3xl shadow-lg border-2 border-yellow-500">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 text-center">{project.form.submit_label}</h2>
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
                      className="w-full p-3 sm:p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                    />
                  ))}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full p-3 sm:p-4 bg-yellow-600 text-gray-900 font-bold rounded-xl hover:bg-yellow-700 transition-all duration-300 text-lg shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {loading ? "Submitting..." : project.form.submit_label}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
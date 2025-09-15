// src/pages/ProjectDetails.jsx
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import projects from "../data/exclusiveProjectsData";
import Slider from "react-slick"; // ✅ Image slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);

  if (!project) {
    return (
      <div className="pt-20 text-center text-gray-600">
        <h2 className="text-2xl font-bold">Project not found</h2>
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
  };

  // Form handlers
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(project.form.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
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
    <div className="pt-20 max-w-5xl mx-auto px-4">
      {/* Project Title */}
      <h1 className="text-3xl font-bold text-blue-600 mb-4">{project.name}</h1>

      {/* Slider / Image */}
      {project.images && project.images.length > 1 ? (
        <Slider {...settings} className="mb-6 rounded-lg shadow-lg">
          {project.images.map((img, i) => (
            <div key={i}>
              <img
                src={img}
                alt={`${project.name} ${i + 1}`}
                className="w-full h-[500px] md:h-[600px] object-cover rounded-lg"
              />
            </div>
          ))}
        </Slider>
      ) : (
        <img
          src={project.images?.[0]}
          alt={project.name}
          className="w-full h-[500px] md:h-[600px] object-cover rounded-lg shadow-lg mb-6"
        />
      )}

      {/* Project Info */}
      <div className="mb-6 space-y-2">
        <p><strong>Type:</strong> {project.type}</p>
        <p><strong>Location:</strong> {project.location}</p>
        {project.bhk && <p><strong>BHK Options:</strong> {project.bhk.join(" / ")}</p>}
        <p><strong>Price Range:</strong> {project.details?.price_range}</p>
        <p><strong>Possession:</strong> {project.details?.possession}</p>
        <p><strong>RERA ID:</strong> {project.details?.rera_id}</p>
      </div>

      {/* About */}
      {project.about && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">About the Project</h2>
          {project.about.map((para, i) => (
            <p key={i} className="text-gray-700 mb-2">{para}</p>
          ))}
        </div>
      )}
       {/* Lead Capture Form */}
      {project.form && (
        <div className="mb-6 bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-3">{project.form.submit_label}</h2>
          <form onSubmit={handleSubmit} className="space-y-3">
            {project.form.fields.map((field, i) => (
              <input
                key={i}
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                required={field.required}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              />
            ))}
            <button
              type="submit"
              disabled={loading}
              className="w-full p-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              {loading ? "Submitting..." : project.form.submit_label}
            </button>
          </form>
        </div>
      )}

      {/* Amenities */}
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

     
    </div>
  );
}

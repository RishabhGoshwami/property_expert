import React, { useState } from "react";

const jobs = [
  {
    title: "Real Estate Sales Executive",
    location: "Noida, India",
    type: "Full-Time",
    description:
      "Drive property sales by connecting with potential clients, conducting site visits, and closing deals. Prior experience in real estate sales is preferred.",
  },
  {
    title: "Marketing & Lead Generation Specialist",
    location: "Remote / Noida",
    type: "Full-Time",
    description:
      "Manage digital marketing campaigns, social media, and lead generation strategies to increase property inquiries and sales.",
  },
  {
    title: "Property Management Associate",
    location: "Greater Noida, India",
    type: "Full-Time",
    description:
      "Assist in managing client properties, coordinating with tenants, handling documentation, and ensuring smooth operations.",
  },
  {
    title: "Real Estate Intern",
    location: "Noida, India",
    type: "Internship",
    description:
      "Gain hands-on experience in property sales, marketing, and client handling under expert guidance.",
  },
];

export default function Career() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setSuccess(false);
    setFormData({ name: "", email: "", phone: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append("access_key", "42629c5f-58c3-49f1-b24c-1eb17b894734"); // Your Web3Forms API key
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("subject", `Application for ${selectedJob.title}`);
    data.append("message", `Job applied: ${selectedJob.title}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const result = await response.json();
      if (result.success) {
        setSuccess(true);
        setSelectedJob(null);
      } else {
        alert("Submission failed. Please check your API key or required fields.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
        Join Our Real Estate Team
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg p-6 flex flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">{job.title}</h3>
              <p className="text-gray-500 mt-1">
                {job.location} • {job.type}
              </p>
              <p className="text-gray-700 mt-4">{job.description}</p>
            </div>
            <button
              onClick={() => handleApplyClick(job)}
              className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-xl shadow-md transition-all duration-300 transform hover:scale-105"
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>

      {/* Popup Form */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 w-full max-w-md relative">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl font-bold"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Apply for {selectedJob.title}
            </h3>

            {success ? (
              <p className="text-green-600 font-semibold">
                Application submitted successfully!
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-xl shadow-md transition-all duration-300"
                >
                  {loading ? "Submitting..." : "Submit Application"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

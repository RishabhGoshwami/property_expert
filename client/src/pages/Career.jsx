import React from "react";

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
  const handleApply = (jobTitle) => {
    alert(`Thank you for applying to "${jobTitle}". Our HR team will contact you soon!`);
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
              <p className="text-gray-500 mt-1">{job.location} • {job.type}</p>
              <p className="text-gray-700 mt-4">{job.description}</p>
            </div>
            <button
              onClick={() => handleApply(job.title)}
              className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-xl shadow-md transition-all duration-300 transform hover:scale-105"
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

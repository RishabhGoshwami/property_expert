import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! We have received your message.`);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="py-16 bg-gradient-to-r from-gray-100 to-gray-50 flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full bg-white p-8 md:p-12 rounded-3xl shadow-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {["name", "email", "phone"].map((field) => (
            <div key={field} className="relative">
              <input
                type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required={field !== "phone"}
                placeholder=" "
                className="peer w-full px-5 pt-5 pb-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 shadow-sm"
              />
              <label
                className="absolute left-5 top-3 text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-yellow-500 peer-focus:text-sm capitalize"
              >
                {field}
              </label>
            </div>
          ))}

          <div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder=" "
              rows="5"
              className="peer w-full px-5 pt-5 pb-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 shadow-sm"
            />
            <label
              className="absolute left-5 top-3 text-gray-400 text-sm transition-all duration-300 peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-yellow-500 peer-focus:text-sm"
            >
              Message
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

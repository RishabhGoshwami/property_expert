import React, { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Replace with your actual Web3Forms API key
    const accessKey = "YOUR_WEB3FORMS_ACCESS_KEY"; 
    
    // Check if phone number is exactly 10 digits
    if (!/^\d{10}$/.test(formData.phone)) {
        alert("Please enter a valid 10-digit phone number.");
        setLoading(false);
        return;
    }

    const data = new FormData();
    data.append("access_key", accessKey);
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const result = await response.json();
      if (result.success) {
        setSuccess(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("Submission failed. Please check your API key.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-20 bg-gradient-to-r from-gray-100 to-gray-50 flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full bg-white p-8 md:p-12 rounded-3xl shadow-2xl flex flex-col md:flex-row md:space-x-12">
        {/* Contact Details Section */}
        <div className="md:w-1/2 mb-8 md:mb-0 p-6 bg-blue-600 rounded-2xl text-white flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-blue-200 mb-8">
              We'd love to hear from you! Our team is ready to assist with all your real estate inquiries.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="text-xl text-yellow-400 mt-1" />
                <p className="text-lg text-blue-100">
                  Unit No. A-212, Second Floor, Sikka The Downtown, Sector-98, Noida-201303, Uttar Pradesh
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-xl text-yellow-400" />
                <p className="text-lg text-blue-100">info@propertyexpertrealtors.in</p>
              </div>
              <div className="flex items-center space-x-4">
                <FaPhone className="text-xl text-yellow-400" />
                <p className="text-lg text-blue-100">+91 9999063322</p>
              </div>
            </div>
          </div>
          {/* Social Media Icons */}
          <div className="flex space-x-6 mt-8">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook className="text-2xl hover:text-yellow-400 transition-colors" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="text-2xl hover:text-yellow-400 transition-colors" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-2xl hover:text-yellow-400 transition-colors" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube className="text-2xl hover:text-yellow-400 transition-colors" />
            </a>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center md:text-left">
            Send Us a Message
          </h2>
          {success ? (
            <div className="text-center py-12">
              <p className="text-green-600 text-xl font-semibold mb-2">
                Thank you! Your message has been sent.
              </p>
              <p className="text-gray-500">We will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Full Name"
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors"
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email Address"
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors"
                />
              </div>

              {/* Phone Field */}
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Phone Number"
                  pattern="[0-9]{10}"
                  title="Please enter a 10-digit phone number"
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors"
                />
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your Message"
                  rows="5"
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-6 py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-3 text-gray-900" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : "Submit"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
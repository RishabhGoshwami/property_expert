import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiUser3Line, RiMailLine, RiPhoneLine, RiWalletLine, RiCloseLine } from "react-icons/ri";

const PopupForm = ({ onClose, onSuccess }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [budget, setBudget] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const backendUrl = "https://real-estate-leads2.onrender.com/api/submit-lead";

    try {
      const response = await fetch(backendUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone: mobile, budget }),
      });

      const result = await response.json();
      console.log("📩 Backend Response:", result);

      if (response.ok && result.success) {
        if (onSuccess) onSuccess();
        setName("");
        setEmail("");
        setMobile("");
        setBudget("");
        onClose();
        navigate("/thank-you");
      } else {
        alert("❌ Error: " + (result.message || "Something went wrong"));
      }
    } catch (err) {
      console.error("❌ Error submitting form:", err);
      alert("Failed to submit lead!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 z-[100] flex justify-center items-center p-4 animate-fade-in-up">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-xl p-6 sm:p-8 relative border-t-8 border-blue-600 transform scale-95 animate-zoom-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 transition-colors duration-200 text-3xl p-1 rounded-full hover:bg-gray-100"
          aria-label="Close form"
        >
          <RiCloseLine size={24} />
        </button>

        {/* Header Section */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-3 transform rotate-6 animate-pulse">
            <RiUser3Line size={32} />
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            Get Expert Assistance
          </h1>
          <p className="text-sm text-gray-600 mt-2 max-w-xs mx-auto">
            Our team is ready to help you find your dream property.
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
          {/* Full Name Input */}
          <div className="relative">
            <RiUser3Line className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Input */}
          <div className="relative">
            <RiMailLine className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Mobile Input */}
          <div className="relative">
            <RiPhoneLine className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="tel"
              placeholder="Mobile Number"
              value={mobile}
              pattern="[0-9]{10}"
              title="Please enter a 10-digit mobile number"
              required
              onChange={(e) => setMobile(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Budget Select */}
          <div className="relative">
            <RiWalletLine className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              required
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>Select Your Budget Range</option>
              <option value="Below 50L">Below ₹50 Lakh</option>
              <option value="50-75L">₹50 L - ₹75 L</option>
              <option value="75-1Cr">₹76 L - ₹1 Cr</option>
              <option value="1-2Cr">₹1 Cr - ₹2 Cr</option>
              <option value="Above 2Cr">Above ₹2 Cr</option>
            </select>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-gray-500 text-center">
            By submitting this form, you authorize Property Expert Realtor Pvt. Ltd. to contact you via phone, email, or WhatsApp.
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white rounded-xl py-4 font-bold text-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </span>
            ) : "Submit Enquiry"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
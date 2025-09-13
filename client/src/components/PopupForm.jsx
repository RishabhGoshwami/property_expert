import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PopupForm = ({ onClose, onSuccess }) => {  // ✅ removed isOpen
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
        setName(""); setEmail(""); setMobile(""); setBudget("");
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
    <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 relative border border-gray-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl font-bold"
        >
          ✕
        </button>

        <div className="text-center mb-6">
          <h1 className="text-2xl font-extrabold text-blue-700">
            Property Expert Realtor Pvt. Ltd.
          </h1>
          <p className="text-gray-600 text-sm">
            Your Trusted Partner in Real Estate
          </p>
        </div>

        <h2 className="text-lg font-semibold text-gray-900 mb-2 text-center">
          Get Expert Assistance
        </h2>
        <p className="text-sm text-gray-600 mb-6 text-center">
          Fill in your details and our team will connect with you shortly.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="tel"
            placeholder="Mobile Number"
            value={mobile}
            pattern="[0-9]{10}"   // ✅ validation
            required
            onChange={(e) => setMobile(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            required
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>Select Your Budget Range</option>
            <option value="Below 50L">Below ₹50 Lakh</option>
            <option value="50-75L">₹50 L - ₹75 L</option>
            <option value="75-1Cr">₹76 L - ₹1 Cr</option>
            <option value="1-2Cr">₹1 Cr - ₹2 Cr</option>
            <option value="Above 2Cr">Above ₹2 Cr</option>
          </select>

          <p className="text-xs text-gray-500">
            By submitting this form, you authorize Property Expert Realtor Pvt.
            Ltd. to contact you via phone, email, or WhatsApp regarding real
            estate projects.
          </p>

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-700 text-white rounded-lg px-4 py-3 font-semibold hover:bg-blue-800 transition-colors disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit Enquiry"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;

import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa"; // Using a professional icon

export default function ThankYou() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6 bg-gradient-to-br from-blue-50 to-white">
      {/* Container for the main message */}
      <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 max-w-lg w-full transform -translate-y-4 md:-translate-y-8 animate-fade-in-up">
        <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-6" />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          Thank You!
        </h1>
        <p className="text-gray-700 text-lg sm:text-xl font-medium mb-8">
          Your enquiry has been successfully submitted.
        </p>
        <p className="text-gray-600 text-md sm:text-lg mb-8 max-w-sm mx-auto">
          One of our real estate experts will contact you shortly to discuss your
          requirements in more detail.
        </p>

        {/* Primary CTA */}
        <Link
          to="/"
          className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Back to Home
        </Link>
      </div>

      {/* Optional: Secondary Engagement Section */}
      <div className="mt-12 text-gray-800">
        <h3 className="text-xl font-semibold mb-4">While you wait...</h3>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/projects"
            className="text-blue-600 hover:text-blue-800 transition-colors font-medium text-lg"
          >
            Explore Our Projects →
          </Link>
          <Link
            to="/blog"
            className="text-blue-600 hover:text-blue-800 transition-colors font-medium text-lg"
          >
            Read Our Blog →
          </Link>
        </div>
      </div>
    </div>
  );
}
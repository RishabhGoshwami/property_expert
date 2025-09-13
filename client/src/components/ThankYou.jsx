import React from "react";
import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-6">
      <h1 className="text-3xl font-bold text-green-600 mb-4">🎉 Thank You!</h1>
      <p className="text-gray-700 text-lg mb-6">
        Your enquiry has been successfully submitted. Our team will contact you shortly.
      </p>
      <Link
        to="/"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}

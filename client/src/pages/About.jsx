import React from "react";
import { Link } from "react-router-dom";
import { FaBuilding, FaThumbsUp, FaHandshake, FaUserTie } from 'react-icons/fa';
// ✅ New component import
import TeamSection from "../components/TeamSection";

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <header className="text-center mb-12">
          {/* Breadcrumb with improved styling */}
          <p className="text-sm text-gray-500 mb-2 font-medium">
            <Link to="/" className="text-blue-500 hover:text-blue-700 transition-colors duration-200">
              Home
            </Link> 
            <span className="mx-1">&gt;</span> About Us
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
            About Our Company
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Redefining real estate consultancy with trust, transparency, and expertise.
          </p>
        </header>

        {/* Welcome Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4">
            Welcome to Property Expert Realtors
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            Property Expert Realtors Pvt. Ltd., headquartered in **Noida**, is one of the most trusted and client-focused real estate consultancy firms in Delhi-NCR. Founded with a vision to redefine real estate consultancy, we have created a strong presence in the industry by finalizing hundreds of residential and commercial property transactions for satisfied clients.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            From our inception, we earned the trust of investors, homebuyers, and corporate clients with our transparent dealings and expert advisory services. Over the years, we have consistently delivered value-driven investment opportunities and property solutions in Noida, Greater Noida, Ghaziabad, Delhi, and Gurugram.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            With strong associations with leading developers and an in-depth understanding of the real estate market, we provide end-to-end consultancy, ensuring our clients make the right choice for their dream homes or profitable investments.
          </p>
        </section>

        {/* Achievements Section */}
        <section className="mb-12">
          <h2 className="text-center text-3xl font-bold text-slate-800 mb-8">
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Achievement Card 1 */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <FaBuilding className="text-blue-500 text-4xl mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Years of Excellence</h3>
              <p className="text-gray-600">Celebrating years of excellence in real estate consultancy.</p>
            </div>
            {/* Achievement Card 2 */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <FaThumbsUp className="text-green-500 text-4xl mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Client Success</h3>
              <p className="text-gray-600">Successfully assisted thousands of homebuyers and investors across Delhi-NCR.</p>
            </div>
            {/* Achievement Card 3 */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <FaHandshake className="text-yellow-500 text-4xl mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Trusted Partnerships</h3>
              <p className="text-gray-600">Trusted partners of top builders and developers in India.</p>
            </div>
            {/* Achievement Card 4 */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <FaUserTie className="text-purple-500 text-4xl mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Transparent Dealings</h3>
              <p className="text-gray-600">Renowned for transparent dealings, client satisfaction, and long-term relationships.</p>
            </div>
          </div>
        </section>

        {/* Management Section Component */}
        <TeamSection />
      </div>
    </div>
  );
}
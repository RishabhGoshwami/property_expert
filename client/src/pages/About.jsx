import React from "react";
import { Link } from "react-router-dom";
import { FaBuilding, FaThumbsUp, FaHandshake, FaUserTie } from 'react-icons/fa';
import TeamSection from "../components/TeamSection";

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1516246473132-e0f39ac7c231?q=80&w=2940&auto=format&fit=crop"
            alt="Modern city skyline background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Breadcrumb */}
          <p className="text-sm text-gray-300 mb-2 font-medium">
            <Link to="/" className="text-blue-300 hover:text-blue-500 transition-colors duration-200">
              Home
            </Link> 
            <span className="mx-1 text-gray-400">&gt;</span> About Us
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-lg">
            Building Trust, One Home at a Time
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Redefining real estate consultancy with a foundation built on trust, transparency, and unmatched expertise.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <section className="-mt-20 relative z-20 bg-white rounded-3xl shadow-xl p-8 sm:p-12 mb-12 border-t-4 border-blue-600">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-4 text-center">
            Welcome to Property Expert Realtors
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-4 text-center">
            Property Expert Realtors Pvt. Ltd., headquartered in **Noida**, is one of the most trusted and client-focused real estate consultancy firms in Delhi-NCR.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <p className="text-gray-700 leading-relaxed text-lg">
              Founded with a vision to redefine real estate consultancy, we have created a strong presence in the industry by finalizing hundreds of residential and commercial property transactions for satisfied clients. From our inception, we've earned the trust of investors, homebuyers, and corporate clients with our transparent dealings and expert advisory services.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Over the years, we have consistently delivered value-driven investment opportunities and property solutions in Noida, Greater Noida, Ghaziabad, Delhi, and Gurugram. With strong associations with leading developers and an in-depth understanding of the real estate market, we provide end-to-end consultancy, ensuring our clients make the right choice for their dream homes or profitable investments.
            </p>
          </div>
        </section>

        {/* Our Values Section - Replaces Achievements */}
        <section className="mb-12">
          <h2 className="text-center text-3xl font-extrabold text-slate-800 mb-8">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Value Card 1 */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <FaBuilding className="text-blue-600 text-4xl mb-4 transform hover:rotate-6 transition-transform duration-300" />
              <h3 className="text-lg font-bold text-slate-800 mb-2">Expertise</h3>
              <p className="text-gray-600 text-sm">Our deep market knowledge ensures you get the best advice and opportunities.</p>
            </div>
            {/* Value Card 2 */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <FaHandshake className="text-green-600 text-4xl mb-4 transform hover:rotate-6 transition-transform duration-300" />
              <h3 className="text-lg font-bold text-slate-800 mb-2">Integrity</h3>
              <p className="text-gray-600 text-sm">We are committed to transparent and ethical dealings with every client.</p>
            </div>
            {/* Value Card 3 */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <FaThumbsUp className="text-yellow-600 text-4xl mb-4 transform hover:rotate-6 transition-transform duration-300" />
              <h3 className="text-lg font-bold text-slate-800 mb-2">Client-Centric</h3>
              <p className="text-gray-600 text-sm">Your satisfaction is our ultimate goal, guiding every step of the process.</p>
            </div>
            {/* Value Card 4 */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <FaUserTie className="text-purple-600 text-4xl mb-4 transform hover:rotate-6 transition-transform duration-300" />
              <h3 className="text-lg font-bold text-slate-800 mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">Leveraging technology to provide you with seamless and efficient solutions.</p>
            </div>
          </div>
        </section>

        {/* Management Section Component */}
        <TeamSection />
      </div>
    </div>
  );
}
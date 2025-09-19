import React from 'react';
import vikash from '../assets/vikash.jpg';
import Anmoal from '../assets/anmoal.jpg';
import Gaurav from '../assets/Gaurav.jpg';
import Bhupendra from '../assets/Bhupendra.jpg';

// Team members ka data array
const teamMembers = [
  {
    name: "Vikash Gupta",
    title: "Director",
    image: vikash,
  },
  {
    name: "Gaurav Sagar",
    title: "Vice President – Sales",
    image: Gaurav,
  },
  {
    name: "Anmol Mishra",
    title: "General Manager – Sales",
    image: Anmoal,
  },
  {
    name: "Bhupendra Singh",
    title: "Senior Sales Manager",
    image: Bhupendra,
  },
];

export default function TeamSection() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16" aria-label="Our Leadership Team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Meet Our Leadership
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our team is composed of seasoned professionals dedicated to providing
            the best real estate solutions. They are the pillars of our success.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              role="article"
            >
              {/* Profile Image with Ring Effect */}
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-transparent ring-4 ring-blue-500 ring-offset-2 ring-offset-white transition-all duration-300">
                <img
                  src={member.image}
                  alt={`Profile picture of ${member.name}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              {/* Member Details */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-1">
                {member.name}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium text-lg text-center">
                {member.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
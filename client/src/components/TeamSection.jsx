import React from 'react';
import vikash from '../assets/vikash.jpg'
import Anmoal from '../assets/anmoal.jpg'
import Gaurav from '../assets/Gaurav.jpg'
import Bhupendra from '../assets/Bhupendra.jpg'
// Team members ka data array
const teamMembers = [
  {
  name: "Vikash Gupta",
  title: "Director",
  image: vikash,
},
{
  name: "Anmoal Mishra",
  title: "General Manager – Sales",
  image: Anmoal,
},
{
  name: "Gaurav Sagar",
  title: "Vice President – Sales",
  image: Gaurav,
},
{
  name: "Bhupendra Singh",
  title: "Senior Sales Manager", // ✅ अगर exact designation confirm नहीं है तो ये professional लगेगा
  image: Bhupendra,
}

];

export default function TeamSection() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
      <h2 className="text-center text-3xl font-bold text-slate-800 mb-8">
        Our Leadership
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            {/* Profile Image */}
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-white shadow-md">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Member Details */}
            <h3 className="text-xl font-bold text-slate-800 text-center">{member.name}</h3>
            <p className="text-blue-600 font-medium text-lg text-center">{member.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
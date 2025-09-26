// src/components/WhyChooseUs.jsx
import React from "react";
import { FaHandshake, FaHome, FaBalanceScale, FaUserShield, FaRegClock, FaChartLine } from "react-icons/fa";

const WhyChooseUs = () => {
  // --- ROYAL YELLOW THEME DEFINITIONS ---
  const PRIMARY_COLOR = "text-yellow-600"; // Accent color for text emphasis
  const HOVER_BORDER = "border-amber-500"; // Color for the top border on hover
  const ICON_COLOR = "text-amber-500"; // Color for the main icons
  const ICON_BG = "bg-yellow-50"; // Very light background for the icon circle
  // ------------------------------------

  const points = [
    {
      icon: <FaHome className={`${ICON_COLOR} text-4xl mb-4`} />,
      title: "Local Market Mastery",
      desc: "Deep, boots-on-the-ground knowledge of Noida & Greater Noida markets guarantees the best property advice and hidden investment gems.",
    },
    {
      icon: <FaHandshake className={`${ICON_COLOR} text-4xl mb-4`} />,
      title: "Partnership Approach",
      desc: "We prioritize long-term relationships, offering personalized solutions, seamless loan support, and dedicated after-sales assistance.",
    },
    {
      icon: <FaBalanceScale className={`${ICON_COLOR} text-4xl mb-4`} />,
      title: "Unwavering Transparency",
      desc: "Expect crystal-clear communication, zero hidden charges, and honest commitments. Our foundation is built on trust, not fine print.",
    },
    {
      icon: <FaUserShield className={`${ICON_COLOR} text-4xl mb-4`} />,
      title: "Certified & Compliant",
      desc: "A fully registered Private Limited company with a solid track record, ensuring 100% legal compliance and secured transactions.",
    },
    {
      icon: <FaRegClock className={`${ICON_COLOR} text-4xl mb-4`} />,
      title: "Efficiency & Response",
      desc: "Benefit from rapid property visits, timely communication, and expert negotiations, ensuring your journey is efficient and stress-free.",
    },
    {
      icon: <FaChartLine className={`${ICON_COLOR} text-4xl mb-4`} />,
      title: "Investment Focused",
      desc: "We focus only on properties with verified high growth potential, maximizing your return on investment (ROI) over time.",
    },
  ];

  return (
    // Use a clean, slightly off-white background for better contrast
    <section className="py-20 bg-white" id="why-choose-us"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading Section */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-wider text-gray-500 uppercase">
            Our Core Values
          </p>
          <h2 className="mt-2 text-4xl sm:text-5xl font-extrabold text-gray-900">
            Why Partner with <span className={PRIMARY_COLOR}>Property Expert Realtors</span>?
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference of dedicated support, deep local insight, and guaranteed transparency in your real estate journey.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <div
              key={index}
              className={`bg-gray-50 rounded-xl border-t-4 border-transparent shadow-lg p-8 transition-all duration-300 ease-in-out 
                          hover:bg-white hover:shadow-2xl hover:scale-[1.03] ${HOVER_BORDER} flex flex-col items-center text-center`}
            >
              {/* Icon - Yellow background applied */}
              <div className={`p-3 rounded-full ${ICON_BG} mb-4`}> 
                 {point.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">{point.title}</h3>
              
              {/* Description */}
              <p className="text-gray-600 text-base">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
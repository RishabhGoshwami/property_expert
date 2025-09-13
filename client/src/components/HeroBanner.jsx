import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  RiBuilding4Line,
  RiSearchLine,
  RiMapPin2Line,
  RiHome3Line,
} from "react-icons/ri";
import HeroImage from "../assets/Noida Skyline at Dusk.png";

export default function HeroBanner() {
  const [bhk, setBhk] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (bhk && location) {
      navigate(`/projects/${location}?bhk=${bhk}&type=residential`);
    } else {
      alert("Please select both BHK and Location!");
    }
  };

  const handleCategoryClick = (type) => {
    navigate(`/projects/all?type=${type}`);
  };

  return (
    <div className="flex flex-col md:flex-row h-[90vh]">
      {/* Left Side - Banner Image (70%) */}
      <div className="w-full md:w-[70%] relative h-[40vh] md:h-full">
        <img
          src={HeroImage}
          alt="Hero Banner"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Right Side - Content (30%) */}
      <div className="w-full md:w-[30%] bg-black/80 flex items-center justify-center p-6">
        <div className="text-center md:text-left w-full text-white">
          {/* Quote / Tagline */}
          <h2 className="text-2xl sm:text-3xl font-bold leading-snug mb-3">
            “Turning Dreams <br /> Into Addresses.”
          </h2>
          <p className="text-gray-300 mb-6 text-sm sm:text-base">
            Explore premium residential & commercial spaces tailored for you.
          </p>

          {/* Search Box */}
          <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-2xl flex flex-col gap-4 border border-gray-200">
            {/* BHK Select */}
            <div className="relative">
              <RiHome3Line
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <select
                value={bhk}
                onChange={(e) => setBhk(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                <option value="">Select BHK</option>
                <option value="1bhk">1 BHK</option>
                <option value="2bhk">2 BHK</option>
                <option value="3bhk">3 BHK</option>
                <option value="4bhk">4 BHK</option>
                <option value="5bhk">5 BHK</option>
                <option value="6bhk">6 BHK</option>
                <option value="3_4bhk_study">3 & 4 BHK + Study Room</option>
                <option value="studio">Studio Apartment</option>
              </select>
            </div>

            {/* Location Select */}
            <div className="relative">
              <RiMapPin2Line
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                <option value="">Select Location</option>
                <option value="noida">Noida</option>
                <option value="greater-noida">Greater Noida</option>
                <option value="greater-noida-west">Greater Noida West</option>
                <option value="ghaziabad">Ghaziabad</option>
                <option value="delhi">Delhi</option>
              </select>
            </div>

            {/* Search Button */}
            <button
              onClick={handleSearch}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <RiSearchLine size={20} /> Search
            </button>
          </div>

          {/* Category Buttons */}
          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
            <button
              onClick={() => handleCategoryClick("residential")}
              className="bg-white/10 hover:bg-white/20 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold border border-white/30 backdrop-blur-md transition-colors duration-300 flex items-center gap-2 text-sm sm:text-base"
            >
              <RiHome3Line /> Residential
            </button>
            <button
              onClick={() => handleCategoryClick("commercial")}
              className="bg-white/10 hover:bg-white/20 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold border border-white/30 backdrop-blur-md transition-colors duration-300 flex items-center gap-2 text-sm sm:text-base"
            >
              <RiBuilding4Line /> Commercial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  RiBuilding4Line,
  RiSearchLine,
  RiMapPin2Line,
  RiHome3Line,
  RiArrowRightSLine,
} from "react-icons/ri";

export default function HeroBanner() {
  const [bhk, setBhk] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  // Background Images Array
  const images = [
    "https://wallpaperaccess.com/full/1899396.jpg",
    "https://wallpaperbat.com/img/9729868-real-estate-photography-in-san-antonio.jpg",
    "https://wallpapercave.com/wp/wp4110688.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Slide Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const handleSearch = () => {
    if (bhk && location) {
      const selectedType = bhk === "studio" ? "commercial" : "residential";
      navigate(`/projects/${location}?bhk=${bhk}&type=${selectedType}`);
    } else {
      alert("Please select both BHK and Location!");
    }
  };

  const handleCategoryClick = (type) => {
    navigate(`/projects/all?type=${type}`);
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center text-white">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <div className="absolute inset-0 bg-gray-900/60 backdrop-brightness-75 backdrop-contrast-125"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center py-16">
        {/* Left Side: Title & Description */}
        <div className="w-full md:w-3/5 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg">
            Find Your Dream <br />
            <span className="text-yellow-400">Property</span> in Noida & NCR
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-200 drop-shadow-md max-w-lg mx-auto md:mx-0">
            "Turning Dreams into Addresses." Explore premium residential & commercial spaces tailored just for you.
          </p>
        </div>

        {/* Right Side: Search & Filter Form */}
        <div className="w-full md:w-2/5 p-6 md:p-8 bg-white/10 rounded-2xl shadow-2xl backdrop-blur-md border border-white/20">
          <h2 className="text-2xl font-bold mb-6 text-center text-yellow-400">Find Your Perfect Match</h2>
          <div className="space-y-4">
            {/* BHK Select */}
            <div className="relative">
              <RiHome3Line className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={22} />
              <select
                value={bhk}
                onChange={(e) => setBhk(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-800 border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 appearance-none"
              >
                <option value="" className="text-gray-400">Select BHK</option>
                <option value="1bhk">1 BHK</option>
                <option value="2bhk">2 BHK</option>
                <option value="3bhk">3 BHK</option>
                <option value="4bhk">4 BHK</option>
                <option value="studio">Studio Apartment</option>
                <option value="other">Other</option>
              </select>
              <RiArrowRightSLine className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={24} />
            </div>

            {/* Location Select */}
            <div className="relative">
              <RiMapPin2Line className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={22} />
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-800 border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 appearance-none"
              >
                <option value="" className="text-gray-400">Select Location</option>
                <option value="noida">Noida</option>
                <option value="greater-noida">Greater Noida</option>
                <option value="greater-noida-west">Greater Noida West</option>
                <option value="ghaziabad">Ghaziabad</option>
                <option value="delhi">Delhi</option>
              </select>
              <RiArrowRightSLine className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={24} />
            </div>

            {/* Search Button */}
            <button
              onClick={handleSearch}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-6 py-4 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <RiSearchLine size={24} /> Find My Property
            </button>
          </div>

          {/* Category Buttons */}
          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
            <button
              onClick={() => handleCategoryClick("residential")}
              className="px-6 py-3 rounded-full font-semibold border-2 border-white/40 text-white hover:bg-white/20 transition-colors duration-300 flex items-center gap-2"
            >
              <RiHome3Line /> Residential
            </button>
            <button
              onClick={() => handleCategoryClick("commercial")}
              className="px-6 py-3 rounded-full font-semibold border-2 border-white/40 text-white hover:bg-white/20 transition-colors duration-300 flex items-center gap-2"
            >
              <RiBuilding4Line /> Commercial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

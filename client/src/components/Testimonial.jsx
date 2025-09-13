import { useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Rajesh Kumar",
    designation: "Home Buyer, Noida",
    image: "", // Removed image, using initials instead
    feedback:
      "Property Expert Realtors guided me throughout the buying process. Their team was transparent, professional, and ensured I got the best deal. Truly satisfied with their service!",
  },
  {
    name: "Priya Sharma",
    designation: "Investor, Greater Noida",
    image: "",
    feedback:
      "I was looking for reliable investment opportunities in real estate. Property Expert Realtors provided me with detailed insights and helped me secure a great property with high returns.",
  },
  {
    name: "Amit Singh",
    designation: "Business Owner, Ghaziabad",
    image: "",
    feedback:
      "What I liked most about Property Expert Realtors is their honesty and prompt support. They understood my requirements and found exactly what I was looking for.",
  },
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { name, designation, image, feedback } = testimonials[currentIndex];

  const nextTestimonial = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // Function to generate initials if no image
  const getInitials = (fullName) =>
    fullName
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  return (
    <div className="py-16 bg-gray-50 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
        What Our Clients Say
      </h2>

      <div className="relative bg-white shadow-2xl rounded-3xl p-8 md:p-12 max-w-2xl text-center">
        <FaQuoteLeft className="text-yellow-400 text-4xl md:text-5xl mb-4 mx-auto" />
        <p className="text-gray-700 text-lg md:text-xl italic mb-6">{feedback}</p>
        <FaQuoteRight className="text-yellow-400 text-4xl md:text-5xl mt-2 mx-auto" />

        <div className="flex flex-col items-center mt-6">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover mb-2 border-2 border-yellow-400"
            />
          ) : (
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-yellow-400 flex items-center justify-center text-white font-bold text-xl mb-2">
              {getInitials(name)}
            </div>
          )}
          <p className="text-gray-900 font-semibold">{name}</p>
          <p className="text-gray-500 text-sm">{designation}</p>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevTestimonial}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition"
          aria-label="Previous Testimonial"
        >
          &#10094;
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition"
          aria-label="Next Testimonial"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}

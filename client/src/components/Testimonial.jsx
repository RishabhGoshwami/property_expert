// src/components/Testimonial.jsx
import React from "react";
import { FaQuoteLeft, FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Added icons for custom buttons
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Dummy placeholder images for a more realistic look
const testimonials = [
  {
    name: "Rajesh Kumar",
    designation: "Home Buyer, Noida",
    feedback: "Property Expert Realtors guided me throughout the buying process. Their team was transparent, professional, and ensured I got the best deal. Truly satisfied with their service!",
  },
  {
    name: "Priya Sharma",
    designation: "Investor, Greater Noida",
    feedback: "I was looking for reliable investment opportunities in real estate. Property Expert Realtors provided me with detailed insights and helped me secure a great property with high returns.",
  },
  {
    name: "Amit Singh",
    designation: "Business Owner, Ghaziabad",
    feedback: "What I liked most about Property Expert Realtors is their honesty and prompt support. They understood my requirements and found exactly what I was looking for.",
  },
  {
    name: "Sneha Verma",
    designation: "Home Buyer, Delhi",
    feedback: "Excellent experience! The team was very supportive and made my first home purchase smooth and stress-free.",
  },
  {
    name: "Vikas Yadav",
    designation: "Investor, Gurugram",
    feedback: "Great professionals! Their guidance helped me invest smartly. Highly recommend them for real estate advice.",
  },
];

const getInitials = (fullName) => fullName.split(" ").map((n) => n[0]).join("").toUpperCase();

export default function Testimonial() {
  return (
    // Primary background set to deep dark gray (bg-gray-900)
    <section className="py-20 bg-gray-900 overflow-hidden" aria-label="Client Testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-3 leading-tight">
            Trusted by **Happy Clients**
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Hear from our satisfied customers and discover why they chose us for their real estate needs.
          </p>
        </div>

        {/* Swiper Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            // Assign custom classes for navigation
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            // Customizing pagination dots style
            pagination={{ clickable: true, el: '.swiper-pagination-custom', bulletClass: 'swiper-pagination-bullet bg-gray-600', bulletActiveClass: '!bg-yellow-500' }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className="pb-16" // Add padding bottom for pagination dots
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i} className="h-auto">
                <div
                  // Card: Deeper dark background (bg-gray-800), striking yellow hover shadow
                  className="bg-gray-800 shadow-xl hover:shadow-yellow-500/30 transition-all duration-300 transform hover:scale-[1.02] rounded-3xl p-8 text-center h-full flex flex-col justify-between border-t-4 border-yellow-600"
                  role="article"
                  aria-label={`Testimonial from ${t.name}`}
                >
                  <div className="flex-grow">
                    {/* Quote Icon */}
                    <FaQuoteLeft className="text-yellow-500 text-4xl mb-6 mx-auto" />
                    
                    {/* Feedback Text */}
                    <blockquote className="text-gray-300 text-base italic leading-relaxed">
                      <p>{t.feedback}</p>
                    </blockquote>
                  </div>

                  {/* Client Info */}
                  <div className="flex flex-col items-center mt-8">
                    {/* Placeholder Avatar (Initials) */}
                    <div className="w-16 h-16 rounded-full bg-yellow-600 flex items-center justify-center text-gray-900 font-bold text-xl mb-3 shadow-lg border-2 border-yellow-400">
                      {getInitials(t.name)}
                    </div>
                    
                    <p className="text-white font-extrabold text-lg">{t.name}</p>
                    <p className="text-yellow-400 text-sm font-medium">{t.designation}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation Buttons (Tailwind utility for arrow icons) */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between z-10">
            {/* Prev Button */}
            <button className="swiper-button-prev-custom absolute -left-8 md:-left-12 top-0 transform -translate-y-1/2 p-3 bg-gray-700 rounded-full shadow-2xl text-white hover:bg-yellow-600 transition-colors pointer-events-auto hidden sm:block">
              <FaChevronLeft className="text-lg" />
              <span className="sr-only">Previous slide</span>
            </button>
            
            {/* Next Button */}
            <button className="swiper-button-next-custom absolute -right-8 md:-right-12 top-0 transform -translate-y-1/2 p-3 bg-gray-700 rounded-full shadow-2xl text-white hover:bg-yellow-600 transition-colors pointer-events-auto hidden sm:block">
              <FaChevronRight className="text-lg" />
              <span className="sr-only">Next slide</span>
            </button>
          </div>

          {/* Custom Pagination Container */}
          <div className="swiper-pagination-custom flex justify-center mt-8 space-x-2">
            {/* Swiper will insert the actual dots here */}
          </div>
        </div>
      </div>
    </section>
  );
}
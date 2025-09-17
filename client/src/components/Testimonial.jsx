import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Rajesh Kumar",
    designation: "Home Buyer, Noida",
    image: "",
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
  {
    name: "Sneha Verma",
    designation: "Home Buyer, Delhi",
    image: "",
    feedback:
      "Excellent experience! The team was very supportive and made my first home purchase smooth and stress-free.",
  },
  {
    name: "Vikas Yadav",
    designation: "Investor, Gurugram",
    image: "",
    feedback:
      "Great professionals! Their guidance helped me invest smartly. Highly recommend them for real estate advice.",
  },
];

// Function to generate initials if no image
const getInitials = (fullName) =>
  fullName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

export default function Testimonial() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900" aria-label="Client Testimonials">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-white mb-4 text-center">
          What Our Clients Say
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Hear from our satisfied customers and discover why they chose us for their real estate needs.
        </p>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i} className="h-full">
              <div
                className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl p-6 text-center h-full flex flex-col justify-between border border-gray-100 dark:border-gray-700"
                role="article"
                aria-label={`Testimonial from ${t.name}`}
              >
                <div className="flex-grow">
                  <FaQuoteLeft className="text-yellow-500 text-2xl mb-4 mx-auto" />
                  <blockquote className="text-gray-700 dark:text-gray-300 text-md italic leading-relaxed">
                    <p>{t.feedback}</p>
                  </blockquote>
                  <FaQuoteRight className="text-yellow-500 text-2xl mt-4 mx-auto" />
                </div>

                <div className="flex flex-col items-center mt-6">
                  {t.image ? (
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-14 h-14 rounded-full object-cover mb-2 border-2 border-yellow-500 shadow-md"
                    />
                  ) : (
                    <div className="w-14 h-14 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold text-lg mb-2 shadow-md">
                      {getInitials(t.name)}
                    </div>
                  )}
                  <p className="text-gray-900 dark:text-white font-semibold text-base">{t.name}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{t.designation}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* Custom navigation buttons for better styling */}
          <div className="swiper-button-prev !text-gray-700 !-left-4 !bg-white rounded-full p-2 shadow-md hover:bg-gray-100 hidden md:block"></div>
          <div className="swiper-button-next !text-gray-700 !-right-4 !bg-white rounded-full p-2 shadow-md hover:bg-gray-100 hidden md:block"></div>
        </Swiper>
      </div>
    </section>
  );
}
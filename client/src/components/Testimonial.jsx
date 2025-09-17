import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
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
    <section className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden" aria-label="Client Testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hear from our satisfied customers and discover why they chose us for their real estate needs.
          </p>
        </div>

        {/* Swiper Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i} className="h-auto pb-10">
                <div
                  className="bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 rounded-3xl p-8 text-center h-full flex flex-col justify-between border-t-4 border-yellow-500"
                  role="article"
                  aria-label={`Testimonial from ${t.name}`}
                >
                  <div className="flex-grow">
                    <FaQuoteLeft className="text-yellow-500 text-3xl mb-6 mx-auto" />
                    <blockquote className="text-gray-700 dark:text-gray-300 text-base italic leading-relaxed">
                      <p>{t.feedback}</p>
                    </blockquote>
                  </div>

                  <div className="flex flex-col items-center mt-6">
                    {t.image ? (
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-16 h-16 rounded-full object-cover mb-3 border-2 border-yellow-500 shadow-md"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold text-xl mb-3 shadow-md">
                        {getInitials(t.name)}
                      </div>
                    )}
                    <p className="text-gray-900 dark:text-white font-bold text-lg">{t.name}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{t.designation}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Custom Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between z-10 pointer-events-none">
            <button className="swiper-button-prev-custom pointer-events-auto !text-gray-600 dark:!text-gray-200 !-left-4 !bg-white dark:!bg-gray-700 rounded-full p-3 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors transform -translate-x-full md:translate-x-0">
              <span className="sr-only">Previous slide</span>
            </button>
            <button className="swiper-button-next-custom pointer-events-auto !text-gray-600 dark:!text-gray-200 !-right-4 !bg-white dark:!bg-gray-700 rounded-full p-3 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors transform translate-x-full md:translate-x-0">
              <span className="sr-only">Next slide</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
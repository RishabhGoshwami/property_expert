import React from "react";

const blogPosts = [
  {
    title: "WHY EOI Important for Buyer? | Real Estate Market | Noida",
    date: "September 2025",
    author: "Vikash Gupta",
    image: "https://img.youtube.com/vi/eHI-w-l4d2A/0.jpg", // YouTube thumbnail
    excerpt: "Understand why submitting an EOI (Expression of Interest) is crucial for buyers in Noida's real estate market...",
    link: "https://youtu.be/eHI-w-l4d2A?si=UXqmsnSiLWUGOVbX",
  },
 {
    title: "L&T Reserve Noida | 3, 4 & 5 BHK Ultra-Luxury Flats | Sector 128 Noida",
    date: "September 2025",
    author: "Vikash Gupta",
    image: "https://img.youtube.com/vi/8iD00LxMpfA/0.jpg", // YouTube thumbnail
    excerpt: "Explore the premium ultra-luxury flats at L&T Reserve in Noida Sector 128...",
    link: "https://youtu.be/8iD00LxMpfA?si=B448PUjTRhUyuvnR",
  },
 {
    title: "Godrej Majesty | Luxury Project | Noida Extension Sector 12",
    date: "September 2025",
    author: "vikash gupta",
    image: "https://img.youtube.com/vi/UsPssctLc9Y/0.jpg", // YouTube thumbnail
    excerpt: "Take a look at the luxurious Godrej Majesty project in Noida Extension Sector 12 through this project model video...",
    link: "https://youtu.be/UsPssctLc9Y?si=tAgdZgNmXz3I2rzG",
  },
];

export default function Blog() {
  if (blogPosts.length === 0) {
    return (
      <div className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Our Blog
        </h2>
        <p className="text-gray-600 text-lg">Coming Soon 🚀 Stay tuned for our latest insights!</p>
      </div>
    );
  }

  return (
    <div className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
        Our Blog
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105"
          >
            <div className="relative overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
              <p className="text-gray-500 text-sm mb-4">
                {post.date} • by {post.author}
              </p>
              <p className="text-gray-700 flex-grow">{post.excerpt}</p>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-medium transition"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

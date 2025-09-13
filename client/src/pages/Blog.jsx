import React from "react";

const blogPosts = [
  {
    title: "Top 5 Investment Opportunities in Noida 2025",
    date: "September 2025",
    author: "Rishabh Goshwami",
    image: "https://via.placeholder.com/600x400?text=Noida+Investment",
    excerpt: "Discover the most profitable real estate investments in Noida for the year 2025...",
    link: "/blog/noida-investment-2025",
  },
  {
    title: "How to Choose the Perfect Residential Property",
    date: "August 2025",
    author: "Rishabh Goshwami",
    image: "https://via.placeholder.com/600x400?text=Residential+Property",
    excerpt: "Buying a home can be overwhelming. Here’s a guide to choosing the perfect property...",
    link: "/blog/choose-residential-property",
  },
  {
    title: "Commercial Real Estate Trends in Greater Noida",
    date: "July 2025",
    author: "Rishabh Goshwami",
    image: "https://via.placeholder.com/600x400?text=Commercial+Trends",
    excerpt: "Explore the latest trends in commercial real estate and what businesses should look for...",
    link: "/blog/commercial-trends-gn",
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

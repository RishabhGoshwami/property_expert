// src/pages/Gallery.jsx
import React from "react";

// ✅ Example images
const galleryImages = [
  "https://via.placeholder.com/400x300?text=Image+1",
  "https://via.placeholder.com/400x300?text=Image+2",
  "https://via.placeholder.com/400x300?text=Image+3",
  "https://via.placeholder.com/400x300?text=Image+4",
  "https://via.placeholder.com/400x300?text=Image+5",
  "https://via.placeholder.com/400x300?text=Image+6",
];

export default function Gallery() {
  return (
    <div className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
        Our Gallery
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl shadow-lg group relative"
          >
            <img
              src={img}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-lg font-semibold">
              Image {index + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

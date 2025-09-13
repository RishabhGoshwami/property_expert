import React from "react";

export default function Training() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Training & Development</h1>

      <p className="mb-6">
        At <strong>Property Expert Realtors Pvt. Ltd.</strong>, we believe that continuous learning and professional 
        development are the foundation of success in the real estate industry. Our training programs are designed 
        to empower our team members with the latest market knowledge, sales skills, and customer service excellence.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Our Training Approach</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Orientation Programs:</strong> Induction training for new employees to understand our culture, processes, and values.</li>
        <li><strong>Sales Excellence:</strong> Hands-on training sessions on real estate sales techniques, negotiation skills, and client relationship management.</li>
        <li><strong>Market Insights:</strong> Regular workshops on real estate trends, government policies, and investment opportunities in Noida, Greater Noida & NCR.</li>
        <li><strong>Soft Skills Development:</strong> Communication, leadership, and presentation training to enhance overall professionalism.</li>
        <li><strong>Technology Training:</strong> Guidance on using CRM tools, digital marketing platforms, and property management systems.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Why Choose Our Training?</h2>
      <p className="mb-6">
        Our training programs are curated by experienced professionals in the real estate sector. 
        They not only help our team to stay ahead in the competitive market but also ensure that 
        every client receives the highest standard of service.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Opportunities with Us</h2>
      <p>
        We encourage aspiring real estate professionals, freshers, and experienced candidates to 
        join our training programs. With the right guidance, structured learning, and practical exposure, 
        you can build a rewarding career with <strong>Property Expert Realtors Pvt. Ltd.</strong>
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Contact for Training</h2>
      <p className="mb-2">For more information about training programs, please reach out to us:</p>
      <p><strong>Property Expert Realtors Pvt. Ltd.</strong></p>
      <p>H-190, Sector-63, Noida – 201301, Uttar Pradesh, India</p>
      <p>Phone: +91-9990989295</p>
      <p>Email: info@propertyexpert.com</p>

      <p className="mt-8 text-sm text-gray-600">
        <em>Last updated: {new Date().toLocaleDateString()}</em>
      </p>
    </div>
  );
}

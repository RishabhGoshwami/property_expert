const projects = [
  {
    name: "Nirala Gateway",
    slug: "nirala-gateway",
    location: "C-07, Sector 12, Greater Noida West",
    type: "commercial",
    bhk: ["Studio Apartment"],
    images: [
      "https://www.niralaworld.org/assets/inner_slider_04-C9GIrkh5.jpg",
      "https://www.niralaworld.org/assets/inner_slider_03-DlGfRMLb.jpg",
      "https://www.niralaworld.org/assets/inner_slider_01-HCdkH4qs.jpg",
      "https://www.niralaworld.org/assets/gallery_4-DpyNxCHs.jpg"
    ],
    about: [
      "Next-generation commercial hub combining retail spaces, fine dining, modern offices, and studio apartments under one ecosystem.",
      "Prime location at Sector-12, Greater Noida West with excellent road connectivity and a three-side open plot.",
      "Landmark development offering high investment potential and visibility for businesses.",
      "Thoughtfully designed to blend work, leisure, and living with world-class amenities."
    ],
    amenities: [
      "Retail spaces with high visibility for maximum business exposure",
      "Fine dining restaurants offering world-class cuisines",
      "Premium offices (5th to 8th floor) with customizable layouts and modern facilities",
      "Grand double-height lobby for studio apartments",
      "450+ stylish studio apartments (9th to 24th floor) with space-optimized interiors",
      "Smart design layouts with comfort and convenience",
      "High-speed elevators and 24x7 power backup",
      "Ample parking space for residents and visitors",
      "24x7 security with reception services",
      "Professional maintenance and housekeeping services"
    ],
    details: {
      price_range: "₹ 65 L – 1.2 Cr",
      possession: "Apr, 2030",
      rera_id: "UPRERAPRJ531916"
    },
    form: {
      endpoint: "https://api.web3forms.com/submit",
      access_key: "d5f504e4-3e5a-4dda-8255-62123d25fe81",
      fields: [
        { name: "name", type: "text", placeholder: "Your Name", required: true },
        { name: "email", type: "email", placeholder: "Your Email", required: true },
        { name: "phone", type: "tel", placeholder: "Your Phone", required: true }
      ],
      submit_label: "📖 Request E-Brochure"
    }
  },

  {
    name: "Godrej Majesty",
    slug: "godrej-majesty",
    location: "Greater Noida West",
    type: "residential",
    bhk: ["3 BHK", "4 BHK"],
    images: [
      "https://godrage-magesty.onrender.com/assets/home2-DiiKAUi6.webp",
      "https://godrage-magesty.onrender.com/assets/home1-DkjwVjKv.webp",
      "https://godrage-magesty.onrender.com/assets/1-CQQtvLuA.jpg",
    ],
    about: [
      "Luxury 3 & 4 BHK apartments with modern amenities and premium community facilities.",
      "Prime location in Greater Noida West with excellent connectivity and living convenience.",
      "Features landscaped gardens, open spaces, and a world-class clubhouse for residents.",
      "Designed to offer a balanced lifestyle combining comfort, recreation, and security."
    ],
    amenities: [
      "Swimming pool and fully equipped gym",
      "Clubhouse with indoor games and community spaces",
      "Children's play area for safe recreation",
      "24x7 security with CCTV surveillance",
      "Landscaped gardens and open spaces",
      "Ample parking for residents and guests"
    ],
    details: {
      price_range: "₹ 85 L – 1.5 Cr",
      possession: "Dec, 2026",
      rera_id: "UPRERAPRJ123456"
    },
    form: {
      endpoint: "https://api.web3forms.com/submit",
      access_key: "d5f504e4-3e5a-4dda-8255-62123d25fe81",
      fields: [
        { name: "name", type: "text", placeholder: "Your Name", required: true },
        { name: "email", type: "email", placeholder: "Your Email", required: true },
        { name: "phone", type: "tel", placeholder: "Your Phone", required: true }
      ],
      submit_label: "📖 Request E-Brochure"
    }
  },

  {
    name: "Fusion The Rivulet",
    slug: "fusion-the-rivulet",
    location: "Greater Noida West",
    type: "residential",
    bhk: ["3 BHK", "4 BHK"],
    images: [
      "https://www.fusiongroup.org.in/assets/inner_01-_xs6y22c.png"
    ],
    about: [
      "Premium residences crafted for comfort, elegance, and exclusivity.",
      "Low-density living with world-class features and exceptional design.",
      "Spacious layouts and thoughtfully planned community facilities for modern lifestyles.",
      "Prime location in Greater Noida West with excellent connectivity."
    ],
    amenities: [
      "Grand swimming pool & kids' pool",
      "Luxury clubhouse with indoor games",
      "Modern gymnasium & yoga lawn",
      "Jogging & cycling track",
      "Amphitheatre & open-air seating",
      "Children's play area",
      "Senior citizen relaxation zone",
      "Multi-sport courts: badminton, basketball, cricket pitch",
      "24x7 security with power backup",
      "Advanced construction technology for premium living",
      "12.5 acres of green and open spaces",
      "Clubhouse, fitness, leisure & community spaces designed to elevate everyday living",
      "Pre-approved by leading banks for smooth home loans"
    ],
    details: {
      price_range: "₹ 75 L – 1.4 Cr",
      possession: "Mar, 2027",
      rera_id: "UPRERAPRJ654321"
    },
    form: {
      endpoint: "https://api.web3forms.com/submit",
      access_key: "d5f504e4-3e5a-4dda-8255-62123d25fe81",
      fields: [
        { name: "name", type: "text", placeholder: "Your Name", required: true },
        { name: "email", type: "email", placeholder: "Your Email", required: true },
        { name: "phone", type: "tel", placeholder: "Your Phone", required: true }
      ],
      submit_label: "📖 Request E-Brochure"
    }
  },

  // ... other projects
];

export default projects;

import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa"; // Added specific icons for contact

export default function Footer() {
  // Define a strong primary accent color for the light theme (Royal Yellow)
  const PRIMARY_ACCENT = "text-amber-600"; // Changed from text-blue-600
  const HOVER_ACCENT = "hover:text-amber-600"; // Changed from hover:text-blue-600
  const LIGHT_BORDER = "border-amber-200"; // Changed from border-blue-200
  
  const TEXT_COLOR = "text-gray-600";
  const HEADING_COLOR = "text-gray-800";

  return (
    // Section Background: Soft, professional light gray
    <footer className="bg-gray-100 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Intro & Contact */}
          <div className="md:col-span-2 lg:col-span-1">
            <h2 className={`text-3xl font-extrabold ${HEADING_COLOR} mb-4`}>
              Property Expert Realtors
            </h2>
            <p className={`${TEXT_COLOR} text-sm mb-6 leading-relaxed`}>
              Based in Noida, we are a trusted real estate consultancy known for our professional, transparent, and client-centric approach. We specialize in Residential & Commercial properties across Delhi-NCR.
            </p>
            {/* Contact Details with Icons */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <FaPhoneAlt className={`${PRIMARY_ACCENT} text-lg`} />
                <a href="tel:+919990989295" className={`${TEXT_COLOR} ${HOVER_ACCENT} transition-colors font-medium`}>+91 9990989295</a>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className={`${PRIMARY_ACCENT} text-lg`} />
                <a href="mailto:info@propertyexpert.com" className={`${TEXT_COLOR} ${HOVER_ACCENT} transition-colors font-medium`}>info@propertyexpert.com</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h2 className={`text-xl font-bold ${HEADING_COLOR} mb-6 border-b-2 ${LIGHT_BORDER} pb-2`}>
              Quick Links
            </h2>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className={`${TEXT_COLOR} ${HOVER_ACCENT} transition-colors`}>About Us</Link>
              </li>
              <li>
                <Link to="/services" className={`${TEXT_COLOR} ${HOVER_ACCENT} transition-colors`}>Services</Link>
              </li>
              <li>
                <Link to="/projects" className={`${TEXT_COLOR} ${HOVER_ACCENT} transition-colors`}>Projects</Link>
              </li>
              <li>
                <Link to="/contact" className={`${TEXT_COLOR} ${HOVER_ACCENT} transition-colors`}>Contact Us</Link>
              </li>
              <li>
                <Link to="/career" className={`${TEXT_COLOR} ${HOVER_ACCENT} transition-colors`}>Career</Link>
              </li>
            </ul>
          </div>
          
          {/* Legal & Policies */}
          <div className="lg:col-span-1">
            <h2 className={`text-xl font-bold ${HEADING_COLOR} mb-6 border-b-2 ${LIGHT_BORDER} pb-2`}>
              Legal
            </h2>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className={`${TEXT_COLOR} ${HOVER_ACCENT} transition-colors`}>Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className={`${TEXT_COLOR} ${HOVER_ACCENT} transition-colors`}>Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/disclaimer" className={`${TEXT_COLOR} ${HOVER_ACCENT} transition-colors`}>Disclaimer</Link>
              </li>
              <li>
                <Link to="/sitemap" className={`${TEXT_COLOR} ${HOVER_ACCENT} transition-colors`}>Sitemap</Link>
              </li>
            </ul>
          </div>

          {/* Offices & RERA */}
          <div className="lg:col-span-1">
            <h2 className={`text-xl font-bold ${HEADING_COLOR} mb-6 border-b-2 ${LIGHT_BORDER} pb-2`}>
              Our Offices
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className={`text-base font-bold ${HEADING_COLOR} mb-1`}>Corporate Head Office</h3>
                <p className={`${TEXT_COLOR} text-sm`}>H-190, Sector-63, Noida – 201301, Uttar Pradesh</p>
                <p className={`text-sm font-semibold ${PRIMARY_ACCENT} mt-2`}>RERA ID: UPRERAAGT23257</p>
              </div>
              <div>
                <h3 className={`text-base font-bold ${HEADING_COLOR} mb-1`}>Gurugram Branch Office</h3>
                <p className={`${TEXT_COLOR} text-sm`}>Unit No. 1106, 11th Floor, Tower 1, DLF Corporate Greens, Sector – 74A, Gurugram – 122004</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright Section */}
        <div className="mt-16 pt-8 border-t border-gray-300 flex flex-col md:flex-row items-center justify-between gap-5">
          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-5 text-xl">
            <a href="https://www.facebook.com/share/1GXvDdtHU6/" target="_blank" rel="noopener noreferrer" className={`${TEXT_COLOR} ${HOVER_ACCENT} transition-colors transform hover:scale-110`}>
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/propertyexpertrealtors?igsh=MWh4c3N0NGMwbGw1NA==" target="_blank" rel="noopener noreferrer" className={`${TEXT_COLOR} ${HOVER_ACCENT} transition-colors transform hover:scale-110`}>
              <FaInstagram />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className={`${TEXT_COLOR} ${HOVER_ACCENT} transition-colors transform hover:scale-110`}>
              <FaXTwitter />
            </a>
            <a href="https://www.linkedin.com/in/vikas-kumar-gupta-8735469a/?" target="_blank" rel="noopener noreferrer" className={`${TEXT_COLOR} ${HOVER_ACCENT} transition-colors transform hover:scale-110`}>
              <FaLinkedinIn />
            </a>
            <a href="https://youtube.com/@propertyexpertrealtors?si=CinG5e80OwYdNhSM" target="_blank" rel="noopener noreferrer" className={`${TEXT_COLOR} ${HOVER_ACCENT} transition-colors transform hover:scale-110`}>
              <FaYoutube />
            </a>
          </div>
          
          {/* Copyright */}
          <div className={`text-sm text-center md:text-right ${TEXT_COLOR} font-medium`}>
            © {new Date().getFullYear()} Property Expert Realtors Pvt. Ltd. | All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
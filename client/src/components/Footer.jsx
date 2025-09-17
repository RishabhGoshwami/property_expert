import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Intro & Contact */}
          <div className="md:col-span-2 lg:col-span-1">
            <h2 className="text-3xl font-bold text-white mb-4">
              Property Expert Realtors
            </h2>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Based in Noida, we are a trusted real estate consultancy known for our professional, transparent, and client-centric approach. We specialize in Residential & Commercial properties across Delhi-NCR.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+919990989295" className="hover:text-yellow-400 transition-colors">+91 9990989295</a>
              </div>
              <div className="flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:info@propertyexpert.com" className="hover:text-yellow-400 transition-colors">info@propertyexpert.com</a>
              </div>
            </div>
          </div>

          {/* Corporate Links */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-semibold text-white mb-5">Quick Links</h2>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-yellow-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-yellow-400 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-yellow-400 transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-yellow-400 transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/career" className="text-gray-400 hover:text-yellow-400 transition-colors">Career</Link>
              </li>
            </ul>
          </div>
          
          {/* Legal & Policies */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-semibold text-white mb-5">Legal</h2>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-yellow-400 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-yellow-400 transition-colors">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-gray-400 hover:text-yellow-400 transition-colors">Disclaimer</Link>
              </li>
              <li>
                <Link to="/sitemap" className="text-gray-400 hover:text-yellow-400 transition-colors">Sitemap</Link>
              </li>
            </ul>
          </div>

          {/* Offices & RERA */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-semibold text-white mb-5">Our Offices</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-gray-200 mb-1">Corporate Head Office</h3>
                <p className="text-gray-400 text-sm">H-190, Sector-63, Noida – 201301, Uttar Pradesh</p>
                <p className="text-gray-400 text-sm mt-2">RERA ID: UPRERAAGT23257</p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-200 mb-1">Gurugram Branch Office</h3>
                <p className="text-gray-400 text-sm">Unit No. 1106, 11th Floor, Tower 1, DLF Corporate Greens, Sector – 74A, Gurugram – 122004</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright Section */}
        <div className="mt-16 pt-8 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex justify-center md:justify-start gap-4 text-xl">
            <a href="https://www.facebook.com/share/1GXvDdtHU6/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/propertyexpertrealtors?igsh=MWh4c3N0NGMwbGw1NA==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors">
              <FaInstagram />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors">
              <FaXTwitter />
            </a>
            <a href="https://www.linkedin.com/in/vikas-kumar-gupta-8735469a/?" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors">
              <FaLinkedinIn />
            </a>
            <a href="https://youtube.com/@propertyexpertrealtors?si=CinG5e80OwYdNhSM" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors">
              <FaYoutube />
            </a>
          </div>
          <div className="text-sm text-center md:text-right">
            © {new Date().getFullYear()} Property Expert Realtors Pvt. Ltd. | All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
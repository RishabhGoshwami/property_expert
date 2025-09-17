import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Company Intro */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Property Expert Realtors Pvt. Ltd.
          </h2>
          <p className="text-gray-400 text-sm mb-4 leading-relaxed">
            Head office at Noida, we are a trusted name in real estate consultancy,
            known for professional, transparent, and client-centric services.
            We specialize in Residential & Commercial properties across Noida, Greater Noida & NCR.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-2">📞 +91 9990989295</p>
          <p className="text-gray-400 text-sm flex items-center gap-2">✉️ info@propertyexpert.com</p>
        </div>

        {/* Corporate Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Corporate Links</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/faq" className="hover:text-yellow-400 transition-colors">FAQ</Link>
            </li>
            <li>
              <Link to="/training" className="hover:text-yellow-400 transition-colors">Training</Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-yellow-400 transition-colors">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-yellow-400 transition-colors">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-yellow-400 transition-colors">Login</Link>
            </li>
          </ul>
        </div>

        {/* Offices & RERA */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Corporate Head Office</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            H-190, Sector-63 <br /> Noida – 201301, Uttar Pradesh
          </p>
          <p className="text-gray-400 text-sm mt-2">RERA ID: UPRERAAGT23257</p>
          <p className="text-gray-400 text-sm">PAN No.: ABCDE1234F</p>

          <h2 className="text-xl font-semibold text-white mt-6 mb-2">Branch Offices</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Office No. B-510, Bhutani Techno Park Tower-B, 5th Floor <br />
            Sector – 127, Noida Expressway <br /> Noida – 201313
          </p>
          <p className="text-gray-400 text-sm mt-2 leading-relaxed">
            Unit No. 1106, 11th Floor, Tower 1 <br />
            DLF Corporate Greens, Sector – 74A <br /> Gurugram – 122004
          </p>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-5 mb-5">
        <a href="https://www.facebook.com/share/1GXvDdtHU6/" target="_blank" rel="noopener noreferrer"
          className="text-gray-400 hover:text-yellow-400 transition text-xl">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/propertyexpertrealtors?igsh=MWh4c3N0NGMwbGw1NA==" target="_blank" rel="noopener noreferrer"
          className="text-gray-400 hover:text-yellow-400 transition text-xl">
          <FaInstagram />
        </a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer"
          className="text-gray-400 hover:text-yellow-400 transition text-xl">
          <FaXTwitter />
        </a>
        <a href="https://www.linkedin.com/in/vikas-kumar-gupta-8735469a/?" target="_blank" rel="noopener noreferrer"
          className="text-gray-400 hover:text-yellow-400 transition text-xl">
          <FaLinkedinIn />
        </a>
        <a href="https://youtube.com/@propertyexpertrealtors?si=CinG5e80OwYdNhSM" target="_blank" rel="noopener noreferrer"
          className="text-gray-400 hover:text-yellow-400 transition text-xl">
          <FaYoutube />
        </a>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-5 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Property Expert Realtors Pvt. Ltd. | All Rights Reserved
      </div>
    </footer>
  );
}

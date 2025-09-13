import React from "react";

export default function TermsAndConditions() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>

      <p>
        Welcome to <strong>Property Expert Realtors Pvt. Ltd.</strong>. These Terms & Conditions ("Terms") govern your access to and use of our website and services. By using our website, you agree to comply with these Terms. Please read them carefully.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">1. Acceptance of Terms</h2>
      <p>
        By accessing or using our website or services, you acknowledge that you have read, understood, and agreed to these Terms and our Privacy Policy. If you do not agree, you must discontinue use immediately.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">2. Services</h2>
      <p>
        Property Expert Realtors Pvt. Ltd. provides real estate consultancy services, including residential and commercial property advisory, sales, and related information. All services are subject to availability and applicable regulations.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">3. User Responsibilities</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>You must provide accurate and truthful information when filling out any forms or inquiries.</li>
        <li>You agree not to use our website for any unlawful or fraudulent purposes.</li>
        <li>You shall not attempt to gain unauthorized access to our systems or misuse the site.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">4. Property Information</h2>
      <p>
        All property listings, prices, layouts, and availability are provided for general information purposes. While we strive for accuracy, details are subject to change without notice. Users are advised to verify information independently before making decisions.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">5. Payments & Transactions</h2>
      <p>
        Any payments made towards booking or services shall be subject to the terms agreed at the time of transaction. Property Expert Realtors Pvt. Ltd. shall not be responsible for any disputes arising due to third-party financial institutions or developers.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">6. Limitation of Liability</h2>
      <p>
        We make no guarantees regarding the completeness, accuracy, or reliability of the information provided. Property Expert Realtors Pvt. Ltd. shall not be liable for any losses, damages, or claims arising out of your use of our website or services.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">7. Intellectual Property</h2>
      <p>
        All content on this website, including text, graphics, logos, and images, is the property of Property Expert Realtors Pvt. Ltd. Unauthorized use, reproduction, or distribution is strictly prohibited.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">8. Third-Party Links</h2>
      <p>
        Our website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of these external sites. Users should review terms of such third parties independently.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">9. Termination</h2>
      <p>
        We reserve the right to suspend or terminate access to our website or services at our discretion, without prior notice, if we believe a user has violated these Terms.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">10. Governing Law</h2>
      <p>
        These Terms shall be governed and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Noida, Uttar Pradesh.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">11. Changes to Terms</h2>
      <p>
        We may update these Terms & Conditions from time to time. Continued use of our website after changes implies acceptance of the revised Terms.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">12. Contact Us</h2>
      <p>If you have any questions regarding these Terms, please contact us at:</p>
      <p className="mt-2"><strong>Property Expert Realtors Pvt. Ltd.</strong></p>
      <p>H-190, Sector-63, Noida ‐ 201301, Uttar Pradesh, India</p>
      <p>Phone: +91-9990989295</p>
      <p>Email: info@propertyexpert.com</p>

      <p className="mt-8 text-sm text-gray-600">
        <em>Last updated: {new Date().toLocaleDateString()}</em>
      </p>
    </div>
  );
}

import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p>
        At <strong>Property Expert Realtors Pvt. Ltd.</strong> ("we", "us", or "our"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website or use our services.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">1. Information We Collect</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Personal Data:</strong> name, email address, phone number, postal address, etc., when you fill out forms (inquiry, contact, signup).</li>
        <li><strong>Usage Data:</strong> information automatically collected when you visit the site — IP address, browser type, pages visited, referring/exit pages, time and date stamps.</li>
        <li><strong>Cookies & Tracking Technologies:</strong> cookies, web beacons, similar technologies to track user activity, preferences, etc., for better experience and analytics.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">2. How We Use Your Information</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>To provide, operate, and maintain our website and services.</li>
        <li>To respond to your requests, inquiries, or customer service needs.</li>
        <li>To send you promotional emails or newsletters, if you have opted in.</li>
        <li>To improve our website content, user experience, and marketing efforts.</li>
        <li>To comply with legal obligations, prevent fraud or misuse, and protect rights/security.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">3. Disclosure of Your Information</h2>
      <p>We may share your personal data in the following situations:</p>
      <ul className="list-disc list-inside space-y-2">
        <li>With our service providers who help in website hosting, data analysis, marketing, email delivery, etc.</li>
        <li>For legal reasons — if required by law, regulation, or governmental request.</li>
        <li>When necessary to protect our rights, property, or safety or of others.</li>
        <li>In connection with business transfers (e.g., merger, acquisition) under confidentiality obligations.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">4. Cookies & Tracking</h2>
      <p>
        We use cookies and similar tracking technologies to track activity on our site, to store certain user preferences, to provide features, and to analyze site traffic. You can disable cookies via your browser settings, but this may affect some features or functionality of the website.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">5. Your Rights</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>The right to access the personal information we hold about you.</li>
        <li>The right to request correction or update of inaccurate or incomplete information.</li>
        <li>The right to request deletion of your personal data, subject to legal obligations.</li>
        <li>The right to opt-out of marketing communications.</li>
        <li>The right to object to certain processing of your data.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">6. Security</h2>
      <p>
        We take reasonable technical and organizational steps to protect your personal information against unauthorized access, disclosure, alteration or destruction. However, no method of transmission over the Internet or electronic storage is completely secure.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">7. Children’s Privacy</h2>
      <p>
        Our website and services are not intended for use by children under the age of 18. We do not knowingly collect personal data from children under 18. If we learn we have collected such information, we will delete it promptly in accordance with applicable laws.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">8. Changes to this Privacy Policy</h2>
      <p>
        We may update this policy from time to time. When changes are significant, we will notify you by posting a prominent notice on our site. The new policy will be effective from the date indicated.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">9. Contact Us</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy, please contact us at:
      </p>
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

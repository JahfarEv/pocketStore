import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-10 md:px-12">
      <div className="max-w-5xl mx-auto space-y-6">

        {/* Main Heading */}
        <h1 className="text-3xl font-bold text-blue-700 underline underline-offset-4 text-center">
          Privacy Policy
        </h1>

        <p className="text-center text-sm text-gray-500">
          Effective Date: January 7, 2026
        </p>

        <p>
          Nexus Ventures LLC (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)
          operates the PoketStor mobile application (&quot;Service&quot;). This
          Privacy Policy explains how we collect, use, and protect personal data
          when you use our Service and the choices available to you regarding
          your data.
        </p>

        {/* 1 */}
        <h2 className="text-xl font-bold mt-6 text-center">
          1. Information Collection and Use
        </h2>

        <p>
          We collect different types of information to provide and improve our
          Service.
        </p>

        <p className="font-semibold">Personal Data</p>
        <p>
          While using our Service, we may collect personally identifiable
          information including:
        </p>

        <ul className="list-disc pl-6">
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Phone number</li>
          <li>Address, State, Province, ZIP/Postal code, City</li>
        </ul>

        <p className="font-semibold mt-4">Location Data</p>
        <p>
          We may collect approximate or precise location information, only with
          your consent, to enable core app functionality such as:
        </p>

        <ul className="list-disc pl-6">
          <li>Showing nearby shops and products</li>
          <li>Enabling location-based search and discovery</li>
          <li>Improving accuracy of service availability</li>
        </ul>

        <p>
          You can allow or deny location access at any time through your device
          settings. PoketStor does not sell or rent location data.
        </p>

        <p className="font-semibold mt-4">Shop Information</p>
        <p>
          For registered shops, we collect shop names, descriptions, product
          images, pricing details, and business-related information necessary to
          operate the Service.
        </p>

        {/* 2 */}
        <h2 className="text-xl font-bold mt-6 text-center">
          2. Subscription and Payments
        </h2>

        <p className="font-semibold">For Shops</p>
        <p>
          We charge subscription and renewal fees (including applicable taxes).
          Payments are processed securely through third-party payment gateways.
          PoketStor does not store card or payment credentials.
        </p>

        <p className="font-semibold mt-3">For Users</p>
        <p>
          The application is free for general users to browse shops and
          products.
        </p>

        <p className="font-semibold mt-3">Direct Transactions</p>
        <p>
          PoketStor is a discovery platform. All product payments are made
          directly between customers and shop owners. PoketStor does not
          process or manage product purchase transactions.
        </p>

        {/* 3 */}
        <h2 className="text-xl font-bold mt-6 text-center">
          3. Cookies and Tracking Technologies
        </h2>

        <p>
          We may use cookies or similar technologies to improve Service
          functionality and user experience. You can control cookie usage
          through your browser or device settings.
        </p>

        {/* 4 */}
        <h2 className="text-xl font-bold mt-6 text-center">
          4. Use of Data
        </h2>

        <ul className="list-disc pl-6">
          <li>Provide and maintain the Service</li>
          <li>Enable shop listings and location-based discovery</li>
          <li>Notify users of service updates</li>
          <li>Provide customer support</li>
          <li>Monitor usage and improve performance</li>
          <li>Ensure platform security and prevent misuse</li>
        </ul>

        {/* 5 */}
        <h2 className="text-xl font-bold mt-6 text-center">
          5. Data Security and Sharing
        </h2>

        <p className="font-semibold">No Sale of Personal Data</p>
        <p>
          Nexus Ventures LLC does not sell, trade, or rent personal data or
          location data to third parties for marketing purposes.
        </p>

        <p className="font-semibold mt-3">Security</p>
        <p>
          We implement reasonable technical and organizational safeguards to
          protect your data. However, no internet-based system can be guaranteed
          to be completely secure.
        </p>

        {/* 6 */}
        <h2 className="text-xl font-bold mt-6 text-center">
          6. Service Providers
        </h2>

        <p>
          We may use trusted third-party service providers (such as payment
          processors for subscriptions or hosting providers). These providers
          access data only to perform services on our behalf and are
          contractually obligated to protect it.
        </p>

        {/* 7 */}
        <h2 className="text-xl font-bold mt-6 text-center">
          7. Changes to This Privacy Policy
        </h2>

        <p>
          We may update this Privacy Policy periodically. Changes will be posted
          on this page, and the Effective Date will be updated accordingly.
          Continued use of the Service constitutes acceptance of the revised
          policy.
        </p>

        {/* 8 */}
        <h2 className="text-xl font-bold mt-6 text-center">
          8. Contact Us
        </h2>

        <p>
          If you have questions or concerns about this Privacy Policy, contact
          us at:
        </p>

        <p>
          📧 Email:{" "}
          <a
            href="mailto:poketstormail@gmail.com"
            className="text-blue-600 underline"
          >
            support@poketstor.com
          </a>
        </p>

        <p>🏢 Company: Nexus Ventures LLC</p>

      </div>
    </div>
  );
};

export default PrivacyPolicy;

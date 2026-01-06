import React from "react";

const headingClass =
  "text-xl font-bold text-blue-600 underline underline-offset-4 text-center";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-10 md:px-12">
      <div className="max-w-5xl mx-auto space-y-6">

        {/* Main Heading */}
        <h1 className="text-3xl font-bold text-blue-700 underline underline-offset-4 text-center">
          PoketStor Privacy Policy
        </h1>

        <p className="text-center text-sm text-gray-500">
          Effective Date: July-2026
        </p>

        <p>
          At PoketStor, we value the trust you place in us and are committed to
          protecting your personal information. This Privacy Policy outlines
          how PoketStor and its affiliates (collectively “PoketStor”, “we”,
          “our”, “us”) collect, use, share, and safeguard personal data through
          its website, mobile applications, and related services (collectively
          referred to as the “Platform”).
        </p>

        <p>
          By accessing or using the Platform, You expressly consent to the terms
          of this Privacy Policy, as well as the applicable Terms of Use. If you
          do not agree with the terms of this policy, please do not use or access
          the Platform.
        </p>

        <h2 className="text-xl font-bold mt-5 text-center">
        1. Information Collection</h2>

        <p>
          We collect and store various types of personal data provided by You
          when You use the Platform, including but not limited to:
        </p>

        <p>
          Personal Information: Name, email address, phone number, business
          details, delivery address, and other similar information.
        </p>

        <p>
          Transactional Data: Information related to subscriptions, orders,
          services, payments, invoices, and transactions on the Platform.
        </p>

        <p>
          Some sections of the Platform may be accessed without providing
          personal data. However, certain services (such as shop registration,
          subscription activation, order management, or report generation) may
          require You to register and share information.
        </p>

        <h2 className="text-xl font-bold mt-5 text-center">
        2. Use of Your Information</h2>

        <p>We use the information we collect to:</p>

        <p>Facilitate subscriptions, transactions, and deliver Platform services.</p>

        <p>
          Communicate with You regarding your account, subscriptions, invoices,
          orders, and service updates.
        </p>

        <p>Personalize and improve your experience on the Platform.</p>

        <p>
          Detect, prevent, and protect against fraud, errors, and other unlawful
          activities.
        </p>

        <p>Enforce our Terms of Use and related policies.</p>

        <p>
          Conduct internal research and analytics to improve our products and
          services.
        </p>

        <p>
          We may use your information for marketing or promotional purposes. You
          will always have the option to opt out of such communications.
        </p>

        <h2 className="text-xl font-bold mt-5 text-center">
        3. Sharing of Information</h2>

        <p>We may share your personal data with:</p>

        <p>
          Affiliates and Third Parties: For purposes such as payment processing,
          subscription management, notification services, and customer support.
        </p>

        <p>
          Business Partners: Including technology providers, payment gateways,
          logistics partners, or financial institutions where required to
          deliver services.
        </p>

        <p>
          Legal Authorities: When required by law, regulation, court order, or
          government request.
        </p>

        <p>
          PoketStor does not sell or rent your personal data to third parties for
          their independent marketing purposes without your explicit consent.
        </p>

        <h2 className="text-xl font-bold mt-5 text-center">
        4. Data Retention</h2>

        <p>
          We retain personal data only for as long as necessary to fulfill the
          purposes outlined in this Privacy Policy, or as required under
          applicable laws and regulations.
        </p>

        <h2 className="text-xl font-bold mt-5 text-center">
        5. Security Measures</h2>

        <p>
          We implement reasonable administrative, technical, and physical
          security measures to protect your personal information from
          unauthorized access, misuse, alteration, or disclosure. However, due
          to the nature of internet-based services, complete security cannot be
          guaranteed.
        </p>

        <p>
          You are responsible for maintaining the confidentiality of your
          account credentials and for all activities carried out under your
          account.
        </p>

        <h2 className="text-xl font-bold mt-5 text-center">
        6. Your Rights</h2>

        <p>
          Access and Update: Review and update your personal information through
          your account settings.
        </p>

        <p>
          Opt-out: Unsubscribe from non-essential or promotional communications
          at any time.
        </p>

        <p>
          Withdraw Consent: Withdraw consent for data processing by contacting
          us. Please note that withdrawing consent may limit your ability to
          use certain features of the Platform.
        </p>

        <h2 className="text-xl font-bold mt-5 text-center">
        7. Third-Party Links</h2>

        <p>
          The Platform may contain links to third-party websites or services.
          PoketStor is not responsible for the privacy practices of such
          external platforms.
        </p>

        <h2 className="text-xl font-bold mt-5 text-center">
        8. Changes to the Privacy Policy</h2>

        <p>
          We may update this Privacy Policy periodically to reflect changes in
          our practices, technology, or legal requirements. Continued use of
          the Platform after such updates constitutes acceptance of the revised
          policy.
        </p>

        <h2 className="text-xl font-bold mt-5 text-center">
        9. Contact Information</h2>

        <p>
          If you have any questions, concerns, or requests related to this
          Privacy Policy or your personal data, you may contact us at:
        </p>

        <p>
          Email:{" "}
          <a
            href="mailto:poketstormail@gmail.com"
            className="text-blue-600 underline"
          >
            poketstormail@gmail.com
          </a>
        </p>

        <h2 className="text-xl font-bold mt-5 text-center">
        10. Consent</h2>

        <p>
          By using the Platform, You consent to the collection, use, sharing,
          and processing of your personal data as described in this Privacy
          Policy. If You provide personal information relating to another
          individual or business, You confirm that You have obtained their
          consent to do so.
        </p>

      </div>
    </div>
  );
};

export default PrivacyPolicy;

import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-10 md:px-12">
      <div className="max-w-5xl mx-auto space-y-6">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-blue-700 underline underline-offset-4 text-center">
          About Us
        </h1>

        <p className="text-center text-sm text-gray-500">
          Welcome to PoketStor, your trusted digital bridge to local commerce!
        </p>

        <p>
          <strong>PoketStor</strong> is an innovative online platform developed
          by <strong>Nexus Ventures LLC</strong>, designed to simplify the way
          you discover and shop from local stores. Our mission is to empower
          local businesses by giving them a digital identity while providing
          customers with an easy way to find products in their immediate
          vicinity.
        </p>

        {/* What We Do */}
        <h2 className="text-xl font-bold mt-6">
          What We Do
        </h2>

        <p>
          In today&apos;s fast-paced world, finding the right product at the
          right price in your local market can be time-consuming. PoketStor
          brings the local market to your fingertips.
        </p>

        <p>
          Whether you are a shop owner looking to expand your reach or a
          customer searching for the best deals nearby, PoketStor is built
          for you.
        </p>

        {/* Key Features */}
        <h2 className="text-xl font-bold mt-6">
          Key Features
        </h2>

        <ul className="list-disc pl-6">
          <li>
            <strong>Discover Local Shops:</strong> Easily find shops around
            your location with detailed addresses and photos.
          </li>
          <li>
            <strong>Real-time Product Catalog:</strong> Browse products, view
            high-quality images, and check prices before visiting the store.
          </li>
          <li>
            <strong>Direct Interaction:</strong> Customers pay shop owners
            directly, ensuring transparency and trust.
          </li>
          <li>
            <strong>Privacy First:</strong> We use location services only to
            enhance your experience and never share personal data with third
            parties.
          </li>
        </ul>

        {/* Business Model */}
        <h2 className="text-xl font-bold mt-6">
          Our Business Model
        </h2>

        <p>
          <strong>For Shoppers:</strong> PoketStor is completely free to use.
          Explore your neighborhood like never before.
        </p>

        <p>
          <strong>For Shop Owners:</strong> We offer a transparent,
          subscription-based model with no hidden commissions. A simple
          renewal fee (inclusive of taxes) keeps your digital storefront
          active.
        </p>

        {/* Vision */}
        <h2 className="text-xl font-bold mt-6">
          Our Vision
        </h2>

        <p>
          At <strong>Nexus Ventures LLC</strong>, we envision a future where
          every local vendor has access to technology to grow their business,
          and every customer enjoys the convenience of digital browsing with
          the trust of local buying.
        </p>

        {/* Contact */}
        <h2 className="text-xl font-bold mt-6">
          Contact Us
        </h2>

        <p>
          Have questions or feedback? We’d love to hear from you.
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

export default AboutUs;

import { useState } from "react";

export default function CareerSalesman() {
  const [agreed, setAgreed] = useState(false);
  const [showGuide, setShowGuide] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleInterested = () => {
    if (!agreed) {
      alert("Please accept the agreement checkbox first.");
      return;
    }
    setShowGuide(true);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/agreement/PoketStor Job.pdf";
    link.download = "PoketStor Job.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloaded(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-10 space-y-8">
        {/* Header */}
        <div className="text-center space-y-2 border-b pb-6">
          <h1 className="text-3xl font-bold text-blue-700">
            Join the PoketStor Sales Team
          </h1>
          <p className="text-gray-600 text-lg">Empower Local Businesses</p>
        </div>

        {/* Introduction */}
        <section className="space-y-3">
          <p className="text-gray-700 leading-relaxed">
            <span className="font-bold">PoketStor</span> is a mobile application
            designed to help local merchants to sell their products and services
            online to their neighbourhood customers. Merchants can list their
            shops and products through monthly or yearly subscription plans.
          </p>
        </section>

        {/* How It Works */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
            How It Works
          </h2>

          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <strong>For Customers:</strong> The app is free to use. Based on
              their live PIN code or location, customers can view nearby shops
              and order products instantly. They can also search businesses
              across India.
            </li>
            <li>
              <strong>For Merchants:</strong> Shops receive order notifications
              and manage delivery directly, collecting payments from customers.
            </li>
            <li>
              <strong>Your Role:</strong> As a Sales Executive, your main
              responsibility is onboarding shops onto the PocketStor platform
              through subscription sales.
            </li>
          </ul>
        </section>

        {/* Subscription Plans */}
    {/* PoketStor Opportunity */}
<section className="space-y-6">
  <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
    What is PoketStor? How to Earn a Monthly Stable Income of ₹40,000+
  </h2>

  <p className="text-gray-700 leading-relaxed">
    <span className="font-bold">PoketStor</span> is a cutting-edge mobile
    application designed to bridge the gap between local merchants and
    neighborhood customers. It empowers small business owners and service
    providers to list their shops and products online, allowing them to compete
    in the digital marketplace.
  </p>

  <p className="text-gray-700 leading-relaxed">
    Customers can easily find nearby stores based on their live location or
    PIN code and place orders instantly.
  </p>
</section>

{/* Entry Offers */}
<section className="space-y-4">
  <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
    Attractive Entry Offers
  </h2>

  <ul className="list-disc list-inside text-gray-700 space-y-2">
    <li>
      Merchants get <strong>3 months for the price of 1</strong> on their first
      monthly subscription.
    </li>
    <li>
      Merchants get <strong>14 months for the price of 11</strong> on the first
      yearly plan.
    </li>
  </ul>
</section>

{/* Financial Growth */}
<section className="space-y-4">
  <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
    Achieving Financial Growth
  </h2>

  <p className="text-gray-700 leading-relaxed">
    By joining PoketStor as a Sales Executive, you aren't just getting a job;
    you are building a recurring revenue stream. The platform uses an
    <strong> Exponential Income Model</strong> where your efforts today pay off
    for months and years to come.
  </p>

  <ul className="list-disc list-inside text-gray-700 space-y-2">
    <li>
      <strong>The Power of Renewals:</strong> Unlike traditional sales where you
      only earn once, PoketStor pays you every time a merchant renews their
      subscription.
    </li>
    <li>
      <strong>Unlimited Growth:</strong> As your network of shops grows, your
      monthly "pension-like" commission increases.
    </li>
    <li>
      By scaling your efforts or becoming a Manager, earning
      <strong> lakhs of rupees per month</strong> becomes achievable.
    </li>
  </ul>
</section>

{/* Responsibilities */}
<section className="space-y-4">
  <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
    Your Responsibilities
  </h2>

  <ul className="list-disc list-inside text-gray-700 space-y-2">
    <li>
      <strong>Merchant Onboarding:</strong> Identify and visit local service
      centers, shops, and businesses (groceries, electronics, textiles, etc.)
      and explain the benefits of going digital with PoketStor.
    </li>
    <li>
      <strong>App Installation:</strong> Help merchants install the PoketStor
      application and set up their business listing.
    </li>
    <li>
      <strong>Subscription Sales:</strong> Convert leads into active users by
      selling Monthly or Yearly subscription plans.
    </li>
    <li>
      <strong>Relationship Management:</strong> Ensure merchants understand how
      to manage orders and deliveries to maintain high renewal rates.
    </li>
  </ul>
</section>

{/* Commission & Promotion */}
<section className="space-y-4">
  <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
    Commission Structure
  </h2>

  <p className="text-gray-700">
    We offer one of the most competitive commission models in the industry,
    rewarding both initial hard work and long-term consistency.
  </p>

  <ul className="list-disc list-inside text-gray-700 space-y-2">
    <li>
      <strong>Recurring Commission:</strong> Earn income every time a merchant
      renews their subscription.
    </li>
    <li>
      <strong>Promotion to Sales Manager:</strong> High-performing executives
      can lead their own teams across India.
    </li>
    <li>
      Managers earn their direct sales commission plus renewal commission on
      their entire team's performance.
    </li>
  </ul>
</section>

{/* Payout */}
<section className="space-y-4">
  <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
    Transparent Payouts
  </h2>

  <p className="text-gray-700">
    All earned commissions are credited directly to your registered bank
    account by the <strong>5th of every month</strong>.
  </p>
</section>

        {/* Terms */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 ">
            Terms & Conditions
          </h2>

          <p className="text-gray-700">
            A minimum of five sales per month is required to remain eligible for
            full benefits and team commissions. Those who do not meet this
            requirement will receive only their sales commission.
          </p>
        </section>

        {/* Agreement Checkbox */}
        <section className="border rounded-lg p-4 bg-gray-50">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Sales Executive Agreement
          </h2>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="agree"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="w-4 h-4"
            />
            <label htmlFor="agree" className="text-gray-700 text-sm">
              I have read and agree to the Sales Executive Agreement
            </label>
          </div>
        </section>

        {/* Interested Button */}
        <div className="text-center">
          <button
            onClick={handleInterested}
            className={`px-8 py-3 rounded-lg font-semibold text-white transition ${
              agreed
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            I’m Interested
          </button>
        </div>
      </div>

      {/* GUIDE MODAL */}
      {showGuide && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-lg rounded-xl shadow-lg p-6 space-y-5">
            <h3 className="text-xl font-bold text-gray-800 text-center">
              Application Instructions
            </h3>

            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li>Download the Sales Executive Application Form.</li>
              <li>Fill in all required details clearly.</li>
              <li>Attach a recent passport size photograph.</li>
              <li>Sign the form after completing all fields.</li>
              <li>Scan the completed form.</li>
              <li>
                Send the scanned copy to
                <span className="font-semibold text-blue-600">
                  {" "}
                  career@poketstor.com
                </span>
              </li>
            </ol>

            <div className="text-center pt-4">
              <button
                onClick={handleDownload}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold"
              >
                Download Application Form
              </button>
            </div>

            {downloaded && (
              <p className="text-center text-green-600 font-semibold">
                ✅ Form downloaded successfully
              </p>
            )}

            <div className="text-center pt-2">
              <button
                onClick={() => setShowGuide(false)}
                className="text-gray-500 underline text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

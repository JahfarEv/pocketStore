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
    link.href = "/agreement/PoketStor Career.pdf";
    link.download = "PoketStor Career.pdf";
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
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
            Subscription Plans & Offers
          </h2>

          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>
              <strong>Monthly Plan:</strong> ₹100 + GST
              <div className="text-sm text-gray-600">
                Special Offer: Get 3 months for the first subscription
              </div>
            </li>
            <li>
              <strong>Yearly Plan:</strong> ₹1100 + GST
              <div className="text-sm text-gray-600">
                Pay for 11 months and get 14 months for the first subscription.
                Every subsequent renewal gets 12 months for the price of 11.
              </div>
            </li>
          </ol>
        </section>

        {/* Commission Structure */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
            Earning Potential (Commission Structure)
          </h2>
          We offer a high-reward commission model where you earn from both New
          Sales and Renewals.
          {/* Sales Executive */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-blue-700">
              Sales Executive Commission
            </h3>

            <div className="pl-4 space-y-3 text-gray-700">
              <div>
                <p className="font-medium">Monthly Plan</p>
                <ul className="list-disc list-inside ml-4">
                  <li>New Installation: 40%</li>
                  <li>Monthly Renewal: 20%</li>
                </ul>
              </div>

              <div>
                <p className="font-medium">Yearly Plan</p>
                <ul className="list-disc list-inside ml-4">
                  <li>New Installation: 40% + 10 * 20%</li>
                  <li>Yearly Renewal: 20%</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Sales Manager */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-blue-700">
              Sales Manager Commission (Promotion Based)
            </h3>

            <p className="text-gray-700">
              High-performing Sales Executives will be promoted to Sales
              Managers. Managers can build their own team across India.
            </p>

            <ul className="list-disc list-inside ml-4 text-gray-700 space-y-2">
              <li>Direct Sales: Same commission as Sales Executives</li>
              <li>
                <strong>Team Performance (Override Commission):</strong>
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Monthly Plan: 10% per new sale | 5% per renewal</li>
                  <li>Yearly Plan: 10% per new sale | 5% per renewal</li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        {/* Why Join */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
            Why Join PocketStor?
          </h2>

          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <strong>Exponential Income:</strong> With your skills, sincerity,
              and a dignified work ethic, you can achieve remarkable growth in
              your income within a few months. By simply marketing the PoketStor
              application, it's possible to earn lakhs of rupees per month. For
              instance, if you're an executive who has sold just 4000 monthly
              plans in six months, you'll receive a renewal commission of Rs.
              80,000 per month, not to mention the commission from the sales you
              made during that month. As shops renew every month and your sales
              continue to grow, your commission will keep increasing. With
              annual plans, you'll receive an even larger commission every
              month.
            </li>
            <li>
              <strong>Transparency:</strong> Commissions are credited directly
              to your bank account by the 5th of every month.
            </li>
          </ul>
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

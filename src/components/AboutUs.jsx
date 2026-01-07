import React from "react";
import { 
  Store, 
  MapPin, 
  Shield, 
  Users, 
  TrendingUp, 
  Globe,
  Mail,
  Building,
  Check,
  Star,
  Sparkles,
  Target
} from "lucide-react";

const AboutUs = () => {
  const features = [
    {
      icon: <Store className="w-8 h-8" />,
      title: "Local Shop Discovery",
      description: "Find shops around your location with detailed addresses and photos."
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Real-time Catalog",
      description: "Browse products, view high-quality images, and check prices instantly."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Privacy First",
      description: "Your data stays secure. We never share personal information with third parties."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Direct Interaction",
      description: "Pay shop owners directly for transparent and trusted transactions."
    }
  ];

  const values = [
    "Empowering Local Businesses",
    "Transparent Operations",
    "Customer-Centric Approach",
    "Innovation in Commerce",
    "Community Building"
  ];

  return (
    
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50 text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-20 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">By Nexus Ventures LLC</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to <span className="text-indigo-200">PoketStor</span>
          </h1>
          <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto">
            Your trusted digital bridge to local commerce
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 mb-12 border border-indigo-100">
          <div className="flex items-start gap-4">
            <div className="bg-indigo-100 p-3 rounded-lg">
              <Globe className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong className="text-indigo-600">PoketStor</strong> is an innovative online platform designed to simplify 
                the way you discover and shop from local stores. Our mission is to empower 
                local businesses by giving them a digital identity while providing 
                customers with an easy way to find products in their immediate vicinity.
              </p>
            </div>
          </div>
        </div>

        {/* What We Do */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <div className="w-2 h-8 bg-indigo-600 rounded-full"></div>
            What We Do
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-indigo-50">
              <p className="text-gray-700 mb-4">
                In today's fast-paced world, finding the right product at the 
                right price in your local market can be time-consuming. PoketStor 
                brings the local market to your fingertips.
              </p>
            </div>
            <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100">
              <p className="text-gray-700">
                Whether you are a shop owner looking to expand your reach or a 
                customer searching for the best deals nearby, PoketStor is built 
                specifically for you.
              </p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            <span className="relative">
              Key Features
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-indigo-600 to-transparent"></span>
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-indigo-600">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Business Model */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Our Business Model
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-white to-indigo-50 rounded-2xl p-8 border border-indigo-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <h3 className="text-xl font-bold text-gray-900">
                  For Shoppers
                </h3>
              </div>
              <p className="text-gray-700">
                PoketStor is completely free to use. Explore your neighborhood like never before, 
                discover hidden gems, and support local businesses without any fees.
              </p>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl p-8 border border-indigo-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                <h3 className="text-xl font-bold text-gray-900">
                  For Shop Owners
                </h3>
              </div>
              <p className="text-gray-700">
                We offer a transparent, subscription-based model with no hidden commissions. 
                A simple renewal fee (inclusive of taxes) keeps your digital storefront active and growing.
              </p>
            </div>
          </div>
        </div>

        {/* Values & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <div className="space-y-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">{value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl p-8 text-white">
            <TrendingUp className="w-12 h-12 mb-6 opacity-90" />
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-indigo-100">
              At <strong className="text-white">Nexus Ventures LLC</strong>, we envision a future where 
              every local vendor has access to technology to grow their business, 
              and every customer enjoys the convenience of digital browsing with 
              the trust of local buying.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-indigo-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Get in Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-indigo-100 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Email</h3>
                  <a 
                    href="mailto:support@poketstor.com" 
                    className="text-indigo-600 hover:text-indigo-700 transition-colors"
                  >
                    support@poketstor.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-indigo-100 p-3 rounded-lg">
                  <Building className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Company</h3>
                  <p className="text-gray-700">Nexus Ventures LLC</p>
                </div>
              </div>
            </div>
            <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100">
              <h3 className="font-bold text-gray-900 mb-3">Have Questions?</h3>
              <p className="text-gray-700">
                We'd love to hear from you. Whether you're a shop owner looking to join 
                PoketStor or a customer with feedback, reach out to us!
              </p>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-sm">
            Join us in revolutionizing local commerce. Together, let's build stronger communities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
import React, { useState } from 'react';
import { 
  FaCode, 
  FaPaintBrush, 
  FaLaptopCode, 
  FaStore, 
  FaShoppingCart,
  FaMobileAlt,
  FaRocket,
  FaCheckCircle,
  FaStar,
  FaCrown,
  FaLightbulb,
  FaUsers,
  FaHeart,
  FaArrowRight,
  FaRegPaperPlane
} from "react-icons/fa";
import { FiTarget } from "react-icons/fi";

const ServicesPage = ({ navigateTo }) => {
  const [activeService, setActiveService] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    message: ''
  });

  const services = [
    {
      icon: <FaCode className="text-5xl" />,
      title: "Web Development",
      description: "Custom web applications and websites built with modern technologies.",
      features: ["React/Next.js", "Node.js/Express", "API Development", "Database Design"],
      gradient: "bg-gradient-to-br from-blue-500 to-blue-700",
      popular: true
    },
    {
      icon: <FaPaintBrush className="text-5xl" />,
      title: "Web Designing",
      description: "Beautiful, responsive designs that provide exceptional user experiences.",
      features: ["UI/UX Design", "Figma Prototypes", "Mobile-First", "Brand Identity"],
      gradient: "bg-gradient-to-br from-purple-500 to-pink-600",
      popular: false
    },
    {
      icon: <FaLaptopCode className="text-5xl" />,
      title: "Portfolio Websites",
      description: "Professional portfolio websites to showcase your work and skills.",
      features: ["Custom Design", "Project Galleries", "Contact Forms", "SEO Ready"],
      gradient: "bg-gradient-to-br from-emerald-500 to-teal-600",
      popular: true
    },
    {
      icon: <FaStore className="text-5xl" />,
      title: "Shop Landing Pages",
      description: "High-converting landing pages designed to increase sales and leads.",
      features: ["Conversion Focused", "A/B Testing", "Analytics Setup", "Fast Loading"],
      gradient: "bg-gradient-to-br from-orange-500 to-red-600",
      popular: false
    },
    {
      icon: <FaShoppingCart className="text-5xl" />,
      title: "E-commerce Websites",
      description: "Complete online stores with payment integration and inventory management.",
      features: ["Payment Gateways", "Product Management", "Order Tracking", "Secure Checkout"],
      gradient: "bg-gradient-to-br from-amber-500 to-yellow-600",
      popular: true
    },
    {
      icon: <FaMobileAlt className="text-5xl" />,
      title: "Product Landing Pages",
      description: "Focused landing pages that highlight your product's unique value.",
      features: ["Feature Showcase", "Testimonials", "Pricing Plans", "Lead Capture"],
      gradient: "bg-gradient-to-br from-cyan-500 to-blue-600",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <FaRocket className="text-2xl" />,
      title: "Fast Delivery",
      description: "Quick turnaround without compromising quality"
    },
    {
      icon: <FaStar className="text-2xl" />,
      title: "Premium Quality",
      description: "Top-notch work with attention to detail"
    },
    {
      icon: <FaCrown className="text-2xl" />,
      title: "Expert Team",
      description: "Experienced developers and designers"
    },
    {
      icon: <FaLightbulb className="text-2xl" />,
      title: "Innovative Solutions",
      description: "Creative approaches to complex problems"
    },
    {
      icon: <FaUsers className="text-2xl" />,
      title: "Collaborative Process",
      description: "Work together at every stage"
    },
    {
      icon: <FaHeart className="text-2xl" />,
      title: "Passionate Team",
      description: "We love what we do, and it shows"
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    navigateTo("contact");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Animated Hero Section */}
      <section className="relative pt-32 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <FiTarget className="text-white mr-2" />
              <span className="text-white font-medium">Digital Excellence</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="block">Create Amazing</span>
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Digital Experiences
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              We transform ideas into exceptional websites and applications that drive business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center">
                  Start Your Project
                  <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                </span>
              </button>
              
              <button
                onClick={() => navigateTo("contact")}
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          {/* Service Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeService === index 
                    ? `${service.gradient} text-white shadow-lg transform scale-105`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Active Service Showcase */}
          <div className="mb-20">
            <div className={`rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 ${services[activeService].gradient}`}>
              <div className="p-8 md:p-12">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="flex-1 text-white">
                    <div className="flex items-center gap-3 mb-6">
                      {services[activeService].icon}
                      {services[activeService].popular && (
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium flex items-center">
                          <FaStar className="mr-1" /> Popular
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                      {services[activeService].title}
                    </h3>
                    
                    <p className="text-xl mb-6 text-white/90">
                      {services[activeService].description}
                    </p>
                    
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold mb-3">Key Features:</h4>
                      <div className="flex flex-wrap gap-3">
                        {services[activeService].features.map((feature, idx) => (
                          <span key={idx} className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <button
                      onClick={() => navigateTo("contact")}
                      className="px-8 py-3 bg-white text-gray-900 font-bold rounded-xl hover:shadow-xl transition-all"
                    >
                      Get Started
                    </button>
                  </div>
                  
                  <div className="flex-1">
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                      <p className="text-white/90">
                        {services[activeService].description} We deliver high-quality solutions that exceed expectations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                onMouseEnter={() => setActiveService(index)}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold rounded-full flex items-center">
                      <FaStar className="mr-1" /> POPULAR
                    </span>
                  </div>
                )}
                
                <div className={`h-2 ${service.gradient}`}></div>
                
                <div className="p-6">
                  <div className={`inline-flex p-4 rounded-2xl mb-6 ${service.gradient} bg-opacity-10`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => navigateTo("contact")}
                    className={`w-full py-3 rounded-xl font-bold text-white ${service.gradient} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Why <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Choose Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We don't just build websites, we build success stories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 text-white mb-6 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Contact Form */}
      <section id="contact-form" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Build <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Together</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Share your vision and we'll make it a reality
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white mb-2">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-white mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-white mb-2">Service Needed</label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
                  required
                >
                  <option value="">Select a Service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service.title}>{service.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-white mb-2">Project Details</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="6"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition resize-none"
                  placeholder="Tell us about your project, goals, and timeline..."
                  required
                />
              </div>

              <button
                type="submit"
                className="group w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                <span className="flex items-center justify-center">
                  Send Project Request
                  <FaRegPaperPlane className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </form>

            {/* Right Side - Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30">
                <h3 className="text-2xl font-bold text-white mb-4">What Happens Next?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">1</div>
                    <div>
                      <h4 className="text-white font-semibold">Initial Consultation</h4>
                      <p className="text-gray-300">We'll discuss your project in detail</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">2</div>
                    <div>
                      <h4 className="text-white font-semibold">Proposal & Quote</h4>
                      <p className="text-gray-300">Detailed plan with timeline and pricing</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">3</div>
                    <div>
                      <h4 className="text-white font-semibold">Development Starts</h4>
                      <p className="text-gray-300">Your project comes to life</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4">Quick Connect</h3>
                <button
                  onClick={() => navigateTo("contact")}
                  className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-xl hover:shadow-xl transition"
                >
                  Schedule a Call
                </button>
                <p className="text-gray-400 text-center mt-4">
                  Usually responds within 2 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <div className="inline-block p-8 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Begin Your Digital Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. Your vision, our expertise.
            </p>
            <button
              onClick={() => navigateTo("contact")}
              className="group px-10 py-5 bg-white text-gray-900 font-bold rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center justify-center text-lg">
                Start Project Now
                <FaRocket className="ml-3 group-hover:translate-x-2 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
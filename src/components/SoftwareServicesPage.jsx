// import React, { useState } from "react";
// import {
//   FaCode,
//   FaPaintBrush,
//   FaLaptopCode,
//   FaStore,
//   FaShoppingCart,
//   FaMobileAlt,
//   FaRocket,
//   FaCheckCircle,
//   FaStar,
//   FaCrown,
//   FaLightbulb,
//   FaUsers,
//   FaHeart,
//   FaArrowRight,
//   FaRegPaperPlane,
//   FaPhone,
//   FaEnvelope,
// } from "react-icons/fa";
// import { FiTarget, FiZap } from "react-icons/fi";

// const ServicesPage = ({ navigateTo }) => {
//   const [activeService, setActiveService] = useState(0);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     service: "",
//     budget: "",
//     message: "",
//   });

//   const services = [
//     {
//       icon: <FaCode className="text-5xl" />,
//       title: "Web Development",
//       description:
//         "Custom web applications and websites built with cutting-edge technologies for maximum performance.",
//       features: [
//         "React/Next.js",
//         "Node.js/Express",
//         "API Development",
//         "Database Design",
//       ],
//       gradient: "from-blue-500 via-blue-600 to-indigo-600",
//       glowColor: "shadow-blue-500/50",
//       popular: true,
//       // price: "Starting at $2,999"
//     },
//     {
//       icon: <FaPaintBrush className="text-5xl" />,
//       title: "Web Designing",
//       description:
//         "Beautiful, responsive designs that captivate users and drive engagement.",
//       features: [
//         "UI/UX Design",
//         "Figma Prototypes",
//         "Mobile-First",
//         "Brand Identity",
//       ],
//       gradient: "from-purple-500 via-pink-500 to-rose-600",
//       glowColor: "shadow-purple-500/50",
//       popular: false,
//       // price: "Starting at $1,499"
//     },
//     {
//       icon: <FaLaptopCode className="text-5xl" />,
//       title: "Portfolio Websites",
//       description:
//         "Stunning portfolio websites that showcase your work and attract clients.",
//       features: [
//         "Custom Design",
//         "Project Galleries",
//         "Contact Forms",
//         "SEO Ready",
//       ],
//       gradient: "from-emerald-500 via-teal-500 to-cyan-600",
//       glowColor: "shadow-emerald-500/50",
//       popular: true,
//       // price: "Starting at $999"
//     },
//     {
//       icon: <FaStore className="text-5xl" />,
//       title: "Shop Landing Pages",
//       description:
//         "High-converting landing pages engineered to maximize your sales.",
//       features: [
//         "Conversion Focused",
//         "A/B Testing",
//         "Analytics Setup",
//         "Fast Loading",
//       ],
//       gradient: "from-orange-500 via-amber-500 to-yellow-600",
//       glowColor: "shadow-orange-500/50",
//       popular: false,
//       // price: "Starting at $799"
//     },
//     {
//       icon: <FaShoppingCart className="text-5xl" />,
//       title: "E-commerce Websites",
//       description:
//         "Complete online stores with seamless checkout and inventory management.",
//       features: [
//         "Payment Gateways",
//         "Product Management",
//         "Order Tracking",
//         "Secure Checkout",
//       ],
//       gradient: "from-red-500 via-pink-500 to-fuchsia-600",
//       glowColor: "shadow-red-500/50",
//       popular: true,
//       // price: "Starting at $3,999"
//     },
//     {
//       icon: <FaMobileAlt className="text-5xl" />,
//       title: "Product Landing Pages",
//       description:
//         "Laser-focused landing pages that convert visitors into customers.",
//       features: [
//         "Feature Showcase",
//         "Testimonials",
//         "Pricing Plans",
//         "Lead Capture",
//       ],
//       gradient: "from-cyan-500 via-sky-500 to-blue-600",
//       glowColor: "shadow-cyan-500/50",
//       popular: false,
//       // price: "Starting at $899"
//     },
//   ];

//   const benefits = [
//     {
//       icon: <FaRocket className="text-3xl" />,
//       title: "Lightning Fast",
//       description: "Quick turnaround with zero compromises on quality",
//       gradient: "from-blue-500 to-cyan-500",
//     },
//     {
//       icon: <FaStar className="text-3xl" />,
//       title: "Premium Quality",
//       description: "Award-winning designs with pixel-perfect execution",
//       gradient: "from-yellow-500 to-orange-500",
//     },
//     {
//       icon: <FaCrown className="text-3xl" />,
//       title: "Expert Team",
//       description: "Senior developers with 10+ years of experience",
//       gradient: "from-purple-500 to-pink-500",
//     },
//     {
//       icon: <FaLightbulb className="text-3xl" />,
//       title: "Innovative Solutions",
//       description: "Cutting-edge tech stack for future-proof results",
//       gradient: "from-emerald-500 to-teal-500",
//     },
//     {
//       icon: <FaUsers className="text-3xl" />,
//       title: "Collaborative",
//       description: "Your feedback shapes every step of the journey",
//       gradient: "from-indigo-500 to-blue-500",
//     },
//     {
//       icon: <FaHeart className="text-3xl" />,
//       title: "Passionate",
//       description: "We pour our hearts into every single project",
//       gradient: "from-rose-500 to-red-500",
//     },
//   ];

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     alert("Thank you! We will contact you soon.");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
//       {/* Enhanced Hero Section with Particles */}
//       <section className="relative pt-24 pb-32 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>

//         {/* Animated Background Elements */}
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
//           <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
//         </div>

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <div className="inline-flex items-center mb-8 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/30 shadow-xl">
//               <FiZap className="text-yellow-400 mr-2 text-xl" />
//               <span className="text-white font-semibold text-lg">
//                 Transform Your Digital Presence
//               </span>
//             </div>

//             <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight">
//               <span className="block">Build The</span>
//               <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
//                 Future Today
//               </span>
//             </h1>

//             <p className="text-xl md:text-3xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
//               We craft{" "}
//               <span className="font-bold text-cyan-300">
//                 stunning digital experiences
//               </span>{" "}
//               that captivate audiences and drive exponential growth.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
//               <button
//                 onClick={() =>
//                   document
//                     .getElementById("contact-form")
//                     ?.scrollIntoView({ behavior: "smooth" })
//                 }
//                 className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-bold text-lg rounded-2xl hover:shadow-[0_0_60px_rgba(59,130,246,0.8)] transition-all duration-500 transform hover:scale-105 overflow-hidden min-w-[280px]"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                 <span className="relative flex items-center justify-center">
//                   <FiTarget className="mr-3 text-2xl" />
//                   Start Your Project
//                   <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
//                 </span>
//               </button>

//               <button
//                 onClick={() => navigateTo("contact")}
//                 className="group px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white/50 text-white font-bold text-lg rounded-2xl hover:bg-white hover:text-indigo-900 transition-all duration-300 transform hover:scale-105 min-w-[280px]"
//               >
//                 <span className="flex items-center justify-center">
//                   <FaPhone className="mr-3" />
//                   Schedule a Call
//                 </span>
//               </button>
//             </div>

//             {/* Trust Indicators */}
//             <div className="mt-16 flex flex-wrap justify-center gap-12 text-white/80">
//               <div className="text-center">
//                 <div className="text-4xl font-bold text-cyan-400">50+</div>
//                 <div className="text-sm uppercase tracking-wider">
//                   Projects Delivered
//                 </div>
//               </div>
//               <div className="text-center">
//                 <div className="text-4xl font-bold text-purple-400">98%</div>
//                 <div className="text-sm uppercase tracking-wider">
//                   Client Satisfaction
//                 </div>
//               </div>
//               <div className="text-center">
//                 <div className="text-4xl font-bold text-pink-400">24/7</div>
//                 <div className="text-sm uppercase tracking-wider">
//                   Support Available
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Services Showcase */}
//       <section className="py-24 bg-white relative">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-20">
//             <div className="inline-block mb-6">
//               <span className="px-6 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-transparent bg-clip-text text-sm font-bold uppercase tracking-wider border-2 border-blue-200 rounded-full">
//                 Our Services
//               </span>
//             </div>
//             <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6">
//               What We{" "}
//               <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
//                 Create
//               </span>
//             </h2>
//             <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
//               Comprehensive digital solutions engineered for success
//             </p>
//           </div>

//           <div className="mb-16">
//             <div
//               className={`relative rounded-2xl overflow-hidden shadow-xl hover:shadow-[0_15px_50px_rgba(0,0,0,0.3)] transition-all duration-400 bg-gradient-to-br ${services[activeService].gradient}`}
//             >
//               {/* Animated Background Pattern */}
//               <div className="absolute inset-0 opacity-5">
//                 <div
//                   className="absolute inset-0"
//                   style={{
//                     backgroundImage:
//                       "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
//                     backgroundSize: "30px 30px",
//                   }}
//                 ></div>
//               </div>

//               {/* Animated gradient border */}
//               <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-2xl blur opacity-30 animate-pulse"></div>

//               <div className="relative p-8 md:p-12">
//                 <div className="flex flex-col lg:flex-row items-start gap-8">
//                   {/* Left Content */}
//                   <div className="flex-1 text-white">
//                     {/* Header with icon and badge */}
//                     <div className="flex items-start justify-between mb-6">
//                       <div className="flex items-center gap-4">
//                         <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl shadow-lg transform hover:scale-105 transition-transform">
//                           {services[activeService].icon}
//                         </div>
//                         <div>
//                           {services[activeService].popular && (
//                             <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 rounded-full text-xs font-bold shadow-md mb-2">
//                               <FaStar className="mr-1 text-xs" /> POPULAR
//                             </span>
//                           )}
//                           <div className="text-3xl md:text-4xl font-black leading-tight">
//                             {services[activeService].title}
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Description */}
//                     <p className="text-lg md:text-xl mb-6 text-white/90 leading-relaxed">
//                       {services[activeService].description}
//                     </p>

//                     {/* Key Features - Compact Grid */}
//                     <div className="mb-6">
//                       <div className="flex items-center mb-3">
//                         <FiZap className="mr-2 text-cyan-300" />
//                         <h4 className="text-lg font-bold">Key Features:</h4>
//                       </div>
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
//                         {services[activeService].features.map(
//                           (feature, idx) => (
//                             <div
//                               key={idx}
//                               className="group flex items-center px-4 py-2.5 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors"
//                             >
//                               <FaCheckCircle className="mr-3 flex-shrink-0 text-cyan-300 group-hover:scale-110 transition-transform" />
//                               <span className="text-sm font-medium">
//                                 {feature}
//                               </span>
//                             </div>
//                           )
//                         )}
//                       </div>
//                     </div>

//                     {/* Price and CTA */}
//                     <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//                       <div className="flex items-baseline gap-2">
//                         <div className="text-2xl font-black">
//                           {services[activeService].price}
//                         </div>
//                         <div className="text-sm text-white/70">Starting at</div>
//                       </div>

//                       <button
//                         onClick={() =>
//                           document
//                             .getElementById("contact-form")
//                             ?.scrollIntoView({ behavior: "smooth" })
//                         }
//                         className="group relative px-8 py-3.5 bg-white text-gray-900 font-bold text-base rounded-xl hover:shadow-xl transition-all transform hover:scale-[1.02] active:scale-95"
//                       >
//                         {/* Button glow */}
//                         <div className="absolute -inset-1 bg-white/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                         <span className="relative flex items-center justify-center">
//                           Get Started
//                           <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//                         </span>
//                       </button>
//                     </div>
//                   </div>

//                   {/* Right Sidebar - Perfect For */}
//                   <div className="lg:w-80 flex-shrink-0">
//                     <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 shadow-xl">
//                       <div className="flex items-center gap-2 mb-4">
//                         <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
//                         <h4 className="text-xl font-bold text-white">
//                           Perfect For
//                         </h4>
//                       </div>

//                       <ul className="space-y-2.5">
//                         {services[activeService].perfectFor?.map(
//                           (item, idx) => (
//                             <li
//                               key={idx}
//                               className="group flex items-start p-3 rounded-lg hover:bg-white/5 transition-colors"
//                             >
//                               <div className="relative">
//                                 <FaCheckCircle className="mr-3 mt-0.5 flex-shrink-0 text-cyan-300 group-hover:scale-110 transition-transform" />
//                               </div>
//                               <span className="text-sm text-white/90">
//                                 {item}
//                               </span>
//                             </li>
//                           )
//                         ) ||
//                           [
//                             "Growing businesses looking to scale",
//                             "Startups launching their MVP",
//                             "Enterprises seeking innovation",
//                           ].map((item, idx) => (
//                             <li
//                               key={idx}
//                               className="group flex items-start p-3 rounded-lg hover:bg-white/5 transition-colors"
//                             >
//                               <FaCheckCircle className="mr-3 mt-0.5 flex-shrink-0 text-cyan-300 group-hover:scale-110 transition-transform" />
//                               <span className="text-sm text-white/90">
//                                 {item}
//                               </span>
//                             </li>
//                           ))}
//                       </ul>

//                       {/* Stats/Additional Info */}
//                       <div className="mt-6 pt-4 border-t border-white/10">
//                         <div className="grid grid-cols-2 gap-3">
//                           <div className="text-center p-2 bg-white/5 rounded-lg">
//                             <div className="text-lg font-bold text-white">
//                               24/7
//                             </div>
//                             <div className="text-xs text-white/70">Support</div>
//                           </div>
//                           <div className="text-center p-2 bg-white/5 rounded-lg">
//                             <div className="text-lg font-bold text-white">
//                               30+
//                             </div>
//                             <div className="text-xs text-white/70">
//                               Days Warranty
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Corner accents */}
//               <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/30 rounded-tr-2xl"></div>
//               <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/30 rounded-bl-2xl"></div>
//             </div>
//           </div>

//           {/* Service Navigation Pills */}
//           <div className="flex flex-wrap justify-center gap-4 mb-16">
//             {services.map((service, index) => (
//               <button
//                 key={index}
//                 onClick={() => setActiveService(index)}
//                 className={`group relative px-8 py-4 rounded-2xl font-bold text-base transition-all duration-300 transform hover:scale-105 ${
//                   activeService === index
//                     ? `bg-gradient-to-r ${service.gradient} text-white shadow-xl ${service.glowColor}`
//                     : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                 }`}
//               >
//                 {activeService === index && (
//                   <div
//                     className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-2xl blur-lg opacity-50 animate-pulse`}
//                   ></div>
//                 )}
//                 <span className="relative">{service.title}</span>
//               </button>
//             ))}
//           </div>

//           {/* All Services Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 onClick={() => setActiveService(index)}
//                 className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-gray-100 hover:border-transparent cursor-pointer transform hover:-translate-y-2"
//               >
//                 {service.popular && (
//                   <div className="absolute top-6 right-6 z-10">
//                     <span className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-black rounded-full flex items-center shadow-lg">
//                       <FaStar className="mr-2" /> HOT
//                     </span>
//                   </div>
//                 )}

//                 <div
//                   className={`h-3 bg-gradient-to-r ${service.gradient}`}
//                 ></div>

//                 <div className="p-8">
//                   <div
//                     className={`inline-flex p-5 rounded-2xl mb-6 bg-gradient-to-br ${service.gradient} shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
//                   >
//                     <div className="text-white">{service.icon}</div>
//                   </div>

//                   <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                     {service.title}
//                   </h3>

//                   <p className="text-gray-600 mb-6 leading-relaxed">
//                     {service.description}
//                   </p>

//                   <div className="space-y-3 mb-6">
//                     {service.features.map((feature, idx) => (
//                       <div key={idx} className="flex items-center text-sm">
//                         <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0 text-base" />
//                         <span className="text-gray-700 font-medium">
//                           {feature}
//                         </span>
//                       </div>
//                     ))}
//                   </div>

//                   <div className="text-2xl font-black text-gray-900 mb-6">
//                     {service.price}
//                   </div>

//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       document
//                         .getElementById("contact-form")
//                         ?.scrollIntoView({ behavior: "smooth" });
//                     }}
//                     className={`w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r ${service.gradient} hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
//                   >
//                     Get Quote
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Why Choose Us */}
//       <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
//         {/* Background Decoration */}
//         <div className="absolute top-0 left-0 w-full h-full opacity-10">
//           <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
//         </div>

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-20">
//             <div className="inline-block mb-6">
//               <span className="px-6 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-transparent bg-clip-text text-sm font-bold uppercase tracking-wider border-2 border-purple-200 rounded-full">
//                 Why Choose Us
//               </span>
//             </div>
//             <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6">
//               We're{" "}
//               <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
//                 Different
//               </span>
//             </h2>
//             <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
//               Not just another agency – we're your growth partners
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {benefits.map((benefit, index) => (
//               <div
//                 key={index}
//                 className="group relative bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-gray-100 hover:border-transparent overflow-hidden"
//               >
//                 {/* Gradient Background on Hover */}
//                 <div
//                   className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
//                 ></div>

//                 <div className="relative">
//                   <div
//                     className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${benefit.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
//                   >
//                     {benefit.icon}
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                     {benefit.title}
//                   </h3>
//                   <p className="text-gray-600 text-lg leading-relaxed">
//                     {benefit.description}
//                   </p>
//                 </div>

//                 {/* Decorative Element */}
//                 <div
//                   className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br ${benefit.gradient} opacity-5 rounded-tl-full group-hover:opacity-10 transition-opacity`}
//                 ></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Contact Form */}
//       <section
//         id="contact-form"
//         className="py-24 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 relative overflow-hidden"
//       >
//         {/* Animated Background */}
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
//         </div>

//         <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <div className="inline-block mb-6">
//               <span className="px-6 py-2 bg-white/10 backdrop-blur-md text-white text-sm font-bold uppercase tracking-wider border-2 border-white/30 rounded-full">
//                 Get Started
//               </span>
//             </div>
//             <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
//               Let's Build{" "}
//               <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
//                 Together
//               </span>
//             </h2>
//             <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
//               Share your vision and we'll transform it into reality
//             </p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
//             {/* Form - Takes 3 columns */}
//             <form
//               onSubmit={handleSubmit}
//               className="lg:col-span-3 space-y-6 bg-white/5 backdrop-blur-lg p-8 md:p-10 rounded-3xl border-2 border-white/10"
//             >
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-white font-semibold mb-3 text-lg">
//                     Your Name
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border-2 border-white/20 text-white rounded-2xl focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20 transition placeholder-gray-400 text-lg"
//                     placeholder="John Doe"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-white font-semibold mb-3 text-lg">
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border-2 border-white/20 text-white rounded-2xl focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20 transition placeholder-gray-400 text-lg"
//                     placeholder="john@example.com"
//                     required
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-white font-semibold mb-3 text-lg">
//                   Service Needed
//                 </label>
//                 <select
//                   name="service"
//                   value={formData.service}
//                   onChange={handleInputChange}
//                   className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border-2 border-white/20 text-white rounded-2xl focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20 transition text-lg"
//                   required
//                 >
//                   <option value="" className="bg-gray-900">
//                     Select a Service
//                   </option>
//                   {services.map((service, index) => (
//                     <option
//                       key={index}
//                       value={service.title}
//                       className="bg-gray-900"
//                     >
//                       {service.title}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-white font-semibold mb-3 text-lg">
//                   Project Details
//                 </label>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   rows="6"
//                   className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border-2 border-white/20 text-white rounded-2xl focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20 transition resize-none placeholder-gray-400 text-lg"
//                   placeholder="Tell us about your project, goals, and timeline..."
//                   required
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="group w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-black py-5 rounded-2xl hover:shadow-[0_0_60px_rgba(59,130,246,0.8)] transition-all duration-500 transform hover:scale-105 text-lg"
//               >
//                 <span className="flex items-center justify-center">
//                   <FaRegPaperPlane className="mr-3 text-xl" />
//                   Send Project Request
//                   <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
//                 </span>
//               </button>
//             </form>

//             {/* Info Sidebar - Takes 2 columns */}
//             <div className="lg:col-span-2 space-y-6">
//               <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-lg p-8 rounded-3xl border-2 border-cyan-400/30 shadow-xl">
//                 <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
//                   <FiZap className="mr-3 text-yellow-400" />
//                   What Happens Next?
//                 </h3>
//                 <div className="space-y-6">
//                   <div className="flex items-start">
//                     <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center text-white font-black text-xl mr-4 flex-shrink-0 shadow-lg">
//                       1
//                     </div>
//                     <div>
//                       <h4 className="text-white font-bold text-lg mb-1">
//                         Initial Consultation
//                       </h4>
//                       <p className="text-gray-300">
//                         We'll discuss your vision in detail
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex items-start">
//                     <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white font-black text-xl mr-4 flex-shrink-0 shadow-lg">
//                       2
//                     </div>
//                     <div>
//                       <h4 className="text-white font-bold text-lg mb-1">
//                         Custom Proposal
//                       </h4>
//                       <p className="text-gray-300">
//                         Detailed plan with timeline & pricing
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex items-start">
//                     <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl flex items-center justify-center text-white font-black text-xl mr-4 flex-shrink-0 shadow-lg">
//                       3
//                     </div>
//                     <div>
//                       <h4 className="text-white font-bold text-lg mb-1">
//                         Bring It To Life
//                       </h4>
//                       <p className="text-gray-300">
//                         Watch your project come alive
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border-2 border-white/10 shadow-xl">
//                 <h3 className="text-2xl font-bold text-white mb-6">
//                   Quick Connect
//                 </h3>
//                 <div className="space-y-4">
//                   <button
//                     onClick={() => navigateTo("contact")}
//                     className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-2xl hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center text-lg"
//                   >
//                     <FaPhone className="mr-3" />
//                     Schedule a Call
//                   </button>
//                   <button
//                     onClick={() =>
//                       (window.location.href = "mailto:info@example.com")
//                     }
//                     className="w-full py-4 bg-white/10 border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/20 transition-all flex items-center justify-center text-lg"
//                   >
//                     <FaEnvelope className="mr-3" />
//                     Send Email
//                   </button>
//                 </div>
//                 <p className="text-gray-400 text-center mt-6 text-sm">
//                   ⚡ Usually responds within 2 hours
//                 </p>
//               </div>

//               <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg p-8 rounded-3xl border-2 border-yellow-400/30">
//                 <div className="flex items-center mb-4">
//                   <FaStar className="text-yellow-400 text-2xl mr-2" />
//                   <FaStar className="text-yellow-400 text-2xl mr-2" />
//                   <FaStar className="text-yellow-400 text-2xl mr-2" />
//                   <FaStar className="text-yellow-400 text-2xl mr-2" />
//                   <FaStar className="text-yellow-400 text-2xl" />
//                 </div>
//                 <p className="text-white text-lg italic mb-3">
//                   "Amazing work! They delivered beyond expectations and the
//                   support was incredible."
//                 </p>
//                 <p className="text-gray-300 font-semibold">
//                   - Sarah Johnson, CEO
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Final CTA */}
//       <section className="py-32 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>

//         {/* Animated Background Elements */}
//         <div className="absolute inset-0 opacity-30">
//           <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
//             <div
//               className="w-full h-full"
//               style={{
//                 backgroundImage:
//                   "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
//                 backgroundSize: "50px 50px",
//               }}
//             ></div>
//           </div>
//         </div>

//         <div className="relative max-w-6xl mx-auto px-4 text-center">
//           <div className="bg-white/5 backdrop-blur-xl p-12 md:p-16 rounded-3xl border-2 border-white/20 shadow-2xl">
//             <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full mb-8 shadow-xl">
//               <FaRocket className="text-white text-3xl" />
//             </div>

//             <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
//               Ready to Build Something
//               <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mt-2">
//                 Extraordinary?
//               </span>
//             </h2>

//             <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
//               Let's transform your vision into a digital masterpiece that drives
//               real results.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
//               <button
//                 onClick={() =>
//                   document
//                     .getElementById("contact-form")
//                     ?.scrollIntoView({ behavior: "smooth" })
//                 }
//                 className="group px-12 py-6 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-black rounded-2xl hover:shadow-[0_0_60px_rgba(59,130,246,0.8)] transition-all duration-500 transform hover:scale-105 text-xl min-w-[300px]"
//               >
//                 <span className="flex items-center justify-center">
//                   <FiTarget className="mr-3 text-2xl" />
//                   Start Your Project
//                   <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
//                 </span>
//               </button>

//               <button
//                 onClick={() => navigateTo("contact")}
//                 className="group px-12 py-6 bg-white text-indigo-900 font-black rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-xl min-w-[300px]"
//               >
//                 <span className="flex items-center justify-center">
//                   <FaPhone className="mr-3" />
//                   Talk to Expert
//                 </span>
//               </button>
//             </div>

//             <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80">
//               <div className="flex items-center">
//                 <FaCheckCircle className="text-green-400 mr-2 text-xl" />
//                 <span className="text-lg">Free Consultation</span>
//               </div>
//               <div className="flex items-center">
//                 <FaCheckCircle className="text-green-400 mr-2 text-xl" />
//                 <span className="text-lg">No Hidden Fees</span>
//               </div>
//               <div className="flex items-center">
//                 <FaCheckCircle className="text-green-400 mr-2 text-xl" />
//                 <span className="text-lg">Money-Back Guarantee</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <style jsx>{`
//         @keyframes gradient {
//           0% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//           100% {
//             background-position: 0% 50%;
//           }
//         }
//         .animate-gradient {
//           background-size: 200% 200%;
//           animation: gradient 3s ease infinite;
//         }
//         .animation-delay-1000 {
//           animation-delay: 1s;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ServicesPage;






import React, { useState } from "react";
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
  FaRegPaperPlane,
  FaPhone,
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaEye,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { FiTarget, FiZap } from "react-icons/fi";

const ServicesPage = ({ navigateTo }) => {
  const [activeService, setActiveService] = useState(0);
  const [activeProject, setActiveProject] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });

  const services = [
    {
      icon: <FaCode className="text-5xl" />,
      title: "Web Development",
      description:
        "Custom web applications and websites built with cutting-edge technologies for maximum performance.",
      features: [
        "React/Next.js",
        "Node.js/Express",
        "API Development",
        "Database Design",
      ],
      gradient: "from-blue-500 via-blue-600 to-indigo-600",
      glowColor: "shadow-blue-500/50",
      popular: true,
    },
    {
      icon: <FaPaintBrush className="text-5xl" />,
      title: "Web Designing",
      description:
        "Beautiful, responsive designs that captivate users and drive engagement.",
      features: [
        "UI/UX Design",
        "Figma Prototypes",
        "Mobile-First",
        "Brand Identity",
      ],
      gradient: "from-purple-500 via-pink-500 to-rose-600",
      glowColor: "shadow-purple-500/50",
      popular: false,
    },
    {
      icon: <FaLaptopCode className="text-5xl" />,
      title: "Portfolio Websites",
      description:
        "Stunning portfolio websites that showcase your work and attract clients.",
      features: [
        "Custom Design",
        "Project Galleries",
        "Contact Forms",
        "SEO Ready",
      ],
      gradient: "from-emerald-500 via-teal-500 to-cyan-600",
      glowColor: "shadow-emerald-500/50",
      popular: true,
    },
    {
      icon: <FaStore className="text-5xl" />,
      title: "Shop Landing Pages",
      description:
        "High-converting landing pages engineered to maximize your sales.",
      features: [
        "Conversion Focused",
        "A/B Testing",
        "Analytics Setup",
        "Fast Loading",
      ],
      gradient: "from-orange-500 via-amber-500 to-yellow-600",
      glowColor: "shadow-orange-500/50",
      popular: false,
    },
    {
      icon: <FaShoppingCart className="text-5xl" />,
      title: "E-commerce Websites",
      description:
        "Complete online stores with seamless checkout and inventory management.",
      features: [
        "Payment Gateways",
        "Product Management",
        "Order Tracking",
        "Secure Checkout",
      ],
      gradient: "from-red-500 via-pink-500 to-fuchsia-600",
      glowColor: "shadow-red-500/50",
      popular: true,
    },
    {
      icon: <FaMobileAlt className="text-5xl" />,
      title: "Product Landing Pages",
      description:
        "Laser-focused landing pages that convert visitors into customers.",
      features: [
        "Feature Showcase",
        "Testimonials",
        "Pricing Plans",
        "Lead Capture",
      ],
      gradient: "from-cyan-500 via-sky-500 to-blue-600",
      glowColor: "shadow-cyan-500/50",
      popular: false,
    },
  ];

  const benefits = [
    {
      icon: <FaRocket className="text-3xl" />,
      title: "Lightning Fast",
      description: "Quick turnaround with zero compromises on quality",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FaStar className="text-3xl" />,
      title: "Premium Quality",
      description: "Award-winning designs with pixel-perfect execution",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: <FaCrown className="text-3xl" />,
      title: "Expert Team",
      description: "Senior developers with 10+ years of experience",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <FaLightbulb className="text-3xl" />,
      title: "Innovative Solutions",
      description: "Cutting-edge tech stack for future-proof results",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Collaborative",
      description: "Your feedback shapes every step of the journey",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      icon: <FaHeart className="text-3xl" />,
      title: "Passionate",
      description: "We pour our hearts into every single project",
      gradient: "from-rose-500 to-red-500",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "New Dine POS System",
      description: "Complete restaurant management system with POS, inventory, and analytics",
      category: "Web Application",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Express", "JWT"],
      features: [
        "Real-time order management",
        "Table reservations & management",
        "Inventory tracking with alerts",
        "Multi-location support",
        "Employee management",
        "Analytics dashboard"
      ],
      image: "pos2.png",
      gradient: "from-green-500 via-emerald-500 to-teal-600",
      link: "#",
      github: "#",
      client: "Restaurant Chain",
      status: "Live"
    },
    {
      id: 2,
      title: "Pocket Store - Local Shopping",
      description: "Hyperlocal e-commerce platform connecting local stores with customers",
      category: "Mobile App",
      technologies: ["React Native", "Firebase", "Stripe", "Google Maps API", "Redux", "Node.js"],
      features: [
        "Local store discovery",
        "Real-time order tracking",
        "Digital payments integration",
        "Store management dashboard",
        "Customer reviews & ratings",
        "Push notifications"
      ],
      image: "pok.png",
      gradient: "from-blue-500 via-indigo-500 to-purple-600",
      link: "#",
      github: "#",
      client: "Local Retail Network",
      status: "Live"
    }
  ];

  const nextProject = () => {
    setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We will contact you soon.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Enhanced Hero Section with Particles */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center mb-8 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/30 shadow-xl">
              <FiZap className="text-yellow-400 mr-2 text-xl" />
              <span className="text-white font-semibold text-lg">
                Transform Your Digital Presence
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight">
              <span className="block">Build The</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                Future Today
              </span>
            </h1>

            <p className="text-xl md:text-3xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              We craft{" "}
              <span className="font-bold text-cyan-300">
                stunning digital experiences
              </span>{" "}
              that captivate audiences and drive exponential growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() =>
                  document
                    .getElementById("contact-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-bold text-lg rounded-2xl hover:shadow-[0_0_60px_rgba(59,130,246,0.8)] transition-all duration-500 transform hover:scale-105 overflow-hidden min-w-[280px]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative flex items-center justify-center">
                  <FiTarget className="mr-3 text-2xl" />
                  Start Your Project
                  <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </button>

              <button
                onClick={() => navigateTo("contact")}
                className="group px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white/50 text-white font-bold text-lg rounded-2xl hover:bg-white hover:text-indigo-900 transition-all duration-300 transform hover:scale-105 min-w-[280px]"
              >
                <span className="flex items-center justify-center">
                  <FaPhone className="mr-3" />
                  Schedule a Call
                </span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 flex flex-wrap justify-center gap-12 text-white/80">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400">50+</div>
                <div className="text-sm uppercase tracking-wider">
                  Projects Delivered
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400">98%</div>
                <div className="text-sm uppercase tracking-wider">
                  Client Satisfaction
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-400">24/7</div>
                <div className="text-sm uppercase tracking-wider">
                  Support Available
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Showcase */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="px-6 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-transparent bg-clip-text text-sm font-bold uppercase tracking-wider border-2 border-blue-200 rounded-full">
                Our Services
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6">
              What We{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Create
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions engineered for success
            </p>
          </div>

          <div className="mb-16">
            <div
              className={`relative rounded-2xl overflow-hidden shadow-xl hover:shadow-[0_15px_50px_rgba(0,0,0,0.3)] transition-all duration-400 bg-gradient-to-br ${services[activeService].gradient}`}
            >
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                    backgroundSize: "30px 30px",
                  }}
                ></div>
              </div>

              {/* Animated gradient border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-2xl blur opacity-30 animate-pulse"></div>

              <div className="relative p-8 md:p-12">
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  {/* Left Content */}
                  <div className="flex-1 text-white">
                    {/* Header with icon and badge */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl shadow-lg transform hover:scale-105 transition-transform">
                          {services[activeService].icon}
                        </div>
                        <div>
                          {services[activeService].popular && (
                            <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 rounded-full text-xs font-bold shadow-md mb-2">
                              <FaStar className="mr-1 text-xs" /> POPULAR
                            </span>
                          )}
                          <div className="text-3xl md:text-4xl font-black leading-tight">
                            {services[activeService].title}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-lg md:text-xl mb-6 text-white/90 leading-relaxed">
                      {services[activeService].description}
                    </p>

                    {/* Key Features - Compact Grid */}
                    <div className="mb-6">
                      <div className="flex items-center mb-3">
                        <FiZap className="mr-2 text-cyan-300" />
                        <h4 className="text-lg font-bold">Key Features:</h4>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {services[activeService].features.map(
                          (feature, idx) => (
                            <div
                              key={idx}
                              className="group flex items-center px-4 py-2.5 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors"
                            >
                              <FaCheckCircle className="mr-3 flex-shrink-0 text-cyan-300 group-hover:scale-110 transition-transform" />
                              <span className="text-sm font-medium">
                                {feature}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    {/* Price and CTA */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex items-baseline gap-2">
                        <div className="text-2xl font-black">
                          {services[activeService].price}
                        </div>
                        <div className="text-sm text-white/70">Starting at</div>
                      </div>

                      <button
                        onClick={() =>
                          document
                            .getElementById("contact-form")
                            ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="group relative px-8 py-3.5 bg-white text-gray-900 font-bold text-base rounded-xl hover:shadow-xl transition-all transform hover:scale-[1.02] active:scale-95"
                      >
                        {/* Button glow */}
                        <div className="absolute -inset-1 bg-white/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <span className="relative flex items-center justify-center">
                          Get Started
                          <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Right Sidebar - Perfect For */}
                  <div className="lg:w-80 flex-shrink-0">
                    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 shadow-xl">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        <h4 className="text-xl font-bold text-white">
                          Perfect For
                        </h4>
                      </div>

                      <ul className="space-y-2.5">
                        {[
                          "Growing businesses looking to scale",
                          "Startups launching their MVP",
                          "Enterprises seeking innovation",
                        ].map((item, idx) => (
                          <li
                            key={idx}
                            className="group flex items-start p-3 rounded-lg hover:bg-white/5 transition-colors"
                          >
                            <FaCheckCircle className="mr-3 mt-0.5 flex-shrink-0 text-cyan-300 group-hover:scale-110 transition-transform" />
                            <span className="text-sm text-white/90">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Stats/Additional Info */}
                      <div className="mt-6 pt-4 border-t border-white/10">
                        <div className="grid grid-cols-2 gap-3">
                          <div className="text-center p-2 bg-white/5 rounded-lg">
                            <div className="text-lg font-bold text-white">
                              24/7
                            </div>
                            <div className="text-xs text-white/70">Support</div>
                          </div>
                          <div className="text-center p-2 bg-white/5 rounded-lg">
                            <div className="text-lg font-bold text-white">
                              30+
                            </div>
                            <div className="text-xs text-white/70">
                              Days Warranty
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Corner accents */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/30 rounded-tr-2xl"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/30 rounded-bl-2xl"></div>
            </div>
          </div>

          {/* Service Navigation Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={`group relative px-8 py-4 rounded-2xl font-bold text-base transition-all duration-300 transform hover:scale-105 ${
                  activeService === index
                    ? `bg-gradient-to-r ${service.gradient} text-white shadow-xl ${service.glowColor}`
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {activeService === index && (
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-2xl blur-lg opacity-50 animate-pulse`}
                  ></div>
                )}
                <span className="relative">{service.title}</span>
              </button>
            ))}
          </div>

          {/* All Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => setActiveService(index)}
                className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-gray-100 hover:border-transparent cursor-pointer transform hover:-translate-y-2"
              >
                {service.popular && (
                  <div className="absolute top-6 right-6 z-10">
                    <span className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-black rounded-full flex items-center shadow-lg">
                      <FaStar className="mr-2" /> HOT
                    </span>
                  </div>
                )}

                <div
                  className={`h-3 bg-gradient-to-r ${service.gradient}`}
                ></div>

                <div className="p-8">
                  <div
                    className={`inline-flex p-5 rounded-2xl mb-6 bg-gradient-to-br ${service.gradient} shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="text-white">{service.icon}</div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0 text-base" />
                        <span className="text-gray-700 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="text-2xl font-black text-gray-900 mb-6">
                    {service.price}
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      document
                        .getElementById("contact-form")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r ${service.gradient} hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="text-center mb-12">
    {/* Compact Badge */}
    <div className="inline-block mb-5">
      <span className="px-5 py-2 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 backdrop-blur-sm text-cyan-600 text-xs font-black uppercase tracking-widest rounded-full border border-cyan-300/30">
        Our Projects
      </span>
    </div>

    {/* Compact but Impactful Title */}
    <div className="relative mb-6">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-3">
        Projects
        <span className="block mt-2">
          <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            That Inspire
          </span>
        </span>
      </h2>
      
      {/* Subtle decorative dots */}
      <div className="flex justify-center space-x-2 mt-4">
        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
      </div>
    </div>

    {/* Compact Subtitle */}
    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
      Real solutions delivering{" "}
      <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-semibold">
        exceptional results
      </span>
    </p>
  </div>

  {/* Compact Project Carousel */}
  <div className="mb-12">
    <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-700/50">
      {/* Compact Navigation Arrows */}
      <button
        onClick={prevProject}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all group shadow-lg"
      >
        <FaChevronLeft className="text-lg group-hover:-translate-x-0.5 transition-transform" />
      </button>
      
      <button
        onClick={nextProject}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all group shadow-lg"
      >
        <FaChevronRight className="text-lg group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Compact Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveProject(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              activeProject === index 
                ? 'bg-white scale-125' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Compact Screenshot Section */}
        <div className="relative h-[350px] lg:h-[538px] overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${projects[activeProject].gradient} opacity-10`}></div>
          
          {/* Mock Device */}
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div className="relative w-full max-w-xs mx-auto">
              {/* Device Frame */}
              <div className="relative bg-gray-900 rounded-3xl p-2 shadow-xl border-8 border-gray-800">
                {/* Device Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-gray-900 rounded-b-lg z-10"></div>
                
                {/* Screen */}
                <div className="relative bg-white rounded-2xl overflow-hidden h-[280px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center p-6">
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-800 mb-2">
                        {projects[activeProject].title}
                      </div>
                      <div className="text-sm text-gray-600 mb-4">
                        {projects[activeProject].category}
                      </div>
                      {/* Screenshot Placeholder */}
                      <div className={`bg-gradient-to-br ${projects[activeProject].gradient} bg-opacity-10 rounded-lg p-4 border border-white/50`}>
                        <div className="text-gray-700 font-medium">Project Preview</div>
                        <div className="text-xs text-gray-500 mt-1">
                          {projects[activeProject].image}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compact Project Details */}
        <div className="p-8 lg:p-10 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          {/* Status Badge */}
          <div className="inline-flex items-center mb-5 px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30 rounded-full">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            <span className="text-xs font-bold text-green-300">
              {projects[activeProject].status}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            {projects[activeProject].title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-300 mb-5 text-sm leading-relaxed">
            {projects[activeProject].description}
          </p>

          {/* Project Info */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-white/5 rounded-lg p-3">
              <div className="text-xs text-gray-400 mb-1">Client</div>
              <div className="text-sm font-semibold">{projects[activeProject].client}</div>
            </div>
            <div className="bg-white/5 rounded-lg p-3">
              <div className="text-xs text-gray-400 mb-1">Category</div>
              <div className="text-sm font-semibold">{projects[activeProject].category}</div>
            </div>
          </div>

          {/* Technologies - Compact */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold mb-2 flex items-center text-gray-300">
              <FiZap className="mr-2 text-cyan-300 text-xs" />
              Technologies
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {projects[activeProject].technologies.slice(0, 4).map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features - Compact */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold mb-2 text-gray-300">Key Features</h4>
            <div className="space-y-1.5">
              {projects[activeProject].features.slice(0, 3).map((feature, idx) => (
                <div key={idx} className="flex items-center text-sm">
                  <FaCheckCircle className="text-green-400 mr-2 flex-shrink-0 text-xs" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons - Compact */}
          <div className="flex flex-wrap gap-2">
            <button className="flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-sm font-semibold hover:shadow-md transition-all">
              <FaEye className="mr-2 text-xs" />
              Live Preview
            </button>
            
            <button className="flex items-center px-4 py-2 bg-gray-800 rounded-lg text-sm font-semibold hover:bg-gray-700 transition-all">
              <FaGithub className="mr-2 text-xs" />
              View Code
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Compact More Projects CTA */}
  {/* <div className="text-center">
    <button
      onClick={() => navigateTo("portfolio")}
      className="inline-flex items-center px-6 py-3 bg-gray-900 text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-all"
    >
      <FaEye className="mr-2" />
      View All Projects
      <FaArrowRight className="ml-2 text-xs" />
    </button>
  </div> */}
</div>
      </section>

      {/* Enhanced Why Choose Us */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="px-6 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-transparent bg-clip-text text-sm font-bold uppercase tracking-wider border-2 border-purple-200 rounded-full">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6">
              We're{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
                Different
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Not just another agency – we're your growth partners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-gray-100 hover:border-transparent overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                <div className="relative">
                  <div
                    className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${benefit.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Decorative Element */}
                <div
                  className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br ${benefit.gradient} opacity-5 rounded-tl-full group-hover:opacity-10 transition-opacity`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Form */}
      <section
        id="contact-form"
        className="py-24 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 relative overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="px-6 py-2 bg-white/10 backdrop-blur-md text-white text-sm font-bold uppercase tracking-wider border-2 border-white/30 rounded-full">
                Get Started
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
              Let's Build{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Together
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Share your vision and we'll transform it into reality
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Form - Takes 3 columns */}
            <form
              onSubmit={handleSubmit}
              className="lg:col-span-3 space-y-6 bg-white/5 backdrop-blur-lg p-8 md:p-10 rounded-3xl border-2 border-white/10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-3 text-lg">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border-2 border-white/20 text-white rounded-2xl focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20 transition placeholder-gray-400 text-lg"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-3 text-lg">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border-2 border-white/20 text-white rounded-2xl focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20 transition placeholder-gray-400 text-lg"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-3 text-lg">
                  Service Needed
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border-2 border-white/20 text-white rounded-2xl focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20 transition text-lg"
                  required
                >
                  <option value="" className="bg-gray-900">
                    Select a Service
                  </option>
                  {services.map((service, index) => (
                    <option
                      key={index}
                      value={service.title}
                      className="bg-gray-900"
                    >
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-white font-semibold mb-3 text-lg">
                  Project Details
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="6"
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border-2 border-white/20 text-white rounded-2xl focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20 transition resize-none placeholder-gray-400 text-lg"
                  placeholder="Tell us about your project, goals, and timeline..."
                  required
                />
              </div>

              <button
                type="submit"
                className="group w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-black py-5 rounded-2xl hover:shadow-[0_0_60px_rgba(59,130,246,0.8)] transition-all duration-500 transform hover:scale-105 text-lg"
              >
                <span className="flex items-center justify-center">
                  <FaRegPaperPlane className="mr-3 text-xl" />
                  Send Project Request
                  <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                </span>
              </button>
            </form>

            {/* Info Sidebar - Takes 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-lg p-8 rounded-3xl border-2 border-cyan-400/30 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <FiZap className="mr-3 text-yellow-400" />
                  What Happens Next?
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center text-white font-black text-xl mr-4 flex-shrink-0 shadow-lg">
                      1
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">
                        Initial Consultation
                      </h4>
                      <p className="text-gray-300">
                        We'll discuss your vision in detail
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white font-black text-xl mr-4 flex-shrink-0 shadow-lg">
                      2
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">
                        Custom Proposal
                      </h4>
                      <p className="text-gray-300">
                        Detailed plan with timeline & pricing
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl flex items-center justify-center text-white font-black text-xl mr-4 flex-shrink-0 shadow-lg">
                      3
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">
                        Bring It To Life
                      </h4>
                      <p className="text-gray-300">
                        Watch your project come alive
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border-2 border-white/10 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Quick Connect
                </h3>
                <div className="space-y-4">
                  <button
                    onClick={() => navigateTo("contact")}
                    className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-2xl hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center text-lg"
                  >
                    <FaPhone className="mr-3" />
                    Schedule a Call
                  </button>
                  <button
                    onClick={() =>
                      (window.location.href = "mailto:info@example.com")
                    }
                    className="w-full py-4 bg-white/10 border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/20 transition-all flex items-center justify-center text-lg"
                  >
                    <FaEnvelope className="mr-3" />
                    Send Email
                  </button>
                </div>
                <p className="text-gray-400 text-center mt-6 text-sm">
                  ⚡ Usually responds within 2 hours
                </p>
              </div>

              {/* <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg p-8 rounded-3xl border-2 border-yellow-400/30">
                <div className="flex items-center mb-4">
                  <FaStar className="text-yellow-400 text-2xl mr-2" />
                  <FaStar className="text-yellow-400 text-2xl mr-2" />
                  <FaStar className="text-yellow-400 text-2xl mr-2" />
                  <FaStar className="text-yellow-400 text-2xl mr-2" />
                  <FaStar className="text-yellow-400 text-2xl" />
                </div>
                <p className="text-white text-lg italic mb-3">
                  "Amazing work! They delivered beyond expectations and the
                  support was incredible."
                </p>
                <p className="text-gray-300 font-semibold">
                  - Sarah Johnson, CEO
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "50px 50px",
              }}
            ></div>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="bg-white/5 backdrop-blur-xl p-12 md:p-16 rounded-3xl border-2 border-white/20 shadow-2xl">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full mb-8 shadow-xl">
              <FaRocket className="text-white text-3xl" />
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
              Ready to Build Something
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mt-2">
                Extraordinary?
              </span>
            </h2>

            <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's transform your vision into a digital masterpiece that drives
              real results.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() =>
                  document
                    .getElementById("contact-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group px-12 py-6 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-black rounded-2xl hover:shadow-[0_0_60px_rgba(59,130,246,0.8)] transition-all duration-500 transform hover:scale-105 text-xl min-w-[300px]"
              >
                <span className="flex items-center justify-center">
                  <FiTarget className="mr-3 text-2xl" />
                  Start Your Project
                  <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                </span>
              </button>

              <button
                onClick={() => navigateTo("contact")}
                className="group px-12 py-6 bg-white text-indigo-900 font-black rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-xl min-w-[300px]"
              >
                <span className="flex items-center justify-center">
                  <FaPhone className="mr-3" />
                  Talk to Expert
                </span>
              </button>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80">
              <div className="flex items-center">
                <FaCheckCircle className="text-green-400 mr-2 text-xl" />
                <span className="text-lg">Free Consultation</span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="text-green-400 mr-2 text-xl" />
                <span className="text-lg">No Hidden Fees</span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="text-green-400 mr-2 text-xl" />
                <span className="text-lg">Money-Back Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;
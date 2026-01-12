// import React, { useState } from "react";
// import Navigation from "./Navigation";
// import HeroSection from "./HeroSection";
// import FeaturesSection from "./FeatureSection";
// import HowItWorksSection from "./HowItWorksSection";
// import UserTypesSection from "./UserTypesSection";
// import AppPreviewSection from "./AppPreviewSection";
// import DownloadSection from "./DownloadSection";
// import Footer from "./Footer";
// import ContactPage from "./ContactPage";
// import CareerPage from "./CareersPage";

// const PocketStoreApp = () => {
//   const [currentPage, setCurrentPage] = useState("home");
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   const navigateTo = (page) => {
//     setCurrentPage(page);
//     setIsMenuOpen(false);
//     window.scrollTo(0, 0);
//   };

//   const renderPage = () => {
//     switch (currentPage) {
//       case "contact":
//         return <ContactPage navigateTo={navigateTo} />;

//       case "careers":
//         return <CareerPage navigateTo={navigateTo} />;

//       case "home":
//       default:
//         return (
//           <>
//             <HeroSection navigateTo={navigateTo} />
//             <FeaturesSection />
//             <HowItWorksSection />
//             <UserTypesSection />
//             <AppPreviewSection />
//             <DownloadSection />
            
//           </>
//         );
//     }
//   };

//   return (
//     <div className="min-h-screen bg-indigo-500">
//       {/* ✅ Navigation ALWAYS visible */}
//       <Navigation
//         currentPage={currentPage}
//         navigateTo={navigateTo}
//         isMenuOpen={isMenuOpen}
//         toggleMenu={toggleMenu}
//       />

//       {/* ✅ Page content pushed below navigation */}
//       <main className="pt-18">
//         {renderPage()}
//       </main>

//       <Footer navigateTo={navigateTo} />
//     </div>
//   );
// };

// export default PocketStoreApp;




// import React, { useState } from "react";
// import Navigation from "./Navigation";
// import HeroSection from "./HeroSection";
// import FeaturesSection from "./FeatureSection";
// import HowItWorksSection from "./HowItWorksSection";
// import UserTypesSection from "./UserTypesSection";
// import SoftwareServicesSection from "./SoftwareServicesPage"; // New component
// import AppPreviewSection from "./AppPreviewSection";
// import DownloadSection from "./DownloadSection";
// import Footer from "./Footer";
// import ContactPage from "./ContactPage";
// import CareerPage from "./CareersPage";

// const PocketStoreApp = () => {
//   const [currentPage, setCurrentPage] = useState("home");
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   const navigateTo = (page) => {
//     setCurrentPage(page);
//     setIsMenuOpen(false);
//     window.scrollTo(0, 0);
//   };

//   const renderPage = () => {
//     switch (currentPage) {
//       case "contact":
//         return <ContactPage navigateTo={navigateTo} />;
//       case "careers":
//         return <CareerPage navigateTo={navigateTo} />;
//       case "services":
//         return <SoftwareServicesSection navigateTo={navigateTo} />;
//       case "home":
//       default:
//         return (
//           <>
//             <HeroSection navigateTo={navigateTo} />
//             <FeaturesSection />
//             <HowItWorksSection />
//             <UserTypesSection />
//             <AppPreviewSection />
//             <DownloadSection />
//           </>
//         );
//     }
//   };

//   return (
//     <div className="min-h-screen bg-indigo-500">
//       <Navigation
//         currentPage={currentPage}
//         navigateTo={navigateTo}
//         isMenuOpen={isMenuOpen}
//         toggleMenu={toggleMenu}
//       />

//       <main className="pt-18">
//         {renderPage()}
//       </main>

//       <Footer navigateTo={navigateTo} />
//     </div>
//   );
// };

// export default PocketStoreApp;



import React from "react";
import { useNavigate } from "react-router-dom";

import HeroSection from "./HeroSection";
import FeaturesSection from "./FeatureSection";
import HowItWorksSection from "./HowItWorksSection";
import UserTypesSection from "./UserTypesSection";
import AppPreviewSection from "./AppPreviewSection";
import DownloadSection from "./DownloadSection";

const PocketStoreLanding = () => {
  const navigate = useNavigate();

  // 🔹 Router-based navigation
  const navigateTo = (path) => {
    navigate(`/${path}`);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <HeroSection navigateTo={navigateTo} />
      <FeaturesSection />
      <HowItWorksSection />
      <UserTypesSection />
      <AppPreviewSection />
      <DownloadSection />
    </>
  );
};

export default PocketStoreLanding;

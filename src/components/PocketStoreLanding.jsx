// import React from "react";
// import { useNavigate } from "react-router-dom";

// import HeroSection from "./HeroSection";
// import FeaturesSection from "./FeatureSection";
// import HowItWorksSection from "./HowItWorksSection";
// import UserTypesSection from "./UserTypesSection";
// import AppPreviewSection from "./AppPreviewSection";
// import DownloadSection from "./DownloadSection";

// const PocketStoreLanding = () => {
//   const navigate = useNavigate();

//   // 🔹 Router-based navigation
//   const navigateTo = (path) => {
//     navigate(`/${path}`);
//     window.scrollTo(0, 0);
//   };

//   return (
//     <>
//       <HeroSection navigateTo={navigateTo} />
//       <FeaturesSection />
//       <HowItWorksSection />
//       <UserTypesSection />
//       <AppPreviewSection />
//       <DownloadSection />
//     </>
//   );
// };

// export default PocketStoreLanding;



import React from "react";
import { useNavigate } from "react-router-dom";

import HeroSection from "./HeroSection";
import FeaturesSection from "./FeatureSection";
import HowItWorksSection from "./HowItWorksSection";
import UserTypesSection from "./UserTypesSection";
import AppPreviewSection from "./AppPreviewSection";
import DownloadSection from "./DownloadSection";

// Import your newly created component here
import PoketStorChat from "../components/PoketStorChat"; 

const PocketStoreLanding = () => {
  const navigate = useNavigate();

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
      
      {/* Renders the floating chat element on top of all layers */}
      <PoketStorChat />
    </>
  );
};

export default PocketStoreLanding;
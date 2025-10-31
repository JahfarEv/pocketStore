import React, { useState } from "react";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeatureSection";
import HowItWorksSection from "./HowItWorksSection";
import UserTypesSection from "./UserTypesSection";
import AppPreviewSection from "./AppPreviewSection";
import DownloadSection from "./DownloadSection";
import Footer from "./Footer";
import ContactPage from "./ContactPage";
import CareerPage from "./CareersPage"; // Add this import

const PocketStoreApp = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "contact":
        return <ContactPage navigateTo={navigateTo} />;
      case "careers": // Add this case
        return <CareerPage navigateTo={navigateTo} />;
      case "home":
      default:
        return (
          <>
            <HeroSection navigateTo={navigateTo} /> {/* Pass navigateTo prop */}
            <FeaturesSection />
            <HowItWorksSection />
            <UserTypesSection />
            <AppPreviewSection />
            <DownloadSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation
        currentPage={currentPage}
        navigateTo={navigateTo}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
      {renderPage()}
      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default PocketStoreApp;


// import "./index.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import PocketStoreLanding from "./components/PocketStoreLanding";
// import PrivacyPolicy from "./components/PrivacyPolicy";
// import TermsAndConditions from "./components/TermsAndCondition";
// import AboutUs from "./components/AboutUs";
// import ServicesPage from "./components/SoftwareServicesPage";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<PocketStoreLanding />} />
//         <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//         <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
//         <Route path="/aboutUs" element={<AboutUs />} />
//         <Route path="/services" element={<ServicesPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import PocketStoreLanding from "./components/PocketStoreLanding";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndCondition";
import AboutUs from "./components/AboutUs";
import ServicesPage from "./components/SoftwareServicesPage";
import ContactPage from "./components/ContactPage";
import CareerPage from "./components/CareersPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout wrapper */}
        <Route element={<Layout />}>
          <Route path="/" element={<PocketStoreLanding />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<CareerPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

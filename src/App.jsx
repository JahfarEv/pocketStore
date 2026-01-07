// // In your index.js or App.js
// import './index.css';
// import PocketStoreLanding from './components/PocketStoreLanding';

// function App() {
//   return <PocketStoreLanding />;
// }

// export default App;

import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PocketStoreLanding from "./components/PocketStoreLanding";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndCondition";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PocketStoreLanding />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;

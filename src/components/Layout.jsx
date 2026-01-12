import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen bg-indigo-500">
      <Navigation />
      
      <main className="pt-18">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;

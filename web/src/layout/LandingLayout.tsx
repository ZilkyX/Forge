import Footer from "@/pages/landing/components/Footer";
import Navbar from "@/pages/landing/components/Navbar";
import { Outlet } from "react-router-dom";

const LandingLayout = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default LandingLayout;

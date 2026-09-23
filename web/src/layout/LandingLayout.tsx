import Footer from "@/layout/components/Footer";
import Navbar from "@/layout/components/Navbar";
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

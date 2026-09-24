import { Outlet } from "react-router-dom";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";

const AppLayout = () => {
  return (
    <div className="flex h-screen bg-zinc-950 text-white">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar />

        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;

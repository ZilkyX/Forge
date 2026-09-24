import { Route, Routes } from "react-router-dom";
import LandingLayout from "./layout/LandingLayout";
import LandingPage from "./pages/landing/LandingPage";
import AppLayout from "./layout/AppLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import PublicExerciseLibrary from "./pages/exercise/PublicExerciseLibrary";
import DashboardExerciseLibrary from "./pages/exercise/DashboardExerciseLibrary";

const App = () => {
  return (
    <Routes>
      <Route element={<LandingLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/exercises" element={<PublicExerciseLibrary />} />
      </Route>

      <Route element={<AppLayout />}>
        <Route path="/app" element={<Dashboard />} />
        <Route path="/app/exercises" element={<DashboardExerciseLibrary />} />
      </Route>
    </Routes>
  );
};

export default App;

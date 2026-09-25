import { Route, Routes } from "react-router-dom";
import LandingLayout from "./layout/LandingLayout";
import LandingPage from "./pages/landing/LandingPage";
import AppLayout from "./layout/AppLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import PublicExerciseLibrary from "./pages/exercise-public/PublicExerciseLibrary";
import DashboardExerciseLibrary from "./pages/exercise-dashboard/DashboardExerciseLibrary";
import { useSyncUser } from "./hooks/auth.hook";
import ProfilePage from "./pages/profile/ProfilePage";
import ProgressPage from "./pages/progress/ProgressPage";
import CommunityPage from "./pages/community/CommunityPage";
import WorkoutPage from "./pages/workout/WorkoutPage";

const App = () => {
  useSyncUser();
  return (
    <Routes>
      <Route element={<LandingLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/exercises" element={<PublicExerciseLibrary />} />
      </Route>

      <Route element={<AppLayout />}>
        <Route path="/app" element={<Dashboard />} />
        <Route path="/app/exercises" element={<DashboardExerciseLibrary />} />
        <Route path="/app/workouts" element={<WorkoutPage />} />
        <Route path="/app/community" element={<CommunityPage />} />
        <Route path="/app/progress" element={<ProgressPage />} />
        <Route path="/app/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
};

export default App;

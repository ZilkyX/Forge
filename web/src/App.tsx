import { Route, Routes } from "react-router-dom";
import LandingLayout from "./layout/LandingLayout";
import LandingPage from "./pages/landing/LandingPage";
import AppLayout from "./layout/AppLayout";
import ExerciseLibrary from "./pages/exercise/ExerciseLibrary";
import Dashboard from "./pages/dashboard/Dashboard";
import ExerciseDetails from "./pages/exercise/ExerciseDetails";

const App = () => {
  return (
    <Routes>
      <Route element={<LandingLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/exercises" element={<ExerciseLibrary />} />
      </Route>

      <Route element={<AppLayout />}>
        <Route path="/app" element={<Dashboard />} />
        <Route path="/app/exercises" element={<ExerciseLibrary />} />
        <Route path="/app/exercises/:slug" element={<ExerciseDetails />} />
      </Route>
    </Routes>
  );
};

export default App;

import { Route, Routes } from "react-router-dom";
import LandingLayout from "./layout/LandingLayout";
import LandingPage from "./pages/landing/LandingPage";

const App = () => {
  return (
    <Routes>
      <Route element={<LandingLayout />}>
        <Route path="/" element={<LandingPage />} />
      </Route>
    </Routes>
  );
};

export default App;

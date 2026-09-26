import Searchbar from "../exercise-public/components/Searchbar";
import Header from "./components/Header";

const DashboardExerciseLibrary = () => {
  return (
    <main className="min-h-screen">
      <div className="mx-auto  px-4 py-2 lg:px-8">
        <Header />
        {/* <Searchbar onChange={setSearch} value={search} /> */}
        
      </div>
    </main>
  );
};

export default DashboardExerciseLibrary;

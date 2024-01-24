import MovieList from "./cine/MovieList";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./styles/output.css";
function App() {
  return (
    <>
      <Navbar />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieList />
        </div>
      </main>
    </>
  );
}

export default App;

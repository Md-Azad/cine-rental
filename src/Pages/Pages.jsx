import { useContext } from "react";
import MovieList from "../cine/MovieList";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { ThemeContext } from "../context";
export default function Pages() {

    const {darkMode} = useContext(ThemeContext);

  return (
    <div className={darkMode? "dark":""}>
      <Navbar />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieList />
        </div>
      </main>
      <Footer />
    </div>
  );
}

import { useState } from "react";
import MovieList from "./cine/MovieList";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { MovieContext } from "./context";
import "./styles/output.css";

function App() {
  const [cartData, setCartData] = useState([]);
  return (
    <>
    <MovieContext.Provider value={{cartData,setCartData}} >
      <Navbar />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieList />
        </div>
      </main>
      <Footer />
     </MovieContext.Provider>
    </>
  );
}

export default App;

import { useState } from "react";

import { MovieContext, ThemeContext } from "./context";
import "./styles/output.css";
import Pages from "./Pages/Pages";

function App() {
  const [cartData, setCartData] = useState([]);
  const [darkMode,setDarkMode] = useState(true);
  return (
    <>
    <ThemeContext.Provider value={{darkMode,setDarkMode}}>
    <MovieContext.Provider value={{cartData,setCartData}} >
      <Pages />
     </MovieContext.Provider>
     </ThemeContext.Provider>
    </>
  );
}

export default App;

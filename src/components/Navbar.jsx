import logo from "../assets/logo.svg";
import ring from "../assets/ring.svg";
import moon from "../assets/icons/moon.svg";
import Sun from "../assets/icons/sun.svg";
import shoppingCart from "../assets/shopping-cart.svg";
import CartModal from "../cine/CartModal";
import { useContext, useState } from "react";

import { MovieContext, ThemeContext } from "../context";
export default function Navbar() {
  const [showCart, setshowCart] = useState(false);
  const { cartData } = useContext(MovieContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  function handleCartShow() {
    setshowCart(true);
  }
  function handleCartClose() {
    setshowCart(false);
  }
  return (
    <>
      {showCart && <CartModal onClose={handleCartClose} />}
      <header>
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={logo} width="139" height="26" alt="logo" />
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={ring} width="24" height="24" alt="ring" />
              </a>
            </li>
            <li>
              <a
                onClick={() => setDarkMode((darkMode) => !darkMode)}
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img
                  src={darkMode ? Sun : moon}
                  width="24"
                  height="24"
                  alt="moon"
                />
              </a>
            </li>
            <li>
              <a
                onClick={handleCartShow}
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img
                  src={shoppingCart}
                  width="24"
                  height="24"
                  alt="shopping Cart"
                />
                {cartData.length > 0 && (
                  <span className="absolute rounded-full top-[-12px] left-[28px] bg-[#3f83e9] text-white text-center p-[2px] w-[30px] h-[30px]">
                    {cartData.length}
                  </span>
                )}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

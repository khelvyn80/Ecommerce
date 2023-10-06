import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { Context } from "../../utils/context";
import "./navbar.css";

function Navbar() {

  const { cart } = useContext(Context);
  console.log(cart);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="/">Categories</a>
          </li>
          <li>
            <a href="/">Deals</a>
          </li>
          <li>
            <a href="/">What's New</a>
          </li>
          <li>
            <a href="/">Delivery</a>
          </li>
          <li>
            <a href="/">
              <VscAccount /> Account
            </a>
          </li>
          <Link to="/cart">
            <li>
              <a href="/">
                <AiOutlineShoppingCart /> Cart <span>{cart.length}</span>
              </a>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;


import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { useSelector } from "react-redux";
import { selectAmountItem, selectItemsCart } from "../../redux/cart";

function Navbar({cart}) {
  let amount = useSelector(selectAmountItem) ;
  let carts = useSelector(state => state.cart ) ;
  console.log(amount,carts);
  
  return (
    <div className="wrapper-nav">
      <div className="wrapper nav">
        <div className="nav-container">
          <div className="logo">
            <Link to={"/"}>
              <img
                src="https://freepngimg.com/static/img/cat/tattoo.png"
                alt=""
              />
            </Link>
          </div>
          <ul className="nav-links">
            <li className="nav-link">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="nav-link">
              <Link to={"/products"}>Products</Link>
            </li>
            <li className="nav-link">
              <Link to={"/about"}>About</Link>
            </li>
          </ul>
          <div className="nav-cart">
            <Link to={"/cart"}>
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
            <div className="nav-cart-mount">{amount &&amount}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

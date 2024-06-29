import React from "react";
import { BsCart, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

function Search() {
  return (
    <header className="top-text">
      <div className="headerContainer">
        <div className="headerLeft">
          <div className="logo">
            <Link to="/" className="logoLink">
              <h2 className="logoleft">blink</h2>
              <h2 className="logoright">it</h2>
            </Link>
          </div>
        </div>
        <div className="headerCenter">
          <form action="" className="serachForm">
            <BsSearch className="searchFormIcon" />
            <input
              type="search"
              placeholder='search "panner"'
              className="serachInput"
            />
          </form>
        </div>
        <div className="headerRight">
          <div className="loginBtn">
            <button>Login</button>
          </div>
          <div className="addCartBtn">
            <button className="cartLogo">
              <BsCart className="cartIcon" />
              My Cart
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Search;

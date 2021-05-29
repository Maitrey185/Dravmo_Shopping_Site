import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";

function MyNavbar(props) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  let history = useHistory();

  function logout() {
    history.push("/");
  }

  function gotocart() {
    history.push("/user-cart/");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top">
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="mb-2">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link
                    to={
                      item.title === "My Profile"
                        ? "user/" + props.userID
                        : item.path
                    }
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
      <div className="ml-3">
        <img
          src="http://localhost:5000/uploads/Logo.PNG"
          alt=""
          height="50em"
          width="180em"
        />
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ marginRight: "15px" }}
              >
                Category
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="/products/Laptop">
                  Laptop
                </a>
                <a className="dropdown-item" href="/products/Shirts">
                  Shirt
                </a>
                <a className="dropdown-item" href="/products/Shoes">
                  Shoes
                </a>
                <a className="dropdown-item" href="/products/Mobile%20Phone">
                  Mobile Phones
                </a>
                <a className="dropdown-item" href="/products/Furniture">
                  Furniture
                </a>
              </div>
            </div>
          </li>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-dark my-2 my-sm-0"
              type="submit"
              style={{ marginRight: "15px", color: "#ffffff" }}
            >
              Search
            </button>
          </form>
        </ul>
        <FaIcons.FaShoppingCart
          onClick={gotocart}
          style={{ color: "#ffffff", fontSize: "25px" }}
        />
        <li className="nav-item">
          <button className="btn btn-outline-light" onClick={logout}>
            Logout
          </button>
        </li>
      </div>
    </nav>
  );
}

export default MyNavbar;

import React, { Component } from "react";
import "../style/Navbar.css";
import Home from "../components/Home";

class Navbar extends Component {
  render() {
    return (
      <div className="header">
        {/* <ul className="nav-list">
            <li>
              <NavLink className="navlinks" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="navlinks" to="/Orders">
                Orders
              </NavLink>
            </li>
            <li>
              <NavLink className="navlinks" to="/Contact">
                Contact
              </NavLink>
            </li>
          </ul> */}
        <Home />
      </div>
    );
  }
}

export default Navbar;

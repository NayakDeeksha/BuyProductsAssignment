import React, { Component } from "react";
import { Route, NavLink, BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import Orders from "./Orders";
import Contact from "./Contact";
import "../style/Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <Router>
        <div className="header">
          <ul className="nav-list">
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
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/Orders" component={Orders} />
            <Route path="/Contact" component={Contact} />
          </div>
        </div>
      </Router>
    );
  }
}

export default Navbar;

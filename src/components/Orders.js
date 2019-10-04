import React, { Component } from "react";
import "../style/Orders.css";
import Heading from "./formHeader";
import { Link } from "react-router-dom";
import Button from "./Button";
import Home from "./Home";
class Orders extends Component {
  render() {
    const a = JSON.parse(localStorage.getItem("orders"));
    return (
      <div>
        <Heading text="ORDERS" />
        <Link to="/">
          <Button text="Back" onClick={<Home />} type="button" />
        </Link>
        {a.map(i => (
          <div className="orders">
            <div>{i.customerName}</div>
            <div>{i.productName}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Orders;

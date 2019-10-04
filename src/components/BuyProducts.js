import React, { Component } from "react";
import "../style/Form.css";
import Button from "./Button";
import Select from "./Select";
import Input from "./InputField";
import Heading from "./formHeader";
import { Link } from "react-router-dom";
import { setOrders } from "../utils/localstorage";

class Buy extends Component {
  state = {
    catNames: [],
    prodNames: [],
    orders: {
      customerName: "",
      productName: "",
      quantity: ""
    },
    categoryName: "",
    productName: ""
  };

  handleChange = e => {
    e.preventDefault();
    let orders = Object.assign({}, this.state.orders);
    orders[e.target.name] = e.target.value;
    this.setState({ orders });
  };

  setOrdersState = () => {
    const newOrders = { ...this.state.orders };
    newOrders.productName = this.state.productName;
    this.setState({ orders: newOrders }, () => {
      setOrders(this.state.orders);
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.setOrdersState();
    window.location.reload();
  };

  handleOnClick = e => {
    this.setState({ categoryName: e.target.value }, () => {
      const productOptions = JSON.parse(localStorage.getItem("products"));
      let prodNames = [];
      prodNames.push(
        productOptions
          .filter(ele => ele.categoryName === this.state.categoryName)
          .forEach(ele => prodNames.push(ele.productName))
      );
      this.setState({ prodNames: prodNames });
    });
  };

  selectedproduct = e => {
    this.setState({ productName: e.target.value });
  };

  componentDidMount = () => {
    const categoryOptions = JSON.parse(localStorage.getItem("categories"));
    let catNames = [];
    categoryOptions.forEach(element => {
      catNames.push(element);
    });
    this.setState({ catNames: catNames });
  };

  render() {
    return (
      <form className="form-container" onSubmit={this.handleFormSubmit}>
        <Heading text={"ORDER FORM"} />
        <Input
          name="customerName"
          title="customerName"
          className="addproduct-field"
          type="text"
          placeholder="Customer Name"
          onChange={this.handleChange}
        />
        <Select
          name="categories"
          options={this.state.catNames}
          classname="add-select"
          onClick={this.handleOnClick}
          placeholder="select"
        />
        <Select
          name="products"
          options={this.state.prodNames}
          classname="add-select"
          onClick={this.selectedproduct}
          placeholder="select"
        />
        <Input
          name="quantity"
          title="quantity"
          className="addproduct-field"
          type="number"
          placeholder="Quantity"
          onChange={this.handleChange}
        />
        <Button text="CONFIRM" type="submit" classname="addproduct-button" />
        <Link to="./">
          <Button
            text="BACK"
            type="button"
            classname="addproduct-button cancel"
          ></Button>
        </Link>
      </form>
    );
  }
}

export default Buy;

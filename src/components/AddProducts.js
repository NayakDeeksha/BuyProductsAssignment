import React, { Component } from "react";
import "../style/Form.css";
import Button from "./Button";
import Select from "./Select";
import Input from "./InputField";
import Heading from "./formHeader";
import { Link } from "react-router-dom";
import { setCategory, setProduct } from "../utils/localstorage";

const INITIAL_STATE = {
  categoryOptions: ["mobile phones", "shoes", "cars", "toys"],
  categoryName: "",
  products: {
    categoryName: "",
    productName: "",
    stock: "",
    price: ""
  }
};

class Add extends Component {
  state = INITIAL_STATE;

  handleChange = e => {
    this.setState({
      products: { ...this.state.products, [e.target.name]: e.target.value }
    });
  };

  setProductState = () => {
    const newProduct = { ...this.state.products };
    newProduct.categoryName = this.state.categoryName;
    this.setState({ products: newProduct }, () => {
      setProduct(this.state.products);
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    setCategory(this.state.categoryName);
    this.setProductState();
    this.setState(INITIAL_STATE);
  };

  // handleOnClick = e => {
  //   this.setState({
  //     products: { ...this.state.products, categoryName: e.target.value }
  //   });
  // };

  render() {
    return (
      <form className="form-container" onSubmit={this.handleFormSubmit}>
        <Heading text={"PRODUCT INFORMATION"} />
        <Select
          name={"categoryName"}
          options={this.state.categoryOptions}
          classname={"add-select"}
          placeholder={"Select"}
          // value={this.state.products.productName}
          onChange={this.handleChange}
        />
        <Input
          name="productName"
          // value={this.state.products.productName}
          title="productname"
          className="addproduct-field"
          type="text"
          placeholder="Product Name"
          onChange={this.handleChange}
        />
        <Input
          name="stock"
          title="stock"
          className="addproduct-field"
          type="number"
          placeholder="Stock"
          onChange={this.handleChange}
        />
        <Input
          name="price"
          title="price"
          className="addproduct-field"
          type="number"
          placeholder="Price"
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

export default Add;

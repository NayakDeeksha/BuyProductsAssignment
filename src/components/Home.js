import React, { Component } from "react";
import Button from "./Button";
import "../style/Home.css";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";

class Home extends Component {
  state = { showPopup: false };

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    return (
      <div id="home-container">
        <div className="container-left"></div>
        <div className="container-right">
          <Link to="/orders">
            <Button
              text="ORDERS"
              // onClick={<Orders />}
              type="button"
              classname="home-button"
            />
          </Link>
          <p>Buy,</p>
          <p>Sell</p>
          <p>And Find</p>
          <p>Just About</p>
          <p>Anything</p>
          {document.cookie.indexOf("username") === -1 ? (
            <Button
              text="LOGIN"
              onClick={this.togglePopup.bind(this)}
              type="submit"
              classname="home-button"
            ></Button>
          ) : (
            <div>
              <Link to="/addProduct">
                <Button
                  text="ADD PRODUCTS"
                  // onClick={<AddProduct />}
                  type="submit"
                  classname="home-button"
                />
              </Link>
              <Link to="/buyProduct">
                <Button
                  text="BUY PRODUCTS"
                  // onClick={<BuyProduct />}
                  type="submit"
                  classname="home-button"
                />
              </Link>
            </div>
          )}
        </div>
        {this.state.showPopup ? (
          <LoginForm closePopup={this.togglePopup.bind(this)} />
        ) : null}
      </div>
    );
  }
}

export default Home;

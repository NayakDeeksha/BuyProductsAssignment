import React, { Component } from "react";
import Button from "./Button";
import "../style/Home.css";
import LoginForm from "./LoginForm";
class Home extends Component {
  state = { showPopup: false, login: false };

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  setLogin() {
    this.setState({
      login: !this.state.login
    });
  }
  handleAddProducts() {
    console.log("add");
  }
  handleBuyProducts() {
    console.log("buy");
  }

  render() {
    return (
      <div id="container">
        <div className="container-left"></div>
        <div className="container-right">
          <p>Buy,</p>
          <p>Sell</p>
          <p>And Find</p>
          <p>Just About</p>
          <p>Anything</p>
          {this.state.login ? (
            <div>
              <Button
                text="ADD PRODUCTS"
                onClick={this.handleAddProducts.bind(this)}
                type="submit"
                id="add"
              />
              <Button
                text="BUY PRODUCTS"
                onClick={this.handleBuyProducts.bind(this)}
                type="submit"
                id="buy"
              />
            </div>
          ) : (
            <Button
              text="LOGIN"
              onClick={this.togglePopup.bind(this)}
              type="submit"
              id="login"
            ></Button>
          )}
        </div>
        {this.state.showPopup ? (
          <LoginForm
            closePopup={this.togglePopup.bind(this)}
            setLoginstate={this.setLogin.bind(this)}
          />
        ) : null}
      </div>
    );
  }
}

export default Home;

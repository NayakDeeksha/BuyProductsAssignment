import React, { Component } from "react";
import Input from "./InputField";
import Button from "./Button";
import "../style/Form.css";

class LoginForm extends Component {
  state = {
    name: "",
    password: ""
  };

  loginData = { userName: "Deeksha", password: "deeksha" };

  //creating the cookie of the logged in user
  createCookie = username => {
    let now = new Date();
    let minutes = 10;
    now.setTime(now.getTime() + minutes * 60 * 1000);
    document.cookie = `username=${username};expires= ${now.toUTCString()} path=/`;
  };

  //validates the username and password and if correct creates the cookie
  loginCheck = props => {
    let enteredUserName = this.state.name,
      enteredPassword = this.state.password;
      console.log()

    if (
      enteredUserName === props.userName &&
      enteredPassword === props.password
    ) {
      this.createCookie(enteredUserName);
      // this.setLogin();
    } else {
      console.log("incorrect login");
    }
  };

  //onsubmit of the form to reset and validate the username and password
  handleFormSubmit = e => {
    e.preventDefault();
    e.target.reset();
    this.loginCheck(this.loginData);
  };

  //input values to set the state onchange of inputfields
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    return (
      <div className="popup">
        <form className="form-container" onSubmit={this.handleFormSubmit}>
          <div className="login-heading">LOGIN</div>
          <Input
            name="name"
            title="username"
            className="login-field"
            type="text"
            placeholder="Username"
            onChange={this.handleChange}
          />
          <Input
            name="password"
            title="password"
            className="login-field"
            type="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
          <Button classname="login-button" text="LOGIN" type="submit" />
          <Button
            text="CLOSE"
            onClick={this.props.closePopup}
            type="submit"
            classname="login-button cancel"
          ></Button>
        </form>
      </div>
    );
  }
}

export default LoginForm;

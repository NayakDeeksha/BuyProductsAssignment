import React, { Component } from "react";
import Input from "./InputField";
import Button from "./Button";
import "../style/Form.css";

class LoginForm extends Component {
  state = {
    name: "",
    password: "",
    login: false
  };

  setLogin() {
    this.setState(
      {
        login: !this.state.login
      },
      () => {
        this.props.setLoginstate(this.state.login);
      }
    );
  }

  loginData = { userName: "Deeksha", password: "deeksha" };

  createCookie = username => {
    let now = new Date();
    let minutes = 10;
    now.setTime(now.getTime() + minutes * 60 * 1000);
    document.cookie = `username=${username};expires= ${now.toUTCString()} path=/`;
  };

  loginCheck = props => {
    let enteredUserName = this.state.name,
      enteredPassword = this.state.password;

    if (
      enteredUserName === props.userName &&
      enteredPassword === props.password
    ) {
      this.createCookie(enteredUserName);
      this.setLogin();
    } else {
      console.log("incorrect login");
    }
  };

  handleFormSubmit = e => {
    e.preventDefault();
    e.target.reset();
    this.loginCheck(this.loginData);
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    return (
      <div className="popup">
        <form className="form-container" onSubmit={this.handleFormSubmit}>
          <Input
            name="name"
            title="username"
            id="userName"
            type="text"
            placeholder="Username"
            onChange={this.handleChange}
          />

          <Input
            name="password"
            title="password"
            id="password"
            type="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
          <Button id="btn" text="LOGIN" type="submit" />
          <Button
            text="CLOSE"
            onClick={this.props.closePopup}
            type="submit"
            id="cancel"
          ></Button>
        </form>
      </div>
    );
  }
}

export default LoginForm;

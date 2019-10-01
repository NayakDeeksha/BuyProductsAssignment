import React, { Component } from "react";
import Button from "./Button";
import Select from "./Select";
import "../style/Form.css";

class Add extends Component {
  state = {
    categoryOptions: ["Mobile phones", "Toys", "Cars"]
  };
  render() {
    const handleFormSubmit = () => {
      console.log("added");
    };

    return (
      <div className="popup">
        <form className="form-container" onSubmit={handleFormSubmit}>
          <Select
            name={"categories"}
            options={this.state.categoryOptions}
            placeholder={"Select category"}
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

export default Add;

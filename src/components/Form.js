import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studName: "",
      emailId: "",
      dob: "",
      gender: "select",
      phoneNumber: "",
      city: "select",
      formErrors: {},
    };

    this.initialState = this.state;
  }

  handleFormValidation() {
    const { studName, emailId, dob, gender, phoneNumber, city } = this.state;
    let formErrors = {};
    let formIsValid = true;

    //Student name
    if (!studName) {
      formIsValid = false;
      formErrors["studNameErr"] = "Name is required.";
    }

    //Email
    if (!emailId) {
      formIsValid = false;
      formErrors["emailIdErr"] = "Email id is required.";
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailId)) {
      formIsValid = false;
      formErrors["emailIdErr"] = "Invalid email id.";
    }

    //DOB
    if (!dob) {
      formIsValid = false;
      formErrors["dobErr"] = "Date of birth is required.";
    }

    //Gender
    if (gender === "" || gender === "select") {
      formIsValid = false;
      formErrors["genderErr"] = "Select gender.";
    }

    //Phone number
    if (!phoneNumber) {
      formIsValid = false;
      formErrors["phoneNumberErr"] = "About Is Req.";
    }

    //Country
    if (city === "" || city === "select") {
      formIsValid = false;
      formErrors["cityErr"] = "Select country.";
    }

    this.setState({ formErrors: formErrors });
    return formIsValid;
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.handleFormValidation()) {
      alert("You have been successfully registered.");
      this.setState(this.initialState);
    }
  };

  render() {
    const {
      studNameErr,
      emailIdErr,
      dobErr,
      genderErr,
      phoneNumberErr,
      cityErr,
    } = this.state.formErrors;

    return (
      <div className="main-wrapper">
        <div className="formDiv">
          <h3 style={{ textAlign: "center" }}>Form </h3>
          <div>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label htmlFor="studName">Name</label>
                <input
                  type="text"
                  name="studName"
                  value={this.state.studName}
                  onChange={this.handleChange}
                  placeholder="Your name.."
                  className={studNameErr ? " showError" : ""}
                />
                {studNameErr && (
                  <div style={{ color: "red", paddingBottom: 10 }}>
                    {studNameErr}
                  </div>
                )}
              </div>
              <div>
                <label htmlFor="emailId">Email Id</label>
                <input
                  type="text"
                  name="emailId"
                  value={this.state.emailId}
                  onChange={this.handleChange}
                  placeholder="Your email id.."
                  className={emailIdErr ? " showError" : ""}
                />
                {emailIdErr && (
                  <div style={{ color: "red", paddingBottom: 10 }}>
                    {emailIdErr}
                  </div>
                )}
              </div>
              <div>
                <label htmlFor="text">Birth Date</label>
                <input
                  type="date"
                  name="dob"
                  value={this.state.dob}
                  onChange={this.handleChange}
                  placeholder="DD/MM/YYYY.."
                  className={dobErr ? " showError" : ""}
                />
                {dobErr && (
                  <div style={{ color: "red", paddingBottom: 10 }}>
                    {dobErr}
                  </div>
                )}
              </div>
              <div>
                <label htmlFor="city">Country</label>
                <select
                  name="city"
                  value={this.state.city}
                  onChange={this.handleChange}
                  className={cityErr ? " showError" : ""}
                >
                  <option value="select">--Select--</option>
                  <option value="Pak">Pak</option>
                  <option value="Mali">mali</option>
                  <option value="Hondures">Hondures</option>
                </select>
                {cityErr && (
                  <div style={{ color: "red", paddingBottom: 10 }}>
                    {cityErr}
                  </div>
                )}
              </div>
              <div>
                <label htmlFor="phoneNumber">About</label>
                <input
                  type="text"
                  name="phoneNumber"
                  onChange={this.handleChange}
                  value={this.state.phoneNumber}
                  placeholder="About.."
                  className={phoneNumberErr ? " showError" : ""}
                />
                {phoneNumberErr && (
                  <div style={{ color: "red", paddingBottom: 10 }}>
                    {phoneNumberErr}
                  </div>
                )}
              </div>
              <div>
                <label htmlFor="gender">Gender</label>
                <select
                  name="gender"
                  onChange={this.handleChange}
                  className={genderErr ? " showError" : ""}
                  value={this.state.gender}
                >
                  <option value="select">--Select--</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="female">Other</option>
                </select>
                {genderErr && (
                  <div style={{ color: "red", paddingBottom: 10 }}>
                    {genderErr}
                  </div>
                )}
              </div>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;

import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

function SignupPage(props) {
  let history = useHistory();

  const [confirmPsswordError, setConfirmPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    contactNo: "",
    deliveryAddress: ""
  });

  function valideate() {
    let isValid = true;
    if (user.password !== confirmPassword) {
      setConfirmPasswordError("Passwod is not matching");
      isValid = false;
    }
    return isValid;
  }

  function registerUser(event) {
    if (valideate()) {
      axios.post("http://localhost:5000/user/signup", user).then((response) => {
        console.log(response.data);
        props.changeAuthStatus();
        history.push("/mainPage");
      });
      setUser({
        name: "",
        email: "",
        password: "",
        contactNo: "",
        deliveryAddress: ""
      });
    }
    event.preventDefault();
  }

  function confirmPsswordChange(event) {
    setConfirmPassword(event.target.value);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setUser((preValues) => {
      return {
        ...preValues,
        [name]: value
      };
    });
  }

  return (
    <div className="welcome-body">
      <div className="container">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6 mt-4 sign-main">
            <h1 className="display-1 text-center" style={{ color: "#ffffff" }}>
              Sign Up
            </h1>
            <form className="from-group login-signup">
              <div className="mb-3">
                <label for="fname" className="form-label">
                  User Name
                </label>
                <input
                  onChange={handleChange}
                  name="name"
                  value={user.name}
                  type="text"
                  className="form-control"
                  placeholder="Enter User Name"
                  required
                />
              </div>
              <div className="mb-3">
                <label for="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  onChange={handleChange}
                  name="email"
                  value={user.email}
                  className="form-control"
                  placeholder="Enter Email"
                  required
                />
              </div>
              <div className="mb-3">
                <label for="email" className="form-label">
                  Contact Number
                </label>
                <input
                  type="tel"
                  onChange={handleChange}
                  name="contactNo"
                  value={user.contactNo}
                  className="form-control"
                  placeholder="Enter Contact Number"
                  required
                />
              </div>
              <div className="form-row">
                <div className="col-md-6 mb-3">
                  <label>Password</label>
                  <input
                    id="ps"
                    type="password"
                    onChange={handleChange}
                    name="password"
                    value={user.password}
                    className="form-control"
                    placeholder="Enter Password"
                    minlength="8"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label>Re-Enter Password</label>
                  <input
                    id="rps"
                    type="password"
                    onChange={confirmPsswordChange}
                    value={confirmPassword}
                    name="pswd2"
                    className="form-control"
                    placeholder="Re-type Password"
                    minlength="8"
                    required
                  />
                </div>
              </div>
              <p
                className="form-text"
                style={{ color: "#ff0000", fontSize: "12px" }}
              >
                <b>{confirmPsswordError}</b>
              </p>
              <div className="mb-3">
                <label for="address" className="form-label">
                  Address
                </label>
                <textarea
                  onChange={handleChange}
                  value={user.deliveryAddress}
                  name="deliveryAddress"
                  rows="3"
                  type="text"
                  id="address"
                  className="form-control text-break"
                  placeholder="Address"
                  required
                />
              </div>

              <div className="d-grid gap-2">
                <button
                  className="btn btn-outline-light"
                  type="submit"
                  onClick={registerUser}
                >
                  Register
                </button>
              </div>
            </form>
            <Link to="/login">
              <h1 id="emailHelp" className="form-text small-text">
                Already have an Accout? Click here to Log-In
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;

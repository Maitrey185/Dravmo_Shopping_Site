import React from "react";
import "./Navbar.css";
import "./SellingPage.css";
import MyNavbar from "./MyNavbar";
import Popup from "reactjs-popup";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_St4piuA2vmnlWG4i8Zhpt");

function SellingPage() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4wh33hz",
        "template_60ymq5u",
        e.target,
        "user_St4piuA2vmnlWG4i8Zhpt"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="body-class">
      <MyNavbar />
      <div className="form-section mt-0">
        <h1 className="d-flex justify-content-center mb-5">
          {" "}
          Sell Your Products{" "}
        </h1>
        <div className="d-flex flex-row">
          <div className="col-3">
            <img
              src="https://www.techprevue.com/wp-content/uploads/2016/04/sell-products-online.png"
              alt=""
            />
          </div>
          <div className="col-4"></div>

          <div className="col-lg-4">
            <div className="mb-3">
              <div className="complete-form">
                <label className="form-label" style={{ marginRight: "5px" }}>
                  Upload an Image
                </label>
                <input type="file" multiple name="image" />
              </div>
            </div>
            <form onSubmit={sendEmail} className="complete-form">
              <div className="flex-row mb-3">
                <label for="uname" class="form-label">
                  Username
                </label>
                <input
                  name="uname"
                  type="text"
                  id="uname"
                  class="form-control"
                  placeholder="Enter your name"
                />
              </div>
              <div className="flex-row mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Select Category</label>
                <select name="category" className="form-control">
                  <option>Select Category</option>
                  <option>Laptop</option>
                  <option>Mobile Phone</option>
                  <option>Shirt</option>
                  <option>Shoes</option>
                  <option>Furiture</option>
                </select>
              </div>
              <div className="mb-3">
                <label for="des" className="form-label">
                  Description
                </label>
                <input
                  name="des"
                  type="text"
                  id="des"
                  className="form-control"
                  placeholder="Enter description"
                  rows="3"
                />
              </div>

              <div className="d-grid gap-2">
                <Popup
                  trigger={
                    <input
                      type="submit"
                      className="btn btn-info"
                      value="Submit"
                    />
                  }
                  position="right center"
                >
                  <div>
                    <b>Your request has been sent!</b>
                  </div>
                </Popup>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellingPage;
